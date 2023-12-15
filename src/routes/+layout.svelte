<script lang="ts">
	import '../app.css';
	import {ThemeSwitcher,Footer} from '$lib/components'
	export let data;

	$: ({ colorTheme } = data);
</script>

<div class="layout mx-auto min-h-full max-w-7xl px-8 xl:px-0">
	<header>
		<div></div>
	</header>
	<main class="flex flex-col">
		<slot />
	</main>
	<Footer>
		<div class="absolute right-0 max-md:translate-y-1/2 md:right-10">
			<ThemeSwitcher {colorTheme} />
		</div>
	</Footer>
</div>

<style lang="postcss">
	.layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
