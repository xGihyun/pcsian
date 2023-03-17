<script lang="ts">
	import { Calendar } from '../../features';
	import type { Event } from '../../Types';
	import type { PageData } from './$types';

	export let data: PageData;

	const gradeSchool: Event[] = data.gradeSchool.data[0].attributes.calendars.data;
	const juniorHigh: Event[] = data.juniorHigh.data[0].attributes.calendars.data;
	const seniorHigh: Event[] = data.seniorHigh.data[0].attributes.calendars.data;

	// Default calendar to show
	let currentCalendar = 'Senior High';

	function handleNavigationClick(calendar: string){
		currentCalendar = calendar;
	};

	const navigationItems = [
		{ name: 'Grade School', calendar: gradeSchool },
		{ name: 'Junior High', calendar: juniorHigh },
		{ name: 'Senior High', calendar: seniorHigh },
	];
</script>

<nav class="flex w-full items-center justify-center py-10 px-4">
	<ul class="flex h-full flex-row gap-8 text-xl">
		{#each navigationItems as item, idx (idx)}
			<li class={`text-base md:text-lg ${currentCalendar === item.name ? 'font-bold' : 'font-normal'}`}>
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
{:else}
	<div class="flex justify-center h-screen">
		<h1 class="font-gt-walsheim-pro-medium text-3xl">
			Failed to fetch data, try refreshing!
		</h1>
	</div>
{/if}