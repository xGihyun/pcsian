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

	// Sort array based on the difference between the start and end
	events.sort((a: Event, b: Event) => {
		const aDateDiff =
			new Date(a.attributes.date.end).getTime() - new Date(a.attributes.date.start).getTime();
		const bDateDiff =
			new Date(b.attributes.date.end).getTime() - new Date(b.attributes.date.start).getTime();

		return bDateDiff - aDateDiff;
	});

	// Group the sorted events by date
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
<div
	class="shadow-calendar mx-auto max-w-md xl:rounded-lg bg-white py-6 px-4 md:max-w-6xl md:py-10 md:px-20"
>
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
			<!-- If there is an event -->
			{#if eventsByDate.has(format(day, 'yyyy-MM-dd'))}
				<!-- Get all events for that day -->
				<!-- Loop over from the start date to the end date of that event -->
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
						{#each eventsByDate.get(format(day, 'yyyy-MM-dd')) || [] as event, eventIdx (eventIdx)}
							<!-- Check if there is an event -->
							<!-- Check for the start of an event and add some custom styling to it -->
							{#if isEqual(day, parse(getDates(event.attributes.date.start, event.attributes.date.end)[0], 'yyyy-MM-dd', new Date())) || 'Sunday' === format(day, 'EEEE') || isEqual(day, days[0])}
								<div
									class={`mt-1 hidden h-14 border-l-8 border-orange-500 bg-neutral-300 px-1 md:block ${
										// If event only lasts for a day
										getDates(event.attributes.date.start, event.attributes.date.end).length === 1 ||
										// If it's the last element
										event.attributes.date.end === format(day, 'yyyy-MM-dd')
											? 'w-[95%] rounded-r-md'
											: 'w-full'
									}`}
								>
									<span
										class="inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap text-start text-lg"
										>{event.attributes.title}</span
									>
								</div>
							{:else}
								<div
									class={`mt-1 hidden h-14 bg-neutral-300 px-1 md:block ${
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
									<span
										class="invisible inline-block w-full overflow-hidden text-ellipsis text-start text-lg"
										>{event.attributes.title}</span
									>
								</div>
							{/if}
						{/each}
					</div>
				</button>
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
<div class="h-full min-h-[14rem] py-10 px-4 md:min-h-[20rem]">
	<div class="mx-auto flex max-w-md flex-col gap-4 md:max-w-5xl">
		<h2 class="text-center text-2xl font-bold md:text-5xl">
			Events for {format(clickedDay, 'MMMM d, yyyy')}
		</h2>
		{#if handleDateClick(clickedDayFormat)}
			<div class="flex flex-col justify-center">
				<div class="flex w-full items-center border-neutral-200 p-4">
					<h2 class="mb-4 w-1/2 text-center text-xl font-bold md:text-3xl">What:</h2>
					<h2 class="mb-4 w-1/2 text-center text-xl font-bold md:text-3xl">When:</h2>
				</div>
				{#each handleDateClick(clickedDayFormat) as event}
					<div class="flex w-full items-baseline border-neutral-200 gap-4">
						<span class="w-1/2 text-lg md:text-xl">{event.attributes.title}</span>
						<div class="w-1/2">
							<div class="text-lg md:text-xl">
								{#if event.attributes.date.start === event.attributes.date.end}
									<span>{format(new Date(event.attributes.date.start), 'MMMM d, yyyy')}</span>
								{:else}
									<span>{format(new Date(event.attributes.date.start), 'MMMM d, yyyy')}</span> -
									<span>{format(new Date(event.attributes.date.end), 'MMMM d, yyyy')}</span>
								{/if}
							</div>
						</div>
					</div>
					<hr class="my-2 border-neutral-200" />
				{/each}
			</div>
		{:else}
			<span class="text-center">No events for {format(clickedDay, 'MMMM d, yyyy')}</span>
		{/if}
	</div>
</div>
