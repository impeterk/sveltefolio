<script lang="ts">
	import SectionTitle from './SectionTitle.svelte';
	import AboutMeImage from './AboutMeImage.svelte';
</script>

<section
	class="mt-20 flex flex-col items-center justify-items-center gap-8 max-sm:mt-20 sm:grid sm:grid-cols-2 sm:content-center sm:items-start sm:gap-0 sm:gap-y-20"
>
	<SectionTitle from="from-accent" to="to-accent" title="About Me" />
	<div class="prose col-span-1 col-start-1 flex">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quibusdam molestiae amet natus,
		quia quos, quam deleniti culpa temporibus at quae architecto vero voluptates veniam consequatur
		laboriosam iste. Id, aliquam?
	</div>
	<div class="col-span-1 col-start-2">
		<AboutMeImage />
	</div>
</section>
