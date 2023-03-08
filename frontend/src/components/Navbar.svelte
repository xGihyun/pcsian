<script lang="ts">
	import { navItems } from '../constants';
	import { Dropdown } from '.';
	import HamburgerMenu from '../assets/icons/HamburgerMenu.svelte';
	import NavbarMobile from './mobile/NavbarMobile.svelte';
	import { onMount } from 'svelte';

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
		class={`absolute top-0 left-0 z-40 hidden w-full items-center justify-between bg-gradient-to-b 
    px-[5%] transition-all duration-500 ease-in-out lg:flex ${
			scrolled ? 'shadow-nav-shadow bg-accent h-16 from-transparent' : 'h-32'
		}`}
	>
		<span
			class={`from-nav-gradient absolute top-0 left-0 z-10 h-40 w-full bg-gradient-to-b transition-opacity duration-500 ease-in-out ${
				scrolled ? 'opacity-0' : 'opacity-100'
			}`}
		/>
		<a
			href="/"
			class={`z-20 flex origin-left flex-row items-center gap-4 transition-all duration-500 ease-in-out ${
				scrolled ? 'scale-50' : 'scale-100'
			}`}
		>
			<!-- PCS logo -->
			<!-- If there is still a bug, use this instead -->
			<div class="relative h-28 w-28">
				<div
					class="bg-pcs-orig absolute z-10 h-28 w-28 transform-gpu bg-cover bg-no-repeat opacity-0 transition-all duration-500 ease-in-out hover:opacity-100"
				/>
				<div
					class="bg-pcs-outline-white absolute z-[9] h-28 w-28 transform-gpu bg-cover bg-no-repeat transition-all duration-500 ease-in-out"
				/>
			</div>

			<!-- PCS text -->
			<div class="flex origin-left flex-col transition-all duration-500 ease-in-out">
				<span class="ease-in-ou text-5xl uppercase text-white transition-all duration-500"
					>Pateros</span
				>
				<div class="flex justify-between">
					<span
						class="ease-in-ou text-xl uppercase tracking-widest text-white transition-all duration-500"
						>Catholic</span
					>
					<span
						class="text-xl uppercase tracking-widest text-white transition-all duration-500 ease-in-out"
						>School</span
					>
				</div>
			</div></a
		>
		<ul class="z-20 hidden h-full flex-row md:flex">
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
						<a
							class={`pointer-events-none flex h-full items-center px-4 transition-colors duration-500 ${
								scrolled ? 'text-white' : 'text-white'
							}`}
							href="#"
							data-nav={item.data}>{item.title}</a
						>
						{#if hoveredElement === item.data && hovered}
							<Dropdown drop={hoveredElement} {scrolled} />
						{/if}
					</li>
				{:else}
					<li class="h-full">
						<a
							class={`flex h-full items-center px-4 text-black transition-colors duration-500 ${
								scrolled ? 'text-white' : 'text-white'
							}`}
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
		class="bg-accent shadow-nav-shadow flex h-16 w-full items-center justify-between from-transparent px-[5%] lg:hidden"
	>
		<a href="/">
			<div class="relative h-14 w-14">
				<div
					class="bg-pcs-orig absolute z-10 h-14 w-14 transform-gpu bg-cover bg-no-repeat opacity-0 transition-all duration-500 ease-in-out hover:opacity-100"
				/>
				<div
					class="bg-pcs-outline-white absolute z-[9] h-14 w-14 transform-gpu bg-cover bg-no-repeat transition-all duration-500 ease-in-out"
				/>
			</div>
		</a>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={() => (showNavbar = !showNavbar)}>
			<HamburgerMenu />
		</div>
	</nav>
	{#if showNavbar}
		<NavbarMobile />
	{/if}
</div>
