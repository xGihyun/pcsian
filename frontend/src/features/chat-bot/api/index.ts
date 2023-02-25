import { PUBLIC_OPENAI_API_KEY } from '$env/static/public';
import { Configuration, OpenAIApi } from 'openai';

const API_KEY = PUBLIC_OPENAI_API_KEY;

const configuration = new Configuration({
	apiKey: API_KEY
});

export const openai = new OpenAIApi(configuration);