<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import { GradientText } from '..';

    export let project: {id: number, img: {
        mobile: string
    }, icon: string}
</script>

<div class="mockup-phone border-none bg-base-content md:hidden">
			<div class="camera"></div>
			<div class="display">
				<div class="artboard h-[600px] max-w-[300px] bg-dark">
					{#key project.id}
						<div
							class="h-full w-full"
							in:fly={{ x: '50%', duration: 500, delay: 500 }}
							out:fly={{ x: '-100%', duration: 500 }}
						>
							{#if !project.img.mobile}
								<div class="flex h-full animate-pulse flex-col items-center justify-center">
									<span class="text-center text-3xl"
										><GradientText>Sorry No Mobile Version yet</GradientText>
									</span>
									<Icon icon={project.icon} class="mt-14 text-7xl" />
								</div>
							{:else}
								<enhanced:img
									src={project.img.mobile}
									alt="project"
									class="h-full w-full"
									loading="lazy"
								/>
							{/if}
						</div>
					{/key}
				</div>
			</div>
		</div>

