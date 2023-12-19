<script lang="ts">
	export let title: string, from: string, to: string;
	import GradientText from './GradientText.svelte';
</script>

<div class="col-span-full flex h-fit w-full content-center items-center justify-center gap-4">
	<h2
		class="relative w-max shrink-0 font-code text-[2.5rem] font-extrabold sm:text-6xl md:font-medium"
	>
		<GradientText {from} {to}>
			{title}
		</GradientText>
	</h2>
	<div class="h-0.5 w-full bg-gradient-to-r from-base-content to-base-300 max-lg:hidden"></div>
</div>
