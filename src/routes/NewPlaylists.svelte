<script>
	import { onMount } from 'svelte';
	import { login, progress } from '$lib/stores';
	import * as YTM from '$lib/ytm.js';

	import LoginModal from './LoginModal.svelte';

	let playlists = null;

	onMount(async () => {
		if (!YTM.hasYoutubeMusicCookie()) {
			$login = true;
			return;
		}

		try {
			loadPlaylists();
		} catch (err) {
			$login = true;
		}
	});


	async function loadPlaylists() {
		$login = false;
		playlists = await YTM.getPlaylists();
		if (playlists.error) {
			playlists = [];
			$login = true;
		}
	}
</script>

<LoginModal on:close={$login = false} />

<div class="overflow-y-auto scroller">
	<div class="m-4">
		{#if playlists}
			<div class="flex flex-row flex-wrap gap-8">
				{#each playlists as list}
				<a href={list.playlistId} style="max-width: 192px">
					<div>
						<img style="width: 192px;height: 192px; object-fit: cover" alt="" src={list.thumbnails[0].url} />
					</div>
					<b>
						{list.title}
					</b>
				</a>
				{/each}
			</div>
			<div class="flex flex-row gap-4 items-center">
				<pre>{JSON.stringify(playlists, null, 2)}</pre>
			</div>
		{:else}
			Loading playlists...
		{/if}
	</div>
</div>
