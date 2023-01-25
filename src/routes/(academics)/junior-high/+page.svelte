<script lang="ts">
  import { juniorHigh } from '../../../constants';
</script>

<div class='page-wrap'>
  <div class='page-content'>
    <h2>{juniorHigh.title}</h2>
    <ol>
      {#each juniorHigh.content as item, idx (idx)}
        <li class='mb-4'>
          <span>{item.mainText}</span>
          <ol>
            {#each item.subText as sub, idx (idx)}
              <li>{sub}</li>
            {/each}
          </ol>
        </li>
      {/each}
    </ol>
  </div>
</div>