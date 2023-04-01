<script lang="ts">
	import { ChevronRight } from '../../assets/icons';
	import { navItems } from '../../constants';
	import DropdownMobile from './DropdownMobile.svelte';
</script>

<div
	class="border-b-accent -z-10 h-full w-full border-b-4 bg-black bg-opacity-90 pb-4"
>
	<ul class="flex flex-col">
		{#each navItems as item, idx (idx)}
			{#if item.data === 'about' || item.data === 'academics'}
				<li class="flex h-full w-full flex-col">
					<div class="flex flex-row-reverse text-white">
						<button
							class="flex h-full w-full justify-between p-4"
							data-nav={item.data}
							on:click={() => item.drop = !item.drop}
						>
							{item.title}
							<ChevronRight
								style={`w-5 h-5 cursor-pointer transition-transform duration-200 ${
									item.drop ? 'rotate-90' : 'rotate-0'
								}`}
							/>
						</button>
					</div>
					{#if item.drop}
						<DropdownMobile drop={item.data} />
					{/if}
				</li>
			{:else}
				<li class="h-full w-full text-white">
					<a class="flex h-full w-full p-4" href={item.path} data-nav={item.data}>{item.title}</a>
				</li>
			{/if}
		{/each}
	</ul>
</div>
