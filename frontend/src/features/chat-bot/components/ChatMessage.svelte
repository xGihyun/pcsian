<script lang="ts">
	import { replaceWordsWithLinks } from '$lib/chatbot';
	import { onMount } from 'svelte';
	import LoadingChat from '../assets/animations/LoadingChat.svelte';
	import { Robot, User } from '../assets/icons';

	export let type: string;
	export let message: string;
	export let responseDone: boolean;

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

<div class={`flex flex-row items-center gap-4 p-4 ${type === 'user' ? '' : 'bg-neutral-700'}`}>
	<div class={`rounded-sm p-2 ${type === 'user' ? 'bg-emerald-600' : 'bg-accent'}`}>
		{#if type === 'user'}
			<User style="h-5 w-5" />
		{:else}
			<Robot style="h-5 w-5" />
		{/if}
	</div>
	{#if type === 'loading'}
		<div class="pl-4">
			<LoadingChat />
		</div>
	{:else}
		<p data-response class="w-fit break-words text-lg">{message}</p>
	{/if}
</div>
