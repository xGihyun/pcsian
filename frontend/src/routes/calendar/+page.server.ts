/** @type {import('./$types').PageLoad} */

import { PUBLIC_END_POINT_GRADE_SCHOOL } from '$env/static/public';
import { PUBLIC_END_POINT_JUNIOR_HIGH } from '$env/static/public';
import { PUBLIC_END_POINT_SENIOR_HIGH } from '$env/static/public';
import { error } from '@sveltejs/kit';

type Fetch = typeof fetch;

// Fetch data from Strapi
export async function load({ fetch }: { fetch: Fetch }) {

	async function getGradeSchool(){
		const res = await fetch(PUBLIC_END_POINT_GRADE_SCHOOL);
		
		if (!res.ok) {
			throw error(res.status, 'Error loading, try refreshing!');
		}
	
		const { data } = await res.json();
	
		return { data };
	}

	async function getJuniorHigh(){
		const res = await fetch(PUBLIC_END_POINT_JUNIOR_HIGH);

		if (!res.ok) {
			throw error(res.status, 'Error loading, try refreshing!');
		}
	
		const { data } = await res.json();
	
		return { data };
	}

	async function getSeniorHigh(){
		const res = await fetch(PUBLIC_END_POINT_SENIOR_HIGH);

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
	}
}
