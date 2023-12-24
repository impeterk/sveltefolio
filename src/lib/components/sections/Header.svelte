<script lang="ts">
	import GradientText from '../GradientText.svelte';
	import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	let y: number = 0;
	function scrollAboveAnchor() {
		if (window.innerWidth > 1280) return;

		window.scrollTo(window.scrollX, window.scrollY - 75);
	}
</script>

<svelte:window bind:scrollY={y} on:hashchange={() => scrollAboveAnchor()} />

<header
	class="fixed left-0 top-0 z-50 w-full text-base-content shadow-sm transition-all duration-500 sm:bg-opacity-90 sm:backdrop-blur"
	class:bg-base-300={y > 30}
>
	<div class="navbar mx-auto max-w-7xl px-8">
		<div class="navbar-start">
			<label
				class="hamburger btn btn-square btn-ghost drawer-button rounded-lg sm:hidden"
				for="my-drawer"
				id="hamburger"
			>
				<Icon icon="mdi:menu" class="text-4xl"/>
			</label>
		</div>
		<div class="navbar-center">
			{#if browser && y > window.innerHeight}
			<span class="sm:hidden text-xl font-code font-semibold"
			in:fade
			out:fade
			>
				<GradientText to="to-success">
					
					{`<Peter Kudeláš />`}
				</GradientText>
			</span>
			{/if}
			<nav class="max-sm:hidden space-x-4">
				<a class="btn btn-ghost text-xl group" href="/#projects"
					><GradientText
						from="from-base-content group-hover:from-info"
						to="to-base-content group-hover:to-primary"
					>
						Projects</GradientText
					></a
				>
				<a class="btn btn-ghost text-xl group" href="/#aboutme"
					><GradientText
						from="from-base-content group-hover:from-accent"
						to="to-base-content group-hover:to-success"
					>
						About Me</GradientText
					></a
				>
				<a class="btn btn-ghost text-xl group" href="/#contact"
					><GradientText
						from="from-base-content group-hover:from-amber-500"
						to="to-base-content group-hover:to-warning"
					>
						Contact</GradientText
					></a
				>
			</nav>
		</div>
		<div class="navbar-end">
			<a
				class="btn btn-ghost text-xl decoration-primary underline-offset-4  hover:text-primary hover:underline max-sm:hidden"
				href="https://now.peterKudelas.eu">Now</a
			>
		</div>
	</div>
</header>
