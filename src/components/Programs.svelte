<script lang="ts">
	import gradeSchool from '../assets/images/gradeSchool.gif';
	import juniorHigh from '../assets/images/juniorHigh.gif';
	import seniorHigh from '../assets/images/seniorHigh.gif';
	import { inview } from 'svelte-inview';

	const programs = [
		{
			title: 'Grade School',
			image: gradeSchool,
			path: '/grade-school'
		},
		{
			title: 'Junior High',
			image: juniorHigh,
			path: '/junior-high'
		},
		{
			title: 'Senior High',
			image: seniorHigh,
			path: '/senior-high'
		}
	];

	// Delay for the staggered effect
	const delay = ['', 'delay-200', 'delay-400'];

	const options = { unobserveOnEnter: true, rootMargin: '-10%' };
	let isInView: boolean;

	// Replace classes after the animation
	function changeDuration(inView: boolean, children: HTMLCollection) {
		if (inView) {
			// Use setTimeout to wait until the animation finishes before replacing/removing transition classes
			setTimeout(() => {
				children[0].classList.replace('duration-1000', 'duration-300');
				children[0].classList.remove(delay[1]);
				children[0].classList.remove(delay[2]);
				children[0].classList.remove('pointer-events-none');
			}, 1300);
		}
	}
</script>

<div class="bg-accent relative flex h-full w-full items-center justify-center">
	<div class="curve-white">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
				opacity=".25"
				class="shape-fill"
			/>
			<path
				d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
				opacity=".5"
				class="shape-fill"
			/>
			<path
				d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
				class="shape-fill"
			/>
		</svg>
	</div>
	<div class="flex flex-col gap-5 px-[10%] py-40 lg:flex-row">
		{#each programs as program, idx (idx)}
			<a
				href={program.path}
				use:inview={options}
				on:change={({ detail }) => {
					isInView = detail.inView;
					changeDuration(isInView, detail.node.children);
				}}
			>
				<img
					src={program.image}
					alt="pcs"
					class={`transition-transform-opacity-filter pointer-events-none h-full w-full cursor-pointer shadow-md shadow-black brightness-[60%] duration-1000 hover:scale-105 hover:brightness-100 ${
						delay[idx]
					} ${
						isInView
							? 'md:translate-x-0 md:opacity-100 md:blur-0'
							: 'md:-translate-x-full md:opacity-0 md:blur-[2px]'
					}`}
				/>
			</a>
		{/each}
	</div>
</div>
