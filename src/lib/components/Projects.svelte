<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { GradientText } from './';
	import SectionTitle from './SectionTitle.svelte';
	let activeProject = 0;
	import { projects } from '$lib';
	import ProjectAccordion from './ProjectAccordion.svelte';

	function updateActive(index: number) {
		return (activeProject = index);
	}
</script>

<section
	class="flex min-h-screen flex-col items-center justify-items-center gap-8 max-sm:mt-20 sm:gap-0 sm:gap-y-20 lg:grid lg:grid-cols-3 lg:content-center lg:items-start xl:h-screen"
>
	<SectionTitle from="from-info" to="to-info" title="<Projects />" font="font-code"></SectionTitle>
	<ul class="flex flex-col gap-8 sm:w-4/5 lg:col-start-1 lg:w-full lg:justify-self-end">
		{#each projects as project, index}
			<li>
				<ProjectAccordion {project} {activeProject} on:updateActive={() => updateActive(index)} />
			</li>
		{/each}
	</ul>
	<div
		class="flex h-full flex-col gap-8 sm:max-xl:mb-20 lg:col-span-2 lg:col-start-2 lg:justify-self-end"
	>
		<div
			class="mockup-browser hidden border border-info bg-base-300 shadow shadow-neutral md:block"
		>
			<div class="mockup-browser-toolbar">
				<div class="input border border-base-100 text-xl font-bold">
					{#key projects[activeProject].id}
						<span
							in:fly={{ x: '100%', duration: 500, delay: 500 }}
							out:fly={{ x: '100%', duration: 500 }}
						>
							{projects[activeProject].title}
						</span>
					{/key}
				</div>
			</div>
			<div
				class="artboard artboard-horizontal flex h-[349px] w-[620px] justify-center overflow-hidden border-t border-info xl:h-[414px] xl:w-[736px]"
			>
				{#key projects[activeProject].id}
					<img
						in:fly={{ x: 300, duration: 600, delay: 600, easing: quintOut }}
						out:fly={{ x: -300, duration: 600, easing: quintOut }}
						src={projects[activeProject].img.desktop}
						alt="project"
						class="w-full"
						loading="lazy"
					/>
				{/key}
			</div>
		</div>
		<div class="mockup-phone border-none bg-base-content md:hidden">
			<div class="camera"></div>
			<div class="display">
				<div class="artboard h-[600px] max-w-[300px] bg-dark">
					{#key projects[activeProject].id}
						<div
							class="h-full"
							in:fly={{ x: '50%', duration: 500, delay: 500 }}
							out:fly={{ x: '-100%', duration: 500 }}
						>
							{#if !projects[activeProject].img.mobile}
								<div class="flex h-full animate-pulse flex-col items-center justify-center">
									<span class="text-center text-3xl"
										><GradientText>Sorry No Mobile Version yet</GradientText>
									</span>
									<Icon icon={projects[activeProject].icon} class="mt-14 text-7xl" />
								</div>
							{:else}
								<img
									src={projects[activeProject].img.mobile}
									alt="project"
									class="h-full"
									loading="lazy"
								/>
							{/if}
						</div>
					{/key}
				</div>
			</div>
		</div>
		<div class="flex flex-wrap items-center">
			<div class="mx-auto flex space-x-12 max-sm:mb-8">
				{#each projects[activeProject].tech as { icon, name, href }}
					<a {href} target="_blank" rel="noopener noreferrer" class="group">
						<div class="relative flex flex-col items-center">
							<Icon {icon} class="absolute left-0 text-4xl blur-xl" />
							<Icon {icon} class="text-4xl group-hover:animate-pulse sm:text-5xl" />
							<p class="mt-2 text-xs sm:hidden">{name}</p>
						</div>
					</a>
				{/each}
			</div>
			<a href={projects[activeProject].href} class="w-full md:w-fit">
				<button class="btn btn-accent w-full" class:btn-disabled={!projects[activeProject].href}
					>{projects[activeProject].href
						? `Check live project`
						: 'Sorry this project is not public'}
				</button></a
			>
		</div>
	</div>
</section>
