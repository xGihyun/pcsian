<script lang="ts">
	import { Hero, Programs } from '../components';
	import CurveWhiteTop from '../assets/curves/CurveWhiteTop.svelte';
	import CurveWhiteBottom from '../assets/curves/CurveWhiteBottom.svelte';
	import '../styles/curves.css';
	import { inview } from 'svelte-inview';
	import { pcsAnnex } from '../assets/images';

	let isInView = [false, false];

	const options = { unobserveOnEnter: true, rootMargin: '-10%' };
</script>

<!-- Hero section -->
<Hero />

<!-- Homepage body -->
<div
	class="relative flex items-center bg-white px-[10%] py-20 text-black md:px-[20%] md:text-center lg:py-32"
>
	<div class="flex flex-col items-center justify-center">
		<h2
			class={`font-gt-walsheim-pro-medium transform-gpu text-3xl transition-all duration-1000 ease-in-out md:text-5xl ${
				isInView[0]
					? 'md:translate-y-0 md:opacity-100 md:blur-0'
					: 'md:translate-y-full md:opacity-0 md:blur-[2px]'
			}`}
			use:inview={options}
			on:change={({ detail }) => {
				isInView[0] = detail.inView;
			}}
		>
			Creating a Brighter Future
		</h2>
		<span
			class={`bg-accent my-8 h-[2px] w-full transform-gpu rounded-full transition-all duration-1000 ease-in-out ${
				isInView[0] ? 'md:scale-x-100 md:delay-700' : 'md:scale-x-0'
			}`}
		/>
		<p
			class={`transform-gpu text-base transition-all delay-1000 duration-1000 ease-in-out md:text-2xl ${
				isInView[0]
					? 'md:translate-y-0 md:opacity-100 md:blur-0'
					: 'md:translate-y-full md:opacity-0 md:blur-[2px]'
			}`}
		>
			Pateros Catholic School is more than just a school - it's a life experience. Our unique
			approach to learning enhances our students' education and helps them to explore their dynamic
			and diverse community. Pateros Catholic School provides a rich learning environment that has
			helped countless students get ahead.
		</p>
	</div>
</div>

<!-- Academic programs -->
<div class="relative bg-black">
	<CurveWhiteTop />
	<Programs />
	<CurveWhiteBottom />
</div>

<div class="relative h-full bg-white px-[10%] py-20 lg:py-32">
	<div
		class={`relative mb-5 flex transform-gpu flex-col whitespace-nowrap text-3xl transition-all duration-1000 ease-in-out lg:text-5xl ${
			isInView[1]
				? 'md:translate-y-0 md:opacity-100 md:blur-0'
				: 'md:translate-y-full md:opacity-0 md:blur-[2px]'
		}`}
		use:inview={options}
		on:change={({ detail }) => {
			isInView[1] = detail.inView;
		}}
	>
		<h2 class="font-gt-walsheim-pro-medium">Become a PCSian</h2>
		<!-- <span
			class={`bg-accent my-8 h-[2px] w-1/2 origin-left transform-gpu rounded-full transition-all duration-1000 ease-in-out ${
				isInView[1] ? 'md:scale-x-100 md:delay-700' : 'md:scale-x-0'
			}`}
		/> -->
	</div>
	<div class="flex justify-between gap-10">
		<div>
			<p class="mb-20 w-full max-w-[75%] text-base md:text-2xl">
				Your journey of academic and personal growth begins. Unlock your potential, and delve into a
				world of endless possibilities that await you at Pateros Catholic School.
			</p>
			<a
				class="hover:bg-accent z-30 rounded-full bg-black py-3 px-5 text-xl text-white transition-all duration-300 hover:scale-90"
				href="https://schoolaide.pcsian.edu.ph/login"
				rel="noreferrer"
				target="_blank"
				type="button">Apply Now</a
			>
		</div>
		<div class="relative m-auto max-w-xl hidden lg:block">
			<div
				class="flex aspect-square items-end justify-center overflow-hidden rounded-bl-full rounded-br-full hover:[&>img]:scale-[1.2]"
			>
				<div class="bg-accent absolute bottom-0 aspect-square w-full rounded-full" />
				<img
					src={pcsAnnex}
					class="relative w-96 max-w-xl origin-bottom transition-transform duration-300"
					alt="pcs annex"
				/>
			</div>
		</div>
	</div>

	<!-- <div class="flex flex-col justify-center gap-5 lg:flex-row" /> -->
</div>
