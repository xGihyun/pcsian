<script lang="ts">
	import { ChatBot } from '../../../features';
	import Chat from '../assets/icons/Chat.svelte';
	import { showChatBot } from '../../stores';
	import { CalendarIcon } from '../../calendar/assets/icons';

	let show = false;

	showChatBot.subscribe((value) => (show = value));
</script>

<ChatBot />
<div
	class={`fixed bottom-5 right-5 sm:bottom-10 sm:right-10 z-50 flex flex-col items-end gap-4 ${show ? 'hidden' : 'block'}`}
>
	<a
		href="/calendar"
		type="button"
		class="bg-accent shadow-nav-shadow flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 lg:hover:scale-90 lg:hover:brightness-110"
	>
		<CalendarIcon style="text-white h-5 w-5" />
	</a>
	<button
		class="bg-accent cursor-none shadow-nav-shadow flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 lg:hover:scale-90 lg:hover:brightness-110"
		on:click={() => {
			showChatBot.update(() => (show = !show));
		}}
	>
		<Chat style="text-white h-11 w-11" />
	</button>
</div>
