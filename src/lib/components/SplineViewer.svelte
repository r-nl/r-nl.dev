<script lang="ts">
	import { onMount } from 'svelte';
	export let url: string;
	let loaded: boolean = false;

	onMount(async () => {
		await import('@splinetool/viewer');
		loaded = true;
	});
</script>

<div id="spline-viwer">
	{#if loaded}
		<spline-viewer {url} />
	{:else}
		<div />
	{/if}
</div>