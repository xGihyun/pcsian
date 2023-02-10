<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Loading from '../components/Loading.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { QuickMenu } from '../features';
	// import Transition from '../components/Transition.svelte';
	// import { page } from '$app/stores';

	let load = true;

	onMount(() => {
		setInterval(() => {
			load = false;
		}, 2000);
	});
</script>

{#if load}
	<Loading />
{/if}

<div class={`${load ? 'hidden' : 'block'}`}>
	<Navbar />
	<QuickMenu />
	<main class="overflow-x-hidden">
		<!-- <Transition url={$page.url}> -->
		<slot />
		<!-- </Transition> -->
	</main>
	<Footer />
</div>