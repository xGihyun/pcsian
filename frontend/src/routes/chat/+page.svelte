<script lang="ts">
	import { pcsLogoNew } from '../../assets/images';
	import { Send } from '../../features/chat-bot/assets/icons';
	import type { ChatCompletionRequestMessage } from 'openai';
	import { SSE } from 'sse.js';
	import ChatMessage from './components/ChatMessage.svelte';
	import { Broom, Comments, Minus, Plus } from '../../assets/icons';

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
			question: 'What is the chemical formula of Glucose?',
			answer: 'C6H12O6',
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
	];

	const initialQuestions = [
		{
			title: '🧐 Know more about PCS',
			query: 'Does Pateros Catholic School use an e-learning platform?'
		},
		{
			title: '🤔 Ask about the website',
			query: 'How was the Pateros Catholic School website made?'
		},
		{
			title: '🎨 Get creative',
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
							class="hover:shadow-chat-msg to-accent flex-1 rounded-2xl bg-gradient-to-r from-amber-500 px-4 py-2 text-base text-white transition-[box-shadow,filter] duration-300 hover:brightness-90"
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
			<div class="text-center text-lg px-20">
				<p>
					Let's learn about Pateros Catholic School. Chatbot is powered by
					<a
						href="https://openai.com"
						class="text-accent hover:underline"
						target="_blank"
						rel="noreferrer">OpenAI</a
					>
					with limited information and specific instructions. It may not be able to correctly answer
					all of your questions.
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
		<div class="absolute bottom-0 left-0 h-40 w-full">
			<div class="absolute bottom-0 left-0 h-1/2 w-full bg-neutral-50" />
			<div class="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-t from-neutral-50" />
		</div>
		<div class="relative w-full max-w-7xl">
			<div class="absolute left-1/2 -top-28 w-[90%] max-w-4xl -translate-x-1/2">
				<div class="flex w-full gap-4">
					<button
						class="to-accent flex h-12 justify-between gap-3 rounded-3xl bg-gradient-to-r from-amber-500 px-4 py-3 text-white transition-[filter] duration-300 hover:brightness-90"
						on:click={() => (chatMessages = [])}
					>
						<Broom style="h-6 w-6 text-white" />
						<span class="text-base"> New topic </span>
					</button>
					<div
						class={`shadow-chat-msg relative h-12 flex-1 rounded-3xl bg-white p-3 transition-[height,border-radius] duration-300 ease-in-out ${
							query
								? 'h-24 rounded-2xl [&>div]:opacity-100'
								: 'focus-within:h-24 focus-within:rounded-2xl hover:h-24 hover:rounded-2xl [&>div]:focus-within:opacity-100 [&>div]:hover:opacity-100'
						}`}
					>
						<div class="relative flex">
							<Comments style="h-5 w-5" />
							<form class="contents" data-sveltekit-noscroll>
								<div class="relative inline-grid w-full">
									<textarea
										class="relative col-start-1 row-start-1 w-full resize-none border-none bg-transparent pl-3 pr-10 text-base text-black outline-none"
										placeholder="Aa"
										maxlength="4000"
										enterkeyhint="send"
										spellcheck="false"
										autocapitalize="off"
										aria-label="Ask chatbot"
										bind:value={query}
										on:keydown={(event) => {
											if (event.key === 'Enter') {
												event.preventDefault();
												handleSubmit();
											}
										}}
									/>
								</div>
							</form>
							{#if query}
								<button class="absolute right-0 px-3" on:click={handleSubmit}>
									<Send
										style="h-5 w-5 hover:scale-125 hover:brightness-110 transition-[transform,filter] duration-300 text-accent"
									/>
								</button>
							{/if}
						</div>
						<div
							class="absolute bottom-0 flex items-center py-3 text-base text-neutral-500 opacity-0 transition-opacity duration-300"
						>
							{query.length}/4000
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div
	class="hidden h-full min-w-[30rem] max-w-full flex-1 flex-col gap-4 overflow-x-hidden overflow-y-scroll bg-white px-[5%] py-40 xl:flex"
>
	<h1 class="font-gt-walsheim-pro-medium mb-10 text-4xl text-black">FAQs</h1>
	{#each faqs as faq, idx (idx)}
		<button
			class="shadow-chat-msg flex max-w-full items-center rounded-2xl transition-[filter] duration-300 hover:brightness-75"
			on:click={() => (faq.show = !faq.show)}
		>
			<div class="to-accent flex h-full items-center rounded-l-2xl bg-gradient-to-r from-amber-500">
				<Plus
					style={`h-12 w-12 text-white transition-transform duration-300 ${
						faq.show ? 'rotate-[135deg] scale-75' : 'rotate-0 scale-100'
					}`}
				/>
			</div>
			<div
				class="font-gt-walsheim-pro-medium flex h-full w-full items-center break-words rounded-r-2xl bg-white px-4 py-2 text-left text-xl"
			>
				{faq.question}
			</div>
		</button>
		<div class={`px-4 text-lg ${faq.show ? 'block' : 'hidden'}`}>{faq.answer}</div>
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
