// ==========================================
// 1. FUNGSI NAVIGASI INTERAKTIF (ALERT POPUP)
// ==========================================

// Pindah ke halaman Esports
function exploreAction() {
  let yakin = confirm("Apakah Anda ingin pergi ke halaman Esports?");
  if (yakin) {
    window.location.href = "trend.html";
  } else {
    console.log("Pengguna membatalkan navigasi ke Esports.");
  }
}

// Pindah ke halaman Statistik
function statAction() {
  let yakin = confirm("Apakah Anda ingin pergi ke halaman Statistik?");
  if (yakin) {
    window.location.href = "statistik.html";
  } else {
    console.log("Pengguna membatalkan navigasi ke Statistik.");
  }
}

// ==========================================
// 2. EFEK NAVBAR BERUBAH WARNA SAAT DI-SCROLL
// ==========================================
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(5, 8, 16, 0.95)";
  } else {
    nav.style.background = "transparent";
  }
});

// ==========================================
// 3. ANIMASI SKILL CARDS SAAT DI-SCROLL
// ==========================================
const skillCards = document.querySelectorAll(".skill-card");

// Atur gaya awal kartu sebelum di-scroll (Disembunyikan dulu)
skillCards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";
});

// Jalankan efek muncul saat halaman di-scroll
window.addEventListener("scroll", () => {
  skillCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
