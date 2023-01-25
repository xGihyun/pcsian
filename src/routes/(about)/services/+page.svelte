<script lang="ts">
  import { services } from '../../../constants';
</script>

<div class='page-wrap'>
  <div class='page-content'>
    <h2>Services & Facilities</h2>
    <ul>
      {#each services as item, idx (idx)}
        <li>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </li>
      {/each}
    </ul>
  </div>
</div>