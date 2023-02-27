/** @type {import('./$types').PageLoad} */

import { PUBLIC_END_POINT } from '$env/static/public';
import { error } from '@sveltejs/kit';

type Fetch = typeof fetch;
type SetHeaders = {
	(headers: Record<string, string>): void;
};

// Fetch data from Strapi
export async function load({ fetch, setHeaders }: { fetch: Fetch; setHeaders: SetHeaders }) {
	const res = await fetch(PUBLIC_END_POINT);

	// I don't know if this works
	const cacheControl = res.headers.get('cache-control');

	if (cacheControl) {
		setHeaders({ 'cache-control': cacheControl });
	}

	if (!res.ok) {
		throw error(res.status, 'Error loading');
	}

	const { data } = await res.json();

	return { data };
}
