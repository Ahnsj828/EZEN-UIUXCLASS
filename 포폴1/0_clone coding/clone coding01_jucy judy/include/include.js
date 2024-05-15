// const menu = document.querySelector(".btn-menu h4");
// // console.log(menu);

// menu.innerText = "MENU";

// menu.addEventListener("click", () => {
//   // console.log("click");
//   menu.innerText = "CLOSE";
// });
// // ---------------------------------------
// document.addEventListener("DOMContentLoaded", function () {
//   const menuButton = document.querySelector(".btn-menu");
//   const menuTitle = document.querySelector(".btn-menu h4");

//   menuTitle.innerText = "MENU";

//   let isOpen = false;

//   menuButton.addEventListener("click", function () {
//     if (!isOpen) {
//       menuTitle.innerText = "CLOSE";
//       window.location.href = "../menu/menu.html"; // 메뉴 페이지로 이동
//       isOpen = true;
//     } else {
//       menuTitle.innerText = "MENU";
//       window.location.href = "../index.html"; // 인덱스 페이지로 이동
//       isOpen = false;
//     }
//   });
// });
// // ---------------------------------------
const menuOpenButton = document.querySelector(".btn-menu");
const menuCloseButton = document.getElementById("menu_close");
const menu = document.getElementById("menu");

menuOpenButton.addEventListener("click", () => {
  menu.classList.remove("hidden");
});

menuCloseButton.addEventListener("click", () => {
  menu.classList.add("hidden");
});
