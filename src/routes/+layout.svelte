<script lang="ts">
	import '../app.css';
	import { ThemeSwitcher, Footer, Header, MobileSidebar } from '$lib/components';
	export let data;

	$: ({ colorTheme } = data);
</script>

<div class="drawer min-h-full">
	<input id="my-drawer" type="checkbox" class="drawer-toggle"  aria-label="drawer"/>
	<div class="layout drawer-content mx-auto min-h-full max-w-7xl px-8 xl:px-0 w-full overscroll-none">
		<Header />
		<main class="flex flex-col gap-20 lg:max-xl:gap-40 h-full">
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
		grid-template-rows:  1fr auto;
	}
</style>
