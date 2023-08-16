<script lang="ts">
	import { ArrowClockwise } from '../../assets/icons';
	import { Calendar } from '../../features';

	export let data;

	type CalendarCategory = 'senior_high' | 'junior_high' | 'grade_school';

	$: ({ seniorHighEvents, juniorHighEvents, gradeSchoolEvents } = data);

	// Default calendar to show
	let currentCalendar: CalendarCategory = 'senior_high';

	function handleNavigationClick(calendar: CalendarCategory) {
		currentCalendar = calendar;
	}

	const navigationItems: { name: string; value: CalendarCategory }[] = [
		{ name: 'Grade School', value: 'grade_school' },
		{ name: 'Junior High', value: 'junior_high' },
		{ name: 'Senior High', value: 'senior_high' }
	];
</script>

<nav class="relative flex w-full items-center justify-center px-4 py-10">
	<ul class="flex h-full flex-row gap-8 text-xl">
		{#each navigationItems as item, idx (idx)}
			<li
				class={`text-base md:text-lg ${
					currentCalendar === item.value ? 'font-bold' : 'font-normal'
				}`}
			>
				<button on:click={() => handleNavigationClick(item.value)} type="button">{item.name}</button
				>
			</li>
		{/each}
	</ul>
</nav>

{#if currentCalendar === 'grade_school'}
	<Calendar events={gradeSchoolEvents} />
{:else if currentCalendar === 'junior_high'}
	<Calendar events={juniorHighEvents} />
{:else if currentCalendar === 'senior_high'}
	<Calendar events={seniorHighEvents} />
{/if}
<!-- {#await data.streamed.gradeSchool} -->
<!-- 	<div class="h-screen p-10 flex justify-center"> -->
<!-- 		<ArrowClockwise style="text-amber-500 h-40 w-40 animate-spin" /> -->
<!-- 	</div> -->
<!-- {:then events} -->
<!-- 	{#if currentCalendar === 'Grade School'} -->
<!-- 		<Calendar eventsData={events.data} /> -->
<!-- 	{/if} -->
<!-- {/await} -->
<!-- {#await data.streamed.juniorHigh} -->
<!-- 	<div class="h-screen p-10 flex justify-center"> -->
<!-- 		<ArrowClockwise style="text-amber-500 h-40 w-40 animate-spin" /> -->
<!-- 	</div> -->
<!-- {:then events} -->
<!-- 	{#if currentCalendar === 'Junior High'} -->
<!-- 		<Calendar eventsData={events.data} /> -->
<!-- 	{/if} -->
<!-- {/await} -->
<!-- {#await data.streamed.seniorHigh} -->
<!-- 	<div class="h-screen p-10 flex justify-center"> -->
<!-- 		<ArrowClockwise style="text-amber-500 h-40 w-40 animate-spin" /> -->
<!-- 	</div> -->
<!-- {:then events} -->
<!-- 	{#if currentCalendar === 'Senior High'} -->
<!-- 		<Calendar eventsData={events.data} /> -->
<!-- 	{/if} -->
<!-- {/await} -->

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
