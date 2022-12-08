const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".nextBtn");
const prev = document.querySelector(".prevBtn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
next.addEventListener("click", () => {
  counter++;
  carousel();
});
prev.addEventListener("click", () => {
  counter--;
  carousel();
});

const carousel = () => {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  if (counter < slides.length - 1) {
    next.style.display = "block";
  } else {
    next.style.display = "none";
  }
  if (counter > 0) {
    prev.style.display = "block";
  } else {
    prev.style.display = "none";
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

prev.style.display = "none";
