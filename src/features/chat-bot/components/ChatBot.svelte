<script lang="ts">
	import { PUBLIC_OPENAI_API_KEY } from '$env/static/public';
	import { Configuration, OpenAIApi } from 'openai';
	import type { Chat } from '../../../Types';
	import Robot from '../assets/icons/Robot.svelte';
	import Send from '../assets/icons/Send.svelte';
	import User from '../assets/icons/User.svelte';
	import { CONDITION } from '../constants';

	const API_KEY = PUBLIC_OPENAI_API_KEY;

  export let show: boolean;

	const configuration = new Configuration({
		apiKey: API_KEY
	});

	const openai = new OpenAIApi(configuration);

	let prompt: string;
	let chatHistory: Chat[] = [];

	async function getResponse() {
		// Store the user's prompt
		chatHistory = [...chatHistory, { type: 'user', text: prompt }];

		const response = await openai.createCompletion({
			model: 'text-davinci-003',
			prompt: `${CONDITION} ${prompt}.`,
			max_tokens: 50,
			temperature: 1
		});

		const responseText = response.data.choices[0].text as string;

		// After the bot responds, store it as well
		chatHistory = [...chatHistory, { type: 'bot', text: responseText }];

		prompt = '';
	}
</script>

<div class={`fixed bottom-32 right-0 z-50 w-full max-w-lg text-white md:right-10 ${show ? "block" : "hidden"}`}>
	<div class="h-[40vh] overflow-y-scroll border-2 border-black bg-neutral-800">
		{#each chatHistory as chat, idx (idx)}
			{#if chat.type === 'user'}
				<div class="flex flex-row items-center gap-4 p-4">
					<div class="rounded-sm bg-emerald-600 p-2">
						<User style="h-[20px] w-[20px]" />
					</div>
					<span class="w-fit break-words">{chat.text}</span>
				</div>
			{:else}
				<div class="flex flex-row items-center gap-4 bg-neutral-700 p-4">
					<div class="bg-accent rounded-sm p-2">
						<Robot style="h-[20px] w-[20px]" />
					</div>
					<span class="w-fit break-words">{chat.text}</span>
				</div>
			{/if}
		{/each}
		<!-- <div class="flex flex-row items-center gap-4 p-4">
			<div class="rounded-sm bg-emerald-600 p-2">
				<User style="h-[20px] w-[20px]" />
			</div>
			<span class="w-fit break-words">hello adjasdasdiasd</span>
		</div>
		<div class="flex flex-row items-center gap-4 bg-neutral-700 p-4">
			<div class="bg-accent rounded-sm p-2">
				<Robot style="h-[20px] w-[20px]" />
			</div>
			<span class="w-fit break-words"
				>Good morning dasdsadasdashduashdaushduashdasuhdhsau lmaoooadasidasdhuasdhasd</span
			>
		</div> -->
	</div>
	<div class="flex border-2 border-black bg-neutral-700 p-2">
		<input class="w-full bg-transparent outline-none" type="text" bind:value={prompt} placeholder="Aa" />
		<button on:click={getResponse}>
      <Send style="h-[20px] w-[20px]" />
    </button>
	</div>
</div>
