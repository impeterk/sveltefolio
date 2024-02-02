<script lang="ts">

	import GradientText from '../GradientText.svelte';
</script>

<nav class="space-x-4 max-sm:hidden">
	<a class="group btn btn-ghost text-xl" href="/#projects"
		><GradientText
			from="from-base-content group-hover:from-info"
			to="to-base-content group-hover:to-primary"
		>
			Projects</GradientText
		></a
	>
	<a class="group btn btn-ghost text-xl" href="/#aboutme"
		><GradientText
			from="from-base-content group-hover:from-accent"
			to="to-base-content group-hover:to-success"
		>
			About Me</GradientText
		></a
	>
	<a class="group btn btn-ghost text-xl" href="/#contact"
		><GradientText
			from="from-base-content group-hover:from-amber-500"
			to="to-base-content group-hover:to-warning"
		>
			Contact</GradientText
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
