const items = document.querySelectorAll(".navi li");
// const변수를 선언한다 변수:바구니
// document => html
// .querySelectorAll 복수의개념
// console.log(items);
const photo = document.querySelector(".photo");

items.forEach((item) => {
  item.addEventListener("mouseover", function () {
    const changeImage = this.getAttribute("data-image");
    photo.style.backgroundImage = `url(${changeImage})`;
  });
  item.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = "";
  });
});

// 사진 넘어갈때마다 깜빡거리는거 해결하려면 react로
