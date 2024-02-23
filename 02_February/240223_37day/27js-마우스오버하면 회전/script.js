const icons = document.querySelectorAll(".sns a");
// sns class 안에 a태그들
// console.log(icons);
for (let icon of icons) {
  icon.addEventListener("mouseover", (e) = {
    e.currentTarget.querySelector(".fa-brands").classList.add("active")
  });
}
// target이 아니다 원이 도는게 아니라 아이콘이 돌아야하니까

icon.addEventListener("mouseleave", (e) => {
  e.currentTarget.querySelector("fa-brands").classList.remove("active")
})