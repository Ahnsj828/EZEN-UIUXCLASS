const trigger = document.querySelector(".trigger");
const spinner = document.querySelector(".spinner");
const result = document.querySelector(".result");

trigger.addEventListener("click", () => {
  spinner.style.webkitAnimationPlayState = "paused";
});
