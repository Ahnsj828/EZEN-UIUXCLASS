const btn = document.querySelector(".menu_toggle_btn");
// console.lot(btn);
// const 변언을 선언했다
// 선택자 .querySelector
// 누굴 데려올지 모르면 html alt l o 해서
// 마우스 우클릭 해서 찾아보기
// 콘솔이라는 공간에 btn에 대해 알려줘
const nav = document.querySelector("nav");
// console.log(nav);

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
