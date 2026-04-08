// ========== КАРУСЕЛЬ ФОТО МАНИПУЛЯТОРА ==========
const truckImages = [
  'img_6.jpg',
  'img_5.jpg',
  'img_2.jpg',
  'img.webp',
  'img.png',
  'img_4.png',
];

let currentImageIndex = 0;
const imgElement = document.getElementById('carouselImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const counterElement = document.getElementById('imageCounter');

function updateImage() {
  if (imgElement) {
    imgElement.src = truckImages[currentImageIndex];
    counterElement.textContent = `${currentImageIndex + 1} / ${truckImages.length}`;
  }
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + truckImages.length) % truckImages.length;
    updateImage();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % truckImages.length;
    updateImage();
  });
}

updateImage();

// ========== КАРУСЕЛЬ ОТЗЫВОВ (ИСПРАВЛЕННАЯ) ==========
const track = document.getElementById('reviewsTrack');
const reviewsPrevBtn = document.getElementById('reviewsPrevBtn');
const reviewsNextBtn = document.getElementById('reviewsNextBtn');
const reviewsCounter = document.getElementById('reviewsCounter');

let currentPageIndex = 0;
let totalPages = 0;
let cardsPerPage = 1;

// Функция определения сколько карточек показывать на экране
function getCardsPerPage() {
  if (window.innerWidth >= 900) {
    return 3;
  } else {
    return 1;
  }
}

// Функция обновления карусели
function updateReviewsCarousel() {
  if (!track) return;

  const cards = track.querySelectorAll('.review-card');
  const totalCards = cards.length;
  cardsPerPage = getCardsPerPage();
  totalPages = Math.ceil(totalCards / cardsPerPage);

  if (currentPageIndex >= totalPages) {
    currentPageIndex = totalPages - 1;
  }
  if (currentPageIndex < 0) {
    currentPageIndex = 0;
  }

  // Вычисляем смещение
  const cardWidth = cards[0]?.offsetWidth || 0;
  const gap = 30;
  const offset = -currentPageIndex * (cardWidth + gap) * cardsPerPage;

  track.style.transform = `translateX(${offset}px)`;

  // Обновляем счётчик
  if (reviewsCounter) {
    reviewsCounter.textContent = `${currentPageIndex + 1} / ${totalPages}`;
  }
}

// Обработчик кнопки "назад"
if (reviewsPrevBtn) {
  reviewsPrevBtn.addEventListener('click', () => {
    if (currentPageIndex > 0) {
      currentPageIndex--;
      updateReviewsCarousel();
    }
  });
}

// Обработчик кнопки "вперёд"
if (reviewsNextBtn) {
  reviewsNextBtn.addEventListener('click', () => {
    if (currentPageIndex < totalPages - 1) {
      currentPageIndex++;
      updateReviewsCarousel();
    }
  });
}

// При изменении размера окна пересчитываем
window.addEventListener('resize', () => {
  currentPageIndex = 0;
  updateReviewsCarousel();
});

// Инициализация карусели отзывов
setTimeout(() => {
  updateReviewsCarousel();
}, 100);

// ========== КЛИКАБЕЛЬНЫЕ ТЕЛЕФОНЫ ==========
const phones = document.querySelectorAll('.header-phone, .big-phone, .cta-big-phone, .footer-phone');
phones.forEach(phone => {
  if (phone) {
    phone.style.cursor = 'pointer';
    phone.addEventListener('click', () => {
      window.location.href = 'tel:+79991234567';
    });
  }
});

console.log('Сайт манипулятора вездеход 6x6 | Воронеж | Карусель фото + отзывы (кнопки работают)');