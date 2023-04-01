<script lang="ts">
	import OrangeBlob1 from '../assets/blobs/OrangeBlob1.svelte';
	// import { kessokuBand } from '../assets/images';
	import { inview } from 'svelte-inview';
	import '../styles/animations.css';

	const programs = [
		{
			title: 'Grade School',
			description:
				'Nurturing learning, character, and life skills for academic and personal success through a dynamic and holistic approach.',
			bg: 'bg-grade-school',
			path: '/grade-school'
		},
		{
			title: 'Junior High',
			description:
				'Fostering academic excellence and holistic development through Catholic teachings, creative talents, and social responsibility.',
			bg: 'bg-junior-high',
			path: '/junior-high'
		},
		{
			title: 'Senior High',
			description:
				'Empowering students for lifelong success through a holistic education that fosters critical thinking, practical skills, and ethical values.',
			bg: 'bg-senior-high',
			path: '/senior-high'
		}
	];

	// Delay for the staggered effect
	const delay = ['delay-600', 'delay-800', 'delay-1000'];

	const options = { unobserveOnEnter: true, rootMargin: '-10%' };
	let isInView = [false, false];
</script>

<div class="py-32 md:py-60">
	<div
		class="relative flex h-full flex-col items-center justify-between gap-20 px-[10%] pb-20 sm:pb-40 lg:flex-row"
	>
		<div
			class="flex w-full flex-col text-white lg:max-w-[50%]"
			use:inview={options}
			on:change={({ detail }) => {
				isInView[0] = detail.inView;
			}}
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
			<!-- <a
				href="https://www.deviantart.com/haerge/art/Kessoku-Band-Bocchi-The-Rock-936713092"
				rel="noreferrer"
				target="_blank"
			>
				<img src={kessokuBand} alt="" class="float-shadow z-10 w-full max-w-xl" />
			</a> -->
			<!-- <div class="bg-accent w-96 h-32 rounded-[12rem/4rem] absolute -bottom-20"></div> -->
			<div
				class={`card-group transition-transform-opacity-filter animate-float shadow-card-black-2 aspect-[5/7] w-72 duration-1000 ease-in-out ${
					isInView[0] ? 'lg:opacity-100 lg:blur-0' : 'lg:opacity-0 lg:blur-[2px]'
				}`}
			>
				<div
					class="bg-accent bg-img-5 absolute left-1/2 top-1/2 aspect-[5/7] w-28 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-2xl bg-opacity-25 bg-cover transition-transform duration-500 ease-in-out"
				/>
				<div
					class="bg-accent bg-img-6 absolute left-1/2 top-1/2 aspect-[5/7] w-28 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-2xl bg-opacity-25 bg-cover transition-transform duration-500 ease-in-out"
				/>
				<div
					class="bg-accent bg-img-7 absolute left-1/2 top-1/2 aspect-[5/7] w-28 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-2xl bg-opacity-25 bg-cover transition-transform duration-500 ease-in-out"
				/>
				<div
					class="bg-accent bg-img-8 absolute left-1/2 top-1/2 aspect-[5/7] w-28 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-2xl bg-opacity-25 bg-cover transition-transform duration-500 ease-in-out"
				/>
				<div
					class="bg-img-1 shadow-card-black-2 absolute aspect-[5/7] w-72 -translate-x-[15%] -rotate-[6deg] transform-gpu rounded-2xl bg-white bg-opacity-10 bg-cover transition-transform duration-500 ease-in-out"
				/>
				<div
					class="bg-img-2 shadow-card-black-2 absolute aspect-[5/7] w-72 -translate-x-[5%] -rotate-2 transform-gpu rounded-2xl bg-white bg-opacity-10 bg-cover transition-transform duration-500 ease-in-out"
				/>
				<div
					class="bg-img-3 shadow-card-black-2 absolute aspect-[5/7] w-72 translate-x-[5%] rotate-2 transform-gpu rounded-2xl bg-white bg-opacity-10 bg-cover transition-transform duration-500 ease-in-out"
				/>
				<div
					class="bg-img-4 shadow-card-black-2 absolute aspect-[5/7] w-72 translate-x-[15%] translate-y-[3%] rotate-[6deg] transform-gpu rounded-2xl bg-white bg-opacity-10 bg-cover transition-transform duration-500 ease-in-out"
				/>
			</div>
		</div>
	</div>
	<h3
		class={`transition-transform-opacity-filter mb-4 text-center text-2xl uppercase tracking-widest text-white duration-1000 ease-in-out ${
			isInView[1]
				? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
				: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
		}`}
		use:inview={options}
		on:change={({ detail }) => {
			isInView[1] = detail.inView;
		}}
	>
		Programs
	</h3>
	<div
		class="flex w-full flex-col items-center justify-center gap-8 px-[10%] md:flex-row lg:gap-16"
	>
		{#each programs as program, idx (idx)}
			<div
				class="lg:hover:shadow-card transition-[filter,box-shadow] duration-300 lg:brightness-75 lg:hover:brightness-100 lg:[&>div>div>div>p]:hover:text-white lg:[&>div>div>div>h4]:hover:after:scale-x-100 lg:[&>div>div>div>a]:hover:border-white"
			>
				<div
					class={`${
						program.bg
					} transition-transform-opacity-filter h-96 w-full max-w-sm bg-cover duration-1000 ${
						delay[idx]
					} ${
						isInView[1]
							? 'lg:translate-x-0 lg:opacity-100 lg:blur-0'
							: 'lg:-translate-x-full lg:opacity-0 lg:blur-[2px]'
					}`}
				>
					<div class="flex h-full flex-col justify-end">
						<div class="gradient px-4 pb-4 pt-16">
							<h4
								class="before:bg-accent-dark after:bg-accent relative text-base text-white transition-colors duration-300 before:absolute before:left-[calc(1rem*-1)] before:-bottom-1 before:h-[2px] before:w-full before:content-[''] after:absolute after:left-[calc(1rem*-1)] after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] sm:text-xl"
							>
								{program.title}
							</h4>
							<p class="my-4 text-sm text-neutral-200 transition-colors duration-300 lg:text-base">
								{program.description}
							</p>
							<a
								href={program.path}
								class="rounded-full border-[1px] border-neutral-400 py-1 px-3 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black sm:text-base"
								type="button">Learn More</a
							>
						</div>
					</div>
				</div>
			</div>
		{/each}
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
