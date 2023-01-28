<script lang="ts">
  import pcsAnnex2 from '../assets/images/pcsAnnex2.jpg';
  export let title: string;
</script>

<div class='h-72 relative flex items-center justify-center border-b-8 border-b-accent'>
  <img src={pcsAnnex2} alt="pcs annex" class='w-full h-full object-cover brightness-[40%] absolute' />
  <h1 class='text-white text-4xl z-10 font-bold'>{title}</h1>
</div>