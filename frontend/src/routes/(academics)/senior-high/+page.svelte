<script lang="ts">
	import { CurveWhiteBottom, CurveWhiteTop } from '../../../assets/curves';
	import {
		Art,
		ArtBoard,
		AtomScience,
		BankFinance,
		Calculator,
		CodeSlash,
		Conclusion,
		CookingDough,
		FoodProducts,
		Hotdog,
		Investment,
		Legal,
		MoneyBank,
		Pictures,
		SignDocument,
		SocialNetworking
	} from '../../../assets/icons';
	import { stem, abm, ad, humss, tvl, gas, seniorHighDepartment } from '../../../assets/images';
	import { seniorHigh } from '../../../constants';

	const strands = [
		{
			name: 'Science, Technology, Engineering, & Mathematics',
			subjects: 'Innovating the future through science and technology.',
			image: stem,
			icons: [AtomScience, Calculator, CodeSlash],
			fromColor: 'from-green-950',
			shadow: 'lg:hover:shadow-green'
		},
		{
			name: 'Accountancy, Business, & Management',
			subjects: 'Shaping future business leaders and managers.',
			image: abm,
			icons: [MoneyBank, Investment, BankFinance],
			fromColor: 'from-yellow-dark',
			shadow: 'lg:hover:shadow-yellow'
		},
		{
			name: 'Humanities & Social Sciences',
			subjects: 'Empowering critical thinking and social awareness.',
			image: humss,
			icons: [Legal, SignDocument, SocialNetworking],
			fromColor: 'from-red-950',
			shadow: 'lg:hover:shadow-red'
		},
		{
			name: 'Arts & Design',
			subjects: 'Celebrating creativity and imagination through the arts.',
			image: ad,
			icons: [Art, ArtBoard, Pictures],
			fromColor: 'from-blue-950',
			shadow: 'lg:hover:shadow-blue'
		},
		{
			name: 'Technical-Vocational-Livelihood',
			subjects: 'Equipping students with practical skills for real-world success.',
			image: tvl,
			icons: [CookingDough, FoodProducts, Hotdog],
			fromColor: 'from-neutral-700',
			shadow: 'lg:hover:shadow-neutral'
		},
		{
			name: 'General Academic Strand',
			subjects: 'Broadening knowledge and opportunities for further studies.',
			image: gas,
			icons: [AtomScience, SignDocument, Conclusion],
			fromColor: 'from-pink-dark',
			shadow: 'lg:hover:shadow-pink'
		}
	];
</script>

<div class="mx-auto max-w-7xl px-10">
	<div class="mb-20 text-center">
		<h1
			class="font-gt-walsheim-pro-medium text-4xl uppercase tracking-widest md:whitespace-nowrap md:text-8xl lg:text-[7rem]"
		>
			Senior High
		</h1>
	</div>
	<h2 class="my-5 text-center text-2xl font-semibold uppercase">The Department</h2>
	<div class="mb-10 flex flex-row items-center justify-between gap-10">
		<p class="text-justify text-sm sm:text-xl lg:w-1/2">
			The Senior High Department provides a well-rounded education that emphasizes critical
			thinking, problem-solving, communication, and collaboration skills, essential for success in
			college and the competitive workforce. Along with academic excellence, the department
			prioritizes personal and professional development by promoting good physical and mental
			health, self-discipline, and personal vision. The curriculum prepares students for informed
			career choices and nation-building by promoting the development of creative talents and social
			inquiries, while encouraging social responsibility through participation in campaigns for the
			care and protection of the environment. The department's Catholic education instills strong
			values, guiding students to work cooperatively, communicate honestly, and actively participate
			in religious activities for personal and professional growth.
		</p>
		<img src={seniorHighDepartment} class="max-w-lg w-full hidden lg:block" alt="pcs senior high department" />
	</div>
</div>
<div class="relative bg-black">
	<CurveWhiteTop />
	<div class="px-10 py-32 md:py-60">
		<h2 class="my-5 text-center text-2xl font-semibold uppercase tracking-widest text-white">
			Strands Offered
		</h2>
		<div class="mx-auto grid w-full max-w-7xl grid-cols-1 gap-20 lg:grid-cols-2">
			{#each strands as strand, idx (idx)}
				<div class={`flex w-full justify-center`}>
					<div
						class={`flex w-full max-w-2xl flex-col items-center bg-neutral-900 transition-[filter,box-shadow] duration-300 sm:flex-row lg:hover:brightness-125 ${strand.shadow}`}
					>
						<div
							class={`bg-gradient-to-t to-black sm:bg-gradient-to-l ${strand.fromColor} flex h-full w-full justify-center p-5 sm:w-auto`}
						>
							<img
								src={strand.image}
								alt={`pcs ${strand.name}`}
								class="w-full max-w-[10rem] object-cover"
								loading="lazy"
							/>
						</div>
						<div class="flex h-full w-full flex-col">
							<div class="flex h-full w-full flex-col justify-center bg-neutral-900 p-5">
								<span class="mb-1 text-base text-white sm:text-lg">{strand.name}</span>
								<span class="text-sm text-neutral-400 sm:text-base">{strand.subjects}</span>
							</div>
							<div class="flex w-full gap-4 bg-neutral-950 px-5 py-3">
								{#each strand.icons as Icon, idx (idx)}
									<Icon style="h-5 w-5 text-white" />
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<CurveWhiteBottom />
</div>
<div class="mx-auto max-w-6xl px-10 pt-10">
	<h2 class="my-5 text-center text-2xl font-semibold uppercase">Objectives</h2>
	<ol class="list-decimal">
		{#each seniorHigh.content as item, idx (idx)}
			<li class="mb-4">
				<span class="text-base sm:text-xl">{item.mainText}</span>
				<ol class="list-disc pl-4">
					{#each item.subText as sub, idx (idx)}
						<li class="text-sm sm:text-lg">
							{sub}
						</li>
					{/each}
				</ol>
			</li>
		{/each}
	</ol>
</div>
