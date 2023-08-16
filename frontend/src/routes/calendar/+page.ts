import { CACHE_DURATION } from '$lib/constants';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ setHeaders, parent }) => {
	const { storyblokApi } = await parent();

	try {
		const dataStory = await storyblokApi.get('cdn/stories/', {
			version: 'published',
			starts_with: 'events/'
		});

		const { stories } = dataStory.data;

		// console.log('\nCONTENT IN CALENDAR: \n');
		// console.log(dataStory.data);

		setHeaders({ 'cache-control': `max-age${CACHE_DURATION}, must-revalidate` });

		const gradeSchoolEvents = stories.filter((story: any) => {
			return story.content.categories.includes('grade_school');
		});

		const juniorHighEvents = stories.filter((story: any) => {
			return story.content.categories.includes('junior_high');
		});

		const seniorHighEvents = stories.filter((story: any) => {
			return story.content.categories.includes('senior_high');
		});

		return {
			events: stories,
			gradeSchoolEvents,
			juniorHighEvents,
			seniorHighEvents
		};
	} catch (err) {
		throw new Error('Failed to fetch calendar events: ' + err);
	}
};
