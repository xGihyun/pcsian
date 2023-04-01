<script lang="ts">
	import { philosophy, goals, coreValues } from '../../../constants';
</script>

<h2 class="my-5 text-center text-2xl font-semibold">{philosophy[0].title}</h2>
<p class="text-justify text-sm sm:text-xl">{philosophy[0].text}</p>
<ul class="my-10 flex flex-col gap-10 sm:flex-row">
	{#each philosophy as item, idx (idx)}
		{#if item.title !== 'Philosophy'}
			<li class="list-none sm:w-1/2">
				<h2 class="my-5 text-center text-2xl font-semibold">{item.title}</h2>
				<p class="text-justify text-sm sm:text-xl">{item.text}</p>
			</li>
		{/if}
	{/each}
</ul>
<h2 class="my-5 text-center text-2xl font-semibold">Goals</h2>
<ol class="list-decimal">
	{#each goals as goal, idx (idx)}
		<li>
			<p class="mb-2 mt-1 text-sm sm:mb-4 sm:mt-2 sm:text-xl">{goal.text}</p>
		</li>
	{/each}
</ol>
<h2 class="my-5 text-center text-2xl font-semibold">Core Values</h2>
<ol class="flex list-decimal flex-col justify-between gap-10 md:flex-row">
	{#each coreValues as coreValue, idx (idx)}
		<li>
			<h3 class="mb-2 mt-4 text-base font-semibold sm:text-xl">{coreValue.title}</h3>
			<ul class="list-disc pl-4">
				{#each coreValue.text as text, idx (idx)}
					<li class="text-sm sm:text-xl">{text}</li>
				{/each}
			</ul>
			<h4 class="mb-2 mt-4 pl-3 text-lg font-semibold">Related Values:</h4>
			<ul class="list-disc pl-10">
				{#each coreValue.values as value, idx (idx)}
					<li class="text-sm sm:text-lg">{value}</li>
				{/each}
			</ul>
		</li>
	{/each}
</ol>
