<script lang="ts">
	import Hero from '../components/Hero.svelte';
	import Programs from '../components/Programs.svelte';
	import { inview } from 'svelte-inview';

	let isInView = [false, false];

	const options = { unobserveOnEnter: true, rootMargin: '-10%' };
</script>

<Hero />
<div class="home-container">
	<div class="flex flex-col items-center justify-center pointer-events-none">
		<!-- <img src={logo} alt="pcs" class="w-36 h-36 mb-10" /> -->
		<h2
			class={`text-3xl md:text-4xl lg:text-5xl font-bold transition-1s-in-out ${
				isInView[0] ? 'md:slide-up' : 'md:initial-slide-up'
			}`}
			use:inview={options}
			on:change={({ detail }) => {
				isInView[0] = detail.inView;
			}}
		>
			Creating a Brighter Future
		</h2>
		<span
			class={`w-[90%] h-[2px] bg-accent rounded-full my-8 transition-1s-in-out ${
				isInView[0] ? 'md:expand' : 'md:initial-expand'
			}`}
			use:inview={options}
			on:change={({ detail }) => {
				isInView[0] = detail.inView;
			}}
		/>
		<p
			class={`text-xl md:text-2xl transition-1s-in-out ${isInView[1] ? 'md:slide-up' : 'md:initial-slide-up'}`}
			use:inview={options}
			on:change={({ detail }) => {
				isInView[1] = detail.inView;
			}}
		>
			Pateros Catholic School is more than just a school - it's a life experience. Our unique
			approach to learning enhances our students' education and helps them to explore their dynamic
			and diverse community. Pateros Catholic School provides a rich learning environment that has
			helped countless students get ahead.
			<!-- Founded in 1961, the School is located in Pateros, Metro Manila and reflects the diverse backgrounds and cultures of the area.
        We are extremely proud of our students and staff, who are always eager to learn, create and grow together.
        Give us a call if you need more information. -->
		</p>
	</div>
</div>
<div class="w-full h-[50vh] bg-accent relative">
	<div class="curve-white">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
				class="shape-fill"
			/>
		</svg>
	</div>
</div>
<Programs />
