<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import Icon from '@iconify/svelte';
	export let colorTheme = 'system';

	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		let theme = action.searchParams.get('theme');

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	};
</script>

<form method="POST" use:enhance={submitUpdateTheme} class="flex gap-2 text-3xl text-base-content">
	<button formaction="/?/setTheme&theme=light" class="flex" aria-label="sets color theme to light" 
	class:text-warning={colorTheme === 'light'}
	>
		<Icon
			class="cursor-pointer"
			icon="ph:sun"
		/>
	</button>
	<button formaction="/?/setTheme&theme=dark" class="flex" aria-label="sets color theme to dark"
	class:text-info={colorTheme === 'dark'}>
		<Icon class="cursor-pointer" icon="ph:moon"  />
	</button>
	<button
		formaction="/?/setTheme&theme=system"
		class="flex"
		aria-label="sets color theme to system preference"
		class:text-orange-600={colorTheme === 'system'}

	>
		<Icon
			class="cursor-pointer"
			icon="ph:monitor"
		/>
	</button>
</form>
