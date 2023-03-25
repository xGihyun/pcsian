import type { DropdownItem } from '../Types';

export const navItems = [
	{
		title: 'Home',
		path: '/',
		data: 'home'
	},
	{
		title: 'About PCS',
		path: '/history',
		data: 'about'
	},
	{
		title: 'Academics',
		path: '/grade-school',
		data: 'academics'
	},
	{
	  title: "Chat",
	  path: "/chat",
	  data: 'chat'
	}
];

export const dropdownItems: { [key: string]: DropdownItem[] } = {
	academics: [
		{
			title: 'Grade School',
			path: '/grade-school'
		},
		{
			title: 'Junior High',
			path: '/junior-high'
		},
		{
			title: 'Senior High',
			path: '/senior-high'
		},
		{
			title: 'Calendar',
			path: '/calendar'
		}
	],
	about: [
		{
			title: 'Historical Highlights',
			path: '/history'
		},
		{
			title: 'Philosophy, Vision, and Mission',
			path: '/philosophy'
		},
		{
			title: 'Institutional Directions',
			path: '/inst-dir'
		},
		{
			title: 'Services and Facilities',
			path: '/services'
		},
		{
			title: 'PAASCU Accreditation',
			path: '/paascu'
		}
	]
};

export const philosophy = [
	{
		title: 'Philosophy',
		text: 'Pateros Catholic School is a parochial educational institution inspired by the lives of San Roque and Santa Marta. PCS is a center for excellence in K-12 basic education that promotes and develops the 21st Century Skills. The school serves as an evangelizing arm of the Catholic Church by forming men and women of noble character.'
	},
	{
		title: 'Vision',
		text: 'Committed to build a 21st century learning community, Pateros Catholic School is a Center for Excellence characterized by professional and personal competence for the integral formation and transformation to become “Men and Women of Noble Character'
	},
	{
		title: 'Mission',
		text: 'Pateros Catholic School prepares learners for the 21st Century by engaging in quality Catholic Educational Programs that promote intellectual, spiritual, and personal excellence in a joyful, humble, and loving community.'
	}
];

export const goals = [
	{
		text: 'To produce graduates who will be Catholic leaders who are integrally formed, with moral conscience and mature faith, balanced by disciplined pursuit of academic excellence.'
	},
	{
		text: 'To assist the church and the Nation in the basic formation of the human person, in the context of the national development goals.'
	},
	{
		text: 'To nurture an educational environment that offers opportunities to the youth and young children especially those who have less in life, a familial atmosphere of prayer, love, care, concern, generosity and simplicity of lifestyle.'
	},
	{
		text: 'To focus concern for learning the cultural traditions and the growth and development of every individual deeply rooted in the gospel values.'
	}
];

export const coreValues = [
	{
		title: 'Faith',
		text: [
			'Spiritually and Emotionally Mature',
			'Passionate commitment to truth',
			'Respect for the dignity of the person'
		],
		values: [
			'Piety',
			'Courage',
			'Fidelity',
			'Communion',
			'Trust',
			'Knowledge of the Catholic Faith'
		]
	},
	{
		title: 'Hope',
		text: ['Excellence', 'Professional Dignity and Attitude', 'Christian Leadership'],
		values: [
			'Competence',
			'Resourcefulness',
			'Self-reliance',
			'Perseverance',
			'Maturity',
			'Accountability'
		]
	},
	{
		title: 'Charity',
		text: ['Social involvement', 'Simplicity of lifestyle', 'Humble - loving service'],
		values: [
			'Stewardship',
			'Preferential Love for the Poor',
			'Nationalism',
			'Integrity',
			'Discipline',
			'Humility',
			'Justice',
			'Prudence'
		]
	}
];

export const institutionDirection = [
	{
		title: 'Academic Excellence',
		text: 'Creating a dynamic instructional climate: The foundation for effective instruction and positive student outcomes.'
	},
	{
		title: 'Student Services',
		text: "Enhancing personal quest in advancing and upgrading students' skills and talents through creative, interactive and technologically-based exposures."
	},
	{
		title: 'Sustained Evangelical Mission by the Center for Christian Formation',
		text: 'Strengthening Religion as the core of the curriculum which includes Catechetical Instruction in the public schools, and the Munting Sambayanang Kristiyano as special outreach programs of the school community.'
	},
	{
		title: 'Human Resource Development',
		text: 'Development of a culture of strong service orientation among school personnel.'
	},
	{
		title: 'Effective Financial Management',
		text: 'Optimization of financial resources through effective planning, administration and control of the school assets, revenues and expenditures.'
	},
	{
		title: 'Research and Development',
		text: 'Utilization of data-based and action research information in support of institutional concerns of the school.'
	}
];

export const services = [
	{
		id: 1,
		title: 'Evangelization and Christian Formation Services',
		text: 'PCS aspires to develop integrally formed pupils and students in the person of Christ who will become responsible Catholics.  Thus it focuses on the holistic development of the human life by experiencing a true Christian community.  It is for this reason that the Center for Christian Formation (CCF) recognizes the need to strengthen Religion as the core of the curriculum to be potent means of evangelization and Christian formation.'
	},
	{
		id: 2,
		title: 'Guidance and Counseling Services',
		text: "The Guidance and Counseling Offices in both departments monitor the academic and behavioral performance of pupils.  The Guidance Counselors provide counseling to both parents and pupils on instructional and behavioral concerns.  The offices administer diagnostic, achievement and other specialized tests to all learners.  Information and orientation highlights are also provided to new students and parents regarding the school's on-going thrusts, institutional policies, and departmental curricular programs."
	},
	{
		id: 3,
		title: 'Prefect of Students Services',
		text: 'The Office of the Prefect of Students (OPS) deals with referred cases of misbehavior and other disciplinary problems of young children and teens. It undertakes initial investigation of cases referred and keeps records of cases for future reference. It monitors attendance and other policy requirements. It also issues exit slips to students with health problems and grants them admission following proper school procedures.'
	},
	{
		id: 4,
		title: 'Library and Instructional Media Services',
		text: 'The Instructional Media Center or Library serves the intellectual and research activities of pupils, students and faculty. They are encouraged to avail of its services on assigned dates by following rules and regulations in borrowing, handling and returning books and other reference materials. An annual Book Fair is held where pupils can avail of educational and interactive materials such as books, magazines, toys, games and related items. Book exhibits are also sponsored to stimulate interest and utilization of new book acquisitions.'
	},
	{
		id: 5,
		title: 'Medical and Dental Services',
		text: 'The School Clinic checks the medical and dental concerns of pupils, students, and personnel. A doctor and a dentist are always on hand to provide regular and periodic physical examination to pupils and students. They are ably assisted by nursing staffs who administer first aid to our clientele.'
	},
	{
		id: 6,
		title: 'Medical and Dental Services',
		text: 'The School Clinic checks the medical and dental concerns of pupils, students, and personnel. A doctor and a dentist are always on hand to provide regular and periodic physical examination to pupils and students. They are ably assisted by nursing staffs who administer first aid to our clientele.'
	},
	{
		id: 7,
		title: "Registrar and Students' Records Services",
		text: "The Registrar's Office keeps track of students' records and prepares all communications concerning school credentials of pupils and students. The Registrar supervises the building and storage retrieval, as well as the safety and confidentiality of student records."
	},
	{
		id: 8,
		title: 'Information Technology Services',
		text: 'The Management Information System Office provides the central information technology operations of the school. M.I.S. Office helps identify, select and evaluate technology solutions that will improve overall effectiveness and efficiency of school operations.'
	},
	{
		id: 9,
		title: 'Promotions and Publications',
		text: 'The PPO supervises and coordinates the technical and operational detail of the School Annual, PCS Official Facebook Page, Alumni Page, School Website, and responsible for the publication and periodicals which the school may wish to publish. It is also in-charge of the facilitation of certificates, tarpaulin, billboard announcements and the like.'
	},
	{
		id: 10,
		title: 'Physical Plant and Maintenance Services',
		text: 'The Physical Plant Administrator oversees the general technical supervision of the school plant and property, and monitors the structural condition of all the facilities.'
	},
	{
		id: 11,
		title: 'Custodial Services',
		text: 'The Custodial Head supervises the utility personnel in maintaining the over-all cleanliness and orderliness of the school surroundings.'
	},
	{
		id: 12,
		title: 'Security Services',
		text: 'An upgraded and state-of-the-art surveillance system placed on strategic locations of the campus with round-the-clock monitoring viewed via internet.'
	},
	{
		id: 13,
		title: 'Dining and Food Services',
		text: 'The PCS Canteen helps provide affordable and well-balanced meals and nutritious snacks to the school community.'
	},
	{
		id: 14,
		title: 'Public Address System',
		text: 'Strategic locations in entrances, exits, hallways, common areas, and major offices are installed with a large number of speakers in order to distribute and disseminate a message to the general public around the school campus. The major purpose is to read announcements or declare states of emergency.'
	},
	{
		id: 15,
		title: 'Computer Laboratories',
		text: 'This facility enables the Grade School pupils and the High School students to develop skills and creativity in utilizing the different softwares used in computer education. The Laboratory provides hands-on experience on computer operations where they can operate by themselves in producing school requirements.'
	},
	{
		id: 16,
		title: 'Science Laboratories',
		text: 'The Science teachers were able to develop their personally designed laboratory experiments and activities which they think will suit the needs and level of interest of the students. Some of these activities are used as motivation for getting the attention and interest of the students, especially in opening a new topic/concept in Science. Most of these activities/experiments make use of familiar or common materials in order for students to realize their importance in daily life activities. These also help the students be aware of some chemicals inside or outside the environment. The experiments are also designed to suggest further studies and experiments on similar concepts. Thereby, the analytical and scientific thinking skills of the students are developed. These could also help them realize the career they may want to pursue in the future.'
	},
	{
		id: 17,
		title: 'Technology and Livelihood Laboratories',
		text: "The Technology and Livelihood Economics (TLE) Laboratory aims to increase students' capacity for social orientedness through knowledge and experience of various occupational opportunities and the development of occupational skills and proficiency. The laboratory also develops the ability to create new, artistic or useful things out of simple, inexpensive, ordinary, raw and local materials. The students can also develop personal and communal potential, e.g., sense of responsibility, leadership and team work, appreciation for work, and work values, spirit of generosity and service."
	},
	{
		id: 18,
		title: 'Audio Visual Room (Mary Seat of Wisdom Hall)',
		text: 'A multi-purpose hall equipped with multimedia and LCD projectors that serve as viewing and venue for extra class activities, meetings, demonstrations, programs and recollections. The Parish community and other schools can also avail the use of this facility through proper permission and clearance from the school administration in-charge.'
	},
	{
		id: 19,
		title: 'Gymnasium',
		text: 'The multi-gym is located at the 5th floor of Sta. Marta building where academic, spiritual and recreational activities are held.'
	},
	{
		id: 20,
		title: 'Azotea de Teresita',
		text: 'A vista of coolness, Azotea de Teresita adds beauty and grace to the school grounds which serves as an interactive venue for student activities, meetings, conferences, and programs.'
	},
	{
		id: 21,
		title: 'Quadrangle',
		text: 'The construction of the tensile fabric structure in the quadrangle ensured the PCS community a roof under the heat of the sun and the drizzle of the rain for socio-cultural, physical and religious activities of the school.'
	},
	{
		id: 22,
		title: 'Comfort Rooms',
		text: 'Comfort Rooms of both the Grade School and the High School Departments are strategically located in the different floors of the buildings to provide the school constituents a clean and sanitary area for personal comfort and necessities.'
	}
];

export const paascu = [
	{
		title: 'About PAASCU',
		text: [
			'PAASCU stands for Philippine Accrediting Association of Schools, Colleges, and Universities. It is a private, voluntary, non-profit and non- stock corporation which was registered with the Securities and Exchange Commission on November 5, 1957.',
			'PAASCU is a service organization that accredits academic programs which meet standards of quality education. In November 1967, the Bureau of Education and Culture (now the Department of Education) officially recognized PAASCU and endorsed its work as an accrediting agency. PAASCU is also one of the three founding members of the Federation of Accrediting Agencies of the Philippines (FAAP), which was established in 1977 and is authorized by the Commission on Higher Education (CHED) to certify the levels of accredited programs for the purpose of granting progressive deregulation and other benefits.',
			'PAASCU has been a full member of the International Network for Quality Assurance Agencies in Higher Education (INQAAHE). As of 2005, INQAAHE is composed of 150 accrediting agencies coming from over 60 different countries. These agencies have also created regional networks, one of which is the Asia-PAcific Quality Network (APQN), with PAASCU being one of its active members.',
			'PAASCU also has linkages with the Council for Higher Education Accreditation (CHEA), which is a private, nonprofit national organization that coordinates accreditation activity in the United States, as well as with the National Committee on Foreign Medical Education and Accreditation (NCFMEA), which is based in Washington, D.C.'
		]
	},
	{
		title: "What are PAASCU'S standards?",
		text: [
			"The Association does not impose arbitrary standards. The survey forms developed by PAASCU identify principles and practices which are found in excellent institutions. The statements in the survey forms are more qualitative rather than quantitative. The Association does not have specific formulas to apply or particular patterns of organization to follow. The criteria and survey instruments are merely tools to help the school measure educational quality. They are intended to serve as a guide for institutions as they strive for excellence and for accreditors as they assess institutional achievement.  The standards reflect a realistic appraisal of the school's resources and their efficient utilization to help the institution achieve its goals."
		]
	},
	{
		title: 'Benefits and Incentives',
		text: [
			'Full administrative deregulation, provided that reports of promotion of students and lists of graduates are available for review by CHED at all times.',
			'Financial deregulation in terms of setting tuition and other school fees and charges.',
			'Authority to revise the curriculum without CHED approval provided that CHED and Professional Regulation Commission minimum requirements and guidelines, where applicable, are complied with and the revised curriculum is submitted to CHED Regional Offices.',
			'Authority to graduate students from accredited courses or programs of study in the levels accredited without prior approval of the CHED and without need for Special Orders.',
			`Priority in the awards of grants/subsidies or funding assistance from CHED Higher Education Development Fund (HEDF) for scholarships and faculty development, facilities improvement and other development programs. Right to use on its publications or advertisements the word "ACCREDITED" pursuant to CHED policies and rules.`,
			'Limited visitation, inspection and/or supervision by CHED supervisory personnel or representatives.'
		]
	},
	{
		title: 'Other advantages',
		text: [
			'Gives the institution and its faculty a sense of direction based on a clearer self-image.',
			'Facilitates transfer of students.',
			'Provides guidance for parents and students in the choice of worthy schools.',
			'Gives prestige for member schools, justified by the possession of quality standards and the continuing effort to maintain them at a high level.'
		]
	}
];

export const gradeSchool = {
	title: 'The Grade School Department Objectives:',
	content: [
		{
			mainText: 'To develop basic social, moral, and spiritual values.',
			subText: [
				'Ability to work cooperatively with others in the home and in school.',
				'Obedience to parents, teachers and other persons in authority.',
				'Honesty and sincerity in speech and actions.',
				'Active participation in Eucharistic celebrations and other religious activities.'
			]
		},
		{
			mainText: 'To support love for learning and effective study skills.',
			subText: [
				'Mastery of basic skills in Science and Mathematics.',
				'Increased levels of reading comprehension skills.',
				"Confidence and proficiency in expressing one's self in English and Filipino.",
				'Self-reliance, critical thinking, and creativity in performing learning tasks.'
			]
		},
		{
			mainText: 'To promote good physical and mental health.',
			subText: [
				'Mindfulness on matters of food and nutrition, proper hygiene, and good grooming.',
				'Maintaining proper body mechanics in executing sports and physical fitness skills.',
				'Acceptance of changing conditions and learning from past experiences.',
				"Refinement in speech and manners in conducting one's self in any kind of gathering."
			]
		},
		{
			mainText: 'To enhance compassion for the poor and suffering.',
			subText: [
				'Understanding of the meaning of life as shown through habits of simplicity, industry, and thrift.',
				'Generosity in giving help to the needy.',
				'Respect for the dignity of persons especially the handicapped and the disadvantaged.',
				'Active participation in campaigns for the care and protection of the environment.'
			]
		}
	]
};

export const juniorHigh = {
	title: 'High School education aims to develop its students in the following aspects:',
	content: [
		{
			mainText: 'To strengthen a set of values and an ethical system by which to live.',
			subText: [
				'Ability to work cooperatively with others in the school, family, and community.',
				'Adherence to Catholic teachings regarding social and moral issues.',
				'Honesty, sincerity, and dependability in interpersonal communications and relationships.',
				'Active participation in Eucharistic celebrations and other Catholic religious activities.'
			]
		},
		{
			mainText:
				'To promote life-long learning through opportunities for self-discovery, self-expression, and creativity.',
			subText: [
				'Effective study and research skills in processing various sources of information.',
				"Proficiency in expressing one's self in written and oral English and Filipino.",
				'Development of creative talents towards making informed career choice/s.',
				'Competence in making social inquiries towards active participation in nation-building.'
			]
		},
		{
			mainText: 'To promote good physical and mental health.',
			subText: [
				'Respect for the dignity of human persons.',
				'Aptitude in dealing with life, its problems and stresses.',
				'Ability to adapt to changing conditions and to learn from mistakes.',
				'Self-reliance and self-discipline in pursuing a personal vision.'
			]
		},
		{
			mainText: 'To deepen understanding of and commitment for social responsibility.',
			subText: [
				'Understanding the meaning of life in relation to human suffering and human solidarity.',
				'Socially responsible behavior in the context of justice, fairness, and compassion for the poor and the weak.',
				'Respect for the dignity of persons as shown in refinement in speech and actions.',
				'Active leadership and participation in advocacy campaigns for the care and protection of the environment.'
			]
		}
	]
};

export const seniorHigh = {
	title: 'High School education aims to develop its students in the following aspects:',
	content: [
		{
			mainText: 'To strengthen a set of values and an ethical system by which to live.',
			subText: [
				'Ability to work cooperatively with others in the school, family, and community.',
				'Adherence to Catholic teachings regarding social and moral issues.',
				'Honesty, sincerity, and dependability in interpersonal communications and relationships.',
				'Active participation in Eucharistic celebrations and other Catholic religious activities.'
			]
		},
		{
			mainText:
				'To promote life-long learning through opportunities for self-discovery, self-expression, and creativity.',
			subText: [
				'Effective study and research skills in processing various sources of information.',
				"Proficiency in expressing one's self in written and oral English and Filipino.",
				'Development of creative talents towards making informed career choice/s.',
				'Competence in making social inquiries towards active participation in nation-building.'
			]
		},
		{
			mainText: 'To promote good physical and mental health.',
			subText: [
				'Respect for the dignity of human persons.',
				'Aptitude in dealing with life, its problems and stresses.',
				'Ability to adapt to changing conditions and to learn from mistakes.',
				'Self-reliance and self-discipline in pursuing a personal vision.'
			]
		},
		{
			mainText: 'To deepen understanding of and commitment for social responsibility.',
			subText: [
				'Understanding the meaning of life in relation to human suffering and human solidarity.',
				'Socially responsible behavior in the context of justice, fairness, and compassion for the poor and the weak.',
				'Respect for the dignity of persons as shown in refinement in speech and actions.',
				'Active leadership and participation in advocacy campaigns for the care and protection of the environment.'
			]
		}
	]
};
