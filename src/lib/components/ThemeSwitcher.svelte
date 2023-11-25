<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import 'iconify-icon';
	export let colorTheme = 'system';

	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		let theme = action.searchParams.get('theme');

		if (theme) {
			theme =
				theme === 'system'
					? window.matchMedia('(prefers-color-scheme: dark)').matches
						? 'dark'
						: 'light'
					: theme;
			document.documentElement.setAttribute('data-theme', theme);
		}
	};
</script>

<form method="POST" use:enhance={submitUpdateTheme} class="flex gap-2 text-3xl dark:text-zinc-600">
	<button formaction="/?/setTheme&theme=light" class="flex">
		<iconify-icon
			class="cursor-pointer"
			icon="ph:sun"
			class:text-amber-600={colorTheme === 'light'}
			aria-label="sets color theme to light"
		/>
	</button>
	<button formaction="/?/setTheme&theme=dark" class="flex">
		<iconify-icon
			class="cursor-pointer"
			icon="ph:moon"
			class:text-sky-600={colorTheme === 'dark'}
			aria-label="sets color theme to dark"
		/>
	</button>
	<button formaction="/?/setTheme&theme=system" class="flex">
		<iconify-icon
			class="cursor-pointer"
			icon="ph:monitor"
			class:text-orange-600={colorTheme === 'system'}
			aria-label="sets color theme to system preference"
		/>
	</button>
</form>
