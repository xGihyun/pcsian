/** @type {import('./$types').PageLoad} */

import { PUBLIC_END_POINT } from '$env/static/public';

type Fetch = typeof fetch;

// Fetch data from Strapi
export async function load({ fetch }: { fetch: Fetch }) {
	const res = await fetch(PUBLIC_END_POINT);
	const { data } = await res.json();

	return { data };
}
