<script lang="ts">
	import { philosophy, goals, coreValues } from '../../../constants';
</script>

	<h2>{philosophy[0].title}</h2>
	<p>{philosophy[0].text}</p>
	<ul class="my-10 flex flex-row gap-10 text-justify">
		{#each philosophy as item, idx (idx)}
			{#if item.title !== 'Philosophy'}
				<li class="w-[50%] list-none">
					<h2>{item.title}</h2>
					<p>{item.text}</p>
				</li>
			{/if}
		{/each}
	</ul>
	<h2>Goals</h2>
	<ol>
		{#each goals as goal, idx (idx)}
			<li>
				<p>{goal.text}</p>
			</li>
		{/each}
	</ol>
	<h2>Core Values</h2>
	<ol class="flex flex-col md:flex-row gap-10">
		{#each coreValues as coreValue, idx (idx)}
			<li>
				<h3>{coreValue.title}</h3>
				<ul class="list-disc pl-4">
					{#each coreValue.text as text, idx (idx)}
						<li>{text}</li>
					{/each}
				</ul>
				<h4>Related Values:</h4>
				<ul class="list-disc pl-10">
					{#each coreValue.values as value, idx (idx)}
						<li>{value}</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ol>
