new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterLoad: (old_elm, new_elm) => {
    if (new_elm.index == 2) {
      console.log("section2 Hello!");
      sec2();
    }
    if (old_elm.index == 2) {
      // 현재 보고있던 section에서 다음 section으로 가면 보고있던건 old_elm.index 가 된다
      console.log("section2 Good Bye!");
      sec2.sec2_reset();
    }
  },
});
// 이게 wow.js 원리다

const navBtn = document.querySelector("#nav_icon");
// console.log(navBtn);
const nav = document.querySelector(".nav");
const sec2Title = document.querySelector("#sec2 h1.title");
const sec2Slider = document.querySelector("#sec2 .slider_wrap");
// console.log(sec2Title, sec2Slider);

navBtn.addEventListener("click", () => {
  // console.log("click");
  navBtn.classList.toggle("active");
  nav.classList.toggle("active");
});

const sec2 = () => {
  // sec2Title.style.transform = translateX("50px");
  // sec2Title.style.opacity = 1;
  // 👇
  sec2Title.style.cssText = `opacity: 1; transform: translateX("50px");`;
  // 복수의 스타일을 주고 싶다 => cssText

  sec2Slider.style.cssText = `opacity: 1; transform: translateX("-50px");`;
};

const sec2_reset = () => {
  sec2Title.style.cssText = `opacity: 0; transform: translateX("-50px");`;
  sec2Slider.style.cssText = `opacity: 0; transform: translateX("50px");`;
};
