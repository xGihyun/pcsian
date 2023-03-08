<script lang="ts">
	import { gradeSchool } from '../../../constants';
</script>

<div class="mx-auto max-w-7xl px-10">
	<div class="mb-20 text-center">
		<h1
			class="text-5xl font-extrabold uppercase tracking-widest md:whitespace-nowrap md:text-8xl lg:text-[7rem]"
		>
			Grade School
		</h1>
	</div>
	<h2 class="uppercase">The Department</h2>
	<div class="mb-10 flex flex-row justify-between gap-10">
		<p class="text-justify lg:w-1/2">
			The Grade School Department aims to provide a holistic education for students, encompassing
			not just academic skills but also the development of important values and life skills. The
			objectives of the department are focused on four key areas: social, moral, and spiritual
			values; love for learning and effective study skills; physical and mental health; and
			compassion for the poor and suffering. Through a combination of academic instruction and
			practical experiences, the Grade School Department seeks to prepare students for success in
			all aspects of their lives, including their relationships with others, their personal health
			and well-being, and their ability to contribute to society in meaningful ways.
		</p>
		<div class="hidden h-80 w-[500px] bg-neutral-400 lg:block" />
		<!-- <div class="h-80 w-[400px] bg-amber-400" /> -->
	</div>
	<h2 class="uppercase">Objectives</h2>
	<ol>
		{#each gradeSchool.content as item, idx (idx)}
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
