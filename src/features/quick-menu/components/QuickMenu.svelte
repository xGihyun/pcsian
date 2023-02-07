<script lang="ts">
	import ChatBot from "../../chat-bot/components/ChatBot.svelte";
	import Chat from "../assets/icons/Chat.svelte";

  let showChatBot = false;
</script>

<ChatBot show={showChatBot} />
<div class="fixed bottom-10 right-10 z-50 h-20 w-20 rounded-full bg-white ">
	<button
		class="h-full w-full rounded-full border-2 border-black flex items-center justify-center"
    on:click={() => showChatBot = !showChatBot}
	>
		<Chat style="text-black h-[30px] w-[30px] " />
	</button>
</div>
