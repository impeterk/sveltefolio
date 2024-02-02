<script lang="ts">
	import { page } from "$app/stores";
</script>

<nav class="space-x-4 max-sm:hidden">
	<a class="group btn btn-ghost text-xl hover:text-primary" href="/"
		>
			Home</a
	>

	<a class="group btn btn-ghost text-xl hover:text-secondary" class:text-secondary={$page.url.pathname.includes('blog')} href="/blog"
		>
			Blog</a
	>
</nav>
