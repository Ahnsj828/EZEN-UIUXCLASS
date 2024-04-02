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
  li.addEventListener("click", (e) => {
    // console.log("pager");
    const target = e.target.dataset.index;
    // console.log(target);
    console.log(typeof target);
    s_reset();
    // if ((li.tagName = "LI")) {
    // li.tagName = "LI" 이건 참인값을 내려고 만든거다 / 큰 의미없다
    for (let i = 0; i < s_Icons.length; i++) {
      if (target == i) {
        // == 형태만 같다면 찾아와라 / === 속성값도 같다면 찾아와라
        s_Slider[i].classList.add("on");
        s_Icons[i].classList.add("active");
        Bg.style.backgroundImage = `url(./img/sec2_bg_${i}.png)`;
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
  Bg.style.backgroundImage = `url(./img/sec2_bg_${i}.png)`;
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
  Bg.style.backgroundImage = `url(./img/sec2_bg_${i}.png)`;
};

s_Left.addEventListener("click", prev);

// anime
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

const sec3 = () => {
  const d0 =
    "M453 100C283.5 11.5 184 0.499989 0.5 0.5V772H1921V63C1753.5 144 1381.5 288 1146 288C825 288 726.67 242.89 453 100Z";
  const d1 =
    "M570 10C308.5 -26.5 135 62 0.5 95V730H1921V95C1753.5 176 1579.5 209 1344 209C1028.11 209 875.763 52.6782 570 10Z";
  const d2 =
    "M585.5 276C367.959 243.273 245 160.5 0.5 20V729H1921V20C1693 -24 1501 6.78688 1312 147.287C1070.85 326.558 758.5 302.027 585.5 276Z";

  anime({
    targets: ".sec3_svg path",
    d: [{ value: d0 }, { value: d1 }, { value: d2 }],
    easing: "easeInOutQuart",
    duration: 3000,
    loop: true,
    direction: "alternate",
  });

  anime({
    targets: "#sec3 h1 span",
    delay: anime.stagger(100),
    opacity: 1,
    translateX: 100,
    easing: "easeOutSine",
  });
};

const staggerWrap = document.querySelector("#sec4 .img_wrap");
// console.log(staggerWrap)
const fragment = document.createDocumentFragment();
// Fragment 아무의미없는
const grid = [20, 20];
// 그리드 박스
const [col, row] = grid;
// console.log(col, row);

const allElem = col * row;

for (let i = 0; i < allElem; i++) {
  const div = document.createElement("div");
  // div만들었다
  fragment.appendChild(div);
  div.className = "tail";
}

staggerWrap.appendChild(fragment);

const sec4 = () => {
  const stageAni = anime.timeline({
    targets: ".tail",
    easing: "easeInBack",
    delay: anime.stagger(10, { from: "last" }),
    duration: 2000,
    endDelay: 1000,
    loop: false,
    autoplay: false,
  });

  stageAni
    .add({
      targets: "sec4 h1 img",
      opacity: 0,
      duration: 500,
    })
    .add({
      translateX: () => {
        return anime.random(-500, 500);
      },
      translateY: () => {
        return anime.random(-500, 500);
      },
      delay: anime.stagger(200, { grid: grid, from: "lsst" }),
      scale: 0.2,
      background: "fff",
      borderRadius: "100%",
    })
    .add({
      targets: staggerWrap,
      rotate: 360,
      easing: "linear",
      duration: 4000,
      scale: 0.5,
    })
    .add({
      targets: staggerWrap,
      duration: 1000,
      scale: 1,
    })
    .add({
      translateX: 0,
      translateY: 0,
      delay: anime.stagger(100, { grid: grid, from: "center" }),
      duration: 3000,
      scale: 0.8,
      background: "#2af598",
      //   targets 안바꾼다는건 그대로 가겠다는거다
    })
    .add({
      scale: 0.5,
      duration: 500,
      rotate: 60,
      borderRadius: "0",
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      scale: 0.8,
      duration: 500,
      rotate: -60,
      borderRadius: "50%",
      background: "#fff",
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      scaleX: 0.1,
      scaleY: 1,
      duration: 500,
      rotate: 120,
      borderRadius: "0",
      background: "#2af598",
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      duration: 500,
      rotate: 0,
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      scaleX: 1,
      duration: 500,
      ddelay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      scale: 1,
      duration: 800,
      background: "#fa709a",
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      targets: "#sec4 h1 img",
      opacity: 1,
      duration: 500,
    });

  staggerWrap.addEventListener("click", () => {
    // console.log("start");
    stageAni.play();
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
    if (new_elem.index === 3) {
      sec3();
    }
    if (new_elem.index === 4) {
      sec4();
    }
  },
});
// fullpage 정도는 포폴할때 넣어도 인정해준다
