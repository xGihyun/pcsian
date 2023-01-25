<script lang="ts">
  import { goals, coreValues } from '../../../constants';
</script>

<div class='page-wrap'>
  <div class='page-content'>
    <h2>Goals</h2>
    <ol>
      {#each goals as goal, idx (idx)}
        <li>
          <p>{goal.text}</p>
        </li>
      {/each}
    </ol>
    <h2>Core Values</h2>
    <ol>
      {#each coreValues as coreValue, idx (idx)}
        <li>
          <h3>{coreValue.title}</h3>
          <ul>
            {#each coreValue.text as text, idx (idx)}
              <li>{text}</li>
            {/each}
          </ul>
          <h4>Related Values:</h4>
          <ol>
            {#each coreValue.values as value, idx (idx)}
              <li>{value}</li>
            {/each}
          </ol>
        </li>
      {/each}
    </ol>
  </div>
</div>