<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { GradientText } from './';
	let activeProject = 2;
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
			href: 'https://reddit.peterkudelas.eu/about',
			icon: 'logos:react',
			tech: [
				{ name: 'react', href: 'https://react.dev/' },
				{ name: 'redux', href: 'https://redux.js.org/' },
				{ name: 'bulmaCSS', href: 'https://bulma.io/' }
			]
		},
		{
			id: 1,
			name: 'vue',
			content:
				'Single page Full-stack Web Application for Azure DevOps. Handles user authentification, API calls to Read, Update and Create new tickets. Created with <strong>Vue</strong>, <strong>Pinia</strong> for state management, <strong>TailwindCSS</strong> for styling and <strong>Firebase</strong for backend.',
			title: 'Check my ticket',
			img: {
				desktop: '/vue-desktop.webp',
				mobile: '/vue-mobile.webp'
			},
			bgColor: 'bg-teal-600',
			textColor: 'text-teal-100',
			borderColor: 'border-teal-600',
			href: 'https://www.henkel-adhesives.com/check-my-ticket.html',
			icon: 'logos:vue',
			tech: [
				{ name: 'VueJS', href: 'https://vuejs.org/' },
				{ name: 'Pinia', href: 'https://pinia.vuejs.org/' },
				{ name: 'TailwindCSS', href: 'https://tailwindcss.com/' },
				{ name: 'Firebase', href: 'https://firebase.google.com/' }
			]
		},
		{
			id: 2,
			name: 'svelte',
			content:
				'Full Stack mulit tenant Web application, which helps you with SEO. Includes user Authentication, REST API and much more. Created with <strong>SvelteKit</strong>, <strong>TailwindCSS</strong> and <strong>Firebase</strong>',
			img: {
				desktop: '/svelte-desktop.webp',
				mobile: ''
			},
			title: 'SEO Catcher',
			bgColor: 'bg-amber-700',
			textColor: 'text-amber-100',
			borderColor: 'border-amber-700',
			icon: 'logos:svelte-icon',
			tech: [
				{ name: 'SvelteKit', href: 'https://kit.svelte.dev/' },
				{ name: 'TailwindCSS', href: 'https://tailwindcss.com/' },
				{ name: 'Firebase', href: 'https://firebase.google.com/' }
			]
		}
	];
</script>

<section class="flex flex-col gap-8 max-lg:grid-rows-2 lg:grid lg:grid-cols-3 justify-items-center items-center">
	<div class="col-span-3 flex w-full max-w-6xl content-center items-center justify-center gap-4">
		<h2
			class="relative w-max shrink-0 font-code text-[2.5rem] font-extrabold sm:text-6xl md:font-medium"
		>
			<span class="absolute left-0 blur-2xl">
				<GradientText from="from-sky-500" to="to-accent">
					{'< Projects />'}
				</GradientText>
			</span>
			<GradientText from="from-info" to="to-info">
				{'< Projects />'}
			</GradientText>
		</h2>
		<div class="h-0.5 w-full bg-gradient-to-r from-info to-accent max-lg:hidden"></div>
	</div>
	<ul class="flex flex-col gap-8 lg:col-start-1 lg:justify-self-end sm:w-4/5 lg:max-xl:w-full">
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
						<div class="flex justify-center gap-4 font-bold flex-wrap">
							{#each project.tech as { name, href }}
								<a
									{href}
									class="link-hover link link-neutral text-lg capitalize hover:text-neutral-content"
									>{name}</a
								>
							{/each}
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
	<div class="flex h-full flex-col gap-8 lg:col-span-2 lg:col-start-2 lg:max-xl:justify-self-end">
		<div
			class="mockup-browser hidden border border-info bg-base-300 shadow-lg shadow-neutral md:block"
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
				class="artboard artboard-horizontal w-[640px] h-[360px] xl:w-[736px] xl:h-[414px] flex justify-center overflow-hidden border-t border-info "
			>
				{#key projects[activeProject].id}
					<img
					in:fly={{ x: 300, duration: 600, delay: 600,  easing: quintOut }}
					out:fly={{ x: -300,duration: 600,  easing: quintOut }}

						src={projects[activeProject].img.desktop}
						alt="project"
						class="w-full"
					/>
				{/key}
			</div>
		</div>
		<div class="mockup-phone md:hidden border-none bg-base-content">
			<div class="camera"></div>
			<div class="display">
				<div class="artboard h-[600px] w-[300px] bg-dark">
					{#key projects[activeProject].id}
					<div 
					class=" flex items-center justify-center  h-full"
					in:fly={{ x: '50%', duration: 500, delay: 500 }}
					out:fly={{ x: '-100%', duration: 500 }}
>
					{#if !projects[activeProject].img.mobile}
					<span class="text-2xl text-slate-100 text-center">Sorry No Mobile Version yet</span>
					{:else}
						<img
							src={projects[activeProject].img.mobile}
							alt="project"
							class="h-full"
						/>
						{/if}
					</div>
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
