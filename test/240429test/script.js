const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

const slide01 = document.querySelector(".slide01");
const slide02 = document.querySelector(".slide02");
const slide03 = document.querySelector(".slide03");
console.log(slide01, slide02, slide03);

btn1.addEventListener("click", () => {
  slide01.classList.add("active");
  slide02.classList.remove("active");
  slide03.classList.remove("active");

  btn1.classList.add("click");
  btn2.classList.remove("click");
  btn3.classList.remove("click");
});

btn2.addEventListener("click", () => {
  slide01.classList.remove("active");
  slide02.classList.add("active");
  slide03.classList.remove("active");

  btn1.classList.remove("click");
  btn2.classList.add("click");
  btn3.classList.remove("click");
});

btn3.addEventListener("click", () => {
  slide01.classList.remove("active");
  slide02.classList.remove("active");
  slide03.classList.add("active");

  btn1.classList.remove("click");
  btn2.classList.remove("click");
  btn3.classList.add("click");
});

// -----------------------------------------------------

function slider() {
  const slideWrapper = document.querySelector(".wrapper");
  const slider = document.querySelector(".slide-wrapper");
  const slides = document.querySelectorAll(".slide");
  const sliderWidth = slideWrapper.clientWidth;
  const totlaSlides = slides.length;

  // let slideIndex = 0;
  let autoSlider;

  slides.forEach(function (element) {
    element.style.width = sliderWidth + "px";
  });

  slider.style.width = sliderWidth * totlaSlides + "px";

  function startAutoSlider() {
    autoSlider = setInterval(function () {
      plussSlides(1);
    }, 300);
  }

  startAutoSlider();
}
slider();
