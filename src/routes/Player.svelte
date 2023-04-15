<script>
	import { Progressbar } from "flowbite-svelte";
	import { queue, currentTrack } from "$lib/stores.js";
	import SvgIcon from "$lib/SvgIcon.svelte";

	export let index = 0;

	let player = null;
	let isPlaying = false;
	let playerState = 0;
	let trackTime = '';
	let trackLength = '';
	let trackPosition = 0;
	let videoId = null;

	// Weird issue here. When calling playVideo(), the
	// player variable gets all messed up. So, start video
	// directly instead of calliing playVideo()
	$: if (videoId !== $currentTrack.videoId) {
		videoId = $currentTrack.videoId;
		if (player) {
			player.loadVideoById(videoId);
		}
	}

	function formatTime(seconds) {
		// Calculate hours, minutes, and seconds
		seconds = Math.floor(seconds);
		let hours = Math.floor(seconds / 3600);
		let minutes = Math.floor((seconds % 3600) / 60);
		let remainingSeconds = seconds % 60;

		// Create the formatted time string
		let timeString = '';
		if (hours > 0) {
			timeString += `${hours}:`;
		}

		if (minutes < 10 && hours > 0) {
			timeString += `0${minutes}:`
		} else {
			timeString += `${minutes}:`
		}

		if (remainingSeconds < 10) {
			timeString += `0${remainingSeconds}`;
		} else {
			timeString += `${remainingSeconds}`;
		}

		return timeString;
	}

	function playVideo() {
		isPlaying = true;

		if (!$currentTrack) {
			return;
		}

		if (!player) {
			player = new YT.Player('player', {
				width: '288',
				videoId: $currentTrack.videoId,
				playerVars: {
					playsinline: 1
				},
				events: {
					onReady: onPlayerReady,
					onStateChange: onPlayerStateChange
				}
			});
		} else {
			player.loadVideoById($currentTrack.videoId);
		}
	}

	function onPlayerReady(event) {
		event.target.playVideo();
	}

	function onPlayerStateChange(e) {
		playerState = parseInt(e.data);
		if (playerState === 0) {
			next();
		}
	}

	function previous() {
		index--;
		if (index < 0) {
			index = $queue.length - 1;
		}
		$currentTrack = $queue[index];
		playVideo();
	}

	function next() {
		index++;
		if (index >= $queue.length) {
			index = 0;
		}
		$currentTrack = $queue[index];
		playVideo();
	}

	function play() {
		playVideo();
	}

	function pause() {
		isPlaying = false;
		player.pauseVideo();
	}

	function resume() {
		player.playVideo();
	}

	function getTimes() {
		if (player && playerState === 1) {
			const duration = player.getDuration();
			const time = player.getCurrentTime();
			trackLength = formatTime(duration);
			trackTime = formatTime(time);
			trackPosition = time / duration * 100;
		}
	}
	setInterval(getTimes, 1000);

	function onTrackClick(e) {
		if (!isPlaying) {
			playVideo();
		} else {
			const ratio = e.offsetX / this.offsetWidth;
			const timestamp  = ratio * player.getDuration();
			player.seekTo(timestamp, true);
			trackPosition = ratio * 100;
		}
	}
</script>

<div
	class="fixed w-full bottom-0 h-17 min-h-17 border-t-gray-400 px-2 py-1 bg-slate-200 dark:bg-slate-800"
	style="border-top-width: 1px; border-top-style: solid"
>
	<div class="flex flex-row items-center">
		<div class="px-4 w-16 inline-block h-6">{trackTime}</div>
		<div on:click={onTrackClick} class="flex-grow" on:keypress={() => {}}>
			<Progressbar progress={trackPosition} size="h-1.5" />
		</div>
		<div class="px-4 w-16 inline-block h-6">{trackLength}</div>
	</div>
	<div class="flex flex-row justify-between items-center">
		<div id="player-controls">
			<button id="play-prev" class="inline-block px-3" on:click={previous}>
				<SvgIcon><path d="m16 7-7 5 7 5zm-7 5V7H7v10h2z" /></SvgIcon>
			</button>
			{#if playerState < 1}
				<button id="play-button" class="inline-block px-3" on:click={play}>
					<SvgIcon><path d="M7 6v12l10-6z" /></SvgIcon>
				</button>
			{:else if playerState == 1}
				<button id="pause-button" class="inline-block px-3" on:click={pause}>
					<SvgIcon><path d="M8 7h3v10H8zm5 0h3v10h-3z" /></SvgIcon>
				</button>
			{:else}
				<button id="resume-button" class="inline-block px-3" on:click={resume}>
					<SvgIcon><path d="M7 6v12l10-6z" /></SvgIcon>
				</button>
			{/if}
			<button id="play-next" class="inline-block px-3" on:click={next}>
				<SvgIcon><path d="M7 7v10l7-5zm9 10V7h-2v10z" /></SvgIcon>
			</button>
		</div>
		{#if $queue[index]?.title}
			<div id="track-info" class="text-center">
				<div class="flex flex-row items-center gap-2">
					<img style="height:40px;width:40px" src={$queue[index].thumbnails[0].url} alt="Track Thumbnail" />
					<div>
						{$queue[index].title}
						{#if $queue[index].artists && $queue[index].artists.length > 0}
							&bull;
							{$queue[index].artists[0].name}
						{/if}
					</div>
				</div>
			</div>
		{/if}
		<div id="player-options" />
	</div>
</div>
<div id="player" class="hidden" />
