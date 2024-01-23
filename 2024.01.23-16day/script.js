// const를써야지 변수를 줄 수있다
const trigger = document.querySelector(".trigger");
// trigger라는 class를 찾아줘
const gnb = document.querySelector("#gnb");
const headfer = document.querySelector("header");
// header라는 태그의 노드를 불러와서


window.addEventListener("scroll", () => {
  // console.log(window.scrollY); 좌표알아보려고 쓴 코드
  if(window.scrollY>455) {
    headfer.classList.add("active");
  }else(
    header.classList.remove("active");
   )
  });

trigger.addEventListener("click", () => {
  gnb.classList.toggle("active");
  trigger.classList.toogle("active");
});
// 클릭 이벤트를 부여하겠다
