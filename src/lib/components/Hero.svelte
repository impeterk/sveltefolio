<script lang="ts">
	import GradientText from './GradientText.svelte';
</script>

<section class="mx-auto my-auto w-full max-w-5xl py-20 font-sans md:my-0">
	<div class="wrap flex flex-col gap-4 text-center">
		<h3 class="font-code text-3xl md:text-left md:text-2xl">Hello World</h3>
		<h1 class="text-center font-sans text-7xl font-black">
			I'm
			<GradientText>Peter Kudelas</GradientText>
		</h1>
		<h2 class="mt-4 font-code text-5xl font-extrabold md:text-end">
			I
			<span class="text-zinc-600 dark:text-zinc-400">{'<code />'}</span>
			web apps.
		</h2>
		<p class="mt-8 text-2xl font-semibold leading-7 md:text-justify">
			I am
			<span><GradientText>full-stack web developer</GradientText></span>
			creating functional web applications using latest web technologies.
		</p>
	</div>
</section>
