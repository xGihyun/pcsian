<script lang="ts">
	import { paascu } from '../../../constants';
</script>

<h2 class="my-5 text-center text-2xl font-semibold">PAASCU Accreditation</h2>
<ol class="list-decimal">
	{#each paascu as item, idx (idx)}
		<li>
			<h3 class="mb-2 mt-4 text-base font-semibold sm:text-xl">{item.title}</h3>
			<ul>
				{#each item.text as text, idx (idx)}
					<li>
						<p class="mb-2 mt-1 text-sm sm:mb-4 sm:mt-2 sm:text-xl">{text}</p>
					</li>
				{/each}
			</ul>
		</li>
	{/each}
</ol>
