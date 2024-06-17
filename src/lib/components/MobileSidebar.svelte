<script lang="ts">
	import { GradientText } from './';
import Icon from '@iconify/svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	let drawer: HTMLInputElement;
	$: if (browser) {
		drawer = document.querySelector('#my-drawer') as HTMLInputElement;
	}

	function handleDrawer() {
		drawer.checked = false;
	}
	
</script>

<nav class="drawer-side z-40" id="sidebar">
	<label for="my-drawer" class="drawer-overlay"></label>
	<aside class="flex h-full w-2/3 flex-col justify-center bg-base-200">
		<ul class="menu gap-4 mt-auto">
			<li>
				<a class="btn btn-ghost text-2xl" href="/#projects" on:click={() => handleDrawer()}>
					<GradientText from="from-info" to="to-primary">Projects </GradientText> <Icon icon="mdi:code" class="text-4xl text-primary"/> 
				</a>
			</li>
			<li>
				<a class="btn btn-ghost text-2xl" href="/#aboutme" on:click={() => handleDrawer()}>
					<GradientText from="from-accent" to="to-success">About Me</GradientText>
                    <Icon icon="mdi:account" class="text-4xl text-success"/> 
				</a>
			</li>
			<li>
				<a class="btn btn-ghost text-2xl" href="/#contact" on:click={() => handleDrawer()}>
					<GradientText from="from-amber-500" to="to-warning">Contact</GradientText>
                    <Icon icon="mdi:at" class="text-4xl text-warning"/> 

				</a>
			</li>
		</ul>
        <div class="mt-auto text-center mb-10">
            <a
                class="btn btn-ghost text-2xl decoration-primary underline-offset-4 hover:underline "
                href={`${$page.url.protocol}//now.${$page.url.hostname}`}
            >
                Now
                <Icon icon="mdi:calendar-clock" class="text-4xl "/> 

            </a>
        </div>
	</aside>
</nav>

<style>
    .menu li a {
        display: grid;
        grid-template-columns: 1fr auto;
    }
</style>