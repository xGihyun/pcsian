import type { ChatCompletionRequestMessage } from 'openai';
import { writable, type Writable } from 'svelte/store';
import { greetings } from './chatbot';

const random = Math.floor(Math.random() * 5);

export const showChatBot = writable(false);
export const showMobileDropdown = writable(false);
export const conversationHistory: Writable<ChatCompletionRequestMessage[]> = writable([
	{ role: 'assistant', content: greetings[random] }
]);
