<script lang="ts">
	import Icon from "@iconify/svelte";
</script>

<div
	class="relative mt-20 xl:mt-10 2xl:mt-0 flex flex-col gap-2 border-t border-neutral py-4 font-mono md:flex-row md:items-center lg:justify-center"
>
	<p>Peter Kudeláš {new Date().getFullYear()} |</p>
	<div class="inline-flex space-x-3">
		<span>created with</span>
		<a
			href="http://svelte.dev"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Svelte Kit Link"
			class="flex"
		>
			<Icon icon="logos:svelte-icon" class="text-2xl" /></a
		>
		<a
			href="http://tailwindcss.com"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="tailwind CSS link"
			class="flex"
		>
			<Icon icon="devicon:tailwindcss" class="text-2xl" /></a
		>
	</div>
	<slot />
</div>
