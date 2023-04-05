<script lang="ts">
	import { dropdownItems } from '../../constants';
	import { showMobileDropdown } from '$lib/stores';
	import { goto } from '$app/navigation';

	export let drop: string;

	let show = false;

	showMobileDropdown.subscribe((value) => (show = value));
</script>

<ul class="flex flex-col overflow-hidden text-white">
	{#each dropdownItems[drop] as item, idx (idx)}
		<li>
			<a
				class="flex py-1 pl-10 pr-1"
				href={item.path}
				on:click={() => {
					showMobileDropdown.update(() => (show = false));
					goto(item.path);
				}}>{item.title}</a
			>
		</li>
	{/each}
</ul>
