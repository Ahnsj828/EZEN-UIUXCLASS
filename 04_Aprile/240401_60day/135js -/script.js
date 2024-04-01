const nav_btn = document.querySelector("#nav_icon");
const nav = document.querySelector(".nav");

// << nav >>
nav_btn.addEventListener("click", () => {
  nav_btn.classList.toggle("active");
  nav.classList.toggle("active");
});

// << slider >>
const s_Left = document.querySelector(".slide_btn.left");
const s_Right = document.querySelector(".slide_btn.right");
const s_Icons = document.querySelectorAll(".slide_icons li");
const s_Slider = document.querySelectorAll(".sec2_slider_li");
// 네장의 이미지들이 들어있는 노드리스트
const Bg = document.querySelector("#sec2");
// console.log(s_Left, s_Right, s_Icons, Bg);

const s_reset = () => {
  // 노드리스트 => 반복문 => 쌤 최에 forEach
  s_Slider.forEach((elem, idx) => {
    s_Slider[idx].classList.remove("on");
    // on이라는 클래스를 지워주겠다
    s_Icons[idx].classList.remove("active");
  });
};

s_Icons.forEach((li) => {
  li.addEventListener("click", () => {
    // console.log("pager");
    const target = e.target.dataset.index;
    // console.log(target);
    console.log(typeof target);
    s_reset();
    if ((li.tagName = "LI")) {
      // li.tagName = "LI" 이건 참인값을 내려고 만든거다 / 큰 의미없다
      for (let i = 0; i < s_Icons.length; i++) {
        if (target == i) {
          // == 형태만 같다면 찾아와라 / === 속성값도 같다면 찾아와라
          s_Slider[i].classList.add("on");
          s_Icons[i].classList.add("active");
          Bg.style.backgroundImage = `url(./portfolio/img/sec2_bg_${i}.png)`;
        }
      }
    }
  });
});

const next = (e) => {
  e.preventDefault();
  // console.log("next");
  const crtSlide = document.querySelector(".sec2_slider li.on");
  // console.log(crtSlide);
  let i = crtSlide.dataset.index;
  s_reset();
  // 기존 값들을 제로베이스에서 시작하게
  i++;
  // console.log(i);
  if (i >= s_Slider.length) {
    i = 0;
  }
  s_Slider[i].classList.add("on");
  s_Icons[i].classList.add("active");
  Bg.style.backgroundImage = `url(./portfolio/img/sec2_bg_${i}.png)`;
};

s_Right.addEventListener("click", next);

const prev = (e) => {
  e.preventDefault();
  const crtSlide = document.querySelector(".sec2_slider li.on");
  let i = crtSlide.dataset.index;
  s_reset();
  i--;
  if (i < 0) {
    i = s_Slider.length - 1;
  }
  s_Slider[i].classList.add("on");
  s_Icons[i].classList.add("active");
  Bg.style.backgroundImage = `url(./portfolio/img/sec2_bg_${i}.png)`;
};

s_Left.addEventListener("click", prev);

// << anime >>
const sec0 = () => {
  anime({
    targets: ".svg1 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 4000,
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });
};

const sec1 = () => {
  const tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });
  tl.add({
    targets: ".g01",
    height: "80%",
  })
    .add({
      targets: ".g02",
      height: "70%",
    })
    .add({
      targets: ".g03",
      height: "80%",
    })
    .add({
      targets: ".g04",
      height: "85%",
    });
};

const sec1_reset = () => {
  // console.log("reset");
  anime({
    targets: ".gage_in",
    height: "0%",
  });
};

const sec2 = () => {
  const tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });
  tl.add({
    targets: "#sec2 h1",
    opacity: 1,
    translateY: 50,
  }).add({
    targets: ".slider_wrap",
    opacity: 1,
    translateY: 50,
  });
};

// << fullpage >>
new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterLoad: (old_elem, new_elem) => {
    // old_elem 이미지나간 과거의 페이지
    // new_elem 신규페이지
    if (new_elem.index === 0) {
      // console.log("sec0");
      sec0();
    }
    if (new_elem.index === 1) {
      // console.log("sec1");
      sec1();
      // 1번 인덱스에 도착하면 sec1()함수를 실행시켜라
    }
    if (old_elem.index === 1) {
      sec1_reset();
    }
    if (new_elem.index === 2) {
      sec2();
    }
  },
});
// fullpage 정도는 포폴할때 넣어도 인정해준다
