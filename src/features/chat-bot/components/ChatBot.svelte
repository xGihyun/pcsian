<script lang="ts">
	import type { Chat } from '../../../Types';
	import { Close, Robot, Send, User } from '../assets/icons';
	import { CONDITION } from '../constants';
	import { showChatBot } from '../../stores';
	import { openai } from '../api';
	import { onMount } from 'svelte';

	let show = false;
	let input: HTMLInputElement;
	let prompt: string;
	let chatHistory: Chat[] = [];

	showChatBot.subscribe((value) => (show = value));

	async function getResponse() {
		input.value = '';

		// Store the user's prompt
		chatHistory = [...chatHistory, { type: 'user', text: prompt }];

		// Get response
		const response = await openai.createCompletion({
			model: 'text-davinci-003',
			prompt: `${CONDITION} ${prompt}.`,
			max_tokens: 100,
			temperature: 0.9
		});

		const responseText = response.data.choices[0].text as string;

		// After the bot responds, store it as well
		chatHistory = [...chatHistory, { type: 'bot', text: responseText }];

		prompt = '';
	}

	// Initial greeting
	onMount(() => {
		chatHistory = [...chatHistory, { type: 'bot', text: "Good day! How can I help?" }];
	})
</script>

<div
	class={`fixed bottom-0 right-0 z-50 w-full max-w-lg text-white md:bottom-10 md:right-10 ${
		show ? 'block' : 'hidden'
	}`}
>
	<div class="flex w-full items-center justify-end bg-neutral-900 text-white">
		<button on:click={() => showChatBot.update(() => (show = !show))}>
			<Close style="text-white h-8 w-8" />
		</button>
	</div>
	<div class="relative">
		<div class="shadow-chat h-[50vh] overflow-y-scroll bg-neutral-800">
			{#each chatHistory as chat, idx (idx)}
				{#if chat.type === 'user'}
					<div class="flex flex-row items-center gap-4 p-4">
						<div class="rounded-sm bg-emerald-600 p-2">
							<User style="h-[20px] w-[20px]" />
						</div>
						<span class="w-fit break-words">{chat.text}</span>
					</div>
				{:else}
					<div class="flex flex-row items-center gap-4 bg-neutral-700 p-4">
						<div class="bg-accent rounded-sm p-2">
							<Robot style="h-[20px] w-[20px]" />
						</div>
						<span class="w-fit break-words">{chat.text}</span>
					</div>
				{/if}
			{/each}
			<!-- <div class="flex flex-row items-center gap-4 p-4">
				<div class="rounded-sm bg-emerald-600 p-2">
					<User style="h-[20px] w-[20px]" />
				</div>
				<span class="w-fit break-words">hello adjasdasdiasd</span>
			</div>
			<div class="flex flex-row items-center gap-4 bg-neutral-700 p-4">
				<div class="bg-accent rounded-sm p-2">
					<Robot style="h-[20px] w-[20px]" />
				</div>
				<span class="w-fit break-words"
					>Test chat dasdsadasdashduashdaushduashdasuhdhsau lmaoooadasidasdhuasdhasd</span
				>
			</div> -->
			<div class="h-28" />
		</div>
		<span class="absolute left-0 bottom-0 h-32 w-full bg-gradient-to-t from-black opacity-50" />
		<div
			class="absolute left-[50%] bottom-3 w-[80%] -translate-x-[50%] rounded-full bg-neutral-700 p-3"
		>
			<form class="flex">
				<input
					class="w-full bg-transparent outline-none"
					type="text"
					bind:value={prompt}
					bind:this={input}
					placeholder="Aa"
				/>
				<button on:click={getResponse}>
					<Send style="h-[20px] w-[20px] hover:text-accent hover:scale-110 transition-all duration-300" />
				</button>
			</form>
		</div>
	</div>
</div>
