<script lang="ts">
	import { showChatBot } from '../../stores';
	import { CalendarIcon } from '../../calendar/assets/icons';
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
	<a
		href="/calendar"
		type="button"
		class="bg-accent shadow-nav-shadow flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 lg:hover:scale-90 lg:hover:brightness-110"
		aria-label="Go to calendar"
		data-sveltekit-preload-data="off"
	>
		<CalendarIcon style="text-white h-5 w-5" />
	</a>
	<button
		class="bg-accent shadow-nav-shadow flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full transition-all duration-300 lg:hover:scale-90 lg:hover:brightness-110"
		on:click={() => {
			showChatBot.update(() => (show = !show));
		}}
		aria-label="Show chatbot"
	>
		<ChatBotIcon style="text-white h-10 w-10 sm:h-12 sm:w-12" />
	</button>
</div>
