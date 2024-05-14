const openSearch = document.querySelector(".open-search");
// 얘가 이벤트 트리거가 될거다
// console.log(openSearch);
const closeSearch = document.querySelector(".close-search");
const modalSearch = document.querySelector(".modal-search");
// console.log(modalSearch);

openSearch.addEventListener("click", () => {
  modalSearch.classList.add("active");
}); // 클릭하면 서치 창이 열리게
closeSearch.addEventListener("click", () => {
  modalSearch.classList.remove("active");
}); // 클릭하면 서치 창이 올라가게

// ----------------------------------------

const searchBar = document.querySelector(".field input[type=search]");
console.log(searchBar);

// searchBar.addEventListener("focus", () => {
//   console.log("focus");
// });
searchBar.addEventListener("focus", function () {
  const element = this.parentElement.parentElement.nextElementSibling;
  // 부모의 부모로 가서 다음번째 형제
  // console.log(element);
  element.style.display = "block";
});

// 커서가 밖으로 나간다 => blur
searchBar.addEventListener("blur", function () {
  const element = this.parentElement.parentElement.nextElementSibling;
  element.style.display = "none";
});
