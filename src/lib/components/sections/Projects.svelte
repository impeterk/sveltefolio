<script lang="ts">
	import { SectionTitle, ProjectAccordion, ProjectMobile, ProjectFooter, ProjectDesktop } from '..';
	import { projects } from '$lib';
	
	let activeProject = 0;
	function updateActive(index: number) {
		return (activeProject = index);
	}
</script>

<section
	class="flex flex-col min-h-screen items-center justify-items-center gap-8 sm:gap-0 sm:gap-y-20 lg:grid lg:grid-cols-3 lg:content-center lg:items-start"
	id="projects"
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
	<ProjectDesktop project={projects[activeProject]} />
	<ProjectMobile project={projects[activeProject]} />
	<ProjectFooter project={projects[activeProject]} />
	</div>
</section>
