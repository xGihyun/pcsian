<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	export let url: URL;
</script>

{#key url}
	<div in:fly={{ x: -200, duration: 1000, delay: 300, easing: cubicOut }}>
		<slot />
	</div>
{/key}
