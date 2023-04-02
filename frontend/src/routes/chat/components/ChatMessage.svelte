<script lang="ts">
	import { replaceWordsWithLinks } from '$lib/chatbot';
	import { onMount } from 'svelte';
	import { ArrowClockwise, Check } from '../../../assets/icons';

	export let type: string;
	export let message: string;
	export let responseDone: boolean;

	const initialMessage = 'Good day! How can I help?';

	onMount(() => {
		const element = document.querySelectorAll('[data-response]');
		const lastResponseElement = element[element.length - 1];

		// Only replace words with links after the response is done so it wouldn't be interrupted
		if (responseDone) {
			const originalContent = lastResponseElement.innerHTML;
			lastResponseElement.innerHTML = replaceWordsWithLinks(originalContent);
		}
	});
</script>

<div class="flex items-center gap-2 text-base">
	{#if type === 'loading'}
		<ArrowClockwise style="text-amber-500 h-6 w-6 animate-spin" />
		Generating answers...
	{:else if type === 'assistant' && message !== initialMessage}
		<Check style="text-green-500 h-6 w-6" />
		Generating answers...
	{/if}
</div>
<div class={`flex ${type === 'user' ? 'justify-end' : 'justify-start'}`}>
	{#if message !== ''}
		<p
			data-response
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
