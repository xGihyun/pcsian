<script lang="ts">
  import { institutionDirection } from '../../../constants';
</script>

<div class='page-wrap'>
  <div class='page-content'>
    <h2>Institutional Directions</h2>
    <p class='text-center'>The 6 Institutional Directions are in support of the school's process in sustaining the ongoing PAASCU accreditation.</p>
    <ol>
      {#each institutionDirection as item, idx (idx)}
      <li>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </li>
      {/each}
    </ol>
  </div>
</div>