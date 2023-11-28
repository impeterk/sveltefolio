<script lang="ts" setup>
	export let from: string = 'from-info';
	export let via: string = '';
	export let to: string = 'to-primary';
</script>

<span class={`bg-gradient-to-r bg-clip-text text-transparent ${from} ${via} ${to}`}> <slot /></span>
