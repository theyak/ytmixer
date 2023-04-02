<script>
	import { Drawer, CloseButton } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import { hideDrawer, playlists, login } from '$lib/stores';
	import { onMount } from 'svelte';
	import * as YTM from '$lib/ytm.js';

	onMount(async () => {
		$playlists = await YTM.getPlaylists();
		if ($playlists.error) {
			$playlists = [];
			$login = true;
		} else {
			$login = false;
		}
	});

	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
</script>

<Drawer transitionType="fly" {transitionParams} bind:hidden={$hideDrawer} id="sidebar1">
	<div class="flex items-center">
		<CloseButton on:click={() => ($hideDrawer = true)} class="mb-4 dark:text-gray-100" />
	</div>

	{#each $playlists as list}
		<div class="h-8 flex">
			<a on:click={() => $hideDrawer = true} href={`/${list.playlistId}`}>{list.title}</a>
		</div>
	{/each}
</Drawer>
