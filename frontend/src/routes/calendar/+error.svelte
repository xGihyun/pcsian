<!-- <div class="bg-white h-screen">
  <p class="text-black text-3xl text-center">An error occured, try refreshing!</p>
</div> -->

<script lang="ts">
	import { Calendar } from '../../features';

	let events = [
		{
			attributes: {
				createdAt: 'a',
				date: {
					end: '2023-04-01',
					id: 1,
					start: '2023-03-27'
				},
				publishedAt: 'a',
				title: 'Event',
				type: 'senior-high',
				updatedAt: 'a'
			},
			id: 1,
			color: ''
		}
	];
</script>

<Calendar {events} />