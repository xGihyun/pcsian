<script lang="ts">
	import { pcsLogoNew } from '../../assets/images';
	import { Send } from '../../features/chat-bot/assets/icons';
	import type { ChatCompletionRequestMessage } from 'openai';
	import { SSE } from 'sse.js';
	import ChatMessage from './components/ChatMessage.svelte';
	import { Broom, Comments, Plus, Stop } from '../../assets/icons';
	import { onMount } from 'svelte';
	import { conversationHistory } from '$lib/stores';
	import { greetings } from '$lib/chatbot';

	let scrollToDiv: HTMLDivElement;
	let toggleChat = true;
	let responseDone = true;
	let textArea: HTMLTextAreaElement;

	function autoResize() {
		if (textArea) {
			textArea.style.height = '24px';
			textArea.style.height = `${textArea.scrollHeight}px`;
		}
	}

	function scrollToBottom() {
		setTimeout(() => {
			if (scrollToDiv) {
				scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
			}
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

		if (textArea) {
			textArea.style.height = '24px';
		}

		conversationHistory.update(
			() => (chatMessages = [...chatMessages, { role: 'user', content: query }])
		);

		// Set up Server Sent Events (SSE) for streaming
		eventSource = new SSE('../api/chat', {
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

	function newTopic() {
		const random = Math.floor(Math.random() * 5);

		conversationHistory.update(
			() => (chatMessages = [{ role: 'assistant', content: greetings[random] }])
		);
	}

	function handleError<T>(err: T) {
		loading = false;
		query = '';
		answer = '';

		console.error(err);
	}

	onMount(() => scrollToBottom());

	const faqs = [
		{
			question: 'What are the admission requirements?',
			answer: 'Answer',
			show: false
		},
		{
			question: 'How much is the tuition fee?',
			answer: 'Around 40,000php.',
			show: false
		},
		{
			question: "What is the school's grading system?",
			answer: 'Answer',
			show: false
		},
		{
			question: 'How does the school communicate with parents and guardians?',
			answer: 'Go to school.',
			show: false
		},
		{
			question: "What is the school's policy on dress code?",
			answer: 'Shorts, sando, ripped jeans, etc. not allowed.',
			show: false
		},
		{
			question: 'What is the class size for each grade level?',
			answer: 'Around 40 students, but Senior High School class size varies based on the strand.',
			show: false
		},
		{
			question: 'Which organizations are PCS affiliated with?',
			answer: 'PaDSS, MASPSA, CEAP, & PAASCU',
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
			title: '🧐 Know more about PCS',
			query: 'Does Pateros Catholic School use an e-Learning platform?'
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

<div class="shadow-custom-1 relative h-full w-full max-w-7xl">
	<div class="relative h-full w-full max-w-7xl overflow-y-scroll px-[5%]">
		<div class="flex flex-col items-center justify-center pb-10 pt-32 sm:pb-20 sm:pt-40">
			<div class="mb-10 flex flex-col items-center justify-center">
				<img class="mb-10 h-28 w-28" src={pcsLogoNew} alt="pcs" />
				<h1 class="font-gt-walsheim-pro-medium mb-2 text-center text-2xl text-black sm:text-4xl">
					Welcome to the new PCS assistant
				</h1>
				<p class="text-center text-base text-black sm:text-lg">
					Your AI-powered chatbot for Pateros Catholic School
				</p>
			</div>
			<div class="mb-10 flex flex-col gap-7 sm:gap-10 md:flex-row">
				{#each initialQuestions as question, idx (idx)}
					<div class="w-full flex-1">
						<div class="flex flex-col gap-2">
							<div class="text-center text-base sm:text-lg">
								{question.title}
							</div>
							<button
								class="hover:shadow-chat-msg border-accent text-accent h-full rounded-2xl border-[1px] px-4 py-2 text-sm transition-[box-shadow,filter] duration-300 hover:brightness-90 sm:py-4 sm:text-base"
								on:click={() => {
									query = question.query;
									handleSubmit();
								}}
							>
								"{question.query}"
							</button>
						</div>
					</div>
				{/each}
			</div>
			<div class="text-center sm:px-20">
				<p class="text-sm sm:text-lg">
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
			<hr class="my-5 w-full" />
		</div>
		<div class="flex flex-col gap-4">
			{#each chatMessages as message, idx (idx)}
				<ChatMessage type={message.role} message={message.content} {responseDone} />
				<!-- <ChatMessage type={message.role} message={message.content} />
				<ChatMessage type={message.role} message={message.content} />
				<ChatMessage type={message.role} message={message.content} />
				<ChatMessage type={message.role} message={message.content} /> -->
			{/each}
			{#if answer}
				<ChatMessage type={'assistant'} message={answer} {responseDone} />
			{/if}
			{#if loading}
				<ChatMessage type={'loading'} message={''} {responseDone} />
			{/if}
		</div>
		<div class="h-40" bind:this={scrollToDiv} />
	</div>

	<!-- Message input -->
	<div class="fixed bottom-0 left-0 h-40 w-full lg:absolute">
		<div class="h-40">
			<div class="h-1/4 w-full bg-gradient-to-t from-neutral-50" />
			<div class="h-3/4 w-full bg-neutral-50" />
		</div>
	</div>
	<div class="fixed bottom-16 left-1/2 w-full max-w-4xl -translate-x-1/2 lg:absolute">
		<div class="relative flex w-full justify-center">
			<div class="relative flex w-[90%] gap-4 2xl:w-full">
				<div class="flex items-end">
					<button
						class="to-accent flex h-12 items-center justify-between gap-3 rounded-full bg-gradient-to-r from-amber-500 p-3 text-white transition-[filter] duration-300 hover:brightness-90"
						on:click={newTopic}
						aria-label="new topic"
					>
						<Broom style="h-6 w-6 text-white" />
						<span class="hidden text-base sm:block">New topic</span>
					</button>
				</div>
				<div class="relative flex h-full flex-1 flex-col items-center gap-4">
					<button
						class={`border-accent z-10 flex w-fit items-center gap-1 rounded-lg border-[1px] bg-white px-2 py-1 transition-[transform,opacity] delay-300 duration-500 ${
							!responseDone ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'
						}`}
						on:click={stopResponding}
						aria-label="stop responding"
					>
						<Stop style="h-6 w-6 text-accent" />
						<span class="text-accent text-base">Stop Responding</span>
					</button>
					<div
						class={`border-accent shadow-chat-msg-sm relative z-20 h-full w-full rounded-t-lg border-b-4 bg-neutral-100 px-3 py-2 transition-[height,border-radius] duration-300 ease-in-out`}
					>
						<div class="relative flex h-full items-center">
							<div class="flex h-full items-start">
								<Comments style="h-5 w-5" />
							</div>
							<form class="contents" data-sveltekit-noscroll>
								<textarea
									class="relative h-6 max-h-40 w-full resize-none border-none bg-transparent pl-3 pr-10 text-base text-black outline-none"
									placeholder="Aa"
									maxlength="4000"
									enterkeyhint="send"
									spellcheck="false"
									autocapitalize="off"
									aria-label="ask chatbot"
									bind:value={query}
									bind:this={textArea}
									on:input={autoResize}
									on:keydown={(event) => {
										if (event.key === 'Enter') {
											event.preventDefault();
											handleSubmit();
										}
									}}
								/>
							</form>
							{#if query}
								<div class="relative flex h-full items-start">
									<button
										class="absolute right-0 px-3"
										on:click={handleSubmit}
										aria-label="submit input"
									>
										<Send
											style="h-5 w-5 hover:scale-125 hover:brightness-110 transition-[transform,filter] duration-300 text-accent"
										/>
									</button>
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- FAQs -->
<!-- Could be a component itself -->
<div
	class={`${
		!toggleChat ? 'absolute block' : 'hidden'
	} h-full w-full overflow-x-hidden overflow-y-scroll bg-gradient-to-t from-neutral-900 to-neutral-800 px-[5%] py-40 lg:relative lg:block lg:w-auto`}
>
	<div class="mb-10 sm:mb-20">
		<h1 class="font-gt-walsheim-pro-medium mb-2 text-center text-2xl text-white sm:text-4xl">
			Frequently Asked Questions
		</h1>
		<p class="text-center text-base text-white sm:text-lg">
			Can't find your question? Ask our chatbot!
		</p>
	</div>
	<div class="flex flex-col gap-4">
		{#each faqs as faq, idx (idx)}
			<div
				class="after:bg-accent relative before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-white before:bg-opacity-20 before:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
			>
				<button
					class="relative flex w-full items-center transition-[filter] duration-300"
					on:click={() => (faq.show = !faq.show)}
				>
					<div
						class="font-gt-walsheim-pro-medium flex h-full w-full items-center break-words px-4 py-2 text-left text-xl text-white"
					>
						{faq.question}
					</div>
					<div class="flex h-full items-center">
						<Plus
							style={`h-12 w-12 text-accent transition-transform duration-300 ${
								faq.show ? 'rotate-[135deg] scale-75' : 'rotate-0 scale-100'
							}`}
						/>
					</div>
				</button>
				<div class={`px-4 py-2 text-lg text-neutral-300 ${faq.show ? 'block' : 'hidden'}`}>
					{faq.answer}
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- Bottom navbar to switch between chat and faqs for mobile devices -->
<div
	class={`fixed bottom-0 left-0 flex w-full justify-center border-t-2 lg:hidden ${
		toggleChat ? 'border-neutral-200 bg-white' : 'border-neutral-800 bg-neutral-950'
	}`}
>
	<button
		class={`px-4 py-2 ${toggleChat ? 'text-accent' : 'text-white'}`}
		on:click={() => {
			toggleChat = true;
		}}>Chat</button
	>
	<button
		class={`px-4 py-2 ${!toggleChat ? 'text-accent' : 'text-black'}`}
		on:click={() => {
			toggleChat = false;
		}}>FAQs</button
	>
</div>
