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
window.addEventListener("load", () => {
  const track = document.querySelector(".carousel__track");
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let index = 0;

  function getSlideWidth() {
    return slides[0].getBoundingClientRect().width + 16;
  }

  function updatePosition() {
    const slideWidth = getSlideWidth();
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function nextSlide() {
    const visibleSlides = getVisibleSlides();
    index++;
    if (index > slides.length - visibleSlides) {
      index = 0;
    }
    updatePosition();
  }

  function prevSlide() {
    const visibleSlides = getVisibleSlides();
    index--;
    if (index < 0) {
      index = slides.length - visibleSlides;
    }
    updatePosition();
  }

  function getVisibleSlides() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  window.addEventListener("resize", updatePosition);

  updatePosition();
});
