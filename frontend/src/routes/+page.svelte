<script lang="ts">
	import { Hero, Programs } from '../components';
	import { CurveWhiteBottom, CurveWhiteTop } from '../assets/curves';
	import { pcsAnnex } from '../assets/images';
	import { inview } from 'svelte-inview';
	import type { Options, ObserverEventDetails } from 'svelte-inview';
	import '../styles/curves.css';

	export let data;

	let isInView: boolean[] = Array(2);

	const options: Options = { rootMargin: '-10%', unobserveOnEnter: true };

	function handleChangeFactory(index: number) {
		return function handleChange({ detail }: CustomEvent<ObserverEventDetails>) {
			isInView[index] = detail.inView;
		};
	}
</script>

<!-- Hero section -->
<Hero />

<!-- Homepage body -->
<div class="relative flex w-full bg-white px-[10%] py-20 text-black lg:px-[20%] lg:py-32">
	<div class="flex flex-col justify-center">
		<h2
			class={`font-gt-walsheim-pro-medium transition-transform-opacity-filter transform-gpu text-start text-3xl duration-1000 ease-in-out md:text-center md:text-5xl ${
				isInView[0]
					? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
					: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
			}`}
			use:inview={options}
			on:inview_change={handleChangeFactory(0)}
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

<!-- Academic programs and latest events -->
<div class="relative bg-black">
	<CurveWhiteTop />
	<Programs events={data.events} />
	<CurveWhiteBottom />
</div>

<div class="relative h-full bg-white px-[10%] py-20 lg:py-32">
	<img
		loading="lazy"
		src={pcsAnnex}
		alt="pcs annex"
		class="transition-transform-opacity-filter hidden md:block absolute bottom-0 right-0 max-w-sm opacity-20 saturate-0 duration-300 sm:right-[10%] md:max-w-lg lg:max-w-none lg:hover:opacity-75 lg:hover:saturate-100"
	/>
	<div
		class="flex justify-between gap-10 lg:w-2/3"
		use:inview={options}
		on:inview_change={handleChangeFactory(1)}
	>
		<div class="flex flex-col">
			<div
				class={`transition-transform-opacity-filter relative flex transform-gpu flex-col whitespace-nowrap duration-1000 ease-in-out  ${
					isInView[1]
						? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
						: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
				}`}
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
						class="hover:bg-accent z-30 rounded-full bg-black px-4 py-2 text-sm text-white transition-[transform,background-color] duration-300 hover:scale-90 md:px-5 md:py-3 md:text-xl"
						href="https://schoolaide.pcsian.edu.ph/login"
						rel="noreferrer"
						target="_blank"
						type="button">Apply Now</a
					>
					<a
						class="z-30 rounded-full border-[1px] border-black px-4 py-2 text-sm text-black transition-transform duration-300 hover:scale-90 md:px-5 md:py-3 md:text-xl"
						href="https://www.facebook.com/PCS.OfficialPage"
						rel="noreferrer"
						target="_blank"
						type="button">Follow Us</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
