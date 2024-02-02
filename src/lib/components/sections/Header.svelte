<script lang="ts">
	import {Navigation, HomeNavigation, GradientText} from "$lib/components"
	import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
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
			{#if $page.route.id === '/'}
			<HomeNavigation/>
			{:else}
			<Navigation />
			{/if}
		</div>
		<div class="navbar-end">
			<a
				class="btn btn-ghost text-xl decoration-primary underline-offset-4  hover:text-primary hover:underline max-sm:hidden"
				href="https://now.peterKudelas.eu">Now</a
			>
		</div>
	</div>
</header>
