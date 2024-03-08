const imgs = ["iu-1.jpg", "iu-2.jpg", "iu-3.jpg", "iu-4.jpg"];
// 배열의 형식으로
const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");
// 버튼정의
const slidePagers = document.querySelector(".slide_pagers");
const pagers = document.querySelectorAll(".slide_pagers li");

// 컨테이너 공간안에 이미지를 넣어줘야한다 / 이미지태그를 만들어야한다
const img = document.createElement("img");
// 이미지라는 노드를 만들었다

const src = document.createAttribute("src");
// 이미지는 src 속성을 갖고 움직인다

// const imgSrc = `./imgs/${imgs[0]}`;
// 첫번째 인덱스값부터 시작할거다
const imgSrc = `./imgs/iu-1.jpg`;
src.value = imgSrc;
img.setAttributeNode(src);
container.appendChild(img);

let i = 0;
const changeImg = (direction) => {
  if (direction === "next") {
    // 버튼을 누르면
    i++;
    // imgs[0] 숫자가 하나씩 증가해야된다
    if (i >= imgs.length) {
      i = 0;
      // i가 존재하지 않는 수 => 4가 된다면 다시 0으로가라
    }
    reset();
    paser[i].classList.add("active");
    // 이미지에 맞춰서 페이저도 같이 변경되게
  } else if (direction === "prev") {
    i--;
    if (i < 0) {
      i = imgs.length - 1;
      // 이전 이미지 보는 경우도 정의해줬다
    }
  }
  src.value = `./imgs/${imgs[i]}`;
};

arrows.forEach((arrow) => {
  //.arrow는 유사배열이다 => 반복문 사용할수 있다
  arrow.addEventListener("click", (e) => {
    // console.log(e);
    const direction = e.target.id === "left" ? "prev" : "next";
    changeImg(direction);
  });
});

//
//

const autoSlide = () => {
  timer = setInterval(() => {
    // let timer => timer로 해주면 블럭스코프에서 전역스코프가 되서 밖에서도 사용가능하다
    changeImg("next");
  }, 3000);
};
// 3초에 한번씩 이미지가 나오게 해라

autoSlide();

//  << 여기까지 오토 슬라이드다 >>

//
//
// ----------------------------------------------------------------------------------
//
//
const stopSlide = () => {
  clearInterval(time);
  // clearInterval는 주면 스탑이 된다
};

const reset = () => {
  // 모든 페이지한테 엑티브 제거할거다
  pagers.forEach((pager, indx) => {
    pagers[odx].classList.remove("active");
  });
};

container.addEventListener("mouseenter", () => {
  stopSlide();
  // 마우스가 올려지만 슬라이드가 멈추게할거다
});

slidePagers.addEventListener("mouseenter", () => {
  stopSlide();
  // 마우스가 올려지만 슬라이드가 멈추게할거다
});

container.addEventListener("mouseleave", () => {
  autoSlide;
});
// 마우스오버도 되고 마우스엔터도 된다  /  차이점 마우스오버 이벤트 버블링이 일어난다 /마우스엔터도 이벤트 버블링 안일어난다
// 소소한 이베트 줄때 마우스엔터도
// 마우스 리블 <=> 마우스엔터

slidePagers.addEventListener("mouseleave", () => {
  autoSlide;
});

const pagerChange = (e) => {
  // console.log("pager");
  // console.log(e);
  const target = e.target.dataset.index;
  reset();
  for (let i = 0; i < pagers.length; i++) {
    if (target == i) {
      pagers[i].classList.add("active");
      src.value = `./imgs/${img[i]}`;
    }
  }
};

pagers.forEach((pager) => {
  pager.addEventListener("click", pagerChange);
});
// 각각의 페이저를 클릭하면 pagerChange 되게 하라
