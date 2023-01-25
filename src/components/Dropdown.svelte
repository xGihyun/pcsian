<script lang="ts">
	import { dropdownItems } from "../constants";
  export let drop: string;
  export let scrolled: boolean;
</script>

<ul class={scrolled ? 'dropdown scrolled' : 'dropdown'}>
  {#each dropdownItems[drop] as item, idx (idx)}
    <li>
      <a href={item.path}>{item.title}</a>
    </li>
  {/each}
</ul>