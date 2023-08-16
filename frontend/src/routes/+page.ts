import { CACHE_DURATION } from '$lib/constants';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, setHeaders }) => {
	const { storyblokApi } = await parent();

	try {
		const dataStory = await storyblokApi.get('cdn/stories/', {
			version: 'published',
			starts_with: 'events/',
			per_page: 3
		});

		const { stories } = dataStory.data;

		console.log('\nCONTENT: \n');
		console.log(stories);

		setHeaders({ 'cache-control': `max-age${CACHE_DURATION}, must-revalidate` });

		return {
			events: stories
		};
	} catch (err) {
		throw new Error("Failed to fetch events on '/': " + err);
	}
};
