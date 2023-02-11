<script lang="ts">
  import { paascu } from '../../../constants';
</script>

<div class='page-wrap'>
  <div class='page-content'>
    <h2>PAASCU Accreditation</h2>
    <ol>
      {#each paascu as item, idx (idx)}
        <li>
          <h3>{item.title}</h3>
          <ul>
            {#each item.text as text, idx (idx)}
              <li>
                <p>{text}</p>
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ol>
  </div>
</div>