<script lang="ts">
	import MyImage from "$lib/assets/AboutMeNoBg.webp?enhanced"
</script>

<figure class="artboard rounded-xl group">
	<span class="group relative inline-block p-2 font-medium rounded-xl">
		<span
			class="absolute inset-0 h-full w-full translate-x-2 translate-y-2 transform bg-gradient-to-br from-accent to-success transition duration-500 ease-out group-hover:translate-x-0.5 group-hover:translate-y-0.5 rounded-xl"
		></span>
		<span class="about-gradient absolute inset-0 h-full w-full border-2 border-success rounded-xl transition-all duration-500 ease-in-out delay-75 "></span>
		<span class="relative text-black group-hover:text-white rounded-xl"
			><enhanced:img src={MyImage} alt="avatar"  class="rounded-xl contrast-110 w-[240px] h-[320px] lg:w-[300px] lg:h-[400px]" loading="lazy"/></span
		>
	</span>
</figure>

<style>
	.about-gradient {
		background: radial-gradient(circle at 50% -250%, #374151, #111827, #000);
		
	}

</style>
