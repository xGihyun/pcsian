<script lang="ts">
	import { dropdownItems } from '../../constants';
	export let drop: string;
</script>

<ul class="flex flex-col overflow-hidden text-white transition-all duration-500 ease-in-out">
	{#each dropdownItems[drop] as item, idx (idx)}
		<li>
			<a class="flex py-1 pr-1 pl-10" href={item.path}>{item.title}</a>
		</li>
	{/each}
</ul>
