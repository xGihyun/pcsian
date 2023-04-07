<script lang="ts">
	import { Calendar } from '../../features';
	import type { Event } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;

	const gradeSchool: Event[] = data.gradeSchool.data[0].attributes.calendars.data;
	const juniorHigh: Event[] = data.juniorHigh.data[0].attributes.calendars.data;
	const seniorHigh: Event[] = data.seniorHigh.data[0].attributes.calendars.data;

	// Default calendar to show
	let currentCalendar = 'Senior High';

	function handleNavigationClick(calendar: string) {
		currentCalendar = calendar;
	}

	const navigationItems = [
		{ name: 'Grade School' },
		{ name: 'Junior High' },
		{ name: 'Senior High' }
	];
</script>

<nav class="relative flex w-full items-center justify-center px-4 py-10">
	<ul class="flex h-full flex-row gap-8 text-xl">
		{#each navigationItems as item, idx (idx)}
			<li
				class={`text-base md:text-lg ${
					currentCalendar === item.name ? 'font-bold' : 'font-normal'
				}`}
			>
				<button on:click={() => handleNavigationClick(item.name)} type="button">{item.name}</button>
			</li>
		{/each}
	</ul>
</nav>

{#if currentCalendar === 'Grade School'}
	<Calendar events={gradeSchool} />
{:else if currentCalendar === 'Junior High'}
	<Calendar events={juniorHigh} />
{:else if currentCalendar === 'Senior High'}
	<Calendar events={seniorHigh} />
{/if}
