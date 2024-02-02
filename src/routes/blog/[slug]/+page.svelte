<script lang="ts">
    export let data
</script>


<!-- SEO -->
<svelte:head>
	<title>{data.meta.title} - Web Dev Journey | Peter Kudeláš</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="mt-40 grid w-full">
  <!-- Title -->
	<hgroup >
		<h1 class="text-4xl lg:text-7xl font-bold">{data.meta.title}</h1>
        <div class="flex gap-2 my-4 items-center">
            <!-- Tags -->
            {#each data.meta.categories as category}
            <span class="bg-base-100 text-accent px-2 py-1 rounded-lg">&num;{category}</span>
            {/each}
            <div class="divider divider-horizontal hidden md:flex"></div>
            <p class="ml-auto md:ml-0">{data.meta.date}</p>
        </div>
	</hgroup>
    <div class="card card-side bg-neutral w-full max-w-4xl mx-auto my-12 shadow-xl">
    <enhanced:img src={data.heroImage} alt="heroimage" class="card card-side "/>
</div>
    <!-- image -->

    <hr />

  <!-- Post -->
	<div class="prose xl:prose-xl my-20 justify-self-center w-full ">
		<svelte:component this={data.content} />
	</div>
</article>