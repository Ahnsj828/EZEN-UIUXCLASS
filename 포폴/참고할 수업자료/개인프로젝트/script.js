const trigger = document.querySelector(".trigger");
const gnb = document.querySelector(".menu");
const header = document.querySelector("header");


trigger.addEventListener("click", () => {
  gnb.classList.toggle("active");
  trigger.classList.toggle("active");
});
