<script lang="ts">
	import { Calendar } from '../../features';
	import type { EventMap } from '../../Types';

	export let data: EventMap;

	let events = data.data;
</script>

{#if events}
	<Calendar {events} />
{:else}
	<div>Loading... Try refreshing if it doesn't work.</div>
{/if}

<!-- {#await events}
	<div>Loading</div>
{:then events}
	<Calendar {events} />
{/await} -->
