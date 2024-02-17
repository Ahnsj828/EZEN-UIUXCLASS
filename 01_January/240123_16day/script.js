// const를써야지 변수를 줄 수있다
const trigger = document.querySelector(".trigger");
// trigger라는 class를 찾아줘
const gnb = document.querySelector("#gnb");
const header = document.querySelector("header");
// header라는 태그의 노드를 불러와서
const gototop = document.querySelector(".gototop");
// console.log(gototop):
// ctrl shift J

window.addEventListener("scroll", () => {
  // console.log(window.scrollY); 좌표알아보려고 쓴 코드
  if(window.scrollY>455) {
    headfer.classList.add("active");
    gototop.classList.add("active");
  } else (
    header.classList.remove("active");
    gototop.classList.remove("active");
   )
  });
  // if(~하다면)랑 else(~하지 않다면)는 짝꿍

trigger.addEventListener("click", () => {
  gnb.classList.toggle("active");
  trigger.classList.toogle("active");
});
// 클릭 이벤트를 부여하겠다

gototop.addEventListener("click", (e)=>{
  e.preventDefault();
  window.scrollTo({top:header, behavior:"smooth" })
})