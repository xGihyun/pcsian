<script lang="ts">
	import { gradeSchool } from '../../../constants';
</script>

<h2>{gradeSchool.title}</h2>
<div class="flex flex-row gap-10">
	<ol>
		{#each gradeSchool.content as item, idx (idx)}
			<li class="mb-4">
				<span>{item.mainText}</span>
				<ol class="pl-4">
					{#each item.subText as sub, idx (idx)}
						<li>{sub}</li>
					{/each}
				</ol>
			</li>
		{/each}
	</ol>
	<div class="flex flex-col gap-4">
		<img class="object-cover h-64 w-80" src="https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png" alt="pikachu" />
		<img class="object-cover h-64 w-80" src="https://pyxis.nymag.com/v1/imgs/0f9/f96/029acbf4c6d8c67e138e1eb06a277204bf-05-patrick.rsocial.w1200.jpg" alt="patrick" />
	</div>
</div>
