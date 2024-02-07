const trigger = document.querySelector(".trigger");
// conseol.log(trigger);
const modal_gnb = document.querySelector(".modal-gnb");
//modal_gnb _언더바  : snamke표기법
// modalGnb 카멜 표기법 낙타
// const Modalgnb 헝가리 표기법 (80~90년대에만) 혼란주는거니까 쓰지말자
trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  if (modal_gnb.style.display === "none" || modal_gnb.style.display === "") {
    modal_gnb.style.display = "block";
  } else {
    modal_gnb.style.display = "none";
  }
});
// || : 버티컬바 : or 라는 뜻

// === 인지 아닌지 구분하는 동치연산자 같냐 안같냐
// 이게 참이냐 저게 참이냐

// = 같다
