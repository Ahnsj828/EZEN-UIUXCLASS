// 타이틀이 이벤트 트리거다
const titles = document.querySelectorAll(".accordion-item .title");
// console.log(titles);
// 유사배열이다 => 반복문으로가라

titles.forEach((title) => {
  title.addEventListener("click", function () {
    const content = this.nextElementSibling;
    // console.log(content);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display === "block";
    }
    this.classList.toggle("active");
  });
});

// active냐 아니냐에 따라 다르기때매 아까 4번이랑 다르게 쉽다
// 이거는 클릭한대로 다 보여주기 컨셉으로 만들었다
