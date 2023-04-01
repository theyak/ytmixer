<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { login, progress } from '$lib/stores';
	import * as YTM from '$lib/ytm.js';
	import Tracks from '../Tracks.svelte';

	let title = null;
	let thumbnail = null;
	let playlist = null;
	let playlistmeta = null;

	onMount(async () => {
		if (!YTM.hasYoutubeMusicCookie()) {
			$login = true;
			return;
		}

		try {
			loadTracks($page.params.playlistId);
		} catch (err) {
			$login = true;
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
</script>

<div class="overflow-y-auto scroller">
	<div class="m-4">
		{#if playlist}
			<div class="flex flex-row gap-4 items-center">
				<img src={playlist.thumbnails[0].url} alt="" style={`width: ${playlist.thumbnails[0].width}px; height: ${playlist.thumbnails[0].height}px`} />
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
			<Tracks tracks={playlist.tracks} />
		{:else}
			Loading tracks...
		{/if}
	</div>
</div>
