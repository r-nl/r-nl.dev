<script>
	import NavigationBar from '$lib/components/NavigationBar.svelte';
import '../app.css';
</script>

<div class="w-screen min-h-screen bg-nearBlack text-white font-sans">
	<NavigationBar />
	<slot />
</div>
