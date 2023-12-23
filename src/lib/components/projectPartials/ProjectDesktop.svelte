<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let project: {
		id: number;
		title: string;
		img: {
			desktop: string;
		};
	};
</script>

<div class="mockup-browser hidden border border-info bg-base-300 shadow shadow-neutral md:block">
	<div class="mockup-browser-toolbar">
		<div class="input border border-base-100 text-xl font-bold">
			{#key project.id}
				<span
					in:fly={{ x: '100%', duration: 500, delay: 500 }}
					out:fly={{ x: '100%', duration: 500 }}
				>
					{project.title}
				</span>
			{/key}
		</div>
	</div>
	<div
		class="artboard artboard-horizontal flex h-[349px] w-[620px] justify-center overflow-hidden border-t border-info xl:h-[414px] xl:w-[736px]"
	>
		{#key project.id}
			<div
				class="h-full w-full"
				in:fly={{ x: 300, duration: 600, delay: 600, easing: quintOut }}
				out:fly={{ x: -300, duration: 600, easing: quintOut }}
			>
				<enhanced:img src={project.img.desktop} alt="project" loading="lazy" class="h-full w-full" />
			</div>
		{/key}
	</div>
</div>
