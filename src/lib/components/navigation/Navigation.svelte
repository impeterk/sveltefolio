<script lang="ts">
	import GradientText from '../GradientText.svelte';
</script>

<nav class="space-x-4 max-sm:hidden">
	<a class="group btn btn-ghost text-xl" href="/"
		><GradientText
			from="from-base-content group-hover:from-info"
			to="to-base-content group-hover:to-primary"
		>
			Home</GradientText
		></a
	>

	<a class="group btn btn-ghost text-xl" href="/blog"
		><GradientText
			from="from-base-content group-hover:from-secondary"
			to="to-base-content group-hover:to-fuchsia-500"
		>
			Blog</GradientText
		></a
	>
</nav>
