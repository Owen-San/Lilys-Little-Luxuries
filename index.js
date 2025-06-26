// FAQ Logic

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq__question");

    question.addEventListener("click", () => {
      item.classList.toggle("active");

      faqItems.forEach((i) => {
        if (i !== item) i.classList.remove("active");
      });
    });
  });
});

// BURGER MENU

function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

// CAROUSEL

let currentIndex = 0;
let autoSwipeInterval;
let lastSwipeTime = 0;

window.addEventListener("load", () => {
  const track = document.querySelector(".carousel__track");
  const slides = Array.from(track.children);

  function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  function nextSlide() {
    const now = Date.now();
    if (now - lastSwipeTime < 1000) return; // prevent double-swipe
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
    lastSwipeTime = now;
  }

  function prevSlide() {
    const now = Date.now();
    if (now - lastSwipeTime < 1000) return;
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
    lastSwipeTime = now;
  }

  function startAutoSwipe() {
    autoSwipeInterval = setInterval(() => {
      nextSlide();
    }, 5000);
  }

  function stopAutoSwipe() {
    clearInterval(autoSwipeInterval);
  }

  track.addEventListener("mouseenter", stopAutoSwipe);
  track.addEventListener("mouseleave", startAutoSwipe);

  window.addEventListener("resize", updateSlidePosition);
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  updateSlidePosition();
  startAutoSwipe();
});