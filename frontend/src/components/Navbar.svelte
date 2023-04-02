<script lang="ts">
	import { navItems } from '../constants';
	import { Dropdown } from '.';
	import { HamburgerMenu, ChevronRight } from '../assets/icons';
	import NavbarMobile from './mobile/NavbarMobile.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let scrolled = false;
	let hovered = false;
	let hoveredElement = '';

	// For smaller devices
	let showNavbar = false;

	function shrinkNav() {
		window.scrollY > 20 ? (scrolled = true) : (scrolled = false);
	}

	$: applyClass = $page.url.pathname === '/chat';

	onMount(() => window.addEventListener('scroll', shrinkNav));
</script>

<div class="fixed left-0 top-0 z-[100] w-full">
	<!-- Navbar large devices -->
	{#if hovered}
		<div
			class={`border-b-accent ${
				scrolled ? 'h-80' : 'h-88'
			} w-full border-b-4 bg-black bg-opacity-90 transition-[height] duration-500 ease-in-out`}
		/>
	{/if}
	<div
		class={`from-nav-gradient absolute left-0 top-0 z-10 hidden w-full bg-gradient-to-b transition-[opacity,height] duration-500 ease-in-out lg:block ${
			scrolled || applyClass ? 'h-20 opacity-0' : 'h-40 opacity-100'
		}`}
	/>
	<nav
		class={`absolute left-0 top-0 z-40 hidden w-full items-center justify-between
    px-[5%] transition-[box-shadow,background-color,height] duration-500 ease-in-out lg:flex ${
			scrolled || applyClass ? 'bg-accent' : 'bg-none'
		} ${scrolled || applyClass ? 'h-16' : 'h-40'} ${
			scrolled || applyClass ? 'shadow-nav-shadow' : 'shadow-none'
		}`}
	>
		<a
			href="/"
			class={`z-20 flex origin-left flex-row items-center gap-4 transition-transform duration-500 ease-in-out ${
				scrolled || applyClass ? 'scale-50' : 'scale-100'
			}`}
		>
			<!-- PCS logo -->
			<div class="relative h-28 w-28">
				<div
					class={`bg-pcs-orig absolute z-10 h-28 w-28 transform-gpu bg-cover bg-no-repeat opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100`}
				/>
				<div class="bg-pcs-outline-white absolute z-[9] h-28 w-28 bg-cover bg-no-repeat" />
			</div>

			<!-- PCS text -->
			<div
				class={`flex origin-left flex-col text-white transition-[color] duration-500 ease-in-out hover:text-neutral-400`}
			>
				<span class="text-5xl uppercase">Pateros</span>
				<div class="flex justify-between">
					<span class="text-xl uppercase tracking-wide">Catholic</span>
					<span class="text-xl uppercase tracking-wide">School</span>
				</div>
			</div></a
		>
		<ul class="z-20 hidden h-full flex-row md:flex">
			{#each navItems as item, idx (idx)}
				{#if item.data === 'about' || item.data === 'academics'}
					<li
						class="h-full text-white hover:text-neutral-300"
						on:mouseenter={() => {
							hoveredElement = item.data;
							hovered = true;
						}}
						on:mouseleave={() => (hovered = !hovered)}
					>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							class={`pointer-events-none  flex h-full items-center gap-2 px-4 text-lg 
							transition-colors duration-300`}
							href="#"
							data-nav={item.data}
						>
							{item.title}
							<ChevronRight style="h-4 w-4 rotate-90" />
						</a>
						{#if hoveredElement === item.data && hovered}
							<Dropdown drop={hoveredElement} {scrolled} />
						{/if}
					</li>
				{:else}
					<li class="h-full text-white hover:text-neutral-300">
						<a
							class={`} flex h-full items-center px-4 
							text-lg transition-colors duration-300`}
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
					class="bg-pcs-orig absolute z-10 h-14 w-14 transform-gpu bg-cover bg-no-repeat opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
				/>
				<div class="bg-pcs-outline-white absolute z-[9] h-14 w-14 bg-cover bg-no-repeat" />
			</div>
		</a>
		<button on:click={() => (showNavbar = !showNavbar)} aria-label="hamburger menu">
			<HamburgerMenu />
		</button>
	</nav>
	{#if showNavbar}
		<NavbarMobile />
	{/if}
</div>
