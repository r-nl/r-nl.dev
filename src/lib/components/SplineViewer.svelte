<script lang="ts">
	import { onMount } from 'svelte';
	export let url: string;
	let loaded: boolean = false;

	onMount(async () => {
		await import('@splinetool/viewer');
		loaded = true;
	});
</script>

<div id="spline-viwer" class="w-full h-full">
	{#if loaded}
		<spline-viewer {url} loading-anim-type="spinner-small-dark" />
	{:else}
		<div />
	{/if}
</div>
