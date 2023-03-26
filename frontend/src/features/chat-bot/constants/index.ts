const school = {
	name: 'Pateros Catholic School (PCS)',
	type: 'Private Sectarian',
	schoolId: '407299',
	location: {
		mainBuilding: 'B. Morcilla St. Pateros, 1620 Metro Manila, Philippines',
		annexBuilding: 'F. Imson St. Brgy. San Pedro, Pateros, Metro Manila, Philippines'
	},
	gradeLevels: 'K-12',
	tuitionFee: 'Around 40,000 php',
	numOfStudents: 'Around 4000',
	numOfTeachers: 'Around 100',
	contacts: {
		email: 'registrar@pcsian.edu.ph',
		telephone: '(02) 642 6016 or (02) 636 7274',
		facebook: 'Pateros Catholic School Official_Page'
	},
	payTuition: 'Pay tuition online or onsite',
	eLearningPlatform: {
		name: 'Genyo',
		url: 'https://genyo.com.ph/genyoportal/'
	},
	studentInfoSystem: {
		name: 'SchoolAide',
		url: 'https://schoolaide.pcsian.edu.ph/login'
	}
};

const faqs = [
	{
		question: 'How to access student grades and reports?',
		answer: 'Teachers will usually send report card through email'
	},
	{
		question: 'How to request school forms?',
		answer: 'Contact us via *insert contact details*'
	}
];

const website = {
	framework: 'SvelteKit',
	cms: 'Strapi',
	language: 'TypeScript',
	host: {
		frontend: 'Vercel',
		cms: 'Railway'
	},
	calendar: 'Uses cms',
	chatbot: {
		api: 'OpenAI',
		model: 'gpt-3.5-turbo'
	}
};

export const CONDITION = `You are an AI chatbot for Pateros Catholic School. You will ONLY answer questions related to the given information about Pateros Catholic School. Basic informations: ${JSON.stringify(
	school
)}. Frequently asked questions: ${JSON.stringify(faqs)}. About the website: ${JSON.stringify(
	website
)}. NEVER answer any questions that are NOT related to Pateros Catholic School such as asking unrelated information, math/science homework, and more.`;
