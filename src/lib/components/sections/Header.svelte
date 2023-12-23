<script lang="ts">
	import GradientText from '../GradientText.svelte';

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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-8 w-8 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path></svg
				>
			</label>
		</div>
		<div class="navbar-center">
			{#if y > window.innerHeight}
				
			<span class="sm:hidden text-xl font-code font-semibold">
				<GradientText>
					
					{`<Peter Kudelas />`}
				</GradientText>
			</span>
			{/if}
			<div class="max-sm:hidden">
				<a class="btn btn-ghost text-xl" href="#projects"
					><GradientText
						from="from-base-content hover:from-info"
						to="to-base-content hover:to-primary"
					>
						Projects</GradientText
					></a
				>
				<a class="btn btn-ghost text-xl" href="#aboutme"
					><GradientText
						from="from-base-content hover:from-accent"
						to="to-base-content hover:to-success"
					>
						About Me</GradientText
					></a
				>
				<a class="btn btn-ghost text-xl" href="#contact"
					><GradientText
						from="from-base-content hover:from-amber-500"
						to="to-base-content hover:to-warning"
					>
						Contact</GradientText
					></a
				>
			</div>
		</div>
		<div class="navbar-end">

			<a
				class="btn btn-ghost text-xl decoration-primary underline-offset-4 hover:underline max-sm:hidden"
				href="https://now.peterKudelas.eu">Now</a
			>
		</div>
	</div>
</header>
