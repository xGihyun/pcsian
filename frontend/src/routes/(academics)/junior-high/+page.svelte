<script lang="ts">
	import { juniorHigh } from '../../../constants';
</script>

<h2>{juniorHigh.title}</h2>
<ol>
	{#each juniorHigh.content as item, idx (idx)}
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
