const wordsToLinks: { [key: string]: string } = {
	genyo: 'https://genyo.com.ph/genyoportal/',
	schoolaide: 'https://schoolaide.pcsian.edu.ph/login'
};

export function replaceWordsWithLinks(text: string) {
	const regex =
		/\b((https?:\/\/)?[\da-z.-]+(?:\.[a-z]{2,6})+(?:\/[\w\d%_.~+-]*)*\/?)\b|\b(genyo|schoolaide)\b/gi;

	return text.replace(regex, (match) => {
		if (match.startsWith('http')) {
			return `<a href="${match}" class="text-accent hover:underline" target="_blank" rel="noreferrer">${match}</a>`;
		} else if (wordsToLinks.hasOwnProperty(match.toLowerCase())) {
			const link = wordsToLinks[match.toLowerCase()];
			return `<a href="${link}" class="text-accent hover:underline" target="_blank" rel="noreferrer">${match}</a>`;
		} else {
			return match;
		}
	});
}

export const greetings = [
	'Good day! How can I help?',
	"Let's start a new topic! Ask anything about Pateros Catholic School.",
	"Greetings, human! I'm Pateros Catholic School's chatbot, here to make your life easier.",
	"What's up? Your favorite chatbot is here to help you out with anything you need!",
	"Hey! It's great to see you. Let me know how I can assist you in making your school experience better."
];