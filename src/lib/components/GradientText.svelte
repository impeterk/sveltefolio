<script lang="ts" setup>
	export let from: string = 'from-accent';
	export let to: string = 'to-info';
</script>

<span class={`bg-gradient-to-r bg-clip-text text-transparent ${from} ${to}`}> <slot /></span>
