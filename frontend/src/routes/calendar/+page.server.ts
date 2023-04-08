import {
	GRADE_SCHOOL_END_POINT,
	JUNIOR_HIGH_END_POINT,
	SENIOR_HIGH_END_POINT
} from '$env/static/private';
import type { Calendar } from '$lib/types.js';
import { error } from '@sveltejs/kit';

// Fetch data from Strapi
export async function load({ fetch, setHeaders }) {
	async function getGradeSchool(): Promise<{data: Calendar[]}> {
		const res = await fetch(GRADE_SCHOOL_END_POINT);

		if (!res.ok) {
			throw error(res.status, 'Error loading, try refreshing!');
		}

		const { data } = await res.json();

		return { data };
	}

	async function getJuniorHigh(): Promise<{data: Calendar[]}> {
		const res = await fetch(JUNIOR_HIGH_END_POINT);

		if (!res.ok) {
			throw error(res.status, 'Error loading, try refreshing!');
		}

		const { data } = await res.json();

		return { data };
	}

	async function getSeniorHigh(): Promise<{data: Calendar[]}> {
		const res = await fetch(SENIOR_HIGH_END_POINT);

		if (!res.ok) {
			throw error(res.status, 'Error loading, try refreshing!');
		}

		const { data } = await res.json();

		return { data };
	}

	const [gradeSchoolRes, juniorHighRes, seniorHighRes] = await Promise.allSettled([
		getGradeSchool(),
		getJuniorHigh(),
		getSeniorHigh()
	]);

	// Don't set cache if there's an error
	if (
		gradeSchoolRes.status === 'fulfilled' &&
		juniorHighRes.status === 'fulfilled' &&
		seniorHighRes.status === 'fulfilled'
	) {
		setHeaders({ 'cache-control': 'max-age=6000' });
	}

	return {
		streamed: {
			gradeSchool: getGradeSchool(),
			juniorHigh: getJuniorHigh(),
			seniorHigh: getSeniorHigh()
		}
	};
}
