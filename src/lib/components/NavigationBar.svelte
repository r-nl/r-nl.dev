<script lang="ts">
	import githubLogo from '$lib/images/github-mark.png';
	import linkedinLogo from '$lib/images/linkedin-logo.png';
</script>

<div
	class={`fixed top-0 bg-white/10 left-0 backdrop-filter backdrop-blur-2xl
flex justify-between items-center z-20 w-full p-2 px-7 border-white/5 border-0
border-b-2 select-none pointer-events-none`}
>
	<div class="flex justify-center">
		<div class="text-3xl font-black">r-nl</div>
		<div class="text-3xl text-white/40 m-[1px]">.dev</div>
	</div>
	<div class="flex items-center">
		<a
			href="https://www.linkedin.com/in/r-nl/"
			target="_blank"
			class="pointer-events-auto mr-5 hidden md:block"
		>
			<img
				src={linkedinLogo}
				alt="My Linkedin"
				class="w-8 transition-all opacity-50 hover:opacity-100"
			/>
		</a>
		<a
			href="https://github.com/r-nl"
			target="_blank"
			class="pointer-events-auto mr-5 hidden md:block"
		>
			<img
				src={githubLogo}
				alt="My Github"
				class="w-8 transition-all opacity-50 hover:opacity-100"
			/>
		</a>
		<a href="mailto:rob@r-nl.dev" class="pointer-events-auto cursor-pointer">
			<div
				class={`p-2 px-5 bg-white/10 hover:bg-white/30 transition-all
    text-white/80 rounded-full font-bold text-lg`}
			>
				Email me
			</div>
		</a>
	</div>
</div>
