import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
    serviceWorker: {
      register: false,
    },
		adapter: adapter(),
		alias: {
      '@storyblok/svelte': './node_modules/@storyblok/svelte',
    },
	},
};

export default config;
