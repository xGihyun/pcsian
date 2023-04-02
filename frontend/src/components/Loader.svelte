<script lang="ts">
	import { onMount } from 'svelte';
	import { logoLeaf, logoCandleBook } from '../assets/images';

	export let style: string;
	let show = false;

	// Just animate in code instead of CSS because CSS animations are not smooth for chromium for some reason
	onMount(() => {
		show = true;
	});
</script>

<div class={`fixed left-0 top-0 z-[999] h-screen w-full transform-gpu bg-black ${style}`}>
	<div class="flex h-full items-center justify-center">
		<!-- Circles -->
		<div class="scale-75 md:scale-100">
			<div
				class="circle-1 flex h-[280px] w-[280px] transform-gpu items-center justify-center rounded-full border-8 border-white opacity-0"
			>
				<div
					class="circle-2 flex h-[250px] w-[250px] transform-gpu items-center justify-center rounded-full border-4 border-neutral-400 opacity-0"
				>
					<div
						class="circle-3 h-[230px] w-[230px] transform-gpu rounded-full border-2 border-neutral-500 opacity-0"
					>
						<!-- PCS logo candle + book -->
						<img
							draggable="false"
							src={logoCandleBook}
							class={`absolute -right-4 h-40 -translate-x-10 transform-gpu transition-[transform,opacity] duration-700 ease-in-out ${
								show ? 'translate-y-[10%] opacity-100' : 'translate-y-[50%] opacity-0'
							}`}
							alt=""
						/>
						<!-- PCS logo leaf thing -->
						<img
							draggable="false"
							src={logoLeaf}
							class={`absolute bottom-0 h-40 transform-gpu transition-[transform,opacity] duration-700 ease-in-out ${
								show
									? '-translate-y-4 translate-x-2 rotate-0 opacity-100'
									: '-translate-y-2 translate-x-8 -rotate-45 opacity-0'
							}`}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="fixed -bottom-60 h-60 w-full bg-gradient-to-b from-black" />
</div>

<style>
	.circle-1 {
		animation: fade 500ms ease-in-out;
		animation-fill-mode: forwards;
	}

	.circle-2 {
		animation: fade 500ms ease-in-out 100ms;
		animation-fill-mode: forwards;
	}

	.circle-3 {
		animation: fade 500ms ease-in-out 200ms;
		animation-fill-mode: forwards;
	}

	/* Sometimes it's easier to do animations in vanilla CSS */
	@keyframes fade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
