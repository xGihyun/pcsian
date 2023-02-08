<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { QuickMenu } from '../features';
</script>

<Navbar />
<QuickMenu />
<main class="overflow-x-hidden">
	<slot />
</main>
<Footer />
