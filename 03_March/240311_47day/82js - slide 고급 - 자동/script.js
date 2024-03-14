const sliderWrapper = document.querySelector(".container");
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
// console.log(sliderWrapper, sliderContainer, slides);

const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");
const pager = document.querySelector(".pager");
// const pagerBtn = document.querySelectorAll(".pager span");

// slide count
const slideCount = slides.length;
for (let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
  //  본인 너비만큼 왼쪽으로 가야되니까
}

// slide height 슬라이드의 높이
let topHeight = 0;
// 슬라이드의 높이가 제각각이다 => 가장 높이가 높은 애를 기준으로 맞춰야한다
// 각각 개별적인 슬라이드의 높이가 될거다 / 재할달을할거다

const calculateTallestSlide = () => {
  for (let i = 0; i < slideCount; i++) {
    // 왜 반복문 => 똑같은 원리로 6개 슬라이드 높이를 맞춰야해서
    // slides가 유사 배열의 형태를 띄고있어서 반복문쓰기 좋다
    // i < 6 => 총 여섯개 => 0,1,2,3,4,5 => 6보다 작다
    if (slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }
  sliderWrapper.style.height = `${topHeight}px`;
  sliderContainer.style.height = `${topHeight}px`;
};

calculateTallestSlide();

let currentIndex = 0;
// 클릭할때마다 인덱스값이 증가하게할거다

const updateNav = () => {
  of(currentIndex === 0) {
    navPrev.classList.add("disabled")
  } else {
    navPrev.classList.remove("disabled")
  }

  if(currentIndex === slideCount - 1) {
    navNext.classList.add("disabled")
  } else {
    navNext.classList.remove("disabled")
  }
}

const gotoSlide = (i) => {
  sliderContainer.style.left = `${i * -100}%`;
  sliderContainer.classList.add("animated");
  currentIndex = i;

  for (let i = 0; i < pagerBtn.length; i++) {
    pagerBtn[i].classList.remove("active");
    // 반복문이라 모든요소한테 검정색이 생겼다
  }
  pagerBtn[i].classList.add("active");
};

// navPrev.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (currentIndex > 0) {
//     gotoSlide(currentIndex - 1);
//   } else {
//     gotoSlide(slideCount - 1);
//   }
// });

// navNext.addEventListener("click", (e) => {
//   // 클릭하게 된다면 다음에 나오는 함수를 실행되게 해주세요
//   e.preventDefault();
//   // a태그 자체는 외부 링크로 가는 속성이있는데 외부의 페이지에 가지 못하게 하기 위해
//   // console.log("click");
//   if (currentIndex < slideCount - 1) {
//     gotoSlide(currentIndex + 1);
//   } else {
//     gotoSlide(0);
//   }
// });
// // 버튼 클릭할때마다 인덱스값이 증가되어야한다

// pager slider moving
for (let i = 0; i < pagerBtn.length; i++) {
  pagerBtn[i].addEventListener("click", (e) => {
    // console.log("click")
    const pagerNum = e.target.innerText - 1;
    gotoSlide(pagerNum);
  });
}

gotoSlide(0)

// ================================================================================

// auto slide function
const startAutoSlide = () => {
  timer = setInterval(() => {
    const nextIndex = (currentIndex + 1) % slideCount
    gotoSlide(nextIndex)
  }, 3000)
}

startAutoSlide()

sliderWrapper.addEventListener("mouseenter", () => {
  clearInterval(timer)
})

sliderWrapper.addEventListener("mouseleaver", () => [
  startAutoSlide()
])