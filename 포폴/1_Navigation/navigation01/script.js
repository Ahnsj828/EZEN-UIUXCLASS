const trigger = document.querySelector(".trigger");
const gnb = document.querySelector(".gnb-list");

trigger.addEventListener("click", () => {
  gnb.classList.toggle("active");
  trigger.classList.toggle("active");
});
