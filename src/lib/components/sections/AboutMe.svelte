<script lang="ts">
	import {SectionTitle, AboutMeImage} from '..'
	import Icon from '@iconify/svelte';
</script>

<section
	class="min-h-screen lg:max-xl:my-0 flex flex-col items-center justify-items-center gap-8 max-sm:mt-20 lg:grid lg:grid-cols-2 lg:content-center lg:gap-0 lg:gap-y-20"
	id="aboutme"
>
	<SectionTitle from="from-accent" to="to-accent" title="About Me" font="font-sans" />
	<div class="col-span-1 col-start-2 lg:justify-self-start lg:w-4/5">
<article class="prose text-justify">
	<h3>Hello Everyone 👋</h3>
	<p>I am Peter from Slovakia. I have always been drawn to digital technologies, but as luck would have it, my life went different route.</p>
	<p>When I was 25 I have decided to turn my life around and enrolled into Front End Engeneer Course at <a class=" link-warning" href="http://codecademy.com" target="_blank" rel="noopener noreferrer">Codecademy</a>. I ❤️ every bit of web development ever since and I quickly realized that Full stack development is the way for me.</p>
	<hr>
	<h3 class="text-center">What am I currently up to?! <br> Check out my <a href="https://now.peterkudelas.eu" class="link link-accent text-accent">Now page</a></h3>
</article>
<div class="grid grid-cols-2 mt-12 ml-[12.5%] lg:ml-[15%] xl:ml-[20%]">
	<p class="flex items-center gap-4 hover:scale-105 hover:text-accent transition-all duration-200"><Icon icon="simple-icons:svelte" /><span class="text-sm"> Svelte</span> </p>
	<p class="flex items-center gap-4 hover:scale-105 hover:text-accent transition-all duration-200"><Icon icon="simple-icons:tailwindcss" /><span class="text-sm"> Tailwind CSS</span> </p>
	<p class="flex items-center gap-4 hover:scale-105 hover:text-accent transition-all duration-200"><Icon icon="simple-icons:vuedotjs" /><span class="text-sm"> Vue</span> </p>
	<p class="flex items-center gap-4 hover:scale-105 hover:text-accent transition-all duration-200"><Icon icon="simple-icons:nuxtdotjs" /><span class="text-sm"> Nuxt</span> </p>
	<p class="flex items-center gap-4 hover:scale-105 hover:text-accent transition-all duration-200"><Icon icon="simple-icons:react" /><span class="text-sm"> React</span> </p>
	<p class="flex items-center gap-4 hover:scale-105 hover:text-accent transition-all duration-200"><Icon icon="simple-icons:firebase" /><span class="text-sm"> Firebase</span> </p>
	<p class="flex items-center gap-4 hover:scale-105 hover:text-accent transition-all duration-200"><Icon icon="simple-icons:postgresql" /><span class="text-sm"> PostgreSQL</span> </p>
	<p class="flex items-center gap-4 hover:scale-105 hover:text-accent transition-all duration-200"><Icon icon="simple-icons:linux" /><span class="text-sm"> Linux</span> </p>
</div>

	</div>
	<div class="col-span-1 col-start-1 row-start-2">
		<AboutMeImage />
	</div>
</section>
