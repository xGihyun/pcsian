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
<div class="relative flex w-full bg-white px-[10%] py-20 text-black lg:px-[20%] lg:py-32">
	<div class="flex flex-col justify-center ">
		<h2
			class={`font-gt-walsheim-pro-medium transition-transform-opacity-filter transform-gpu text-start text-3xl duration-1000 ease-in-out md:text-center md:text-5xl ${
				isInView[0]
					? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
					: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
			}`}
			use:inview={options}
			on:change={({ detail }) => {
				isInView[0] = detail.inView;
			}}
		>
			My home from Nursery to Grade 12... and beyond
		</h2>
		<span
			class={`bg-accent my-8 h-[2px] w-full transform-gpu rounded-full transition-transform duration-1000 ease-in-out ${
				isInView[0] ? 'lg:scale-x-100 lg:delay-700' : 'lg:scale-x-0'
			}`}
		/>
		<p
			class={`transition-transform-opacity-filter transform-gpu text-base delay-700 duration-1000 ease-in-out md:text-center md:text-2xl ${
				isInView[0]
					? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
					: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
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
	<img
		src={pcsAnnex}
		alt="pcs annex"
		class="transition-transform-opacity-filter absolute bottom-0 right-0 max-w-sm opacity-20 saturate-0 duration-300 sm:right-[10%] md:max-w-lg lg:max-w-none lg:hover:opacity-75 lg:hover:saturate-100"
	/>
	<div
		class="flex justify-between gap-10 lg:w-2/3"
		use:inview={options}
		on:change={({ detail }) => {
			isInView[1] = detail.inView;
		}}
	>
		<div class="flex flex-col">
			<div
				class={`transition-transform-opacity-filter relative flex transform-gpu flex-col whitespace-nowrap duration-1000 ease-in-out  ${
					isInView[1]
						? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
						: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
				}`}
				use:inview={options}
				on:change={({ detail }) => {
					isInView[1] = detail.inView;
				}}
			/>
			<h2
				class={`font-gt-walsheim-pro-medium transition-transform-opacity-filter mb-8 text-3xl duration-1000 ease-in-out md:text-5xl ${
					isInView[1]
						? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
						: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
				}`}
			>
				Become a PCSian
			</h2>
			<div>
				<div class="relative pl-3 sm:pl-6">
					<span
						class={`bg-accent absolute inset-y-0 left-0 w-1 origin-top rounded-full transition-transform delay-700 duration-1000 sm:w-2 ${
							isInView[1] ? 'lg:scale-y-100' : 'lg:scale-y-0'
						}`}
					/>
					<p
						class={`mb-10 w-full text-base delay-700 duration-1000 ease-in-out sm:max-w-[75%] md:mb-20 md:text-2xl ${
							isInView[1]
								? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
								: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
						}`}
					>
						Your journey of academic and personal growth begins. Unlock your potential, and delve
						into a world of endless possibilities that await you at Pateros Catholic School.
					</p>
				</div>
				<div class="flex gap-4">
					<a
						class="hover:bg-accent z-30 rounded-full bg-black py-2 px-4 text-sm text-white transition-[transform,background-color] duration-300 hover:scale-90 md:py-3 md:px-5 md:text-xl"
						href="https://schoolaide.pcsian.edu.ph/login"
						rel="noreferrer"
						target="_blank"
						type="button">Apply Now</a
					>
					<a
						class="z-30 rounded-full border-[1px] border-black py-2 px-4 text-sm text-black transition-transform duration-300 hover:scale-90 md:py-3 md:px-5 md:text-xl"
						href="https://www.facebook.com/PCS.OfficialPage"
						rel="noreferrer"
						target="_blank"
						type="button">Follow Us</a
					>
				</div>
			</div>
		</div>
		<!-- <div class="relative m-auto hidden max-w-xl lg:block">
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
		</div> -->
	</div>
</div>
