<script lang="ts">
	import { Email, Telephone, Location, Facebook } from '../assets/icons';
	// import { pcsMembers, qrCode, staticMapPcs } from '../assets/images';
</script>

<footer
	class="border-t-accent w-full border-t-8 bg-black px-[5%] py-20 text-white [&>p]:text-neutral-300 [&>h2]:text-2xl"
>
	<div class="flex flex-col-reverse lg:flex-row lg:gap-40">
		<!-- PCS logo -->
		<a href="/" class="flex justify-center ">
			<div class="relative h-52 w-52">
				<div
					class="bg-pcs-orig absolute z-10 h-52 w-52 transform-gpu bg-cover bg-no-repeat opacity-0 transition-all duration-500 ease-in-out hover:opacity-100"
				/>
				<div
					class="bg-pcs-outline-white absolute z-[9] h-52 w-52 transform-gpu bg-cover bg-no-repeat transition-all duration-500 ease-in-out"
				/>
			</div>
		</a>
		<div class="w-full">
			<div class="mb-16 flex flex-col gap-10 xl:flex-row">
				<!-- Contacts -->
				<div class="flex xl:w-1/2">
					<span class="text-5xl font-black">Get in Touch</span>
				</div>
				<div class="flex xl:w-1/2">
					<div class="flex flex-col gap-4">
						<div class="flex items-center gap-4">
							<a href="mailto:registrar@pcsian.edu.ph">
								<Email style="w-7 h-7 transition-colors duration-300 hover:text-accent" />
							</a>
							<a
								href="mailto:registrar@pcsian.edu.ph"
								class="transition-colors duration-300 hover:text-neutral-400"
							>
								<span class="text-base md:text-lg">registrar@pcsian.edu.ph</span>
							</a>
						</div>
						<div class="flex items-center gap-4">
							<Telephone style="w-7 h-7" />
							<span class="text-base md:text-lg">(02) 642 6016 or (02) 636 7274</span>
						</div>
						<div class="flex items-center gap-4">
							<a href="https://www.facebook.com/PCS.OfficialPage" target="_blank" rel="noreferrer">
								<Facebook style="w-7 h-7 transition-colors duration-300 hover:text-blue-500" />
							</a>
							<a
								href="https://www.facebook.com/PCS.OfficialPage"
								class="transition-colors duration-300 hover:text-neutral-400"
								target="_blank"
								rel="noreferrer"
							>
								<span class="text-base md:text-lg">Pateros Catholic School Official_Page</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="mb-16 flex flex-col gap-10 xl:flex-row">
				<!-- Main building -->
				<div class="flex flex-col gap-4 xl:w-1/2">
					<span class="text-base font-bold md:text-lg">Main Building</span>
					<div class="flex items-center gap-4">
						<a
							href="https://www.google.com/maps/place/Pateros+Catholic+School/@14.544882,121.06508,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c8900303c535:0x83c4ca46850a39b3!8m2!3d14.544882!4d121.067274!16s%2Fg%2F1tfpm6qt?hl=en"
							target="_blank"
							rel="noreferrer"
						>
							<Location style="w-7 h-7 transition-colors duration-300 hover:text-red-500" />
						</a>
						<a
							href="https://www.google.com/maps/place/Pateros+Catholic+School/@14.544882,121.06508,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c8900303c535:0x83c4ca46850a39b3!8m2!3d14.544882!4d121.067274!16s%2Fg%2F1tfpm6qt?hl=en"
							class="transition-colors duration-300 hover:text-neutral-400 xl:w-1/2"
							target="_blank"
							rel="noreferrer"
						>
							<span class="text-base md:text-lg"
								>B. Morcilla St. Pateros, 1620 Metro Manila, Philippines.</span
							>
						</a>
					</div>
				</div>
				<!-- Annex building -->
				<div class="flex flex-col gap-4 xl:w-1/2">
					<span class="text-base font-bold md:text-lg">Annex Building</span>
					<div class="flex items-center gap-4">
						<a
							href="https://www.google.com/maps/place/Pateros+Catholic+School+Senior+High+School/@14.5473356,121.066567,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c89aabff0665:0x8b5a7c61b42ae8ae!8m2!3d14.5473356!4d121.068761!16s%2Fg%2F11c2l8w9c2?hl=en"
							target="_blank"
							rel="noreferrer"
						>
							<Location style="w-7 h-7 transition-colors duration-300 hover:text-red-500" />
						</a>
						<a
							href="https://www.google.com/maps/place/Pateros+Catholic+School+Senior+High+School/@14.5473356,121.066567,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c89aabff0665:0x8b5a7c61b42ae8ae!8m2!3d14.5473356!4d121.068761!16s%2Fg%2F11c2l8w9c2?hl=en"
							class="transition-colors duration-300 hover:text-neutral-400 xl:w-1/2"
							target="_blank"
							rel="noreferrer"
						>
							<span class="text-base md:text-lg"
								>F. Imson St. Brgy. San Pedro, Pateros, Metro Manila, Philippines.</span
							>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<hr class="my-5 opacity-20" />
	<div class="flex flex-row justify-center text-center">
		<span>© 2023. Pateros Catholic School, Pateros, Metro Manila. All Rights Reserved.</span>
	</div>
</footer>
