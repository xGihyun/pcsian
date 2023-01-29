<script lang="ts">
	import Hero from '../components/Hero.svelte';
	import Programs from '../components/Programs.svelte';
	import { inview } from 'svelte-inview';
  import "../styles/transitions.css";
  import "../styles/curves.css";

	let isInView = [false, false, false];

	const options = { unobserveOnEnter: true, rootMargin: '-10%' };
</script>

<Hero />
<div class="home-container">
	<div class="flex flex-col items-center justify-center pointer-events-none">
		<h2
			class={`text-3xl lg:text-5xl font-bold transition-1s-in-out transform-gpu ${
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
			class={`w-full h-[2px] bg-accent rounded-full my-8 transition-1s-in-out transform-gpu ${
				isInView[0] ? 'md:expand' : 'md:initial-expand'
			}`}
			use:inview={options}
			on:change={({ detail }) => {
				isInView[0] = detail.inView;
			}}
		/>
		<p
			class={`text-xl md:text-2xl transition-1s-in-out transform-gpu delay-1000 ${
				isInView[0] ? 'md:slide-up' : 'md:initial-slide-up'
			}`}
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
<div class="w-full h-full bg-accent relative">
	<Programs />
</div>
<div class="bg-white h-full relative px-[10%] py-40">
	<div class="curve-accent">
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
	<div
		class={`home-h2 transition-1s-in-out transform-gpu ${
			isInView[1] ? 'md:slide-up' : 'md:initial-slide-up'
		}`}
		use:inview={options}
		on:change={({ detail }) => {
			isInView[1] = detail.inView;
		}}
	>
		<h2 class="px-10">What's happening?</h2>
		<span
			class={`w-full h-[2px] bg-accent rounded-full my-8 transition-1s-in-out transform-gpu ${
				isInView[1] ? 'md:expand' : 'md:initial-expand'
			}`}
			use:inview={options}
			on:change={({ detail }) => {
				isInView[1] = detail.inView;
			}}
		/>
	</div>
	<div class="flex flex-col lg:flex-row gap-5 justify-center">
		<iframe
			src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPCS.OfficialPage%2Fposts%2Fpfbid02BK1sBRu1PVZ7qiW6TknHHgQbbaT26wcX9XMyJdoMQvkAqNnRoumxfaYg1THzDRCsl&show_text=true&width=500"
			width="100%"
			height="634"
			title="fb-post-1"
			style="border:none;overflow:hidden"
			scrolling="no"
			frameborder="0"
			allowfullscreen={true}
			allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
		/>
		<iframe
			src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPCS.OfficialPage%2Fposts%2Fpfbid09VxSPgjyjBaACaeUyR23qAPicT6bWr2jSMpmGcZkhvRnb98yuv7NGzmhFZPWALwfl&show_text=true&width=500"
			width="100%"
			height="709"
			title="fb-post-2"
			style="border:none;overflow:hidden"
			scrolling="no"
			frameborder="0"
			allowfullscreen={true}
			allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
		/>
		<iframe
			src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPCS.OfficialPage%2Fposts%2Fpfbid06CQJPSaPCtTXUs6AqqkqErnXVZke5owTm7RRMuNaSfzhfGm7sLVCR61guiboqrcJl&show_text=true&width=500"
			width="100%"
			height="748"
			style="border:none;overflow:hidden"
			title="fb-post-3"
			scrolling="no"
			frameborder="0"
			allowfullscreen={true}
			allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
		/>
	</div>
</div>
