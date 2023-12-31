<script lang="ts">
	import { onMount } from 'svelte';
	export let url: string;
	let loaded: boolean = false;

	onMount(async () => {
		await import('@splinetool/viewer');
		loaded = true;
	});
</script>

<div id="spline-viwer" class="w-screen h-screen max-h-[60dvw]">
	{#if loaded}
		<spline-viewer loading-anim loading-anim-type="spinner-big-dark" {url} />
	{:else}
		<div />
	{/if}
</div>
