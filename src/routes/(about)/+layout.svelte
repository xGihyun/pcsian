<script lang="ts">
	import TopHeading from '../../components/TopHeading.svelte';
</script>

<TopHeading title={'ABOUT'} />
<div class="px-4 py-10 h-full bg-white">
	<div class="page-content mx-auto max-w-4xl">
		<slot />
	</div>
</div>
