/** @type {import('./$types').PageLoad} */

import { PUBLIC_END_POINT } from '$env/static/public';
import { error } from '@sveltejs/kit';

type Fetch = typeof fetch;

// Fetch data from Strapi
export async function load({ fetch }: { fetch: Fetch }) {
	const res = await fetch(PUBLIC_END_POINT);

	if (!res.ok) {
		throw error(res.status, 'Error loading, try refreshing!');
	}

	const { data } = await res.json();

	return { data };
}
