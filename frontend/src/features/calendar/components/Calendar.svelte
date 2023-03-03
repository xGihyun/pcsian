<script lang="ts">
	import {
		eachDayOfInterval,
		format,
		startOfToday,
		endOfMonth,
		parse,
		add,
		getDay,
		isToday,
		isSameMonth,
		endOfWeek,
		startOfWeek,
		isEqual
	} from 'date-fns';
	import type { Event } from '../../../Types';
	import { ChevronLeft, ChevronRight } from '../assets/icons';

	export let events: Event[];

	let today = startOfToday();
	let currentMonth = format(today, 'MMM-yyyy');
	let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

	let days = eachDayOfInterval({
		start: startOfWeek(firstDayCurrentMonth),
		end: endOfWeek(endOfMonth(firstDayCurrentMonth))
	});

	function navigateMonth(direction: number) {
		const firstDayNextMonth = add(firstDayCurrentMonth, { months: direction });
		const currentMonth = format(firstDayNextMonth, 'MMM-yyyy');
		firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
		days = eachDayOfInterval({
			start: startOfWeek(firstDayCurrentMonth),
			end: endOfWeek(endOfMonth(firstDayCurrentMonth))
		});
	}

	// Get dates in between the start and end of an event
	function getDates(startDate: string, endDate: string) {
		const dates = [];
		let currentDate = new Date(startDate);
		let end = new Date(endDate);

		while (currentDate <= end) {
			dates.push(format(new Date(currentDate), 'yyyy-MM-dd'));
			currentDate.setDate(currentDate.getDate() + 1);
		}

		return dates;
	}

	// Group the events by date
	const eventsByDate = new Map<string, Event[]>();

	events.forEach((event) => {
		const dates = getDates(event.attributes.date.start, event.attributes.date.end);
		dates.forEach((date) => {
			if (!eventsByDate.has(date)) {
				eventsByDate.set(date, []);
			}
			eventsByDate.get(date)?.push(event);
		});
	});

	let clickedDay = today;
	let clickedDayFormat: string;

	function handleDateClick(date: string) {
		const event = eventsByDate.get(date) as Event[];

		return event;
	}

	const colStartClasses = [
		'',
		'col-start-2',
		'col-start-3',
		'col-start-4',
		'col-start-5',
		'col-start-6',
		'col-start-7'
	];
</script>

<!-- The actual calendar -->
<div class="mx-auto max-w-md py-10 px-4 md:max-w-5xl">
	<!-- Navigate between months -->
	<div class="flex items-center">
		<h2 class="flex-auto text-2xl text-black">
			{format(firstDayCurrentMonth, 'MMMM yyyy')}
		</h2>
		<button
			type="button"
			on:click={() => navigateMonth(-1)}
			class="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
		>
			<ChevronLeft style="h-5 w-5 cursor-pointer" />
		</button>
		<button
			on:click={() => navigateMonth(1)}
			type="button"
			class="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
		>
			<ChevronRight style="h-5 w-5 cursor-pointer" />
		</button>
	</div>
	<!-- Days of the week -->
	<div class="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-black md:text-xl">
		<div>Sun</div>
		<div>Mon</div>
		<div>Tue</div>
		<div>Wed</div>
		<div>Thu</div>
		<div>Fri</div>
		<div>Sat</div>
	</div>
	<!-- Dates -->
	<div class="mt-2 grid h-full grid-cols-7 text-sm">
		{#each days as day, dayIdx (day.toString())}
			{#if eventsByDate.has(format(day, 'yyyy-MM-dd'))}
				{#each eventsByDate.get(format(day, 'yyyy-MM-dd')) || [] as event, eventIdx (eventIdx)}
					<button
						class={`relative h-full border-t-[1px] border-opacity-50 bg-orange-500 bg-opacity-20 text-xs transition-all duration-300 hover:bg-orange-200 md:min-h-[100px] md:bg-white md:text-xl ${
							dayIdx === 0 && colStartClasses[getDay(day)]
						} `}
						on:click={() => {
							clickedDay = day;
							clickedDayFormat = format(day, 'yyyy-MM-dd');
						}}
					>
						<div class="flex h-full flex-col items-center md:items-start">
							<!-- Check if there is an event -->
							<div
								class={`m-2 flex h-4 w-4 items-center justify-center rounded-full p-3 md:h-8 md:w-8 
								${isToday(day) ? 'bg-amber-500 text-white' : ''} ${
									isSameMonth(day, firstDayCurrentMonth) ? 'text-neutral-900' : 'text-neutral-400'
								}`}
							>
								<time dateTime={format(day, 'yyyy-MM-dd')}>
									{format(day, 'd')}
								</time>
							</div>
							<!-- Check for the start of an event and add some custom styling to it -->
							{#if isEqual(day, parse(getDates(event.attributes.date.start, event.attributes.date.end)[0], 'yyyy-MM-dd', new Date())) || 'Sunday' === format(day, 'EEEE') || isEqual(day, days[0])}
								<div
									class={`mt-1 hidden h-full border-l-8 border-orange-500 bg-neutral-300 px-1 md:block ${
										getDates(event.attributes.date.start, event.attributes.date.end).length === 1 ||
										'Sunday' === format(day, 'EEEE')
											? 'w-[95%] rounded-r-md'
											: 'w-full'
									}`}
								>
									<span class="inline-block w-full overflow-hidden text-ellipsis text-start text-lg"
										>{event.attributes.title}</span
									>
								</div>
							{:else}
								<div
									class={`mt-1 hidden h-full bg-neutral-300 md:block ${
										isEqual(
											day,
											parse(
												getDates(event.attributes.date.start, event.attributes.date.end)[
													getDates(event.attributes.date.start, event.attributes.date.end).length -
														1
												],
												'yyyy-MM-dd',
												new Date()
											)
										) || 'Saturday' === format(day, 'EEEE')
											? 'w-[95%] rounded-r-md'
											: 'w-full'
									}`}
								>
									<span class="invisible inline-block w-full overflow-hidden text-ellipsis text-lg"
										>{event.attributes.title}</span
									>
								</div>
							{/if}
						</div>
					</button>
				{/each}
			{:else}
				<button
					class={`relative h-full border-t-[1px] border-opacity-50 text-xs transition-all duration-300 hover:bg-neutral-200 md:min-h-[100px] md:text-xl ${
						dayIdx === 0 && colStartClasses[getDay(day)]
					} `}
					on:click={() => {
						clickedDay = day;
						clickedDayFormat = format(day, 'yyyy-MM-dd');
					}}
				>
					<div class="flex h-full flex-col items-center md:items-start">
						<div
							class={`m-2 flex h-4 w-4 items-center justify-center rounded-full p-3 md:h-8 md:w-8 
						${isToday(day) ? 'bg-amber-500 text-white' : ''} ${
								isSameMonth(day, firstDayCurrentMonth) ? 'text-neutral-900' : 'text-neutral-400'
							}`}
						>
							<time dateTime={format(day, 'yyyy-MM-dd')}>
								{format(day, 'd')}
							</time>
						</div>
					</div>
				</button>
			{/if}
		{/each}
	</div>
</div>

<!-- Show the events for today or the clicked date -->
<div
	class="mx-auto flex h-full min-h-[14rem] max-w-md flex-col gap-4 py-10 px-4 md:min-h-[20rem] md:max-w-5xl"
>
	<h2 class="font-torus-semibold text-center text-2xl md:text-5xl">
		Events for {format(clickedDay, 'MMMM d, yyyy')}
	</h2>
	{#if handleDateClick(clickedDayFormat)}
		<div class="flex flex-row items-baseline">
			<h2 class="font-torus-semibold text-2xl md:text-5xl">What:</h2>
			<span class="pl-4 text-xl md:text-4xl"
				>{handleDateClick(clickedDayFormat)[0].attributes.title}</span
			>
		</div>
		<div class="flex flex-row items-baseline">
			<h2 class="font-torus-semibold text-2xl md:text-5xl">When:</h2>
			<span class="pl-4 text-xl md:text-4xl"
				>{handleDateClick(clickedDayFormat)[0].attributes.date.start}</span
			>
			<span class="pl-4 text-xl md:text-4xl"
				>{handleDateClick(clickedDayFormat)[0].attributes.date.end}</span
			>
		</div>
	{:else}
		<span class="text-center">No events for {format(clickedDay, 'MMMM d, yyyy')}</span>
	{/if}
</div>
