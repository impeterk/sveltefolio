<script lang="ts">
	import Icon from '@iconify/svelte';
	import SectionTitle from './SectionTitle.svelte';
	import { enhance } from '$app/forms';

	export let sending = false;
</script>

<section
	class="flex min-h-screen flex-col items-center justify-items-center gap-8 max-xl:mt-20 max-sm:mt-20 lg:grid lg:grid-cols-2 lg:content-center lg:items-start lg:gap-0 lg:gap-y-12"
>
	<SectionTitle from="from-orange-500" to="to-amber-500" font="font-sans" title="Contact Me" />
	<div class="col-span-1 col-start-1 self-center mt-8">
		<div class="article prose">
			<h3>Would you like to get in touch to collaborate on an exciting new project?</h3>
			<p>
				Maybe just want to leave a nice message? Maybe this page was not working for you at all ☹️
				#sad.<br />
				I am always interested in new oportunities 😉.
			</p>
			<p>
				<strong
					>I will get to back to you faster then <Icon
						icon="logos:solidjs-icon"
						class="mx-1 inline text-xl"
					/> Solid.js.
				</strong> <em>#developerJoke</em>
			</p>
			<p>Try to leave a message. - let's see if I have implemented this feature correctly</p>
			<p></p>
			<hr />
		</div>
	</div>
	
	<form
		action="/?/contact"
		method="POST"
		class="col-start-2 row-start-2 row-span-2 flex w-full max-w-sm flex-col items-center gap-4"
		use:enhance={() => {
			sending = true;

			return async ({ update }) => {
				await update();
				sending = false;
			};
		}}
	>
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Name</span>
			</div>
			<input
				name="name"
				type="text"
				placeholder="Type here"
				class="input input-bordered w-full"
				required
			/>
		</label>
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Email</span>
			</div>
			<input
				name="email"
				type="email"
				placeholder="Type here"
				class="input input-bordered w-full"
				required
			/>
		</label>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Message</span>
			</div>
			<textarea
				required
				class="textarea textarea-bordered"
				placeholder="Lorem ipsum dolor..."
				rows="6"
				name="message"
			></textarea>
		</label>
		<button class="btn btn-warning w-full self-end sm:w-1/2" disabled={sending} type="submit">
			{#if sending}
				<Icon icon="icomoon-free:spinner2" class="animate-spin text-2xl" />
			{:else}
				<Icon icon="fa:send-o" class="text-xl" />
				Send
			{/if}
		</button>
	</form>
	<div class="col-span-1 col-start-1 row-span-2 max-lg:mt-8">
		<span class="prose text-center"> <h3>There is always another option</h3></span>
		<div class="mt-8 flex items-center justify-evenly">
			<a
				href="http://github.com/impeterk"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-info"
			>
				<Icon icon="mdi:github" class="text-5xl" />
				Github
			</a>

			<a
				href="http://github.com/impeterk"
				target="_blank"
				rel="noopener noreferrer"
				class="flex flex-col items-center hover:text-info"
			>
				<Icon icon="mdi:linkedin" class="text-5xl" />
				LinkedIn
			</a>
		</div>
	</div>
</section>
