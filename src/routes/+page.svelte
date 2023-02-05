<script lang="ts">
	import Hero from '../components/Hero.svelte';
	import Programs from '../components/Programs.svelte';
	import { inview } from 'svelte-inview';
	import '../styles/curves.css';
	import CurveAccent from '../assets/curves/CurveAccent.svelte';
	import CurveWhiteTop from '../assets/curves/CurveWhiteTop.svelte';
	import CurveWhiteBottom from '../assets/curves/CurveWhiteBottom.svelte';

	let isInView = [false, false, false];

	const options = { unobserveOnEnter: true, rootMargin: '-10%' };
</script>

<!-- Hero section -->
<Hero />

<!-- After the hero section  -->
<div
	class="relative flex items-center bg-white px-[10%] pt-40 pb-32 text-center text-black md:px-[20%]"
>
	<div class="pointer-events-none flex flex-col items-center justify-center">
		<h2
			class={`transform-gpu text-3xl font-bold transition-all duration-1000 ease-in-out lg:text-5xl ${
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
			use:inview={options}
			on:change={({ detail }) => {
				isInView[0] = detail.inView;
			}}
		/>
		<p
			class={`transform-gpu text-xl transition-all delay-1000 duration-1000 ease-in-out md:text-2xl ${
				isInView[0]
					? 'md:translate-y-0 md:opacity-100 md:blur-0'
					: 'md:translate-y-full md:opacity-0 md:blur-[2px]'
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

<!-- Academic programs -->
<div class="relative bg-black">
	<CurveWhiteTop />
	<Programs />
	<CurveWhiteBottom />
</div>

<!-- Embedded Facebook posts -->
<div class="relative h-full bg-white px-[10%] py-40">
	<!-- <CurveAccent /> -->
	<div
		class={`relative mb-5 flex transform-gpu flex-col items-center justify-center whitespace-nowrap text-center text-3xl font-bold transition-all duration-1000 ease-in-out lg:text-5xl ${
			isInView[1]
				? 'md:translate-y-0 md:opacity-100 md:blur-0'
				: 'md:translate-y-full md:opacity-0 md:blur-[2px]'
		}`}
		use:inview={options}
		on:change={({ detail }) => {
			isInView[1] = detail.inView;
		}}
	>
		<h2 class="px-10">What's Happening?</h2>
		<span
			class={`bg-accent my-8 h-[2px] w-full transform-gpu rounded-full transition-all duration-1000 ease-in-out ${
				isInView[1] ? 'md:scale-x-100 md:delay-700' : 'md:scale-x-0'
			}`}
			use:inview={options}
			on:change={({ detail }) => {
				isInView[1] = detail.inView;
			}}
		/>
	</div>
	<div class="flex flex-col justify-center gap-5 lg:flex-row">
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
