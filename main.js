let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  const slidesContainer = document.querySelector('.slides');
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}



// Initialize
showSlide(currentIndex);

// Auto slide every 4 seconds
let slideInterval = setInterval(nextSlide, 4000);

// Arrow controls
document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 4000);
});

document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 4000);
});