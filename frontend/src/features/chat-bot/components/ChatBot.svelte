<script lang="ts">
	import { Close, Send } from '../assets/icons';
	import { showChatBot } from '$lib/stores';
	import type { ChatCompletionRequestMessage } from 'openai';
	import { SSE } from 'sse.js';
	import ChatMessage from './ChatMessage.svelte';

	let show = false;
	let scrollToDiv: HTMLDivElement;
	let responseDone = false;

	function scrollToBottom() {
		setTimeout(() => {
			scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
		}, 100);
	}

	let query = '';
	let answer = '';
	let loading = false;
	let chatMessages: ChatCompletionRequestMessage[] = [
		{ role: 'assistant', content: 'Good day! How can I help?' }
	];

	async function handleSubmit() {
		loading = true;
		responseDone = false;

		chatMessages = [...chatMessages, { role: 'user', content: query }];

		// Set up Server Sent Events (SSE)
		const eventSource = new SSE('../../../api/chat', {
			headers: {
				'Content-Type': 'application/json'
			},
			payload: JSON.stringify({ messages: chatMessages })
		});

		query = '';

		eventSource.addEventListener('error', handleError);

		// Stream the response
		eventSource.addEventListener('message', (e) => {
			scrollToBottom();
			try {
				loading = false;

				// Check if the response is done
				if (e.data === '[DONE]') {
					chatMessages = [...chatMessages, { role: 'assistant', content: answer }];
					answer = '';
					responseDone = true;
					return;
				}

				const completionResponse = JSON.parse(e.data);

				const [{ delta }] = completionResponse.choices;

				if (delta.content) {
					answer = (answer ?? '') + delta.content;
				}
			} catch (err) {
				handleError(err);
			}
		});

		eventSource.stream();
		scrollToBottom();
	}

	function handleError<T>(err: T) {
		loading = false;
		query = '';
		answer = '';

		console.error(err);
	}

	showChatBot.subscribe((value) => (show = value));
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
			{#each chatMessages as message, idx (idx)}
				<ChatMessage type={message.role} message={message.content} {responseDone} />
			{/each}
			{#if answer}
				<ChatMessage type={'assistant'} message={answer} {responseDone} />
			{/if}
			{#if loading}
				<ChatMessage type={'loading'} message={''} {responseDone} />
			{/if}
			<div class="h-28" bind:this={scrollToDiv} />
		</div>
		<span class="absolute left-0 bottom-0 h-32 w-full bg-gradient-to-t from-black opacity-50" />
		<div
			class="absolute left-[50%] bottom-3 w-[80%] -translate-x-[50%] rounded-full bg-neutral-700 p-3"
		>
			<form class="flex" data-sveltekit-noscroll>
				<input
					class="w-full bg-transparent outline-none"
					type="text"
					bind:value={query}
					placeholder="Aa"
				/>
				<button on:click={handleSubmit}>
					<Send
						style="h-[20px] w-[20px] hover:text-accent hover:scale-110 transition-all duration-300"
					/>
				</button>
			</form>
		</div>
	</div>
</div>
