import { LATEST_EVENTS_END_POINT } from '$env/static/private';
import type { LatestEvent } from '$lib/types.js';
import { error } from '@sveltejs/kit';

// Fetch data from Strapi
export async function load({ fetch, setHeaders }) {
	async function getLatestEvents(): Promise<{data: LatestEvent[]}> {
		const res = await fetch(LATEST_EVENTS_END_POINT);

		if (!res.ok) {
			throw error(res.status, 'Error loading, try refreshing!');
		}

		const { data } = await res.json();

		return { data };
	}

	const [getLatestEventsRes] = await Promise.allSettled([getLatestEvents()]);

	// Don't set cache if there's an error
	if (getLatestEventsRes.status === 'fulfilled') {
		setHeaders({ 'cache-control': 'max-age=30, stale-while-revalidate=1800' });
	}

	return {
		streamed: {
			latestEvents: getLatestEvents()
		}
	};
}
