<script lang="ts">
	import { dropdownItems } from '../constants';
	export let drop: string;
	export let scrolled: boolean;
</script>

<ul
	class={`absolute flex flex-col gap-3 text-white transition-all duration-300 ease-in-out ${
		scrolled ? 'top-14 pt-2' : 'top-20'
	}`}
>
	{#each dropdownItems[drop] as item, idx (idx)}
		<li class="pl-4">
			<a href={item.path}>{item.title}</a>
		</li>
	{/each}
</ul>
