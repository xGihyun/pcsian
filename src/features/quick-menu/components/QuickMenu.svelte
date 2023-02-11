<script lang="ts">
	import ChatBot from '../../chat-bot/components/ChatBot.svelte';
	import Chat from '../assets/icons/Chat.svelte';
	// import menheraPeek from '../assets/images/menheraPeek.png';
	import { showChatBot } from '../../stores';

	let show = false;

	showChatBot.subscribe((value) => (show = value));
</script>

<ChatBot />
<!-- <div class="fixed bottom-14 right-0 z-50 h-36 w-36">
	<button class="" on:click={() => (showChatBot = !showChatBot)}>
		<Chat style={`text-white h-[50px] w-[50px] -scale-x-[1] drop-shadow-xl ${showChatBot ? 'hidden' : 'block'}`} />
	</button>
</div>
<div class="fixed bottom-0 -right-[130px] z-50 h-52 w-52">
	<button on:click={() => (showChatBot = !showChatBot)}>
		<img src={menheraPeek} alt="menhera chan" />
	</button>
</div> -->
<div class={`fixed bottom-10 right-10 z-50 ${show ? 'hidden' : 'block'}`}>
	<button
		class="bg-accent shadow-nav-shadow flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 lg:hover:brightness-110 lg:hover:scale-90"
		on:click={() => {
			showChatBot.update(() => (show = !show));
		}}
	>
		<Chat style="text-white h-[45px] w-[45px] -scale-x-[1]" />
	</button>
</div>
