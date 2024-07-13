<script lang="ts">
	// @ts-ignore
	import ResumeMarkdown from './resume.md';
</script>

<div class="min-w-full min-h-full bg-slate-50 flex justify-center">
	<div class="prose prose-sm prose-slate font-inter py-16 mx-7">
		<ResumeMarkdown />
	</div>
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-slate-50;
	}
</style>
