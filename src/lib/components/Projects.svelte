<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	let activeProject = 0;
	let projects = [
		{
			id: 0,
			name: 'react',
			content: `<p>Simple react Single page application created with <strong>React</strong> and <strong>Bulma</strong> for styling. 
                Utilizes reddit json API to browse posts and subreddits on any device. Tou can even download it, thanks to <storng>PWA</strong> integration.</p>`,
			title: 'React Reddit Client',
			img: {
				desktop: '/react-desktop.webp',
				mobile: '/react-mobile.webp'
			},
			bgColor: 'bg-sky-600',
			textColor: 'text-sky-100',
			borderColor: 'border-sky-600',
			href: 'a',
			icon: 'logos:react',
			tech: ['react', 'redux', 'bulmaCSS']
		},
		{
			id: 1,
			name: 'vue',
			content:
				'Single page Full-stack Web Application for Azure DevOps. Handles user authentification, API calls to Read, Update and Create new tickets. Created with <strong>Vue</strong>, <strong>Pinia</strong> for state management, <strong>TailwindCSS</strong> for styling and <strong>Firebase</strong for backend.',
			title: 'Check my ticket',
			img: {
				desktop: '/react-desktop.webp',
				mobile: '/react-mobile.webp'
			},
			bgColor: 'bg-teal-600',
			textColor: 'text-teal-100',
			borderColor: 'border-teal-600',
			href: 'a',
			icon: 'logos:vue',
			tech: ['VueJS', 'Pinia', 'TailwindCSS', 'Firebase']
		},
		{
			id: 2,
			name: 'svelte',
			content:
				'Full Stack mulit tenant Web application, which helps you with SEO. Includes user Authentication, REST API and much more. Created with <strong>SvelteKit</strong>, <strong>TailwindCSS</strong> and <strong>Firebase</strong>',
			img: {
				desktop: '/react-desktop.webp',
				mobile: '/react-mobile.webp'
			},
			title: 'SEO Catcher',
			bgColor: 'bg-amber-700',
			textColor: 'text-amber-100',
			borderColor: 'border-amber-700',
			icon: 'logos:svelte-icon',
			tech: ['SvelteKit', 'TailwindCSS', 'Firebase']
		}
	];
</script>

<section class="grid gap-8 max-lg:grid-rows-3 lg:grid-cols-3">
	<ul class="flex flex-col gap-8 max-lg:row-start-1 lg:col-start-1 xl:pt-16">
		{#each projects as project, index}
			<li>
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
						on:click={() => (activeProject = index)}
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
						<div class="flex justify-center gap-4 font-bold text-neutral">
							{#each project.tech as tech}
								<a href="#" class="link hover:text-neutral-content">{tech}</a>
							{/each}
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
	<div
		class="row-span-2 flex h-full flex-col gap-4 max-lg:row-start-2 lg:col-span-2 lg:col-start-2"
	>
		<div
			class="mockup-browser hidden border border-info bg-base-300 shadow-lg shadow-neutral md:block"
		>
			<div class="mockup-browser-toolbar">
				<div class="input border border-base-100 text-xl font-bold">
					{#key projects[activeProject].id}
						<span
							in:fly={{ x: 300, duration: 300, delay: 500 }}
							out:fly={{ x: -300, duration: 300 }}
						>
							{projects[activeProject].title}
						</span>
					{/key}
				</div>
			</div>
			<div
				class="artboard artboard-horizontal flex justify-center overflow-hidden border-t border-info"
			>
				{#key projects[activeProject].id}
					<img
						in:fly={{ x: 300, duration: 300, delay: 500 }}
						out:fly={{ x: -300, duration: 300 }}
						src={projects[activeProject].img.desktop}
						alt="project"
						class="w-full"
					/>
				{/key}
			</div>
		</div>
		<div class="mockup-phone md:hidden">
			<div class="camera"></div>
			<div class="display">
				<div class="artboard artboard-demo h-[520px] max-w-[300px]">
					{#key projects[activeProject].id}
						<img
							in:fly={{ x: 320, duration: 300, delay: 500 }}
							out:fly={{ x: -320, duration: 300 }}
							src={projects[activeProject].img.mobile}
							alt="project"
							class="w-full"
						/>
					{/key}
				</div>
			</div>
		</div>
		<a href={projects[activeProject].href} class="w-full self-end md:w-fit">
			<button class="btn btn-accent w-full" class:btn-disabled={!projects[activeProject].href}
				>{projects[activeProject].href ? `Check live project` : 'Sorry this project is not public'}
			</button></a
		>
	</div>
</section>
