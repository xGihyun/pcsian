<script lang="ts">
	import { Calendar } from '../../features';
	import type { EventMap } from '../../Types';

	export let data: EventMap;

	let events = data.data;
</script>

{#if events}
	<Calendar {events} />
{/if}
