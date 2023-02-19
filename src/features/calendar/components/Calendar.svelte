<script lang="ts">
	import {
		eachDayOfInterval,
		format,
		startOfToday,
		endOfMonth,
		parse,
		add,
		getDay,
		isEqual,
		isToday,
		isSameMonth,
		endOfWeek,
		startOfWeek
	} from 'date-fns';

	let today = startOfToday();
	let selectedDay = today;
	let currentMonth = format(today, 'MMM-yyyy');
	let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
	let firstDayNextMonth: Date;

	let days = eachDayOfInterval({
		start: startOfWeek(firstDayCurrentMonth),
		end: endOfWeek(endOfMonth(firstDayCurrentMonth))
	});

	function previousMonth() {
		firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
		currentMonth = format(firstDayNextMonth, 'MMM-yyyy');
		firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
		days = eachDayOfInterval({
			start: startOfWeek(firstDayCurrentMonth),
			end: endOfWeek(endOfMonth(firstDayCurrentMonth))
		});
	}

	function nextMonth() {
		firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
		currentMonth = format(firstDayNextMonth, 'MMM-yyyy');
		firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
		days = eachDayOfInterval({
			start: startOfWeek(firstDayCurrentMonth),
			end: endOfWeek(endOfMonth(firstDayCurrentMonth))
		});
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
	<div class="mx-auto max-w-md px-4 sm:px-7 md:max-w-4xl md:px-6">
		<div class="md:grid md:divide-x md:divide-gray-200">
			<div class="md:pr-14">
				<div class="flex items-center">
					<h2 class="flex-auto text-white">
						{format(firstDayCurrentMonth, 'MMMM yyyy')}
					</h2>
					<button
						type="button"
						on:click={previousMonth}
						class="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
					>
						<span class="sr-only">Previous month</span>
						<span class="h-5 w-5 text-3xl" aria-hidden="true">{'<'}</span>
					</button>
					<button
						on:click={nextMonth}
						type="button"
						class="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
					>
						<span class="sr-only">Next month</span>
						<span class="h-5 w-5 text-3xl" aria-hidden="true">{'>'}</span>
					</button>
				</div>
				<div
					class="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-neutral-200 md:text-xl"
				>
					<div>Sun</div>
					<div>Mon</div>
					<div>Tue</div>
					<div>Wed</div>
					<div>Thu</div>
					<div>Fri</div>
					<div>Sat</div>
				</div>
				<div class="mt-2 grid grid-cols-7 text-sm">
					{#each days as day, idx (day.toString())}
						<div
							class={`relative border-[2px] border-white border-opacity-10 py-[25%] pl-1 text-xs md:pl-2 md:text-xl ${
								idx === 0 && colStartClasses[getDay(day)]
							}`}
						>
							<!-- <span class="h-10 w-10 bg-white absolute"></span> -->
							<button
								type="button"
								on:click={() => (selectedDay = day)}
								class={`flex h-4 w-4 items-center justify-center rounded-full p-1 md:h-8 md:w-8 ${
									isEqual(day, selectedDay)
										? 'text-black'
										: !isEqual(day, selectedDay) && isToday(day)
										? 'text-amber-500'
										: !isEqual(day, selectedDay) &&
										  !isToday(day) &&
										  isSameMonth(day, firstDayCurrentMonth)
										? 'text-neutral-500'
										: !isEqual(day, selectedDay) &&
										  !isToday(day) &&
										  !isSameMonth(day, firstDayCurrentMonth) &&
										  'text-neutral-600'
								}
									${
										isEqual(day, selectedDay) && isToday(day)
											? 'bg-amber-500 text-white'
											: isEqual(day, selectedDay) && !isToday(day)
											? 'bg-neutral-200'
											: !isEqual(day, selectedDay)
											? 'hover:bg-neutral-200'
											: isEqual(day, selectedDay) || (isToday(day) && 'font-semibold')
									}`}
							>
								<time dateTime={format(day, 'yyyy-MM-dd')}>
									{format(day, 'd')}
								</time>
							</button>
							<!-- <div class="w-1 h-1 mx-auto mt-1">
                {meetings.some((meeting) =>
                  isSameDay(parseISO(meeting.startDatetime), day)
                ) && (
                  <div class="w-1 h-1 rounded-full bg-sky-500"></div>
                )}
              </div> -->
						</div>
					{/each}
				</div>
			</div>
			<!-- <section class="mt-12 md:mt-0 md:pl-14">
				<h2 class="font-semibold text-gray-900">
					Schedule for{' '}
					<time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
						{format(selectedDay, 'MMM dd, yyy')}
					</time>
				</h2>
				<ol class="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {selectedDayMeetings.length > 0 ? (
            selectedDayMeetings.map((meeting) => (
              <Meeting meeting={meeting} key={meeting.id} />
            ))
          ) : (
            <p>No meetings for today.</p>
          )}
        </ol>
			</section> -->
		</div>
	</div>
</div>
