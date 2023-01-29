<script lang="ts">
	import ChevronRight from '../../assets/icons/ChevronRight.svelte';
	import { navItems } from '../../constants';
	import DropdownMobile from './DropdownMobile.svelte';
  import "../../styles/navbar.css";

  // export let style: string;
  // export let ulStyle: string;

	// Get clicked element
	let clickedElement = '';
	let showDropdown = false;

	function handleClick(data: string) {
    clickedElement = data;
    showDropdown = showDropdown ? false : true;
  }
</script>

<div class='nav-mobile-dropdown'>
	<ul>
		{#each navItems as item, idx (idx)}
			{#if item.data === 'about' || item.data === 'academics'}
				<li class="item flex flex-col">
					<div class="flex flex-row-reverse text-white">
            <ChevronRight style={`chevron-arrow ${clickedElement === item.data && showDropdown ? 'rotate-90' : 'rotate-0'}`} />
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#" data-nav={item.data} on:click={() => handleClick(item.data)}>
							{item.title}
						</a>
					</div>
					{#if showDropdown && clickedElement === item.data}
            <DropdownMobile drop={item.data} />
					{/if}
          <!-- <DropdownMobile drop={item.data} style={`dropdown-mobile ${showDropdown && clickedElement === item.data ? 'max-h-[500px] opacity-100' : 'opacity-0'}`} /> -->
				</li>
			{:else}
				<li class="item">
					<a href={item.path} data-nav={item.data}>{item.title}</a>
				</li>
			{/if}
		{/each}
	</ul>
</div>
