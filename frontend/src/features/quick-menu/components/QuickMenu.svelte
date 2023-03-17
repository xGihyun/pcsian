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
	<!-- <a
		href="/calendar"
		type="button"
		class="shadow-nav-shadow flex w-40 items-center rounded-full bg-neutral-800 text-white transition-all duration-300 lg:hover:scale-90 lg:hover:brightness-110"
		aria-label="Go to calendar"
	>
		<div class="bg-accent flex h-12 w-12 items-center justify-center rounded-full">
			<CalendarIcon style="text-white h-5 w-5" />
		</div>
		<div class="flex flex-col pl-3 text-left">
			<span class="font-gt-walsheim-pro-medium text-sm">Calendar</span>
			<span class="text-xs opacity-50">View Events</span>
		</div>
	</a> -->
	<button
		class="shadow-nav-shadow flex w-44 items-center rounded-full bg-neutral-800 text-white transition-all duration-300 lg:hover:scale-90 lg:hover:brightness-110"
		on:click={() => {
			showChatBot.update(() => (show = !show));
		}}
		aria-label="Show chatbot"
	>
		<div class="bg-accent flex h-16 w-16 items-center justify-center rounded-full">
			<ChatBotIcon style="text-white h-10 w-10" />
		</div>
		<div class="flex flex-col pl-3 text-left">
			<span class="font-gt-walsheim-pro-medium text-base">Chatbot</span>
			<span class="text-sm opacity-50">Ask FAQs</span>
		</div>
	</button>
</div>
