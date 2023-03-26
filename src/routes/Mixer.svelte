<script>
	import { onMount } from 'svelte';
	import * as YTM from '$lib/ytm.js';
	import LoginModal from './LoginModal.svelte';
	import AboutModal from './AboutModal.svelte';
	import Player from "./Player.svelte";
	import Tracks from "./Tracks.svelte";
	import Playlists from "./Playlists.svelte";

	let loginModal = false;
	let aboutModal = false;

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
	});

	async function loadPlaylist(id) {
		playlistId = id;

		const playlist = await YTM.getTracks(id);

		playlistName = playlist.name;
		tracks = playlist.tracks;

		// Add seconds property to allow sort on time
		tracks = tracks.map((track) => {
			const split = track.duration.split(':');
			const seconds = split[0] * 60 + split[1];
			return { ...track, seconds };
		});
	}
</script>

<LoginModal open={loginModal} onLogin={() => loadPlaylists()} />
<AboutModal open={aboutModal} onClose={() => aboutModal = false} />

<div class="flex flex-col w-screen h-screen">
	<header class="h-12 flex-shrink-0 pl-2" style="line-height: 3rem; background-color: rgba(255, 255, 255, 0.05">
		<div class="flex flex-row justify-between">
			<div>YouTube Music Mixer</div>
			<button class="mr-12" on:click={() => aboutModal = true}>About</button>
		</div>
	</header>
	<div class="flex flex-row flex-grow" style="max-height: calc(100vh - 112px)">
		<Playlists lists={playlists} onSelect={(id) => loadPlaylist(id)}/>
		<Tracks {tracks} {currentTrack} onSelect={(list, idx) => {tracks = list; playIndex = idx}} />
	</div>
	<footer class="flex-shrink-0">
		<Player queue={[...tracks]} index={playIndex} onPlay={(track) => currentTrack = track}/>
	</footer>
</div>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>
