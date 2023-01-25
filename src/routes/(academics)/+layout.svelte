<script lang="ts">
  import pcsMain from '../../assets/images/pcsMain.jpg';
	import TopHeading from '../../components/TopHeading.svelte';
</script>

<TopHeading title={"ACADEMICS"} />
<div class='relative'>
  <img src={pcsMain} alt="pcs main" class='w-full h-full absolute object-cover opacity-50' />
  <div class='w-full h-full absolute top-0 left-0 bg-white bg-opacity-80' />
  <slot />
</div>