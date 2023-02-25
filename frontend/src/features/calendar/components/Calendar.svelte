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

<div class="pt-16">
	<div class="mx-auto max-w-md px-4 sm:px-7 md:max-w-5xl md:px-6">
		<div class="md:grid md:divide-x md:divide-gray-200">
			<div class="md:pr-14">
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
				<div class="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-black md:text-xl">
					<div>Sun</div>
					<div>Mon</div>
					<div>Tue</div>
					<div>Wed</div>
					<div>Thu</div>
					<div>Fri</div>
					<div>Sat</div>
				</div>
				<div class="mt-2 grid h-full grid-cols-7 text-sm">
					{#each days as day, idx (day.toString())}
						<div
							class={`relative h-full border-y-[1px] border-opacity-50 text-xs md:min-h-[100px] md:text-xl ${
								idx === 0 && colStartClasses[getDay(day)]
							} `}
						>
							<div class="flex h-full flex-col">
								<div
									class={`flex h-4 w-4 items-center justify-center rounded-full p-1 md:h-8 md:w-8 
										${isToday(day) ? 'bg-amber-500 text-white' : ''} ${
										isSameMonth(day, firstDayCurrentMonth) ? 'text-neutral-900' : 'text-neutral-400'
									}`}
								>
									<time dateTime={format(day, 'yyyy-MM-dd')}>
										{format(day, 'd')}
									</time>
								</div>
								{#each events as event, idx (idx)}
									<!-- Check for available events -->
									{#if getDates(event.attributes.date.start, event.attributes.date.end).includes(format(day, 'yyyy-MM-dd'))}
										<!-- Check for the start of an event and add some custom styling to it -->
										{#if isEqual(day, parse(getDates(event.attributes.date.start, event.attributes.date.end)[0], 'yyyy-MM-dd', new Date())) || 'Sunday' === format(day, 'EEEE') || isEqual(day, days[0])}
											<div
												class={`my-1 mx-1 h-full border-l-8 border-red-500 bg-neutral-300 px-1 ${
													getDates(event.attributes.date.start, event.attributes.date.end)
														.length === 1
														? 'w-[95%] rounded-r-md'
														: 'w-full'
												}`}
											>
												<span class="inline-block w-full overflow-hidden text-ellipsis text-lg"
													>{event.attributes.title}</span
												>
											</div>
										{:else}
											<div
												class={`my-1 h-full bg-neutral-300 ${
													isEqual(
														day,
														parse(
															getDates(event.attributes.date.start, event.attributes.date.end)[
																getDates(event.attributes.date.start, event.attributes.date.end)
																	.length - 1
															],
															'yyyy-MM-dd',
															new Date()
														)
													)
														? 'w-[95%] rounded-r-md'
														: 'w-full'
												}`}
											>
												<span
													class="invisible inline-block w-full overflow-hidden text-ellipsis text-lg"
													>{event.attributes.title}</span
												>
											</div>
										{/if}
									{/if}
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
