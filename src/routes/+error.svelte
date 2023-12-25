<script>
	import { page } from '$app/stores';

	const {
		status,
        // @ts-ignore
        error: {message},
	} = $page;
	const title = `${status} ${message}`
</script>
<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="section flex flex-col items-center justify-center prose mx-auto mt-20 text-center">
<h1>Oopsie daisy</h1>
<enhanced:img src="$lib/assets/404.webp" alt="lego figurine holding disconnected power line" />
<h2>Something went wrong 🤔
<a href="/" class="btn btn-success text-success-content">Return to Homepage</a>
</h2>
</div>