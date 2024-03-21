const container = document.querySelector(".container");
const sliderContainer = document.querySelector(".slide_container");
const slides = document.querySelectorAll(".slide");

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

// slide count
const slideCount = slides.length;
for (let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
}

let currentIndex = 0;

const updateNav = () => {
  if (currentIndex === 0) {
    button1.classList.add("disabled");
  } else {
    button1.classList.remove("disabled");
  }

  if (currentIndex === slideCount - 1) {
    button2.classList.add("disabled");
  } else {
    button2.classList.remove("disabled");
  }
};

const gotoSlide = (i) => {
  sliderContainer.style.left = `${i * -100}%`;
  sliderContainer.classList.add("animated");
  currentIndex = i;
  updateNav();
};

button1.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex > 0) {
    gotoSlide(currentIndex - 1);
  } else {
    gotoSlide(slideCount - 1);
  }
});

button2.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex < slideCount - 1) {
    gotoSlide(currentIndex + 1);
  } else {
    gotoSlide(0);
  }
});

gotoSlide(0);
