<script lang="ts">
	import { seniorHigh } from '../../../constants';
</script>

<h2>{seniorHigh.title}</h2>
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