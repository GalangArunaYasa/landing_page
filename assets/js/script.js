// Efek muncul saat di-scroll


window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.main, .jurusan, .reveal, .item, .service .about-us');
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;
    if (top < trigger) el.classList.add('active')
      
  });
});







// === SLIDER ABOUT US ===

// Ambil elemen penting
const sliders = document.querySelectorAll('.slider');
const dotsContainer = document.querySelector('.dots-container');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
let autoPlayInterval;

// Fungsi menampilkan slide berdasarkan index
function showSlider(index) {
  sliders.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    if (dotsContainer.children[i]) {
      dotsContainer.children[i].classList.toggle('active', i === index);
    }
  });
}

// Fungsi next & prev
function nextSlider() {
  currentIndex = (currentIndex + 1) % sliders.length;
  showSlider(currentIndex);
}

function prevSlider() {
  currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
  showSlider(currentIndex);
}

// Klik tombol next/prev
if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    nextSlider();
    resetAutoPlay();
  });

  prevBtn.addEventListener('click', () => {
    prevSlider();
    resetAutoPlay();
  });
}

// Fungsi autoplay
function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlider, 4000); // ganti slide setiap 4 detik
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

// Buat dots di bawah slider
function createDots() {
  sliders.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
      currentIndex = i;
      showSlider(currentIndex);
      resetAutoPlay();
    });
    dotsContainer.appendChild(dot);
  });
  showSlider(currentIndex);
}

// Jalankan saat halaman siap
document.addEventListener('DOMContentLoaded', () => {
  createDots();
  startAutoPlay();
});

// navbar responsive

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


function pindah(){
        window.location.href = "page.html";
    }
