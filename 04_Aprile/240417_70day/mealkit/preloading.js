const preloading = document.querySelector(".preloading");
// console.log(preloading);
preloading.addEventListener("click", () => {
  // console.log("click");
  window.location.href = "https://www.naver.com";
});
setTimeout(() => {
  window.location.href = "https://www.naver.com";
}, 3000);
// settimeout 지정한 시간 뒤에 지정한 링크로 이동하는 함수
