<script lang="ts">
	import GradientText from "../GradientText.svelte";

    let y: number = 0
	function scrollAboveAnchor() {
		if (window.innerWidth > 1280) return

		window.scrollTo(window.scrollX, window.scrollY - 75);
	}
</script>

<svelte:window bind:scrollY={y} on:hashchange={() => scrollAboveAnchor()}/>

<header 
class="fixed top-0 left-0 w-full z-50 bg-opacity-90 transition-all duration-500 text-base-content backdrop-blur shadow-sm xl" 
class:bg-base-300={y > 30}
>
	<div class="navbar px-8 max-w-7xl mx-auto">
        <div class="navbar-start">
        </div>
		<div class="navbar-center gap-4">
			<a class="btn btn-ghost text-xl" href="#projects"><GradientText from="from-base-content hover:from-info" to="to-base-content hover:to-primary"> Projects</GradientText></a>
			<a class="btn btn-ghost text-xl" href="#aboutme"><GradientText from="from-base-content hover:from-accent" to="to-base-content hover:to-success"> About Me</GradientText></a>
			<a class="btn btn-ghost text-xl" href="#contact"><GradientText from="from-base-content hover:from-amber-500" to="to-base-content hover:to-warning"> Contact</GradientText></a>
		</div>
        <div class="navbar-end">
            <a class="btn btn-ghost text-xl hover:underline underline-offset-4 decoration-primary" href="https://now.peterKudelas.eu">Now</a>

        </div>
	</div>
</header>
