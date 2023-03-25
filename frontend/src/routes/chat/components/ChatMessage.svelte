<script lang="ts">
	import { ArrowClockwise, Check } from '../../../assets/icons';

	export let type: string;
	export let message: string;

	const initialMessage = 'Good day! How can I help?';
</script>

<div class="flex items-center gap-2">
	{#if type === 'loading'}
		<ArrowClockwise style="text-amber-500 h-8 w-8 animate-spin" />
		Generating answers...
	{:else if type === 'assistant' && message !== initialMessage}
		<Check style="text-green-500 h-8 w-8" />
		Generating answers...
	{/if}
</div>
<div class={`flex ${type === 'user' ? 'justify-end' : 'justify-start'}`}>
	{#if message !== ''}
		<span
			class={`shadow-chat-msg max-w-[75%] break-words rounded-2xl px-4 py-2 text-lg ${
				type === 'user' ? 'bg-accent text-white' : 'bg-white text-black'
			}`}
		>
			{message}
		</span>
	{/if}
</div>
