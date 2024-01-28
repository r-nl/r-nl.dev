<script lang="ts">
	import background from '$lib/images/BGSample.png';
	export let loaded: boolean;
	let elementRemoved = false;
	let loadingPhase = 0;
	setTimeout(() => {
		loadingPhase = 1;
	}, 10);
	$: if (loaded == true) {
		loadingPhase = 2;
		setTimeout(() => {
			loadingPhase = 3;
		}, 1000);
	}
</script>

{#if loadingPhase < 3}
	<div
		class={`fixed top-0 left-0 z-40 w-full h-full bg-waterBlue transition-all duration-500 ${
			loadingPhase >= 2 ? 'opacity-0' : 'opacity-100'
		}`}
	>
		<img
			height="100%"
			src={background}
			class={`object-cover w-screen h-screen filter transition-all duration-500 blur-2xl
            brightness-90 saturate-150`}
			alt="Now loading..."
		/>
	</div>
	<div class="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center">
		<div
			class={`text-5xl md:text-7xl transition-all duration-500 ${
				loadingPhase == 1 ? 'opacity-90' : 'opacity-0'
			}`}
		>
			<div class="flex justify-center flex-col font-header">
				<div class="flex select-none">
					<div class="font-bold">r-nl</div>
					<div class="text-white/60 m-[1px]">.dev</div>
				</div>
				<div class="w-full flex items-center justify-center h-20">
					<div class="loader opacity-40" />
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Thanks to https://css-loaders.com/dots/ */
	.loader {
		height: 15px;
		aspect-ratio: 4;
		--_g: no-repeat radial-gradient(farthest-side, #fff 90%, #0000);
		background:
			var(--_g) left,
			var(--_g) right;
		background-size: 25% 100%;
		display: grid;
	}
	.loader:before,
	.loader:after {
		content: '';
		height: inherit;
		aspect-ratio: 1;
		grid-area: 1/1;
		margin: auto;
		border-radius: 50%;
		transform-origin: -100% 50%;
		background: #fff;
		animation: l49 1s infinite linear;
	}
	.loader:after {
		transform-origin: 200% 50%;
		--s: -1;
		animation-delay: -0.5s;
	}

	@keyframes l49 {
		58%,
		100% {
			transform: rotate(calc(var(--s, 1) * 1turn));
		}
	}
</style>
