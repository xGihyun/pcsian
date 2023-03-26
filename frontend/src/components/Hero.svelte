<script lang="ts">
	import video from '../assets/videos/pcs.mp4';
</script>

<section class="relative h-screen min-h-[45rem] lg:min-h-[50rem]">
	<div class="from-nav-gradient absolute bottom-0 left-0 z-20 h-40 w-full bg-gradient-to-t" />
	<video
		src={video}
		autoPlay
		loop
		muted
		class="absolute bottom-0 left-0 -z-10 h-full w-full object-cover brightness-[30%]"
	/>
	<div class="flex min-h-full items-end px-[5%] pb-20 pt-52">
		<div class="flex h-full flex-col items-start text-center text-white">
			<h1
				class="font-gt-walsheim-pro-medium mb-10 w-4/5 text-start text-4xl md:w-2/3 md:text-5xl lg:w-1/2 lg:text-6xl"
			>
				A Catholic education emphasizes faith, hope, and charity to foster positive change.
			</h1>
			<p class="mb-10 text-start text-lg lg:text-2xl">A lifelong journey of faith and learning</p>
			<div class="z-30 flex gap-4">
				<a
					class="bg-gradient-to-r from-amber-500 to-accent z-30 rounded-full py-2 px-4 text-sm text-white transition-[transform,filter] duration-300 hover:scale-90 hover:brightness-90 md:py-3 md:px-5 md:text-xl"
					href="https://schoolaide.pcsian.edu.ph/login"
					rel="noreferrer"
					target="_blank"
					type="button">Apply Now</a
				>
				<a
					class="z-30 rounded-full border-[1px] border-white py-2 px-4 text-sm text-white transition-transform duration-300 hover:scale-90 md:py-3 md:px-5 md:text-xl"
					href="https://www.facebook.com/PCS.OfficialPage"
					rel="noreferrer"
					target="_blank"
					type="button">Follow Us</a
				>
			</div>
		</div>
	</div>
</section>
