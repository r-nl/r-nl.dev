<script>
	import SplineViewer from '$lib/components/SplineViewer.svelte';
	import { onMount } from 'svelte';
	onMount(async () => {
		await import('@splinetool/viewer');
	});
</script>

<svelte:head>
	<title>Robert Nelson | Fullstack Developer, UI/UX Designer</title>
</svelte:head>

<div class="w-full h-full max-h-[60dvw]">
	<SplineViewer url="https://prod.spline.design/pcwNdYc5Ykoppsj1/scene.splinecode" />
</div>
