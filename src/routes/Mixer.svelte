<script>
	import { onMount } from 'svelte';
	import * as YTM from '$lib/ytm.js';
	import Player from "./Player.svelte";
	import Tracks from "./Tracks.svelte";
	import Playlists from "./Playlists.svelte";
	import { Progressbar } from 'flowbite-svelte'


	let progress = 0;

	let playlistId;
	let playlistName;
	let playlists = [];
	let tracks = [];
	let currentTrack = {};
	let playIndex;

	async function loadPlaylists() {
		loginModal = false;
		playlists = await YTM.getPlaylists();
		if (playlists.error) {
			playlists = [];
			loginModal = true;
		}
		// playlists = [
		// 	{id: "LM", name: "Liked Videos", count: 10},
		// ];
	}

	onMount(async () => {
		await loadPlaylists();
		// await loadPlaylist("PLSYOby5Tejpxoy9WEAmjFtlNeRKktROZo");
	});

	async function loadPlaylist(id) {
		playlistId = id;

		const playlist = await YTM.getTracks(id, 100);

		playlistName = playlist.title;
		tracks = playlist.tracks;

		let continuation = playlist.continuation;

		if (continuation) {
			const trackCount = playlist.trackCount;
			const maxRequests = Math.ceil(trackCount / 100);

			let requests = 1;
			progress = requests / maxRequests * 100;

			while (continuation && requests < maxRequests) {
				const next = await YTM.getTrackContinuations(id, continuation);
				requests++;
				progress = requests / maxRequests * 100;
				tracks = [...tracks, ...next.tracks];
				continuation = next.continuation;
			}
			progress = 100;
			setTimeout(() => progress = 0, 1000);
		}
	}
</script>



	{#if progress}
	<div>
		<Progressbar progress={progress} size="h-4" labelInside />
	</div>
	{/if}
	<div class="flex flex-row flex-grow" style="max-height: calc(100vh - 112px)">
		<Playlists lists={playlists} onSelect={(id) => loadPlaylist(id)}/>
		<Tracks {tracks} {currentTrack} onSelect={(list, idx) => {tracks = list; playIndex = idx}} />
	</div>
	<footer class="flex-shrink-0">
		<Player queue={[...tracks]} index={playIndex} onPlay={(track) => currentTrack = track}/>
	</footer>

	<!-- <LoginModal open={loginModal} onLogin={() => loadPlaylists()} /> -->