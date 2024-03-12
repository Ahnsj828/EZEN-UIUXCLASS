const slides = document.querySelector(".slides");
// console.log(slides);
const slide = slides.querySelectorAll("li");
// console.log(slide);
const slideCount = slide.length;
// length 유사배열이니까 5가 들어갈거다

const slideWidth = 200;
const slideMargin = 30;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
// 복제가 된 애들한테도 w,h margin값이 얼마인지를 알려줘야한다

// Initial Index Value (최초 인덱스 값)
let currentIdx = 0;

// < li style setting >
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  // 변수를 가져와서 연산작업을 한다
  slides.style.width = newWidth;
};
updateWidth();

const setInitialPos = () => {
  // 첫 스타트에 대한 초기화
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  // 총 다섯개 만큼의 아이템에 대한 값을 마이너스로 initialTranslateValue에 넣어줬다
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};
setInitialPos();

const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(tren);
    // cloneNode는 i번째 slide를 복제해라
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  // 함수가 실행되면 updateWidth함수, setInitialPos함수를 실행하게 할거다
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};
makeClone();

const moveSlide = (num) => {
  // num => 매개변수 명을 참조변수로 적었다 => 이유: 숫자가 들어올거라
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  // 왼쪽으로 slide 너비 100%만큼 이동할거다 + margin값
  currentIdx = num;
  console.log(currentIdx, slideCount);
  // currentIdx 0에서 시작해서 하나씩 증가하게 했다 / slideCount 슬라이드 갯수
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    // +5가 되거나 -5가 되면 => 처음 slide가 나오게할거다 => currentIdx를 0번으로 가게 할거다
    setTimeout(() => {
      // setTimeout 특정이 시간이경과한 순간 뭔가를 실행해라
      slides.classList.remove("animated");
      // classList클래스값으로
      slides.style.left = "0px";
      // 원래 있던 자리로 움직이게 할거다
      currentIdx = 0;
    }, 5000);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 6000);
  }
};

nextBtn.addEventListener("click", () => {
  // console.log("click");
  moveSlide(currentIdx + 1);
  // 클릭할때마다 인덱스값이 하나씩 증가하게 할거다
});

prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
  // 이전버튼을 누르면 -1 만큼 이돌할거다 / 인덱스가 하나씩 감소할거다
});
