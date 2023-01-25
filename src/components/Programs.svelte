<script lang="ts">
  import gradeSchool from '../assets/images/gradeSchool.gif';
  import juniorHigh from '../assets/images/juniorHigh.gif';
  import seniorHigh from '../assets/images/seniorHigh.gif';

  const programs = [
    {
      image: gradeSchool,
      path: '/grade-school'
    },
    {
      image: juniorHigh,
      path: '/junior-high'
    },
    {
      image: seniorHigh,
      path: '/senior-high'
    }
  ]
</script>

<div class='w-full relative bg-pcs bg-cover bg-center'>
  <div class='w-full h-full absolute bg-white bg-opacity-80' />
  <div class='flex flex-col lg:flex-row gap-5 px-[10%] py-[5%]'>
    {#each programs as program, idx (idx)}
      <a href={program.path}>
        <img src={program.image} alt="pcs" class='w-full h-full rounded-xl shadow-black shadow-md brightness-[60%] cursor-pointer hover:brightness-100 transition-all duration-300 ease-in-out' />
      </a>
    {/each}
  </div>
</div>