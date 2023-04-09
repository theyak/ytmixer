<script>
	import { Drawer } from 'flowbite-svelte'
	import { sineIn } from 'svelte/easing';
	import { queue } from '$lib/stores';
	import { fade, fly } from 'svelte/transition';

	let hideDrawer = true;
	let player = null;
	let position = "100vh";

	let transitionParamsBottom = {
		y: 0,
		duration: 200,
		easing: sineIn
	};

	function showQueue() {
		hideDrawer = false;
	}

	function hideQueue() {
		hideDrawer = true;
	}

	function toggleQueue() {
		hideDrawer = !hideDrawer;

		if (position === "100vh") {
			position = document.getElementsByTagName("header")[0].clientHeight + "px";
		} else {
			position = "100vh";
		}

		if (!player) {
			player = new YT.Player('youtube', {
				height: '390',
				width: '640',
				videoId: 'M7lc1UVf-VE',
				playerVars: {
					'playsinline': 1
				},
				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				}
			});
		}

	}

	function onPlayerReady(event) {
        event.target.playVideo();
    }

	function onPlayerStateChange() {
		console.log("onPlayerStateChange", arguments);
	}
</script>

<style>
	#control-bar {
		height: var(--player-height);
	}

	#queue {
		top: var(--position);
		transition: top 0.5s ease 0s;
	}
</style>

<div id="control-bar" class="fixed w-full bottom-0 bg-gray-200 dark:bg-gray-800" style="z-index: 100">
	<button on:click={() => toggleQueue()}>Show Drawer</button>
</div>

<div id="queue" class="fixed h-full w-full bg-red-300" style="--position: {position}">
	<div class="flex flex-row">
		<div id="youtube"></div>
		<div>
			{#each $queue as track}
				<p>
					{track.title}
				</p>
			{/each}
		</div>
	</div>
</div>
