import { PUBLIC_STORYBLOK_API_KEY } from '$env/static/public';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	storyblokInit({
		accessToken: PUBLIC_STORYBLOK_API_KEY,
		use: [apiPlugin]
	});

	const storyblokApi = useStoryblokApi();

	return {
		storyblokApi
	};
};
