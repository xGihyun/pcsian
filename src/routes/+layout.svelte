<script>
  import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />
<main class="overflow-x-hidden">
  <slot />
</main>
<Footer />