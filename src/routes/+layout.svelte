<!-- src/routes/+layout.svelte -->
<script>
	import '../app.css';
	import AboutModal from './AboutModal.svelte';

	let aboutModal = false;
</script>

<AboutModal open={aboutModal} on:close={() => aboutModal = false} />

<div class="flex flex-col w-screen h-screen">
	<header class="h-12 flex-shrink-0 pl-2 bg-gray-300 dark:bg-gray-700" style="line-height: 3rem;">
		<div class="flex flex-row justify-between">
			<div>YouTube Music Mixer</div>
			<button class="mr-12" on:click={() => aboutModal = true}>About</button>
		</div>
	</header>

	<slot />
</div>
