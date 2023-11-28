<script lang="ts">
	import 'iconify-icon';
	import Hero from '$lib/components/Hero.svelte';
	import * as config from '$lib/config';
	import Projects from '$lib/components/Projects.svelte';
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="description" content={config.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={config.url} />
	<meta property="og:title" content={config.title} />
	<meta property="og:description" content={config.description} />
</svelte:head>
<Hero />
<Projects />
