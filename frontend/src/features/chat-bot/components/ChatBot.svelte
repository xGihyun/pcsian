<script lang="ts">
	import { Close, Send } from '../assets/icons';
	import { conversationHistory, showChatBot } from '$lib/stores';
	import type { ChatCompletionRequestMessage } from 'openai';
	import { SSE } from 'sse.js';
	import ChatMessage from './ChatMessage.svelte';
	import { Stop } from '../../../assets/icons';

	let show = false;
	let scrollToDiv: HTMLDivElement;
	let responseDone = true;

	function scrollToBottom() {
		setTimeout(() => {
			scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
		}, 100);
	}

	let query = '';
	let answer = '';
	let loading = false;
	let chatMessages: ChatCompletionRequestMessage[];
	let eventSource: SSE;

	conversationHistory.subscribe((value) => (chatMessages = value));

	async function handleSubmit() {
		loading = true;
		responseDone = false;

		conversationHistory.update(
			() => (chatMessages = [...chatMessages, { role: 'user', content: query }])
		);

		// Set up Server Sent Events (SSE)
		eventSource = new SSE('../../../api/chat', {
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
					conversationHistory.update(
						() => (chatMessages = [...chatMessages, { role: 'assistant', content: answer }])
					);
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

	function stopResponding() {
		if (eventSource) {
			eventSource.close();
			conversationHistory.update(
				() => (chatMessages = [...chatMessages, { role: 'assistant', content: answer }])
			);
			answer = '';
			loading = false;
			responseDone = true;
			scrollToBottom();
		}
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
		<span class="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black opacity-50" />
		<div class="absolute bottom-3 left-[50%] w-[80%] -translate-x-[50%]">
			<div class="flex flex-col items-center gap-4">
				<button
					class={`border-accent z-10 flex w-fit items-center gap-1 rounded-lg border-[1px] bg-neutral-800 px-2 py-1 transition-[transform,opacity] delay-300 duration-500 ${
						!responseDone ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'
					}`}
					on:click={stopResponding}
				>
					<Stop style="h-6 w-6 text-accent" />
					<span class="text-accent text-base">Stop Responding</span>
				</button>
				<div class="z-20 w-full rounded-full bg-neutral-700 p-3">
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
	</div>
</div>
