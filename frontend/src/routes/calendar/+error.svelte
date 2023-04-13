<!-- <div class="bg-white h-screen">
  <p class="text-black text-3xl text-center">An error occured, try refreshing!</p>
</div> -->

<script lang="ts">
	import { Calendar } from '../../features';

	let eventsData = [
		{
			id: 1,
			attributes: {
				createdAt: 'date',
				updatedAt: 'date',
				publishedAt: 'date',
				calendars: {
					data: [
						{
							id: 1,
							attributes: {
								title: 'Error!',
								type: 'holiday',
								createdAt: 'date',
								updatedAt: 'date',
								publishedAt: 'date',
								date: {
									id: 1,
									start: '2023-02-22',
									end: '2023-02-22'
								}
							}
						}
					]
				}
			}
		}
	];
</script>

<Calendar {eventsData} />
