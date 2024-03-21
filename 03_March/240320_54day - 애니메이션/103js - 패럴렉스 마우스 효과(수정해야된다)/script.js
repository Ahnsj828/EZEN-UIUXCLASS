// // 각각의 이미지들을 가져와야한다
// // parallax 속도를 다르게 줄거다

// const imageAll = document.querySelectorAll(".imageWrap .parallaxImame");
// // 총 여섯개 이미지들
// const subPageImage = document.querySelector(".subPage .parallaxImame");
// // console.log(imageAll, subPageImage);

// window.addEventListener("scroll", () => {
//   // console.log("scroll");
//   const scrollNum = window.screenY;
//   // console.log(scrollNum);
//   imageAll.forEach((item, index) => {
//     // imageAll은 유사배열이다 => 반복문을 쓸 수 있다
//     // 첫번째 이미지 index0 ... 여섯번째 이미지 index5
//     if (index < 4) {
//       // item.style.transform = `translateY(${scrollNum}px)`;
//       // item.style.transform = `translateY(${-scrollNum}px)`;
//       // // 위로 올라가야되니까 => 음수값
//       // item.style.transform = `translateY(${-scrollNum / 5}px)`;
//       // // 속도값을 줄이려고  / 5
//       item.style.transform = `translateY(${-scrollNum / (5 * index)}px)`;
//       // 인덱스에 따라서 올라가는 속도를 달려고
//     }
//   });
// });

//
//
//

// // << length로 써도된다 >>

// const imageAll = document.querySelectorAll(".imageWrap .parallaxImame");
// const totalNum = imageAll.length;
// const subPageImage = document.querySelector(".subPage .parallaxImame");

// window.addEventListener("scroll", () => {
//   const scrollNum = window.screenY;
//   imageAll.forEach((item, index) => {
//     if (index < 4) {
//       item.style.transform = `translateY(${
//         -scrollNum / (5 * (totalNum - index))
//       }px)`;
//     }
//   });
// });

// //
// //
// //
// //
// //
// // << 마우스 효과 >>

// const imageAll = document.querySelectorAll(".imageWrap .parallaxImame");
// const totalNum = imageAll.length;
// const subPageImage = document.querySelector(".subPage .parallaxImame");

// window.addEventListener("scroll", () => {
//   const scrollNum = window.screenY;
//   imageAll.forEach((item, index) => {
//     if (index < 4) {
//       item.style.transform = `translateY(${
//         -scrollNum / (5 * (totalNum - index))
//       }px)`;
//     }
//   });
// });

// window.addEventListener("mousemove", (e) => {
//   // console.log(e.pageX);
//   // const x = e.pageX;
//   // // 왼쪽을 기준으로 움직이고있다 / 중심좌표점이 왼쪽이다
//   // 이미지의 왼쪽끝이 아니라 이미지의 가운데를 중심축으로 갖고있어야한다
//   const x = e.pageX - window.innerWidth / 2;
//   // 중심좌표점을 중간으로 잡았다

//   // imageAll[4].style.transform = `translateX(${x}px)`;
//   // imageAll[4].style.transform = `translateX(${x / 50}px)`;
//   // // 많이 움직이지 않게 하려고 / 변경 폭을 줄였다
//   imageAll[4].style.transform = `translateX(${-x / 50}px)`;
//   // 마우스의 방향과 정 반대 방향으로 움직이게
// });
// //
// //
// //
// //
// //
// // << 마우스 효과 속도 >>

// const imageAll = document.querySelectorAll(".imageWrap .parallaxImame");
// const totalNum = imageAll.length;
// const subPageImage = document.querySelector(".subPage .parallaxImame");

// let x = 0;
// // 현재 마우스 위치
// let targetX = 0;
// const speed = 0.1;
// // 마우스 움직이는거에 대한 반응 속도

// window.addEventListener("scroll", () => {
//   const scrollNum = window.screenY;
//   imageAll.forEach((item, index) => {
//     if (index < 4) {
//       item.style.transform = `translateY(${
//         -scrollNum / (5 * (totalNum - index))
//       }px)`;
//     }
//   });
// });

// window.addEventListener("mousemove", (e) => {
//   // console.log(e.pageX);
//   // const x = e.pageX;
//   // // 왼쪽을 기준으로 움직이고있다 / 중심좌표점이 왼쪽이다
//   // 이미지의 왼쪽끝이 아니라 이미지의 가운데를 중심축으로 갖고있어야한다
//   const x = e.pageX - window.innerWidth / 2;
//   // 중심좌표점을 중간으로 잡았다

//   // imageAll[4].style.transform = `translateX(${x}px)`;
//   // imageAll[4].style.transform = `translateX(${x / 50}px)`;
//   // // 많이 움직이지 않게 하려고 / 변경 폭을 줄였다
//   imageAll[4].style.transform = `translateX(${-x / 50}px)`;
//   // 마우스의 방향과 정 반대 방향으로 움직이게
// });
// //
// //
// //
// //
// //
// // << 마우스 효과 속도 + 재귀함수(더 부드럽게 움직이게) >>

// const imageAll = document.querySelectorAll(".imageWrap .parallaxImame");
// const totalNum = imageAll.length;
// const subPageImage = document.querySelector(".subPage .parallaxImame");

// let x = 0;
// // 현재 마우스 위치
// let targetX = 0;
// const speed = 0.1;
// // 마우스 움직이는거에 대한 반응 속도

// window.addEventListener("scroll", () => {
//   const scrollNum = window.screenY;
//   imageAll.forEach((item, index) => {
//     if (index < 4) {
//       item.style.transform = `translateY(${
//         -scrollNum / (5 * (totalNum - index))
//       }px)`;
//     }
//   });
// });

// window.addEventListener("mousemove", (e) => {
//   x = e.pageX - window.innerWidth / 2;
// });

// const loop = () => {
//   targetX += (x - targetX) * speed;
//   imageAll[4].style.transform = `translateX(${-x / 50}px)`;

//   window.requestAnimationFrame(loop);
// };

// loop();
//
//
//
//
//
// << 강아지 움직이게 >>

const imageAll = document.querySelectorAll(".imageWrap .parallaxImame");
const totalNum = imageAll.length;
const subPageImage = document.querySelector(".subPage .parallaxImame");

let scrollNum = 0;
let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("scroll", () => {
  // const scrollNum = window.screenY;
  scrollNum = window.screenY;
  imageAll.forEach((item, index) => {
    if (index < 4) {
      item.style.transform = `translateY(${
        -scrollNum / (5 * (totalNum - index))
      }px)`;
    }
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  // imageAll[4].style.transform = `translateX(${-x / 50}px)`;
  // imageAll[5].style.transform = `translateX(${-x / 20}px)`;

  // imageAll[4].style.transform = `scale(1.2)translateX(${-x / 50}px)`;
  // imageAll[5].style.transform = `scale(1.2)translateX(${-x / 20}px)`;
  // // 오른쪽과 왼쪽에 여백이 생겼다 => scale값 변경하면된다

  imageAll[4].style.transform = `scale(1.2)translate(${-targetX / 50}px, ${-scrollNum / (5 * ())})`;
  imageAll[5].style.transform = `scale(1.2)translateX(${-x / 20}px)`;
  // Y축으로도 움직이게

  window.requestAnimationFrame(loop);
};

loop();
