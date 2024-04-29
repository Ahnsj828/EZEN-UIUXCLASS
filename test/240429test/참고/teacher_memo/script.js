const slideImg = document.querySelector(".slide-wrapper");
const pagers = document.querySelectorAll(".toggle-btns .toggle-btn");

const imgs = ["slide-01.jpg", "slide-02.jpg", "slide-03.jpg"];
// 배열로
slideImg.style.backgroundImage = `url(./images/${imgs[0]})`;
// 슬라이드 공간에 이미지를 하나씩 넣겠다

let index = 0;

// --------------------- < pager 누르면 효과> ---------------------------
pagers.forEach((pager) => {
  pager.addEventListener("click", function () {
    // this쓰려고 function으로
    pagers.forEach((pager) => {
      pager.classList.remove("active");
    });
    this.classList.add("active");
  });
});
// =======> 여기까진 pager 누르면 누른 pager에 active효과가 생긴다

// --------------------- < pager 누르면 효과> ---------------------------
// pagers.forEach((pager) => {
//   pager.addEventListener("click", function () {
//      // this쓰려고 function으로
//     pagers.forEach((pager) => {
//       pager.classList.remove("active");
//     });
//     this.classList.add("active");
//     // this는 pager? paters?를 일컫는다
//   });
// });
// // =======> 여기까진 pager 누르면 누른 pager에 active효과가 생긴다

// --------------------- < pager 누르면 해당 이미지가 보이게> -------------------
// pagers.forEach((pager, idx) => {
//   pager.addEventListener("click", function () {
//     pagers.forEach((pager) => {
//       pager.classList.remove("active");
//     });
//     this.classList.add("active");
//     slideImg.style.backgroundImage = `url(./images/${imgs[idx]})`;
//   });
// });
// // =======> 여기까진 pager 누르면 해당 이미지가 보인다

// -------------------------------------------------------------------

// pagers.forEach((pager, idx) => {
//   if (index === idx) {
//     pager.classList.add("active");
//     slideImg.style.backgroundImage = `url(./images/${imgs[index]})`;
//   } else {
//     pager.classList.remove("active");
//   }
//   pager.addEventListener("click", function () {
//     pagers.forEach((pager) => {
//       pager.classList.remove("active");
//     });
//     this.classList.add("active");
//     slideImg.style.backgroundImage = `url(./images/${imgs[idx]})`;
//   });
// });
// ========> 여기까진 pager 누르면 해당 이미지가 보인다

// -------------------------- < 무한 반복 >-----------------------------------

// const rotation = () => {
//   index = (index + 1) % imgs.length;
//   // % => 무한 반복하려고 나머지를 사용한거다
//   pagers.forEach((pager, idx) => {
//     if (index === idx) {
//       pager.classList.add("active");
//       slideImg.style.backgroundImage = `url(./images/${imgs[index]})`;
//     } else {
//       pager.classList.remove("active");
//     }
//     pager.addEventListener("click", function () {
//       pagers.forEach((pager) => {
//         pager.classList.remove("active");
//       });
//       this.classList.add("active");
//       slideImg.style.backgroundImage = `url(./images/${imgs[idx]})`;
//     });
//   });
// };

// setInterval(rotation, 3000);
