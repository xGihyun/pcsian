<script lang="ts">
	import pcsMain from '../../assets/images/pcsMain.jpg';
	import TopHeading from '../../components/TopHeading.svelte';
</script>

<TopHeading title={'ACADEMICS'} />
<div class="relative">
	<img src={pcsMain} alt="pcs main" class="absolute h-full w-full object-cover opacity-50" />
	<div class="absolute top-0 left-0 h-full w-full bg-white bg-opacity-80" />
	<slot />
</div>
