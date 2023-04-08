<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { Footer, Loader, Navbar, Transition } from '../components';
	import { QuickMenu } from '../features';
	import { page } from '$app/stores';
	// import { afterNavigate, preloadData } from '$app/navigation';

	let loading = true;
	let display = 'block';
	// let preloadHomepage = false;

	onMount(() => {
		scrollTo(0, 0);

		// preloadData('/calendar');

		setTimeout(() => {
			loading = false;
		}, 800);

		setTimeout(() => {
			display = 'hidden';
		}, 2000);
	});

	// Preload the data from '/' after navigating to a different route, it should only be preloaded once
	// afterNavigate(() => {
	// 	if (!preloadHomepage && $page.url.pathname !== '/') {
	// 		preloadData('/');
	// 		preloadHomepage = true;
	// 	}
	// });
</script>

<Loader
	style={`transition-transform duration-700 ${display} ${
		loading ? 'translate-y-0' : '-translate-y-[calc(100vh+15rem)]'
	}`}
/>

<Navbar />
{#if $page.url.pathname !== '/chat'}
	<QuickMenu />
{/if}
<Transition url={$page.url}>
	<main class="overflow-x-hidden">
		<slot />
	</main>
	{#if $page.url.pathname !== '/chat'}
		<Footer />
	{/if}
</Transition>
