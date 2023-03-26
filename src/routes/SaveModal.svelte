<script>
	import { Button, Modal, Input } from 'flowbite-svelte';

	export let open;
	export let onSave = () => {};
	export let onCancel = () => {};

	let playlistName;
	let inputRef;

	function focus() {
		if (!inputRef) {
			setTimeout(focus)
		} else {
			inputRef.focus();
		}
	}
</script>

<Modal title="Playlist Name" bind:open={open} autoclose class="w-96" on:open={focus}>
	<p>
		Enter a name for your new playlist:
	</p>

	<Input let:props>
		<input bind:this={inputRef} {...props} bind:value={playlistName} placeholder="Playlist Name" />
	</Input>

	<svelte:fragment slot="footer">
		<Button on:click={() => onSave(playlistName)}>Create Playlist</Button>
		<Button on:click={() => onCancel()} color="alternative">Nevermind</Button>
	</svelte:fragment>
</Modal>