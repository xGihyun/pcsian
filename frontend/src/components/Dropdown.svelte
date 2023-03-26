<script lang="ts">
	import { dropdownItems } from '../constants';
	import { page } from '$app/stores';
	export let drop: string;
	export let scrolled: boolean;
</script>

<ul
	class={`absolute flex flex-col gap-3 text-white transition-[top,padding] duration-500 ease-in-out ${
		scrolled || $page.url.pathname === '/chat' ? 'top-16 pt-2' : 'top-28'
	}`}
>
	{#each dropdownItems[drop] as item, idx (idx)}
		<li class="pl-4 text-lg text-neutral-400 transition-colors duration-300 hover:text-white">
			<a href={item.path}>{item.title}</a>
		</li>
	{/each}
</ul>
