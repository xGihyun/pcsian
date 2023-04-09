<script lang="ts">
	import { ArrowClockwise } from '../../assets/icons';
	import { Calendar } from '../../features';
	import type { PageData } from './$types';

	export let data: PageData;

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

{#await data.streamed.gradeSchool}
	<div class="h-screen p-10 flex justify-center">
		<ArrowClockwise style="text-amber-500 h-40 w-40 animate-spin" />
	</div>
{:then events}
	{#if currentCalendar === 'Grade School'}
		<Calendar eventsData={events.data} />
	{/if}
{/await}
{#await data.streamed.juniorHigh}
	<div class="h-screen p-10 flex justify-center">
		<ArrowClockwise style="text-amber-500 h-40 w-40 animate-spin" />
	</div>
{:then events}
	{#if currentCalendar === 'Junior High'}
		<Calendar eventsData={events.data} />
	{/if}
{/await}
{#await data.streamed.seniorHigh}
	<div class="h-screen p-10 flex justify-center">
		<ArrowClockwise style="text-amber-500 h-40 w-40 animate-spin" />
	</div>
{:then events}
	{#if currentCalendar === 'Senior High'}
		<Calendar eventsData={events.data} />
	{/if}
{/await}


<!-- Will probably reduce repetition if possible -->
<!-- {#if currentCalendar === 'Grade School'}
	{#await data.streamed.gradeSchool}
		<div class="h-screen p-10 flex justify-center items-center">
			<ArrowClockwise style="text-amber-500 h-40 w-40 animate-spin" />
		</div>
	{:then events}
		<Calendar eventsData={events.data} />
	{/await}
{:else if currentCalendar === 'Junior High'}
	{#await data.streamed.juniorHigh}
	<div class="h-screen p-10 flex justify-center items-center">
		<ArrowClockwise style="text-amber-500 h-40 w-40 animate-spin" />
	</div>
	{:then events}
		<Calendar eventsData={events.data} />
	{/await}
{:else if currentCalendar === 'Senior High'}
	{#await data.streamed.seniorHigh}
	<div class="h-screen p-10 flex justify-center items-center">
		<ArrowClockwise style="text-amber-500 h-40 w-40 animate-spin" />
	</div>
	{:then events}
		<Calendar eventsData={events.data} />
	{/await}
{/if} -->