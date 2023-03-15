import { OPENAI_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import { CONDITION } from '../../../features/chat-bot/constants';
import { getTokens } from '$lib/tokenizer';
import type { ChatCompletionRequestMessage, CreateChatCompletionRequest } from 'openai';
import type { RequestHandler } from '../$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		if (!OPENAI_API_KEY) {
			throw new Error('OPENAI_API_KEY env variable not set.');
		}

		const requestData = await request.json();

		if (!requestData) {
			throw new Error('No request data.');
		}

		const reqMessages: ChatCompletionRequestMessage[] = requestData.messages;

		if (!reqMessages) {
			throw new Error('No messages provided.');
		}

		let tokenCount = 0;

		reqMessages.forEach((msg) => {
			const tokens = getTokens(msg.content);

			tokenCount += tokens;
		});

		// Prevent from getting banned on OpenAI
		// Avoid bad inputs
		const moderationRes = await fetch('https://api.openai.com/v1/moderations', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_API_KEY}`
			},
			method: 'POST',
			body: JSON.stringify({
				input: reqMessages[reqMessages.length - 1].content
			})
		});

		const moderationData = await moderationRes.json();
		const [results] = moderationData.results;

		if (results.flagged) {
			throw new Error('Query flagged by OpenAI');
		}

		tokenCount += getTokens(CONDITION);

		if (tokenCount >= 4000) {
			throw new Error('Query too large.');
		}

		const messages: ChatCompletionRequestMessage[] = [
			{ role: 'system', content: CONDITION },
			...reqMessages
		];

		const chatReqOpts: CreateChatCompletionRequest = {
			model: 'gpt-3.5-turbo',
			messages: messages,
			temperature: 0.2,
			stream: true
		};

		const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_API_KEY}`
			},
			method: 'POST',
			body: JSON.stringify(chatReqOpts)
		});

		if (!chatResponse.ok) {
			const err = await chatResponse.json();
			throw new Error(err);
		}

		return new Response(chatResponse.body, {
      headers: {
        'Content-Type': 'text/event-stream'
      }
    });
	} catch (err) {
		console.error(err);
		return json({ error: 'There was an error in processing the request.' }, { status: 500 });
	}
};
