<script lang="ts">
	import { dropdownItems } from "../../constants";
  import "../../styles/navbar.css";
  export let drop: string;
  // export let style: string;
</script>

<ul class='dropdown-mobile'>
  {#each dropdownItems[drop] as item, idx (idx)}
    <li class='pr-1 pl-10 py-1'>
      <a href={item.path}>{item.title}</a>
    </li>
  {/each}
</ul>