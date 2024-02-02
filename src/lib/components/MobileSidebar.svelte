<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { MobileHomeNavigation, MobileNavigation } from './';
</script>

<nav class="drawer-side z-40" id="sidebar">
	<label for="my-drawer" class="drawer-overlay"></label>
	<aside class="flex h-full w-2/3 flex-col justify-center bg-base-200">
		<ul class="menu mobile__menu gap-4 mt-auto">
		{#if $page.route.id === '/'}
			<MobileHomeNavigation />
			{:else}
			<MobileNavigation />	
		{/if}
	</ul>
		<div class="mb-10 mt-auto text-center">
			<a
				class="btn btn-ghost text-2xl decoration-primary underline-offset-4 hover:underline"
				href="https://now.peterKudelas.eu"
			>
				Now
				<Icon icon="mdi:calendar-clock" class="text-4xl " />
			</a>
		</div>
	</aside>
</nav>

<style >
	:global(.mobile__menu li a) {
		display: grid;
		grid-template-columns: 1fr auto;
	}
</style>

