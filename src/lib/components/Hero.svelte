<script lang="ts">
	import GradientText from './GradientText.svelte';
</script>


<section
    class="max-w-5xl mx-auto w-full min-h-screen font-sans flex flex-col"
  >
    <div class="flex flex-col wrap text-center gap-4 lg:gap-20 my-auto">
      <h3
        class="text-3xl md:text-2xl font-code md:text-left text-zinc-600 dark:text-zinc-400 pt-6"
      >
        Hello World
      </h3>
      <h1 class="text-7xl font-sans font-black text-center">
        I'm
        <br class="sm:hidden" />
        <span class="relative">
			<span class="blur-3xl absolute -left-[1ch] sm:left-0">
          <GradientText 
            >Peter Kudeláš</GradientText
          ></span>
          <GradientText>Peter Kudeláš</GradientText>
        </span>
      </h1>
      <h2 class="text-5xl mt-4 font-code font-extrabold md:text-end">
        I
        <span class="text-zinc-600 dark:text-zinc-400">{'<code />'}</span>
        web apps.
      </h2>
      <p
        class="font-semibold mt-8 leading-7 md:text-justify text-2xl max-sm:w-56 max-sm:mx-auto"
      >
        I am a
        <span><GradientText>full-stack web developer</GradientText></span>
        creating functional web applications using latest web technologies.
      </p>
      <p class="text-center">scroll down to learn more</p>
    </div>
  </section>