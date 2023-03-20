<script lang="ts">
	import { dropdownItems } from '../constants';
	export let drop: string;
	export let scrolled: boolean;
</script>

<ul
	class={`absolute flex flex-col gap-3 text-white transition-all duration-500 ease-in-out ${
		scrolled ? 'top-16 pt-2' : 'top-24'
	}`}
>
	{#each dropdownItems[drop] as item, idx (idx)}
		<li class="pl-4 text-lg text-neutral-400 transition-colors duration-300 hover:text-white">
			<a href={item.path}>{item.title}</a>
		</li>
	{/each}
</ul>
