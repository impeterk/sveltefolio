<script lang="ts">
import { GradientText } from '..';
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
        <a class="btn btn-ghost text-2xl" href="/" on:click={() => handleDrawer()}>
            <GradientText from="from-info" to="to-primary">Home </GradientText> <Icon icon="mdi:home-outline" class="text-4xl text-primary"/> 
        </a>
    </li>
    <li>
        <a class="btn btn-ghost text-2xl" href="/blog" on:click={() => handleDrawer()}>
            <GradientText from="from-fuchsia-500" to="to-secondary">blog</GradientText>
            <Icon icon="mdi:blog-outline" class="text-4xl text-secondary"/> 

        </a>
    </li>