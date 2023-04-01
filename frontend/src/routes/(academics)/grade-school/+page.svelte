<script lang="ts">
	import { gradeSchool } from '../../../constants';
</script>

<div class="mx-auto max-w-7xl px-10">
	<div class="mb-20 text-center">
		<h1
			class="font-gt-walsheim-pro-medium text-4xl uppercase tracking-widest md:whitespace-nowrap md:text-8xl lg:text-[7rem]"
		>
			Grade School
		</h1>
	</div>
	<h2 class="my-5 text-center text-2xl font-semibold uppercase">The Department</h2>
	<div class="mb-10 flex flex-row items-center justify-between gap-10">
		<p class="text-justify text-sm sm:text-xl lg:w-1/2">
			The Grade School Department aims to provide a holistic education for students, encompassing
			not just academic skills but also the development of important values and life skills. The
			objectives of the department are focused on four key areas: social, moral, and spiritual
			values; love for learning and effective study skills; physical and mental health; and
			compassion for the poor and suffering. Through a combination of academic instruction and
			practical experiences, the Grade School Department seeks to prepare students for success in
			all aspects of their lives, including their relationships with others, their personal health
			and well-being, and their ability to contribute to society in meaningful ways.
		</p>
		<div class="hidden h-[400px] w-[500px] bg-neutral-400 lg:block" />
		<!-- <div class="h-80 w-[400px] bg-amber-400" /> -->
	</div>
	<h2 class="my-5 text-center text-2xl font-semibold uppercase">Objectives</h2>
	<ol class="list-decimal">
		{#each gradeSchool.content as item, idx (idx)}
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
