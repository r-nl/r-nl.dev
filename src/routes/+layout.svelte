<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	//Activate Vercel Analytics
	inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />
