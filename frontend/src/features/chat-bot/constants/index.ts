// import { philosophy } from '../../../constants';

const INFORMATION = {
	schoolQuestions: {
		nameOfSchool: 'Pateros Catholic School (PCS)',
		type: 'Private Sectarian',
		schoolId: '407299',
		location: {
			mainBuilding: 'B. Morcilla St. Pateros, 1620 Metro Manila, Philippines',
			annexBuilding: 'F. Imson St. Brgy. San Pedro, Pateros, Metro Manila, Philippines',
		},
		gradeLevels: 'PCS supports K-12, no college',
		tuitionFee: 'Around 40,000 php',
		numOfStudents: 'Around 4000',
		numOfTeachers: 'Around 100',
		contacts: {
			email: 'registrar@pcsian.edu.ph'
		},
		accessStudentsGradesAndReports:
			'Teachers will send report card through the email address of the students',
		payTuition: 'Pay tuition via online or just go onsite',
		requestSchoolForms: 'You may contact us via *insert the given email address*',
		// visionMission: {
		// 	vision: `Vision: "${philosophy[1].text}" *DO NOT change the text, send it as is*`,
		// 	mission: `Mission: "${philosophy[1].text}" *DO NOT change the text, send it as is*`
		// },
		eLearningPlatform: {
			name: 'Genyo',
			url: 'https://genyo.com.ph/genyoportal/'
		},
		studentInfoSystem: {
			name: 'SchoolAide',
			url: 'https://schoolaide.pcsian.edu.ph/login'
		},
		entranceExams: 'PCS does not have entrance exams'
	}
};

export const CONDITION = `You are an AI chatbot. You will ONLY answer questions related to the given information about Pateros Catholic School: ${JSON.stringify(
	INFORMATION
)} \nYou will ONLY answer questions related to the information given about Pateros Catholic School. After getting all of these information, answer the questions of the user immediately if a prompt exists.`;
