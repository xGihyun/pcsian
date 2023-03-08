/** @type {import('./$types').PageLoad} */

import {
	GRADE_SCHOOL_END_POINT,
	JUNIOR_HIGH_END_POINT,
	SENIOR_HIGH_END_POINT
} from '$env/static/private';
import { error } from '@sveltejs/kit';

type Fetch = typeof fetch;

// Fetch data from Strapi
export async function load({
	fetch,
	setHeaders
}: {
	fetch: Fetch;
	setHeaders(headers: Record<string, string>): void;
}) {
	async function getGradeSchool() {
		const res = await fetch(GRADE_SCHOOL_END_POINT);

		if (!res.ok) {
			throw error(res.status, 'Error loading, try refreshing!');
		}

		const { data } = await res.json();

		return { data };
	}

	async function getJuniorHigh() {
		const res = await fetch(JUNIOR_HIGH_END_POINT);

		if (!res.ok) {
			throw error(res.status, 'Error loading, try refreshing!');
		}

		const { data } = await res.json();

		return { data };
	}

	async function getSeniorHigh() {
		const res = await fetch(SENIOR_HIGH_END_POINT);

		// Set cache
		setHeaders({ 'cache-control': 'max-age=6000' });

		if (!res.ok) {
			throw error(res.status, 'Error loading, try refreshing!');
		}

		const { data } = await res.json();

		return { data };
	}

	return {
		gradeSchool: getGradeSchool(),
		juniorHigh: getJuniorHigh(),
		seniorHigh: getSeniorHigh()
	};
}
