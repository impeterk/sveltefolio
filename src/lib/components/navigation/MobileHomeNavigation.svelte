<script lang="ts">
import { GradientText } from '../';
import Icon from '@iconify/svelte';
	import { browser } from '$app/environment';

	let drawer: HTMLInputElement;
	$: if (browser) {
		drawer = document.querySelector('#my-drawer') as HTMLInputElement;
	}

	function handleDrawer() {
		drawer.checked = false;
	}
</script>


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
    <li>
        <a class="btn btn-ghost text-2xl" href="/blog" on:click={() => handleDrawer()}>
            <GradientText from="from-fuchsia-500" to="to-secondary">blog</GradientText>
            <Icon icon="mdi:blog-outline" class="text-4xl text-secondary"/> 

        </a>
    </li>