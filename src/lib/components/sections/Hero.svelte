<script lang="ts">
	import {GradientText} from '..';
</script>

<section class="mx-auto flex min-h-screen w-full max-w-5xl flex-col font-sans">
	<div class="wrap my-auto flex flex-col gap-4 text-center lg:gap-20">
		<h3 class="pt-6 font-code text-3xl md:text-left md:text-2xl">Hello World</h3>
		<h1 class="text-center font-sans text-7xl font-black">
			I'm
			<br class="sm:hidden" />
			<span class="relative">
				<span class="absolute -left-[1ch] blur-3xl sm:left-0">
					<GradientText>Peter Kudeláš</GradientText></span
				>
				<GradientText>Peter Kudeláš</GradientText>
			</span>
		</h1>
		<h2 class="mt-4 font-code text-5xl font-extrabold md:text-end">
			I
			<span class="">{'<code />'}</span>
			web apps.
		</h2>
		<p class="mt-8 text-2xl font-semibold leading-7 max-sm:mx-auto max-sm:w-56 md:text-justify">
			I am a
			<span><GradientText>full-stack web developer</GradientText></span>
			creating functional web applications using latest web technologies.
		</p>
		<p class="text-center">scroll down to learn more</p>
	</div>
</section>
