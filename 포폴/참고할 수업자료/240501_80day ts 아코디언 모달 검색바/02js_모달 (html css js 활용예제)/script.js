const trigger = document.querySelector(".trigger");
// console.log(trigger);
// 트리거 클릭하면 모달창 나오게
const modal = document.querySelector("#modal-notice");
// 트리거 누르면 모달노티스가 나오게
const closeBtn = document.querySelector(".btn-close");

trigger.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});
