<script lang="ts">
	import { navItems } from '../constants';
	import logo from '../assets/images/pcsLogoBrown.png';
	import Dropdown from './Dropdown.svelte';
	import { onMount } from 'svelte';
	import HamburgerMenu from '../assets/icons/HamburgerMenu.svelte';
	import NavbarMobile from './mobile/NavbarMobile.svelte';

	// Check if user has scrolled
	let scrolled = false;

	// Check if user hovered over the navbar
	let hovered = false;

	// Check which element user is hovering on the navbar
	let hoveredElement = '';

	// Dropdown navbar for smaller devices
	let showNavbar = false;

	function shrinkNav() {
		window.scrollY > 20 ? (scrolled = true) : (scrolled = false);
	}

	onMount(() => window.addEventListener('scroll', shrinkNav));
</script>

<div class="fixed top-0 left-0 w-full z-50">
	<!-- Navbar large devices -->
	{#if hovered}
		<div class="w-full h-80 bg-black bg-opacity-75 border-b-4 border-b-accent" />
	{/if}
	<nav class={scrolled ? 'nav scrolled' : 'nav'}>
		<img src={logo} alt="pcs" class="w-16 h-16" />
		<ul class="h-full flex flex-row">
			{#each navItems as item, idx (idx)}
				{#if item.data === 'about' || item.data === 'academics'}
					<li
						class="nav-elements"
						on:mouseenter={() => {
							hoveredElement = item.data;
							hovered = true;
						}}
						on:mouseleave={() => (hovered = !hovered)}
					>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#" data-nav={item.data}>{item.title}</a>
						{#if hoveredElement === item.data && hovered}
							<Dropdown drop={hoveredElement} {scrolled} />
						{/if}
					</li>
				{:else}
					<li>
						<a href={item.path} data-nav={item.data}>{item.title}</a>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>

	<!-- Navbar small devices -->
	<nav class="nav-mobile">
		<img src={logo} alt="" class="w-12 h-12" />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={() => showNavbar = !showNavbar}>
			<HamburgerMenu style={'w-[25px] h-[25px] text-white cursor-pointer'} />
		</div>
	</nav>
	<!-- <NavbarMobile style={showNavbar ? 'max-h-[500px]' : ''} ulStyle={showNavbar ? 'opacity-100' : 'opacity-0 pointer-events-none'} /> -->
  {#if showNavbar}
    <NavbarMobile />
  {/if}
</div>
