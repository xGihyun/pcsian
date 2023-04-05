<script lang="ts">
	import { showChatBot } from '$lib/stores';
	import { ChatBotIcon } from '../../chat-bot/assets/icons';
	import { ChatBot } from '../..';

	let show = false;

	showChatBot.subscribe((value) => (show = value));
</script>

<ChatBot />
<div
	class={`fixed bottom-5 right-5 z-50 flex flex-col items-end gap-4 sm:bottom-10 sm:right-10 ${
		show ? 'hidden' : 'block'
	}`}
>
	<button
		class="shadow-nav-shadow flex w-44 items-center rounded-full bg-neutral-800 text-white transition-all duration-300 sm:w-52 lg:hover:scale-90 lg:hover:brightness-110"
		on:click={() => {
			showChatBot.update(() => (show = !show));
		}}
		aria-label="Show chatbot"
	>
		<div class="bg-accent flex h-16 w-16 items-center justify-center rounded-full sm:h-20 sm:w-20">
			<ChatBotIcon style="text-white h-10 w-10 sm:h-12 sm:w-12" />
		</div>
		<div class="flex flex-col pl-3 text-left">
			<span class="font-gt-walsheim-pro-medium text-base sm:text-xl">Chatbot</span>
			<span class="text-sm opacity-50 sm:text-base">Ask FAQs</span>
		</div>
	</button>
</div>
