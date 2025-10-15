// Ganti dengan nomor WA bisnismu (tanpa 0 di awal, pakai 62)
const NOMOR_WA = "6282331025610";

// Pesan default
const PESAN_DEFAULT = "Halo, saya ingin tanya tentang jasa pengiriman barang.";

// Fungsi buat URL WhatsApp (tanpa spasi!)
function buatUrlWA(pesan = PESAN_DEFAULT) {
  return `https://wa.me/${6282331025610}?text=${encodeURIComponent(pesan)}`;
}

// Saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('#waButton, #waButton2');
  buttons.forEach(button => {
    button.href = buatUrlWA();
  });

});
