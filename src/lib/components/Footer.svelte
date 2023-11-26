<script lang="ts">
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import 'iconify-icon';
</script>

<div
	class="relative flex flex-col gap-2 border-t border-neutral py-4 font-mono md:flex-row md:items-center lg:justify-center"
>
	<p>Peter Kudelas &copy {new Date().getFullYear()} |</p>
	<div class="inline-flex space-x-3">
		<span>created with</span>
		<a
			href="http://svelte.dev"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Svelte Kit Link"
			class="flex"
		>
			<iconify-icon icon="logos:svelte-icon" class="text-2xl" /></a
		>
		<a
			href="http://tailwindcss.com"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="tailwind CSS link"
			class="flex"
		>
			<iconify-icon icon="devicon:tailwindcss" class="text-2xl" /></a
		>
	</div>
	<slot />
</div>
