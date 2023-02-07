<script lang="ts">
	import { gradeSchool } from '../../../constants';
</script>

<h2>{gradeSchool.title}</h2>
<ol>
	{#each gradeSchool.content as item, idx (idx)}
		<li class="mb-4">
			<span>{item.mainText}</span>
			<ol>
				{#each item.subText as sub, idx (idx)}
					<li>{sub}</li>
				{/each}
			</ol>
		</li>
	{/each}
</ol>
