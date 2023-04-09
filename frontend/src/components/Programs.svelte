<script lang="ts">
	import OrangeBlob1 from '../assets/blobs/OrangeBlob1.svelte';
	import type { LatestEvent } from '$lib/types';
	import { format } from 'date-fns';
	import { inview } from 'svelte-inview';
	import type { Options, ObserverEventDetails } from 'svelte-inview';
	import '../styles/animations.css';
	import { ArrowClockwise } from '../assets/icons';
	import { bsp, confirmation, confirmation2, equalizer, kinaadman, kinaadman2, kinaadman3, mathquizbee } from '../assets/images';

	export let latestEventsData: Promise<{ data: LatestEvent[] }>;

	const programs = [
		{
			title: 'Grade School',
			description:
				'Nurturing learning, character, and life skills for academic and personal success through a dynamic and holistic approach.',
			bg: 'bg-grade-school',
			source: '/grade-school'
		},
		{
			title: 'Junior High',
			description:
				'Fostering academic excellence and holistic development through Catholic teachings, creative talents, and social responsibility.',
			bg: 'bg-junior-high',
			source: '/junior-high'
		},
		{
			title: 'Senior High',
			description:
				'Empowering students for lifelong success through a holistic education that fosters critical thinking, practical skills, and ethical values.',
			bg: 'bg-senior-high',
			source: '/senior-high'
		}
	];

	// Delay for the staggered effect
	const delayProgram = ['delay-600', 'delay-800', 'delay-1000'];
	const delayEvents = ['delay-600', 'delay-800', 'delay-1000'];

	const options: Options = { rootMargin: '-10%', unobserveOnEnter: true };
	let isInView: boolean[] = Array(3);

	function handleChangeFactory(index: number) {
		return function handleChange({ detail }: CustomEvent<ObserverEventDetails>) {
			isInView[index] = detail.inView;
		};
	}
</script>

<div class="py-32 md:py-60">
	<!-- Academic programs -->
	<div
		class="relative flex h-full flex-col items-center justify-between gap-20 px-[10%] pb-20 sm:pb-40 lg:flex-row"
	>
		<div
			class="flex w-full flex-col text-white lg:max-w-[50%]"
			use:inview={options}
			on:inview_change={handleChangeFactory(0)}
		>
			<h2
				class={`font-gt-walsheim-pro-medium transition-transform-opacity-filter mb-8 text-3xl duration-1000 ease-in-out lg:text-5xl ${
					isInView[0]
						? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
						: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
				}`}
			>
				Discover the Power of Personalized Education
			</h2>
			<div class="relative pl-3 sm:pl-6">
				<span
					class={`bg-accent absolute inset-y-0 left-0 w-1 origin-top rounded-full transition-transform delay-700 duration-1000 sm:w-2 ${
						isInView[0] ? 'lg:scale-y-100' : 'lg:scale-y-0'
					}`}
				/>
				<p
					class={`transition-transform-opacity-filter text-sm delay-700 duration-1000 ease-in-out sm:text-xl ${
						isInView[0]
							? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
							: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
					}`}
				>
					At Pateros Catholic School, we offer a comprehensive educational experience for students
					in grades K-12. Our academic programs are designed to provide a strong foundation for our
					students and help them reach their full potential. With our commitment to academic
					excellence, personalized learning, and a supportive community, our academic programs
					provide an exceptional educational experience for all students.
				</p>
			</div>
		</div>
		<div class="relative hidden h-full w-full items-center justify-center lg:flex">
			<OrangeBlob1 />
			<div
				class={`card-group transition-transform-opacity-filter animate-float shadow-card-black-2 aspect-[5/7] w-72 duration-1000 ease-in-out ${
					isInView[0] ? 'lg:opacity-100 lg:blur-0' : 'lg:opacity-0 lg:blur-[2px]'
				}`}
			>
				<img
					src={confirmation}
					class="absolute left-1/2 top-1/2 aspect-[5/7] w-28 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-2xl bg-opacity-25 object-cover transition-transform duration-500 ease-in-out"
					alt="pcs confirmation"
					loading="lazy"
				/>
				<img
					src={kinaadman3}
					class="absolute left-1/2 top-1/2 aspect-[5/7] w-28 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-2xl bg-opacity-25 object-cover transition-transform duration-500 ease-in-out"
					alt="pcs kinaadman dagitab"
					loading="lazy"
				/>
				<img
					src={confirmation2}
					class="absolute left-1/2 top-1/2 aspect-[5/7] w-28 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-2xl bg-opacity-25 object-cover transition-transform duration-500 ease-in-out"
					alt="pcs confirmation"
					loading="lazy"
				/>
				<img
					src={equalizer}
					class="absolute left-1/2 top-1/2 aspect-[5/7] w-28 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-2xl bg-opacity-25 object-cover transition-transform duration-500 ease-in-out"
					alt="pcs equalizer"
					loading="lazy"
				/>
				<img
					src={kinaadman}
					class="shadow-card-black-2 absolute aspect-[5/7] w-72 -translate-x-[15%] -rotate-[6deg] transform-gpu rounded-2xl bg-white bg-opacity-10 object-cover transition-transform duration-500 ease-in-out"
					alt="pcs kinaadman dagitab"
					loading="lazy"
				/>
				<img
					src={bsp}
					class="shadow-card-black-2 absolute aspect-[5/7] w-72 -translate-x-[5%] -rotate-2 transform-gpu rounded-2xl bg-white bg-opacity-10 object-cover transition-transform duration-500 ease-in-out"
					alt="pcs boy scout"
					loading="lazy"
				/>
				<img
					src={mathquizbee}
					class="shadow-card-black-2 absolute aspect-[5/7] w-72 translate-x-[5%] rotate-2 transform-gpu rounded-2xl bg-white bg-opacity-10 object-cover transition-transform duration-500 ease-in-out"
					alt="padss mathira mathibay 2023"
					loading="lazy"
				/>
				<img
					src={kinaadman2}
					class="shadow-card-black-2 absolute aspect-[5/7] w-72 translate-x-[15%] translate-y-[3%] rotate-[6deg] transform-gpu rounded-2xl bg-white bg-opacity-10 object-cover object-left transition-transform duration-500 ease-in-out"
					alt="pcs kinaadman dagitab"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
	<div class="mb-20 sm:mb-40">
		<h3
			class={`transition-transform-opacity-filter mb-4 text-center text-2xl uppercase tracking-widest text-white duration-1000 ease-in-out ${
				isInView[1]
					? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
					: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
			}`}
			use:inview={options}
			on:inview_change={handleChangeFactory(1)}
		>
			Programs
		</h3>
		<div
			class="flex w-full flex-col items-center justify-center gap-8 px-[10%] md:flex-row lg:gap-16"
		>
			{#each programs as program, idx (idx)}
				<div
					class="lg:hover:shadow-card transition-[filter,box-shadow] duration-300 lg:brightness-75 lg:hover:brightness-100 lg:[&>div>div>div>a]:hover:border-white lg:[&>div>div>div>h4]:hover:after:scale-x-100 lg:[&>div>div>div>p]:hover:text-white"
				>
					<div
						class={`${
							program.bg
						} transition-transform-opacity-filter h-96 w-full max-w-sm bg-cover duration-1000 ${
							delayProgram[idx]
						} ${
							isInView[1]
								? 'lg:translate-x-0 lg:opacity-100 lg:blur-0'
								: 'lg:-translate-x-full lg:opacity-0 lg:blur-[2px]'
						}`}
					>
						<div class="flex h-full flex-col justify-end">
							<div class="gradient px-4 pb-4 pt-16">
								<h4
									class="before:bg-accent-dark after:bg-accent relative text-base text-white transition-colors duration-300 before:absolute before:-bottom-1 before:left-[calc(1rem*-1)] before:h-[2px] before:w-full before:content-[''] after:absolute after:-bottom-1 after:left-[calc(1rem*-1)] after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] sm:text-xl"
								>
									{program.title}
								</h4>
								<p
									class="my-4 text-sm text-neutral-200 transition-colors duration-300 lg:text-base"
								>
									{program.description}
								</p>
								<a
									href={program.source}
									class="rounded-full border-[1px] border-neutral-400 px-3 py-1 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black sm:text-base"
									type="button">Learn More</a
								>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Latest events -->
	<div>
		<h3
			class={`transition-transform-opacity-filter mb-4 text-center text-2xl uppercase tracking-widest text-white duration-1000 ease-in-out ${
				isInView[2]
					? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
					: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
			}`}
			use:inview={options}
			on:inview_change={handleChangeFactory(2)}
		>
			Latest Events
		</h3>
		<div
			class="flex w-full flex-col items-center justify-center gap-8 px-[10%] md:flex-row lg:gap-16"
		>
			{#await latestEventsData}
				<ArrowClockwise style="text-amber-500 h-40 w-40 animate-spin" />
			{:then latestEvents}
				{#each latestEvents.data
					.sort((a, b) => Date.parse(b.attributes.date) - Date.parse(a.attributes.date))
					.slice(0, 3) as event, idx (idx)}
					<div
						class="lg:hover:shadow-card transition-[filter,box-shadow] duration-300 lg:brightness-75 lg:hover:brightness-100 lg:[&>div>div>div>a]:hover:border-white lg:[&>div>div>div>div]:hover:after:scale-x-100 lg:[&>div>div>div>p]:hover:text-white"
					>
						<div
							class={`bg-default transition-transform-opacity-filter sm:h-112 h-96 w-full max-w-sm bg-cover bg-center duration-1000 ${
								delayEvents[idx]
							} ${
								isInView[2]
									? 'lg:translate-x-0 lg:opacity-100 lg:blur-0'
									: 'lg:-translate-x-full lg:opacity-0 lg:blur-[2px]'
							}`}
						>
							<div class="flex h-full flex-col justify-end pt-40">
								<div class="gradient px-4 pb-4 pt-16">
									<div
										class="before:bg-accent-dark after:bg-accent relative text-base text-white transition-colors duration-300 before:absolute before:-bottom-1 before:left-[calc(1rem*-1)] before:h-[2px] before:w-full before:content-[''] after:absolute after:-bottom-1 after:left-[calc(1rem*-1)] after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-['']"
									>
										<h4 class="line-clamp-1 sm:text-xl" title={event.attributes.title}>
											{event.attributes.title}
										</h4>
										<span class="text-sm text-neutral-400 lg:text-base"
											>{format(new Date(event.attributes.date), 'MMMM d, yyyy')}</span
										>
									</div>
									<p
										class="my-4 line-clamp-3 text-sm text-neutral-200 transition-colors duration-300 lg:text-base"
										title={event.attributes.description}
									>
										{event.attributes.description}
									</p>
									<a
										href={event.attributes.source}
										class="rounded-full border-[1px] border-neutral-400 px-3 py-1 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black sm:text-base"
										type="button"
										target="_blank"
										rel="noreferrer">Learn More</a
									>
								</div>
							</div>
						</div>
					</div>
				{/each}
			{/await}
		</div>
	</div>
</div>

<style>
	/* Used normal CSS instead of tailwind since it would be very verbose, it might end up being unreadable */
	.card-group:hover > :nth-child(1) {
		transform: translate(150%, -160%) rotate(-15deg);
	}

	.card-group:hover > :nth-child(2) {
		transform: translate(200%, 75%) rotate(15deg);
	}

	.card-group:hover > :nth-child(3) {
		transform: translate(-250%, -160%) rotate(15deg);
	}

	.card-group:hover > :nth-child(4) {
		transform: translate(-275%, 75%) rotate(-15deg);
	}

	.card-group:hover > :nth-child(5) {
		transform: translate(-50%, 15%) rotate(-20deg);
	}

	.card-group:hover > :nth-child(6) {
		transform: translate(-25%, 5%) rotate(-10deg);
	}

	.card-group:hover > :nth-child(7) {
		transform: translate(25%, 5%) rotate(10deg);
	}

	.card-group:hover > :nth-child(8) {
		transform: translate(50%, 15%) rotate(20deg);
	}

	.gradient {
		background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) 25%, rgb(0, 0, 0));
	}
</style>
