const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".ul");
const regis = document.getElementById("regis");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  ul.classList.toggle("active");
});
document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    ul.classList.remove("active");
  })
);

regis.addEventListener("click", () => {});

const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

// Tentukan tanggal tujuan
const targetDate = new Date("April 1, 2025 00:00:00").getTime();

// Update countdown setiap detik
const interval = setInterval(() => {
  const now = new Date().getTime(); // Waktu saat ini
  const timeLeft = targetDate - now; // Selisih waktu

  // Hitung hari, jam, menit, dan detik
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Tampilkan hasilnya
  // document.getElementById("countdown").innerHTML = `
  //   ${days}hari ${hours}jam ${minutes}menit ${seconds}detik
  // `;
  day.innerHTML = days + " d";
  hour.innerHTML = hours + " h";
  minute.innerHTML = minutes + " m";
  second.innerHTML = seconds + " s";
  // Jika waktu habis
  if (timeLeft < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "Countdown selesai!";
  }
}, 1000);

// function checkwidth() {
//   if (window.innerWidth <= 768) {
//     regis.remove();
//   }
// }
// checkwidth();

const header = document.getElementById("kepala");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});