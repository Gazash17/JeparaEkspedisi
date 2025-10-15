const NOMOR_WA = "6282331025610";
const PESAN_DEFAULT = "Halo, saya ingin tanya tentang jasa pengiriman barang.";

function buatUrlWA(pesan = PESAN_DEFAULT) {
  // Hapus spasi berlebih di URL!
  return `https://wa.me/${6282331025610}?text=${encodeURIComponent(pesan)}`;
}

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('#waButton, #waButton2');
  buttons.forEach(button => {
    button.href = buatUrlWA();
  });
});
