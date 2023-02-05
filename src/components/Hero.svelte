<script lang="ts">
	import video from '../assets/videos/pcs.mp4';
</script>

<section class="relative h-screen">
	<span class="from-nav-gradient absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t" />
	<video src={video} autoPlay loop muted class="h-screen w-full object-cover brightness-[30%] absolute bottom-0 left-0 -z-10" />
  <div class="h-full">
    <div
      class="text-center text-white [&>p]:pointer-events-none [&>h1]:pointer-events-none flex flex-col justify-center items-center h-full"
    >
      <h1 class="mb-10 text-5xl lg:text-7xl">Quality Catholic Education</h1>
      <p class="text-base">Through Faith, Hope, & Charity</p>
    </div>
    <a
      class="hover:bg-accent hover:border-accent absolute bottom-[20%] left-[50%] -translate-x-[50%] -translate-y-[50%] border-[1px] border-white py-3 px-5 text-xl text-white transition-all duration-300"
      href="https://schoolaide.pcsian.edu.ph/login"
      rel="noreferrer"
      target="_blank"
      type="button">Apply Now</a
    >
  </div>
</section>
