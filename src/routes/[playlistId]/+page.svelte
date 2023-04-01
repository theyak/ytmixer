<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { login, progress } from '$lib/stores';
	import * as YTM from '$lib/ytm.js';
	import Tracks from '../Tracks.svelte';
	import SaveModal from '../SaveModal.svelte';

	let playlist = null;
	let playlistmeta = null;

	let saveModal = false;

	// Detect change in URL and load playlist
	$: if (!playlist || $page.params.playlistId !== playlist.id) {
		try {
			if (YTM.hasYoutubeMusicCookie()) {
				loadTracks($page.params.playlistId);
			}
		} catch (err) {
			$login = true;
		}
	}

	onMount(async () => {
		if (!YTM.hasYoutubeMusicCookie()) {
			$login = true;
			return;
		}
	});

	async function loadTracks(id) {
		let requests = 1;

		playlist = await YTM.getTracks(id, 100);
		let continuation = playlist.continuation;

		const trackCount = playlist.trackCount;
		const maxRequests = Math.ceil(trackCount / 100);

		playlistmeta = {...playlist};
		playlistmeta.tracks = null;

		while (continuation && requests < maxRequests) {
			const next = await YTM.getTrackContinuations(id, continuation);
			requests++;
			$progress = (requests / maxRequests) * 100;
			playlist.tracks = [...playlist.tracks, ...next.tracks];
			continuation = next.continuation;
		}
	}

	function shuffle(arr) {
		let newArr = arr.slice();
		for (let i = newArr.length - 1; i > 0; i--) {
			const rand = Math.floor(Math.random() * (i + 1));
			[newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
		}
		return newArr;
	}

	function shuffleTracks() {
		for (let i = 0; i < 5; i++) {
			playlist.tracks = shuffle(playlist.tracks);
		}
	}

	function saveTracks() {
		saveModal = true;
	}

	async function createPlaylist(e) {
		const name = e.detail.name;

		if (name) {
			const playlistId = await YTM.createPlaylist(name);
			const ids = playlist.tracks.map((track) => track.videoId);

			// There is a maximum of 200 tracks that can be saved at a time
			const chunkSize = 200;
			for (let i = 0; i < ids.length; i += chunkSize) {
				const chunk = ids.slice(i, i + chunkSize);
				await YTM.addTracksToPlaylist(playlistId, chunk);
			}
		}
	}
</script>

<SaveModal open={saveModal} on:close={saveModal = false} on:save={createPlaylist}/>

<div class="overflow-y-auto scroller">
	<div class="m-4">
		{#if playlist}
			<div class="flex justify-between">
				<div class="flex flex-row gap-4 items-center">
					{#if playlist.thumbnails}
					<img src={playlist.thumbnails[0].url} alt="Playlist thumbnail" style={`width: ${playlist.thumbnails[0].width}px; height: ${playlist.thumbnails[0].height}px`} />
					{/if}
					<div>
						<div class="text-4xl mb-4">{playlist.title}</div>
						<div>{playlist.tracks.length} Songs</div>
						<div>{playlist.description || ""}</div>
						{#if playlist.duration}
							<div>Duration: {playlist.duration}</div>
						{/if}
						{#if playlist.author?.name}
							<div>Author: {playlist.author.name}</div>
						{/if}
						{#if playlist.year}
							<div>Year: {playlist.year}</div>
						{/if}
					</div>
				</div>
				<div>
					<button class="px-4 py-1 mr-3 border-solid dark:border-gray-100 border-gray-900 border" on:click={shuffleTracks}>Shuffle</button>
					<button class="px-4 py-1 border-solid dark:border-gray-100 border-gray-900 border" on:click={saveTracks}>Save</button>
				</div>
			</div>
			<Tracks tracks={playlist.tracks} />
		{:else}
			Loading tracks...
		{/if}
	</div>
</div>
