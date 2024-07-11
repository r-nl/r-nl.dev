<script>
	import NavigationBar from '$lib/components/NavigationBar.svelte';
	import SplineViewer from '$lib/components/SplineViewer.svelte';
</script>

<svelte:head>
	<script type="module" src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"></script>
	<title>Robert Nelson | Fullstack Developer, UI/UX Designer</title>
</svelte:head>

<div
	class="w-screen max-w-[100vw] min-w-screen h-screen min-h-screen bg-nearBlack text-white font-mont"
>
	<NavigationBar />
	<SplineViewer url="https://prod.spline.design/n5wBz0LHeb0GPv-r/scene.splinecode" />
</div>
