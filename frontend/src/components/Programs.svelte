<script lang="ts">
	import OrangeBlob1 from '../assets/blobs/OrangeBlob1.svelte';
	import { kessokuBand } from '../assets/images';
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

	// Replace classes after the animation
	function changeDuration(inView: boolean, children: HTMLCollection) {
		if (inView) {
			// Use setTimeout to wait until the animation finishes before replacing/removing transition classes
			setTimeout(() => {
				children[0].classList.replace('duration-1000', 'duration-300');
				children[0].classList.remove(...delay);
				children[0].classList.remove('pointer-events-none');
			}, 1300);
		}
	}
</script>

<div class="py-32 md:py-60">
	<div
		class="relative flex h-full flex-col items-center justify-between gap-20 px-[10%] pb-40 lg:flex-row"
	>
		<div
			class="flex w-full flex-col text-white lg:max-w-[50%]"
			use:inview={options}
			on:change={({ detail }) => {
				isInView[0] = detail.inView;
			}}
		>
			<h2
				class={`font-gt-walsheim-pro-medium text-3xl transition-all duration-1000 ease-in-out lg:text-5xl ${
					isInView[0]
						? 'md:translate-y-0 md:opacity-100 md:blur-0'
						: 'md:translate-y-full md:opacity-0 md:blur-[2px]'
				}`}
			>
				Discover the Power of Personalized Education
			</h2>
			<span
				class={`bg-accent my-8 inline-block h-[2px] w-full origin-left rounded-full transition-all delay-700 duration-1000 ease-in-out ${
					isInView[0] ? 'md:scale-x-100' : 'md:scale-x-0'
				}`}
			/>
			<p
				class={`text-sm transition-all delay-1000 duration-1000 ease-in-out sm:text-lg ${
					isInView[0]
						? 'md:translate-y-0 md:opacity-100 md:blur-0'
						: 'md:translate-y-full md:opacity-0 md:blur-[2px]'
				}`}
			>
				At Pateros Catholic School, we offer a comprehensive educational experience for students in
				grades K-12. Our academic programs are designed to provide a strong foundation for our
				students and help them reach their full potential. With our commitment to academic
				excellence, personalized learning, and a supportive community, our academic programs provide
				an exceptional educational experience for all students.
			</p>
		</div>
		<div class="relative hidden h-full w-full items-center justify-center lg:flex">
			<OrangeBlob1 />
			<a
				href="https://www.deviantart.com/haerge/art/Kessoku-Band-Bocchi-The-Rock-936713092"
				rel="noreferrer"
				target="_blank"
			>
				<img src={kessokuBand} alt="" class="float-shadow z-10 w-full max-w-xl" />
			</a>
		</div>
	</div>
	<h3
		class={`mb-4 text-center text-2xl uppercase tracking-widest text-white transition-all duration-1000 ease-in-out ${
			isInView[1]
				? 'md:translate-y-0 md:opacity-100 md:blur-0'
				: 'md:translate-y-full md:opacity-0 md:blur-[2px]'
		}`}
		use:inview={options}
		on:change={({ detail }) => {
			isInView[1] = detail.inView;
		}}
	>
		Programs
	</h3>
	<div class="flex w-full flex-col items-center justify-center gap-16 px-[10%] lg:flex-row">
		{#each programs as program, idx (idx)}
			<div
				class={`${program.bg} h-96 w-full max-w-sm bg-cover transition-all duration-1000 ${
					delay[idx]
				} ${
					isInView[1]
						? 'md:translate-x-0 md:opacity-100 md:blur-0'
						: 'md:-translate-x-full md:opacity-0 md:blur-[2px]'
				}`}
				use:inview={options}
				on:change={({ detail }) => {
					changeDuration(isInView[1], detail.node.children);
				}}
			>
				<div class="flex h-full flex-col justify-end">
					<div class="gradient h-1/2 p-4">
						<h4
							class="after:bg-accent relative text-base sm:text-xl text-white after:absolute after:left-[calc(1rem*-1)] after:-bottom-1 after:h-[2px] after:w-full after:content-['']"
						>
							{program.title}
						</h4>
						<p class="my-4 text-sm sm:text-base text-white">
							{program.description}
						</p>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							href={program.path}
							class="mt-4 rounded-full border-[1px] border-white py-1 px-3 text-sm sm:text-base text-white transition-colors duration-300 hover:bg-white hover:text-black"
							type="button">Learn More</a
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<!-- <h3
		class="font-gt-walsheim-pro-medium mb-4 text-center text-2xl uppercase tracking-widest text-white"
	>
		Supported By
	</h3>
	<div class="flex flex-row justify-center gap-20 px-[10%]">
		<img class="h-52" src={mapsa} alt="mapsa" />
		<img class="h-52" src={ceap} alt="ceap" />
		<img class="h-52" src={padss} alt="padss" />
		<img class="h-52" src={paascu} alt="paascu" />
	</div> -->
</div>
