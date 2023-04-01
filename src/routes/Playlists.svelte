<script>
	export let lists = [];
	export let onSelect = () => {};
</script>

<div class="h-full max-h-full w-72 overflow-auto scroller p-2">
	<div class="text-xl">Playlists</div>

	{#each lists as list}
		<div class="h-8">
			<button class="h-8" on:click={() => onSelect(list.playlistId)}>{list.title}</button>
			<a href={`/${list.playlistId}`}>Go</a>
		</div>
	{/each}
</div>
