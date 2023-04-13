<script lang="ts">
	import { greetings, replaceWordsWithLinks } from '$lib/chatbot';
	import { onMount } from 'svelte';
	import { ArrowClockwise, Check } from '../../../assets/icons';

	export let type: string;
	export let message: string;
	export let responseDone: boolean;

	onMount(() => {
		const elements: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(`[data-response='true']`);
		const lastResponseElement = elements[elements.length - 1];

		// Only replace words with links after the response is done so it wouldn't be interrupted
		if (responseDone) {
			if (elements) {
				for (let i = 0; i < elements.length; i++) {
					const originalContent = elements[i].innerText;
					elements[i].innerHTML = replaceWordsWithLinks(originalContent);
				}
			} else {
				const originalContent = lastResponseElement.innerText;
				lastResponseElement.innerHTML = replaceWordsWithLinks(originalContent);
			}
		}
	});
</script>

<div class="flex items-center gap-2 text-base">
	{#if type === 'loading'}
		<ArrowClockwise style="text-amber-500 h-6 w-6 animate-spin" />
		Generating answers...
	{:else if type === 'assistant' && !greetings.includes(message)}
		<Check style="text-green-500 h-6 w-6" />
		Generating answers...
	{/if}
</div>
<div class={`flex ${type === 'user' ? 'justify-end' : 'justify-start'}`}>
	{#if message !== ''}
		<p
			data-response={type !== 'user'}
			class={`shadow-chat-msg max-w-[75%] break-words rounded-2xl px-4 py-2 text-base sm:text-lg ${
				type === 'user'
					? 'to-accent bg-gradient-to-r from-amber-500 text-white'
					: 'bg-white text-black'
			}`}
		>
			{message}
		</p>
	{/if}
</div>
