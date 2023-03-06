<script lang="ts">
	import { pcsMembers, qrCode, staticMapPcs } from '../assets/images';
</script>

<footer
	class="border-t-accent w-full border-t-8 bg-neutral-900 text-white [&>p]:text-neutral-300 [&>h2]:text-2xl"
>
	<div class="flex flex-col items-start justify-center py-16 text-center lg:flex-row">
		<div class="flex w-full flex-col items-center pb-12">
			<div class="pb-4">
				<h2>Pateros Catholic School</h2>
				<p>B. Morcilla St, Pateros, 1620 Metro Manila, Philippines</p>
			</div>
			<div class="h-72 w-72 md:h-[25rem] md:w-[25rem]">
				<!-- <iframe
					title="map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.9494751054976!2d121.06508531483951!3d14.54488198983792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8900303c535%3A0x83c4ca46850a39b3!2sPateros%20Catholic%20School!5e0!3m2!1sen!2sph!4v1664087741176!5m2!1sen!2sph"
					width="100%"
					height="100%"
					style={'border: 0'}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/> -->
				<a href="https://www.google.com/maps/place/Pateros+Catholic+School/@14.544882,121.067274,16z/data=!4m6!3m5!1s0x3397c8900303c535:0x83c4ca46850a39b3!8m2!3d14.544882!4d121.067274!16s%2Fg%2F1tfpm6qt?hl=en" target="_blank" rel="noreferrer">
					<img src={staticMapPcs} class="bg-cover" alt="pcs map" />
				</a>
			</div>
		</div>
		<div class="flex w-full flex-col items-center">
			<div class="pb-4">
				<h2>Connect with us</h2>
				<p>(02) 642-6016; (02) 636-7274</p>
				<p>registrar@pcsian.edu.ph</p>
			</div>
			<img src={qrCode} alt="" class="h-40" />
		</div>
	</div>
	<img src={pcsMembers} alt="" class="m-auto h-16" />
</footer>
