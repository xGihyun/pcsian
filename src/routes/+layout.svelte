<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { Footer, Loading, Navbar } from '../components';
	import { QuickMenu } from '../features';
	// import Transition from '../components/Transition.svelte';
	// import { page } from '$app/stores';

	let loading = true;
	let display = 'block';

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 2000);

		setTimeout(() => {
			display = 'hidden';
		}, 3500);
	});
</script>

<Loading
	style={`transition-all duration-1000 ${display} ${
		loading ? 'translate-y-0' : '-translate-y-full'
	}`}
/>

<div class={`${loading ? 'hidden' : 'block'}`}>
	<Navbar />
	<QuickMenu />
	<main class="overflow-x-hidden">
		<!-- <Transition url={$page.url}> -->
		<slot />
		<!-- </Transition> -->
	</main>
	<Footer />
</div>
