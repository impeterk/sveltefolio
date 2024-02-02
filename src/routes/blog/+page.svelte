<script lang="ts">
	import GradientText from '$lib/components/GradientText.svelte';
	export let data;
    $: console.log(data)
</script>

<section class="mt-40">
	<div class="prose lg:prose-lg xl:prose-xl">
		<h1><GradientText>Web Dev Journey</GradientText></h1>
		<h3>My journey through out web develepoment</h3>
	</div>
	<ul class="mt-40">
		{#each data.posts as post}
			<li class="flex flex-col md:flex-row gap-8 rounded-lg bg-base-300 p-4 md:p-8 shadow-lg shadow-neutral">
				<a href="/blog/{post.slug}" class="flex justify-center">
					{#await import(`/${post.image}?enhanced`) then src}
						<enhanced:img
							src={src.default}
							alt="project"
							loading="lazy"
							class="aspect-video w-full max-w-2xl rounded-xl border border-primary bg-neutral p-2"
						/>
					{/await}
				</a>
				<div class="inline-flex flex-col w-full">
					<div class="space-y-2">
						<a href="/blog/{post.slug}" class="card-title text-3xl">{post.title}</a>
						<div class="flex items-center gap-2">
							{#each post.categories as category}
								<p class="rounded-lg bg-base-100 px-3 py-1 text-accent">{category}</p>
							{/each}
						</div>
						<p class="text-sm">{post.date}</p>
					</div>
					<hr />
                    <div class="prose">
					<p>{@html post.description}</p>
                </div>
				</div>
			</li>
		{/each}
	</ul>
</section>

