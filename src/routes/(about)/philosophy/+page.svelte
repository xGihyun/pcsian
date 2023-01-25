<script lang="ts">
  import { philosophy } from '../../../constants';
</script>

<div class='page-wrap'>
  <div class='page-content'>
    <ul>
      {#each philosophy as item, idx (idx)}
        <li class='list-none'>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </li>
      {/each}
    </ul>
  </div>
</div>