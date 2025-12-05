const NOMOR_WA = "6282331025610";
const PESAN_DEFAULT = "Halo, saya ingin tanya tentang jasa pengiriman barang.";

function buatUrlWA(pesan = PESAN_DEFAULT) {
  return `https://wa.me/${6282331025610}?text=${encodeURIComponent(pesan)}`;
}

document.addEventListener('DOMContentLoaded', function () {
  // Preloader
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('preloader').classList.add('hidden');
    }, 600);
  });

  // Scroll Progress
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    document.querySelector('.scroll-progress').style.width = `${scrollPercent}%`;
  });

  // WhatsApp Buttons
  const waButtons = document.querySelectorAll('#waButton, #waButton2');
  waButtons.forEach(button => {
    button.href = buatUrlWA();
    button.addEventListener('click', function () {
      this.innerHTML = '🔍 Mengarahkan...';
      this.style.backgroundColor = '#d97706';
      setTimeout(() => {
        this.innerHTML = '💬 Chat via WhatsApp';
      }, 800);
    });
  });

  // Lightbox
  document.querySelectorAll('.interactive-img').forEach(img => {
    img.addEventListener('click', function () {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      const caption = lightbox.querySelector('.caption');
      lightboxImg.src = this.src;
      caption.textContent = this.alt || 'Armada Simpang Raya Trans';
      lightbox.style.display = 'block';
    });
  });

  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (e.target === lightbox) lightbox.style.display = 'none';
  });

  // Back to Top
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // AOS
  AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });

  // Particles
  if (typeof tsParticles !== 'undefined') {
    tsParticles.load("particles-js", {
      fpsLimit: 60,
      particles: {
        number: { value: 8, density: { enable: true, value_area: 800 } },
        color: { value: "#1e40af" },
        opacity: { value: 0.15, random: true },
        size: { value: 3, random: true },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out"
        }
      },
      interactivity: { detect_on: "canvas", events: { onhover: { enable: false } } },
      detectRetina: true
    });
  }
});
