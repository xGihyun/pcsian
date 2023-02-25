<script lang="ts">
	import { onMount } from 'svelte';
	import { Calendar } from '../../features';
	import { PUBLIC_END_POINT } from '$env/static/public';
	import type { Event } from '../../Types';

	let events: Event[];

	// Fetch data from Strapi
	onMount(async () => {
		try {
			const res = await fetch(PUBLIC_END_POINT);
			const { data } = await res.json();
			events = data;
		} catch (err) {
			console.error(`Failed to fetch from PUBLIC_END_POINT: ${err}`);
			console.log(`Trying to fetch from localhost...`);
			const res = await fetch('http://localhost:1337/api/calendars?populate=date');
			const { data } = await res.json();
			events = data;
		}
	});
</script>

{#if events}
	<Calendar {events} />
{/if}
