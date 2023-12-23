<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	import type { projects } from '$lib';

	const dispatch = createEventDispatcher();
	export let activeProject: number, project: (typeof projects)[number];

</script>

<div
	class={`collapse collapse-arrow shadow-md shadow-neutral ${
		activeProject === project.id ? `${project.bgColor} ${project.textColor}` : 'bg-base-100'
	} border ${project.borderColor} `}
	class:from-90%={project.id !== activeProject}
>
	<input
		type="radio"
		name="my-accordion-2"
		checked={project.id === activeProject}
		on:click={() => dispatch('updateActive')}
	/>
	<div class="collapse-title flex items-center gap-4 text-xl font-medium capitalize">
		{project.name}
		<Icon icon={project.icon} class="text-2xl" />
	</div>
	<div class="collapse-content flex w-full flex-col">
		<div class={`prose${project.textColor}`}>
			{@html project.content}
		</div>
		<div class="divider divider-neutral my-1"></div>
		<div class="flex flex-wrap justify-center gap-4 font-bold">
			{#each project.tech as { name, href }}
				<a {href} class="link-hover link link-neutral text-lg capitalize hover:text-neutral-content"
					>{name}</a
				>
			{/each}
		</div>
	</div>
</div>
