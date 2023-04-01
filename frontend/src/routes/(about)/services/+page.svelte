<script lang="ts">
	import { services } from '../../../constants';
</script>

<h2 class="my-5 text-center text-2xl font-semibold">Services & Facilities</h2>
<ul class="list-disc">
	{#each services as item, idx (idx)}
		<li>
			<h3 class="mb-2 mt-4 text-base font-semibold sm:text-xl">{item.title}</h3>
			<p class="text-sm sm:text-xl">{item.text}</p>
		</li>
	{/each}
</ul>
