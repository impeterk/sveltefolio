<script lang="ts" setup>
	const styles = {
		teal: 'from-teal-600',
		indigo: 'to-indigo-600',
		cyan: 'from-cyan-600',
		fuchsia: 'to-fuchsia-600'
	};
	export let from: keyof typeof styles = 'teal';
	export let to: keyof typeof styles = 'indigo';
</script>

<span class={`bg-gradient-to-r bg-clip-text text-transparent ${styles[from]} ${styles[to]}`}>
	<slot /></span
>
