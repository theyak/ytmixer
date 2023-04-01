<script>
	import { onMount } from "svelte";
	import { page } from '$app/stores';
	import { login } from "$lib/stores";
	import * as YTM from '$lib/ytm.js';
	import Tracks from "../Tracks.svelte";

	let tracks = [];

	onMount(async () => {
		if (!YTM.hasYoutubeMusicCookie()) {
			$login = true;
			return;
		}

		try {
			let requests = 1;
			let progress = 0;

			const id = $page.params.playlistId;
			const playlist = await YTM.getTracks(id, 100);
			let continuation = playlist.continuation;
			tracks = playlist.tracks;

			const trackCount = playlist.trackCount;
			const maxRequests = Math.ceil(trackCount / 100);

			while (continuation && requests < maxRequests) {
				const next = await YTM.getTrackContinuations(id, continuation);
				requests++;
				progress = requests / maxRequests * 100;
				tracks = [...tracks, ...next.tracks];
				continuation = next.continuation;
			}
		} catch (err) {
			$login = true;
		}
	});
</script>

Playlist {$page.params.playlistId}

<Tracks {tracks} />