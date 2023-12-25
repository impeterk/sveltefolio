<script lang="ts">
	import { Hero, Projects, AboutMe, Contact } from '$lib/components';
	import * as config from '$lib/config';
	import { fade } from 'svelte/transition';

	export let form;
	let success = false;
	let error = false;
	$: if (form?.success) {
		success = true;
		setTimeout(() => {
			success = false;
		}, 3000);
	}

	$: if (form?.error) {
		error = true;
		setTimeout(() => {
			error = false;
		}, 3000);
	}
</script>

<svelte:head>
	<title>{config.title}</title>
	<link rel=”canonical” href={config.url} />
	<meta name="description" content={config.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={config.url} />
	<meta property="og:title" content={config.title} />
	<meta property="og:description" content={config.description} />
	<script type="application/ld+json">
		{
		  "@context": "https://schema.org/",
		  "@type": "Person",
		  "name": "Peter Kudelas",
		  "url": "https://www.peterkudelas.eu",
		  "image": "https://www.peterkudelas.eu/_app/immutable/assets/AboutMeNoBg.b4573aac.avif",
		  "sameAs": [
			"https://linkedin.com/in/impeterk",
			"https://github.com/impeterk",
			"https://www.peterkudelas.eu"
		  ]  
		}
		</script>
		<script type="application/ld+json">
			{
			  "@context": "https://schema.org/",
			  "@type": "WebSite",
			  "name": "Peter Kudelas",
			  "url": "https://www.peterkudelas.eu",
			  "potentialAction": {
				"@type": "SearchAction",
				"target": "{search_term_string}",
				"query-input": "required name=search_term_string"
			  }
			}
			</script>
			<meta property="og:image" content={`${config.url}/og_image.png`}>
			<meta property="og:image:width" content="1200">
			<meta property="og:image:height" content="630">
			<meta property="og:image:type" content="image/png">
			<meta name="twitter:card" content="summary_large_image">
			<meta name="twitter:image:src" content={`${config.url}/og_image.png`}>
			<meta name="twitter:image:width" content="1200">
			<meta name="twitter:image:height" content="630">
</svelte:head>
<Hero />
<Projects />
<AboutMe />
<Contact />

<!-- contact form related -->
<div class="toast toast-center toast-top z-[100]">
	{#if success}
	<div class="alert alert-success" in:fade out:fade>
		<span>Message have been send successfully 🎉</span>
	</div>
	
	{/if}
	
	{#if error}
	<div class="alert alert-error" in:fade out:fade>
		<span>Oopsie daisy! It worked on My Machine ☹️</span>
	</div>
	{/if}
</div>
