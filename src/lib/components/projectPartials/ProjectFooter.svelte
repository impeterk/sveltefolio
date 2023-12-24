<script lang="ts">
    import Icon from "@iconify/svelte";
    export let project: {
        tech: {
            icon: string,
            name: string,
            href: string
        }[],
        href: string | null
    }
</script>

<div class="flex flex-wrap items-center">
			<div class="mx-auto flex space-x-6 sm:space-x-12 max-sm:mb-8">
				{#each project.tech as { icon, name, href }}
					<a {href} target="_blank" rel="noopener noreferrer" class="group">
						<div class="relative flex flex-col items-center">
							<Icon {icon} class="absolute left-0 text-4xl blur-xl" />
							<Icon {icon} class="text-4xl group-hover:animate-pulse sm:text-5xl" />
							<p class="mt-2 text-xs sm:hidden">{name}</p>
						</div>
					</a>
				{/each}
			</div>
			<a href={project.href} class="w-full md:w-fit">
				<button class="btn btn-accent w-full disabled:text-base-content" disabled={!project.href}
					>{project.href
						? `Check live project`
						: 'Sorry this project is not public'}
				</button></a
			>
		</div>

