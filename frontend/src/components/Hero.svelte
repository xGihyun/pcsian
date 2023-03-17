<script lang="ts">
	import video from '../assets/videos/pcs.mp4';
</script>

<section class="relative h-screen">
	<span class="from-nav-gradient absolute bottom-0 left-0 z-20 h-40 w-full bg-gradient-to-t" />
	<video
		src={video}
		autoPlay
		loop
		muted
		class="absolute bottom-0 left-0 -z-10 h-screen w-full object-cover brightness-[30%]"
	/>
	<div class="h-full px-[5%] pb-20">
		<div class="flex h-full flex-col items-start justify-end text-center text-white">
			<h1
				class="font-gt-walsheim-pro-medium mb-10 w-4/5 text-start text-4xl md:w-2/3 md:text-5xl lg:w-1/2 lg:text-6xl"
			>
				A Catholic education emphasizes faith, hope, and charity to foster positive change.
			</h1>
			<p class="mb-10 text-start text-lg lg:text-2xl">A lifelong journey of faith and learning</p>
			<a
				class="bg-accent z-30 rounded-full py-3 px-5 text-xl text-white transition-all duration-300 hover:scale-90 hover:bg-teal-500 hover:text-black hover:brightness-110"
				href="https://schoolaide.pcsian.edu.ph/login"
				rel="noreferrer"
				target="_blank"
				type="button">Apply Now</a
			>
		</div>
	</div>
</section>
