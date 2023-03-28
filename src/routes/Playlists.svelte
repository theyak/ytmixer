<script>
	export let lists = [];
	export let onSelect = () => {};
</script>

<div class="h-full w-72 p-2 max-h-full">
	<div class="text-xl">Playlists</div>

	{#each lists as list}
		<button class="block h-6 mt-2" on:click={() => onSelect(list.playlistId)}>{list.title}</button>
	{/each}
</div>