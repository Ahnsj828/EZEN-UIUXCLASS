function initializeSlider() {
  const slideWrapper = document.getElementById("sliderWrap");
  const slider = document.querySelector("#sliderWrap .slider");
  const slides = document.querySelectorAll("#sliderWrap .slider li");
  const sliderWidth = slideWrapper.clientWidth;
  const totalSlides = slides.length;

  let slideIndex = 0;
  let autoSlider;

  // Set slide widths
  slides.forEach(function (element) {
    element.style.width = sliderWidth + "px";
  });

  slider.style.width = sliderWidth * totalSlides + "px";

  // Next, Prev, Pagination
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const dot = document.querySelector(".dot");
  const allBtn = document.getElementById("btn");

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function showSlides(n) {
    slideIndex = (n + totalSlides) % totalSlides;
    slider.style.left = -(sliderWidth * slideIndex) + "px";
    pagination();
  }

  function currentSlides(n) {
    showSlides(n);
  }

  function pagination() {
    const dots = document.querySelectorAll(".dot li");
    dots.forEach(function (element) {
      element.classList.remove("on");
    });
    dots[slideIndex].classList.add("on");
  }

  // Handle dot clicks
  dot.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      showSlides(
        Array.from(event.target.parentNode.children).indexOf(event.target)
      );
    }
  });

  // Handle button clicks
  nextBtn.addEventListener("click", function () {
    plusSlides(1);
  });

  prevBtn.addEventListener("click", function () {
    plusSlides(-1);
  });

  // Handle hover
  const hoverElements = [allBtn, dot];

  hoverElements.forEach(function (element) {
    element.addEventListener("mouseover", function () {
      this.classList.add("active");
      clearInterval(autoSlider);
    });

    element.addEventListener("mouseleave", function () {
      this.classList.remove("active");
      startAutoSlider();
    });
  });

  // Auto slider
  function startAutoSlider() {
    autoSlider = setInterval(function () {
      plusSlides(1);
    }, 3000);
  }

  // Initialize auto slider
  startAutoSlider();
}

// 호출하여 슬라이더 초기화
initializeSlider();
