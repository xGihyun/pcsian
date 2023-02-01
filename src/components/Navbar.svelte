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

<div class="fixed top-0 left-0 z-50 w-full">
	<!-- Navbar large devices -->
	{#if hovered}
		<div class="border-b-accent h-80 w-full border-b-4 bg-black bg-opacity-75" />
	{/if}
	<nav
		class={`absolute top-0 left-0 hidden h-20 w-full items-center justify-between bg-gradient-to-b 
    px-[5%] transition-all duration-300 ease-in-out md:flex ${
			scrolled ? 'bg-accent shadow-nav-shadow h-14 from-transparent' : 'from-nav-gradient'
		}`}
	>
		<img
			class={`h-16 w-16 transition-all duration-300 ease-in-out ${scrolled ? 'h-12 w-12' : ''}`}
			src={logo}
			alt="pcs"
		/>
		<ul class="hidden h-full flex-row md:flex">
			{#each navItems as item, idx (idx)}
				{#if item.data === 'about' || item.data === 'academics'}
					<li
						class="h-full"
						on:mouseenter={() => {
							hoveredElement = item.data;
							hovered = true;
						}}
						on:mouseleave={() => (hovered = !hovered)}
					>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a class="flex h-full items-center px-4 text-white" href="#" data-nav={item.data}
							>{item.title}</a
						>
						{#if hoveredElement === item.data && hovered}
							<Dropdown drop={hoveredElement} {scrolled} />
						{/if}
					</li>
				{:else}
					<li class="h-full">
						<a
							class="flex h-full items-center px-4 text-white"
							href={item.path}
							data-nav={item.data}>{item.title}</a
						>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>

	<!-- Navbar small devices -->
	<nav
		class="bg-accent shadow-nav-shadow flex h-14 w-full items-center justify-between from-transparent px-[5%] md:hidden"
	>
		<img src={logo} alt="" class="h-12 w-12" />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={() => (showNavbar = !showNavbar)}>
			<HamburgerMenu />
		</div>
	</nav>
	{#if showNavbar}
		<NavbarMobile />
	{/if}
</div>
