<script lang="ts">
	import { seniorHigh } from '../../../constants';
</script>

<div class="mx-auto max-w-7xl px-10">
	<div class="mb-20 text-center">
		<h1
			class="text-5xl font-extrabold uppercase tracking-widest md:whitespace-nowrap md:text-8xl lg:text-[7rem]"
		>
			Senior High
		</h1>
	</div>
	<h2 class="uppercase">The Department</h2>
	<div class="mb-10 flex flex-row justify-between gap-10">
		<p class="text-justify lg:w-1/2">
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
		<div class="hidden h-80 w-[500px] bg-neutral-400 lg:block" />
		<!-- <div class="h-80 w-[400px] bg-amber-400" /> -->
	</div>
</div>
<div class="bg-accent h-full p-10">
	<h2 class="uppercase text-white">Tracks Offered</h2>
	<div class="mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:px-20">
		<!-- STEM -->
		<div class="h-80 w-full bg-neutral-400" />
		<!-- ABM -->
		<div class="h-80 w-full bg-neutral-400" />
		<!-- HUMSS -->
		<div class="h-80 w-full bg-neutral-400" />
		<!-- A&D -->
		<div class="h-80 w-full bg-neutral-400" />
		<!-- TVL -->
		<div class="h-80 w-full bg-neutral-400" />
		<!-- GAS -->
		<div class="h-80 w-full bg-neutral-400" />
	</div>
</div>
<div class="mx-auto max-w-6xl px-10 pt-10">
	<h2 class="uppercase">Objectives</h2>
	<ol>
		{#each seniorHigh.content as item, idx (idx)}
			<li class="mb-4">
				<span>{item.mainText}</span>
				<ol class="pl-4">
					{#each item.subText as sub, idx (idx)}
						<li>{sub}</li>
					{/each}
				</ol>
			</li>
		{/each}
	</ol>
</div>
