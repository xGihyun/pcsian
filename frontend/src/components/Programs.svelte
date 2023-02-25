<script lang="ts">
	import OrangeBlob1 from '../assets/blobs/OrangeBlob1.svelte';
	import { kessokuBand } from '../assets/images';
	import { inview } from 'svelte-inview';
	import '../styles/animations.css';

	const programs = [
		{
			title: 'Grade School',
			bg: 'bg-grade-school',
			path: '/grade-school'
		},
		{
			title: 'Junior High',
			bg: 'bg-junior-high',
			path: '/junior-high'
		},
		{
			title: 'Senior High',
			bg: 'bg-senior-high',
			path: '/senior-high'
		}
	];

	// Delay for the staggered effect
	const delay = ['delay-1000', 'delay-1200', 'delay-1400'];

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

<div class="py-60">
	<div
		class="relative flex h-full flex-col items-center justify-between gap-20 px-[10%] pb-40 lg:flex-row"
	>
		<div
			class="flex w-full flex-col text-center text-white lg:max-w-[50%] lg:text-left"
			use:inview={options}
			on:change={({ detail }) => {
				isInView[0] = detail.inView;
			}}
		>
			<h2
				class={`text-3xl transition-all duration-1000 ease-in-out lg:text-5xl ${
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
				class={`transition-all delay-1000 duration-1000 ease-in-out ${
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
	<div class="flex w-full flex-col items-center justify-center gap-10 px-[10%] lg:flex-row">
		{#each programs as program, idx (idx)}
			<div
				class={`${program.bg} w-full max-w-sm bg-cover pt-32 transition-all duration-1000 ${
					delay[idx]
				} ${
					isInView[1]
						? 'md:translate-x-0 md:opacity-100 md:blur-0'
						: 'md:-translate-x-full md:opacity-0 md:blur-[2px]'
				}`}
				use:inview={options}
				on:change={({ detail }) => {
					isInView[1] = detail.inView;
					changeDuration(isInView[1], detail.node.children);
				}}
			>
				<div class="gradient p-4 pt-12">
					<h3
						class="after:bg-accent relative text-xl text-white after:absolute after:left-[calc(1rem*-1)] after:-bottom-1 after:h-[2px] after:w-full after:content-['']"
					>
						{program.title}
					</h3>
					<p class="my-4 text-sm text-white">
						A solid foundation for academic success and character development, with a focus on
						hands-on learning and creating a lifelong love of learning.
					</p>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href={program.path} class="mt-4 text-base text-white">Learn More</a>
				</div>
			</div>
		{/each}
	</div>
</div>
