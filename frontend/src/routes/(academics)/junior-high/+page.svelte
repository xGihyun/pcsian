<script lang="ts">
	import { juniorHigh } from '../../../constants';
</script>

<div class="mx-auto max-w-7xl px-10">
	<div class="mb-20 text-center">
		<h1
			class="text-5xl font-gt-walsheim-pro-medium uppercase tracking-widest md:whitespace-nowrap md:text-8xl lg:text-[7rem]"
		>
			Junior High
		</h1>
	</div>
	<h2 class="uppercase">The Department</h2>
	<div class="mb-10 flex flex-row items-center justify-between gap-10">
		<p class="lg:w-1/2 text-justify">
			The Junior High Department aims to prepare students for the challenges of high school and
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
		<!-- <div class="h-80 w-[400px] bg-amber-400" /> -->
	</div>
	<h2 class="uppercase">Objectives</h2>
	<ol>
		{#each juniorHigh.content as item, idx (idx)}
			<li class="mb-4">
				<span class="text-base sm:text-xl">{item.mainText}</span>
				<ol class="pl-4">
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
