<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { QuickMenu } from '../features';
	// import Transition from '../components/Transition.svelte';
	// import { page } from '$app/stores';
</script>

<Navbar />
<QuickMenu />
<main class="overflow-x-hidden">
	<!-- <Transition url={$page.url}> -->
		<slot />
	<!-- </Transition> -->
</main>
<Footer />
