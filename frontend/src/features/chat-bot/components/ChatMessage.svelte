<script lang="ts">
	import LoadingChat from '../assets/animations/LoadingChat.svelte';
	import { ChatBotIcon, User } from '../assets/icons';

	export let type: string;
	export let message: string;
</script>

<div class={`flex flex-row items-center gap-4 p-4 ${type === 'user' ? '' : 'bg-neutral-700'}`}>
	<div class={`rounded-sm p-2 ${type === 'user' ? 'bg-emerald-600' : 'bg-accent'}`}>
		{#if type === 'user'}
			<User style="h-5 w-5" />
		{:else}
			<ChatBotIcon style="h-5 w-5" />
		{/if}
	</div>
	{#if type === 'loading'}
		<div class="pl-4">
			<LoadingChat />
		</div>
	{:else}
		<span class="w-fit break-words text-lg">{message}</span>
	{/if}
</div>
