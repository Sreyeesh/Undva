// script.js
let currentSlideIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  
  currentSlideIndex += direction;

  // If we go beyond the first or last slide, loop around to the other end
  if (currentSlideIndex >= totalSlides) currentSlideIndex = 0;
  if (currentSlideIndex < 0) currentSlideIndex = totalSlides - 1;

  // Translate the slides container
  slides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

// Attach event listeners to arrows
document.querySelector('.left-arrow').addEventListener('click', () => changeSlide(-1));
document.querySelector('.right-arrow').addEventListener('click', () => changeSlide(1));


// Function to handle the scroll event
function handleScroll() {
    const navbar = document.getElementById("navbar");
    const scrollY = window.scrollY;

    // Add the "fixed" class when scrolling down, remove it when at the top
    if (scrollY > 0) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);
