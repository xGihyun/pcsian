<script lang="ts">
	import { pcsLogoNew } from '../../assets/images';
	import { Send } from '../../features/chat-bot/assets/icons';
	import type { ChatCompletionRequestMessage } from 'openai';
	import { SSE } from 'sse.js';
	import ChatMessage from './components/ChatMessage.svelte';
	import { Minus, Plus } from '../../assets/icons';

	let scrollToDiv: HTMLDivElement;

	function scrollToBottom() {
		setTimeout(() => {
			scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
		}, 100);
	}

	const initialMessage = 'Good day! How can I help?';
	let query = '';
	let answer = '';
	let loading = false;
	let chatMessages: ChatCompletionRequestMessage[] = [
		{ role: 'assistant', content: initialMessage }
	];

	async function handleSubmit() {
		loading = true;

		chatMessages = [...chatMessages, { role: 'user', content: query }];

		// Set up Server Sent Events (SSE)
		const eventSource = new SSE('../api/chat', {
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

	const faqs = [
		{
			question: 'Question',
			answer: 'Answer',
			show: false
		},
		{
			question: 'Question',
			answer: 'Answer',
			show: false
		},
		{
			question: 'Question',
			answer: 'Answer',
			show: false
		},
		{
			question: 'Question',
			answer: 'Answer',
			show: false
		},
		{
			question: 'Question',
			answer: 'Answer',
			show: false
		},
		{
			question: 'Question',
			answer: 'Answer',
			show: false
		}
	];

	const initialQuestions = [
		{
			title: 'Know more about PCS',
			query: 'Does Pateros Catholic School use an e-learning platform?'
		},
		{
			title: 'Ask about the website',
			query: 'How was the Pateros Catholic School website made?'
		},
		{
			title: 'Get creative',
			query: 'Write a poem about Pateros Catholic School.'
		}
	];
</script>

<div class="shadow-custom-1 relative w-full max-w-7xl">
	<div class="relative h-full w-full max-w-7xl overflow-y-scroll px-[5%]">
		<div class="flex flex-col items-center justify-center py-40">
			<div class="mb-10 flex flex-col items-center justify-center">
				<img class="mb-10 h-28 w-28" src={pcsLogoNew} alt="pcs" />
				<h1 class="font-gt-walsheim-pro-medium text-center text-4xl text-black">
					Welcome to Super Chatbot 9000
				</h1>
				<p class="text-center text-lg text-black">
					Your AI-powered chatbot for Pateros Catholic School
				</p>
			</div>
			<div class="mb-10 flex flex-col gap-10 md:flex-row">
				{#each initialQuestions as question, idx (idx)}
					<div class="flex flex-col gap-2">
						<div class="text-center text-lg">
							{question.title}
						</div>
						<button
							class="hover:shadow-chat-msg flex-1 rounded-2xl bg-white px-4 py-2 text-base transition-[box-shadow] duration-300"
							on:click={() => {
								query = question.query;
								handleSubmit();
							}}
						>
							"{question.query}"
						</button>
					</div>
				{/each}
			</div>
			<div class="text-center text-lg">
				<p>
					Let's learn about Pateros Catholic School together! Chatbot is powered by
					<a href="https://openai.com" class="text-accent hover:underline" target="_blank" rel="noreferrer">OpenAI</a>
					with limited information and specific instructions. It may not be able to correctly
					answer all of your questions.
				</p>
			</div>
		</div>
		<div class="flex flex-col gap-4">
			{#each chatMessages as message, idx (idx)}
				<ChatMessage type={message.role} message={message.content} />
				<!-- <ChatMessage type={message.role} message={message.content} />
				<ChatMessage type={message.role} message={message.content} />
				<ChatMessage type={message.role} message={message.content} />
				<ChatMessage type={message.role} message={message.content} />
				<ChatMessage type={message.role} message={message.content} />
				<ChatMessage type={message.role} message={message.content} />
				<ChatMessage type={message.role} message={message.content} />
				<ChatMessage type={message.role} message={message.content} />
				<ChatMessage type={message.role} message={message.content} />
				<ChatMessage type={message.role} message={message.content} />
				<ChatMessage type={message.role} message={message.content} /> -->
			{/each}
			{#if answer}
				<ChatMessage type={'assistant'} message={answer} />
			{/if}
			{#if loading}
				<ChatMessage type={'loading'} message={''} />
			{/if}
		</div>
		<div class="h-40" bind:this={scrollToDiv} />
	</div>
	<div class="relative flex w-full">
		<span class="from-accent-light absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t" />
		<div class="relative w-full max-w-7xl">
			<div
				class="shadow-chat-msg absolute left-1/2 -top-28 h-12 w-[90%] max-w-4xl -translate-x-1/2 rounded-3xl bg-white p-3 transition-[height,border-radius] duration-300 ease-in-out focus-within:h-24 focus-within:rounded-2xl hover:h-24 hover:rounded-2xl [&>div]:focus-within:opacity-100 [&>div]:hover:opacity-100"
			>
				<form class="flex" data-sveltekit-noscroll>
					<input
						class="w-full text-lg text-black outline-none"
						type="text"
						placeholder="Aa"
						maxlength="4000"
						bind:value={query}
					/>
					<button on:click={handleSubmit}>
						<Send
							style="h-[20px] w-[20px] hover:text-accent hover:scale-110 transition-all duration-300 text-neutral-500"
						/>
					</button>
				</form>
				<div
					class="absolute bottom-0 flex h-12 items-center text-base text-neutral-500 opacity-0 transition-opacity duration-300"
				>
					{query.length}/4000
				</div>
			</div>
		</div>
	</div>
</div>
<div class="hidden h-full flex-1 flex-col gap-4 bg-neutral-200 px-[5%] py-40 lg:flex">
	<h1 class="font-gt-walsheim-pro-medium mb-10 text-4xl text-black">Common FAQs</h1>
	{#each faqs as faq, idx (idx)}
		<button
			class="bg-accent shadow-chat-msg flex rounded-2xl transition-[filter] duration-300 hover:brightness-75"
			on:click={() => (faq.show = !faq.show)}
		>
			<div>
				<Plus
					style={`h-12 w-12 text-white transition-transform duration-300 ${
						faq.show ? 'rotate-[135deg] scale-75' : 'rotate-0 scale-100'
					}`}
				/>
			</div>
			<div
				class="font-gt-walsheim-pro-medium flex h-full w-full items-center rounded-r-2xl bg-white px-4 py-2 text-left text-xl"
			>
				{faq.question}
				{idx + 1}
			</div>
		</button>
		<div class={`px-4 text-lg ${faq.show ? 'block' : 'hidden'}`}>{faq.answer} {idx + 1}</div>
	{/each}
</div>

<style>
	:root {
		--scrollbar-track-light: rgb(245, 245, 245);
		--scrollbar-thumb-light: rgb(205, 127, 0);
	}

	@supports (scrollbar-color: var(--scrollbar-thumb-light) var(--scrollbar-track-light)) {
		* {
			scrollbar-color: var(--scrollbar-thumb-light) var(--scrollbar-track-light);
			scrollbar-width: thin;
		}
	}

	/* Other browsers */
	::-webkit-scrollbar {
		width: 0.25em;
	}

	::-webkit-scrollbar-track {
		background: var(--scrollbar-track-light);
	}

	::-webkit-scrollbar-thumb {
		background: var(--scrollbar-thumb-light);
		border-radius: 100vw;
	}
</style>
