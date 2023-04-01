<!-- src/routes/+layout.svelte -->
<script>
	import '../app.css';
	import AboutModal from './AboutModal.svelte';
	import Drawer from "$lib/Drawer.svelte";
	import SvgIcon from "$lib/SvgIcon.svelte";
	import { hideDrawer } from "$lib/stores";

	let aboutModal = false;
</script>

<AboutModal open={aboutModal} on:close={() => aboutModal = false} />

<div class="flex flex-col w-screen h-screen">
	<header class="h-12 flex-shrink-0 pl-2 bg-gray-300 dark:bg-gray-700" style="line-height: 3rem;">
		<div class="flex flex-row justify-between">
			<button class="ml-1" on:click={() => $hideDrawer = !$hideDrawer}>
				<SvgIcon>
					<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
				</SvgIcon>
			</button>
			<a href="/">YouTube Music Mixer</a>
			<button class="mr-6" on:click={() => aboutModal = true}>About</button>
		</div>
	</header>
	<Drawer />

	<slot />
</div>
