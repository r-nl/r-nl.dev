<script lang="ts">
	import { onMount } from 'svelte';
	import LoadingOverlay from './LoadingOverlay.svelte';

	export let url: string;
	let loaded: boolean = false;

	onMount(async () => {
		const splineContainer = document.getElementById('spline3d');
		if (splineContainer) {
			splineContainer.addEventListener('load-complete', (loadEvent) => {
				loaded = true;
			});
		}
	});
</script>

<LoadingOverlay {loaded} />
<spline-viewer id="spline3d" loading="eagar" loading-anim-type="spinner-big-light" {url} />
