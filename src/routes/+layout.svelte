<script lang="ts">
	import '../app.css';
	import { ThemeSwitcher, Footer, Header, MobileSidebar } from '$lib/components';
	export let data;

	$: ({ colorTheme } = data);
</script>

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="layout drawer-content mx-auto min-h-full max-w-7xl px-8 xl:px-0">
		<Header />
		<main class="flex flex-col gap-20 lg:max-xl:gap-40">
			<slot />
		</main>
		<Footer>
			<div class="absolute right-0 max-md:translate-y-1/2 md:right-10">
				<ThemeSwitcher {colorTheme} />
			</div>
		</Footer>
	</div>
	<MobileSidebar />
</div>

<style lang="postcss">
	.layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
