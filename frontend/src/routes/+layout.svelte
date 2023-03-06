<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { Footer, Loading, Navbar } from '../components';
	import { QuickMenu } from '../features';
	import Transition from '../components/Transition.svelte';
	import { page } from '$app/stores';

	let loading = true;
	let display = 'block';
	let x = 0;
	let y = 0;
	let cursor: HTMLDivElement;

	function moveCursor(e: any, interacting: boolean) {
		x = e.clientX;
		y = e.clientY;

		interacting ? (cursor.style.scale = '1.25') : (cursor.style.scale = '1');

		cursor.style.left = `${x - 16}px`;
		cursor.style.top = `${y - 16}px`;
	}

	let interacting = false;

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 2000);

		setTimeout(() => {
			display = 'hidden';
		}, 3500);

		window.onmousemove = (e: any) => {
			const interactable = e.target.closest('a') || e.target.closest('button');

			interacting = interactable !== null;

			moveCursor(e, interacting);
		};
		window.onmousedown = () => (cursor.style.scale = '1.5');
		window.onmouseup = () => (cursor.style.scale = '1');
		window.onclick = () => {
			cursor.classList.add("animate-expand2");
			cursor.classList.add("after:animate-expand");

			setTimeout(() => {
				cursor.classList.remove("animate-expand2");
				cursor.classList.remove("after:animate-expand");
			}, 500)
		}
	});
</script>

<Loading
	style={`transition-all duration-1000 ${display} ${
		loading ? 'translate-y-0' : '-translate-y-full'
	}`}
/>

<div
	class="hidden lg:block pointer-events-none fixed z-[999] h-8 w-8 rounded-full bg-white mix-blend-difference transition-[scale] duration-150 after:fixed after:h-8 after:w-8 after:opacity-0 after:rounded-full after:border-[1px] after:border-red-500 after:content-['']"
	bind:this={cursor}
/>

<div class={`${loading ? 'hidden' : 'block'}`}>
	<Navbar />
	<QuickMenu />
	<Transition url={$page.url}>
		<main class="overflow-x-hidden">
			<slot />
		</main>
		<Footer />
	</Transition>
</div>
