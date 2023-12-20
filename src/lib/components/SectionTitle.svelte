<script lang="ts">
	export let title: string, from: string, to: string, font: string;
	import GradientText from './GradientText.svelte';
</script>

<div class={`col-span-full flex h-fit w-full content-center items-center justify-center gap-4 ${font}`} >
	<h2
		class="relative w-max shrink-0 text-[2.5rem] font-extrabold sm:text-6xl md:font-medium"
	>
	<span class="absolute left-0 blur-2xl"><GradientText {from} {to}>
		{title}
	</GradientText></span>
		<GradientText {from} {to}>
			{title}
		</GradientText>
	</h2>
	<div class="h-0.5 w-full bg-gradient-to-r from-base-content to-base-300 max-lg:hidden"></div>
</div>
