const btn = document.querySelector(".menu-toggle-btn");
// const를 사용해서 변수를 만든다
const gnb = document.querySelector(".gnb");
// gnb라는 class값을 가진애를 데려와

btn.addEventListener("click", () => {
  gnb.classList.toggle("active");
});
