<script lang="ts">
  import qrCode from '../assets/images/pcsQrCode.jpg';
  import pcsMembers from '../assets/images/pcsMembers.png';
  import "../styles/footer.css";
</script>

<footer class='w-full bg-neutral-800 text-white border-t-accent border-t-8'>
  <div class='flex flex-col lg:flex-row items-start text-center justify-center py-16'>
    <div class='w-full flex flex-col items-center pb-12'>
      <div class='pb-4'>
        <h2>Pateros Catholic School</h2>
        <p>B. Morcilla St, Pateros, 1620 Metro Manila, Philippines</p>
      </div>
      <div class='w-72 h-72 md:w-[25rem] md:h-[25rem]'>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.9494751054976!2d121.06508531483951!3d14.54488198983792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8900303c535%3A0x83c4ca46850a39b3!2sPateros%20Catholic%20School!5e0!3m2!1sen!2sph!4v1664087741176!5m2!1sen!2sph"
          width="100%" height="100%" style={'border: 0'} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
    <div class='w-full flex flex-col items-center'>
      <div class='pb-4'>
        <h2>Connect with us</h2>
        <p>(02) 642-6016; (02) 636-7274</p>
        <p>registrar@pcsian.edu.ph</p>
      </div>
      <img src={qrCode} alt="" />
    </div>
  </div>
  <img src={pcsMembers} alt="" class='m-auto' />
</footer>