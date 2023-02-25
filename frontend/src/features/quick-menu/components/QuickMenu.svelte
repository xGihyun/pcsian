<script lang="ts">
	import ChatBot from '../../chat-bot/components/ChatBot.svelte';
	import Chat from '../assets/icons/Chat.svelte';
	import { showChatBot } from '../../stores';
	import CalendarIcon from '../../calendar/assets/icons/CalendarIcon.svelte';

	let show = false;

	showChatBot.subscribe((value) => (show = value));
</script>

<ChatBot />
<div class={`fixed flex flex-col gap-4 items-end bottom-10 right-10 z-50 ${show ? 'hidden' : 'block'}`}>
	<a
		href="/calendar"
		type="button"
		class="bg-accent shadow-nav-shadow flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 lg:hover:brightness-110 lg:hover:scale-90"
	>
		<CalendarIcon style="text-white h-5 w-5" />
	</a>
	<button
		class="bg-accent shadow-nav-shadow flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 lg:hover:brightness-110 lg:hover:scale-90"
		on:click={() => {
			showChatBot.update(() => (show = !show));
		}}
	>
		<Chat style="text-white h-11 w-11" />
	</button>
</div>
