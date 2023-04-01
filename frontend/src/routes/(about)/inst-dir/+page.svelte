<script lang="ts">
	import { institutionDirection } from '../../../constants';
</script>

<h2 class="my-5 text-center text-2xl font-semibold">Institutional Directions</h2>
<p class="text-center">
	The 6 Institutional Directions are in support of the school's process in sustaining the ongoing
	PAASCU accreditation.
</p>
<ol class="list-decimal">
	{#each institutionDirection as item, idx (idx)}
		<li>
			<h3 class="mb-2 mt-4 text-base font-semibold sm:text-xl">{item.title}</h3>
			<p class="mb-2 mt-1 text-sm sm:mb-4 sm:mt-2 sm:text-xl">{item.text}</p>
		</li>
	{/each}
</ol>
