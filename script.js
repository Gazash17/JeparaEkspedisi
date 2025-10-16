// === WhatsApp Button ===
const NOMOR_WA = "6282331025610";
const PESAN_DEFAULT = "Halo, saya ingin tanya tentang jasa pengiriman barang.";

function buatUrlWA(pesan = PESAN_DEFAULT) {
  return `https://wa.me/${6282331025610}?text=${encodeURIComponent(pesan)}`;
}

// === Lightbox & WhatsApp Setup ===
document.addEventListener('DOMContentLoaded', function() {
  // Set WhatsApp buttons
  const waButtons = document.querySelectorAll('#waButton, #waButton2');
  waButtons.forEach(button => {
    button.href = buatUrlWA();
  });

  // Lightbox: open when image clicked
  document.querySelectorAll('.interactive-img').forEach(img => {
    img.addEventListener('click', function() {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      const caption = lightbox.querySelector('.caption');

      lightboxImg.src = this.src;
      caption.textContent = this.alt || 'Armada Simpang Raya Trans';
      lightbox.style.display = 'block';
    });
  });

  // Close lightbox
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
  });

  // Close when click outside image
  window.addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});
