<script lang="ts">
	import type { Chat } from '../../../Types';
	import { Close, Robot, Send, User } from '../assets/icons';
	import { CONDITION } from '../constants';
	import { showChatBot } from '../../stores';
	import { openai } from '../api';
	import { onMount } from 'svelte';
	import LoadingChat from '../../../assets/animations/LoadingChat.svelte';

	let show = false;
	let isLoading = false;
	let input: HTMLInputElement;
	let prompt: string;
	let chatHistory: Chat[] = [];
	let responseText: string;

	showChatBot.subscribe((value) => (show = value));

	async function getResponse() {
		input.value = '';

		// Store the user's prompt
		chatHistory = [...chatHistory, { type: 'user', text: prompt }];

		isLoading = true;

		// Get response
		// Now using the official ChatGPT model
		const response = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: [
				{ role: 'system', content: CONDITION },
				{ role: 'assistant', content: prompt }
			],
			temperature: 0.5,
			max_tokens: 512
		});

		// TypeScript stuff
		if (
			response &&
			response.data.choices &&
			response.data.choices[0].message &&
			response.data.choices[0].message.content &&
			response.status === 200
		) {
			responseText = response.data.choices[0].message.content as string;
		}

		// After the bot responds, store it as well
		chatHistory = [...chatHistory, { type: 'bot', text: responseText }];

		isLoading = false;

		prompt = '';
	}

	// Initial greeting
	onMount(() => {
		chatHistory = [...chatHistory, { type: 'bot', text: 'Good day! How can I help?' }];
	});
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
			{#if isLoading}
				<div class="flex flex-row items-center gap-4 bg-neutral-700 p-4">
					<div class="bg-accent rounded-sm p-2">
						<Robot style="h-[20px] w-[20px]" />
					</div>
					<div class="pl-4">
						<LoadingChat />
					</div>
				</div>
			{/if}
			<div class="h-28" />
		</div>
		<span class="absolute left-0 bottom-0 h-32 w-full bg-gradient-to-t from-black opacity-50" />
		<div
			class="absolute left-[50%] bottom-3 w-[80%] -translate-x-[50%] rounded-full bg-neutral-700 p-3"
		>
			<form class="flex" data-sveltekit-noscroll>
				<input
					class="w-full bg-transparent outline-none"
					type="text"
					bind:value={prompt}
					bind:this={input}
					placeholder="Aa"
				/>
				<button on:click={getResponse}>
					<Send
						style="h-[20px] w-[20px] hover:text-accent hover:scale-110 transition-all duration-300"
					/>
				</button>
			</form>
		</div>
	</div>
</div>
