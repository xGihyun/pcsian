<script lang="ts">
	import { seniorHigh } from '../../../constants';

	const strands = [
		{
			name: 'Science, Technology, Engineering, & Mathematics',
			image: 'https://sites.google.com/site/elps301plantstructures/_/rsrc/1486330942892/home/growth/Stem.jpg'
		},
		{
			name: 'Accountancy, Business, & Management',
			image: 'https://blog.remitly.com/wp-content/uploads/2021/02/pile-of-Philippine-currency.jpeg'
		},
		{
			name: 'Humanities & Social Sciences',
			image: 'https://i.imgflip.com/1k9f4u.jpg'
		},
		{
			name: 'Arts & Design',
			image: 'https://blog.artsper.com/wp-content/uploads/2022/06/44151m.jpg'
		},
		{
			name: 'Technical-Vocational-Livelihood',
			image: 'https://cdn.vox-cdn.com/thumbor/hQJnvvOK_1Psh9nCbS7xvr8w73w=/0x0:2864x1468/1200x800/filters:focal(1203x505:1661x963)/cdn.vox-cdn.com/uploads/chorus_image/image/67811309/Screen_Shot_2020_11_18_at_10.57.40_AM.0.png'
		},
		{
			name: 'General Academic Strand',
			image: 'https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png'
		},
	]
</script>

<div class="mx-auto max-w-7xl px-10">
	<div class="mb-20 text-center">
		<h1
			class="font-gt-walsheim-pro-medium text-5xl uppercase tracking-widest md:whitespace-nowrap md:text-8xl lg:text-[7rem]"
		>
			Senior High
		</h1>
	</div>
	<h2 class="uppercase">The Department</h2>
	<div class="mb-10 flex flex-row items-center justify-between gap-10">
		<p class="lg:w-1/2">
			The Senior High Department aims to prepare students for the challenges of high school and
			beyond, by providing a well-rounded education that emphasizes the development of strong
			values, lifelong learning skills, physical and mental health, and social responsibility. With
			a focus on Catholic teachings, students are guided to work cooperatively with others, to
			communicate honestly and dependably, and to actively participate in religious activities.
			Along with building effective study skills, the department promotes the development of
			creative talents and social inquiries for informed career choices and nation-building. Good
			physical and mental health is also prioritized, as is the development of self-reliance,
			self-discipline, and personal vision. Students are encouraged to deepen their understanding of
			and commitment to social responsibility, showing respect for the dignity of all persons, and
			actively participating in campaigns for the care and protection of the environment.
		</p>
		<div class="hidden h-[400px] w-[500px] bg-neutral-400 lg:block" />
	</div>
</div>
<div class="bg-black py-20 px-10">
	<h2 class="uppercase tracking-widest text-white">Strands Offered</h2>
	<div class="mx-auto grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 xl:px-20">
		{#each strands as strand, idx (idx)}
			<div class="text-center">
				<img
					src={strand.image}
					alt=""
					class="mb-4 h-72 w-full object-cover shadow-card"
				/>
				<span class="text-white">{strand.name}</span>
			</div>
		{/each}
	</div>
</div>
<div class="mx-auto max-w-6xl px-10 pt-10">
	<h2 class="uppercase">Objectives</h2>
	<ol>
		{#each seniorHigh.content as item, idx (idx)}
			<li class="mb-4">
				<span class="text-base sm:text-xl">{item.mainText}</span>
				<ol class="pl-4">
					{#each item.subText as sub, idx (idx)}
						<li>
							{sub}
						</li>
					{/each}
				</ol>
			</li>
		{/each}
	</ol>
</div>
