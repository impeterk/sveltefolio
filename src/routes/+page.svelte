<script lang="ts">
	import { Hero, Projects, AboutMe, Contact } from '$lib/components';
	import * as config from '$lib/config';
	import {fade} from "svelte/transition"

	export let form
	let success = false
	let error = false
	$: if (form?.success) {
		success = true
		setTimeout(() => {
			success = false
		},3000)
	}

	$: if (form?.error) {
		error = true
		setTimeout(() => {
			error = false
		},3000)
	}
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
<AboutMe />
<Contact />

<!-- contact form related -->
<div class="toast toast-top toast-center">
	{#if success}
	<div class="alert alert-success" in:fade out:fade>
		<span>Message sent successfully.</span>
	</div>
	{/if}

	
	{#if error}
	<div class="alert alert-error" in:fade out:fade>
		<span>There was an error.</span>
	</div>
	{/if}
  </div>