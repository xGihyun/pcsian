<script lang="ts">
	import video from '../assets/videos/pcs.mp4';
</script>

<section class="relative">
	<div class="from-nav-gradient absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t" />
	<video src={video} autoPlay loop muted class="h-screen w-full object-cover brightness-[30%]" />
	<div
		class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white [&>p]:pointer-events-none [&>h1]:pointer-events-none"
	>
		<h1 class="my-10 text-5xl lg:text-7xl">Quality Catholic Education</h1>
		<p class="text-base">Through Faith, Hope, & Charity</p>
	</div>
  <a class="text-white border-white border-[1px] py-2 px-5 text-xl absolute bottom-[25%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:bg-accent hover:border-accent transition-all duration-300" href="https://schoolaide.pcsian.edu.ph/login" rel="noreferrer" target="_blank" type="button">Apply Now</a>
</section>
