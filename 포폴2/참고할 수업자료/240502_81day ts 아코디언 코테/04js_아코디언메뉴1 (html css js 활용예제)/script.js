const titles = document.querySelectorAll(".accordion .title");
// console.log(titles); // NodeList(6)
const contents = document.querySelectorAll(".accordion .content");
// console.log(contents); // NodeList(6)

contents[0].style.diaplay = "block";

titles.forEach((title) => {
  title.addEventListener("click", function () {
    const content = this.nextElementSibling;
    // 선택요소의 형제요소
    // console.log(content);

    const allContentes = this.parentNode.querySelectorAll(
      ".accordion .content"
    );
    // console.log(allContentes);

    allContentes.forEach((item) => {
      if (item !== content) {
        item.style.display = "none";
      }
    });
    // 선택된 애만 나오게

    const allTitles = this.parentNode.querySelectorAll(".accordion .title");
    // 부모요소인 accordion가서 자식요소들한테
    // console.log(allTitles);

    // 삼항조건연산자로(조건문으로도 가능하다)
    // content.style.display = "block";
    content.style.display =
      content.style.display === "block" ? "none" : "block";
    // 클릭하면 닫혔다가 나왔다가 된다
    // 선택하면 나오게

    this.classList.toggle("active");

    allTitles.forEach((item) => {
      // 유사배열
      if (item !== title) {
        // 선택되지 않은애가 title 과 매칭되지 않으면
        item.classList.remove("active");
        // 부모요소인 accordion가서 자식요소들한테 active 제거
      }
    });
  });
});

// 특정요소를 선택했을때 부모요소로 가서 그 안에 해당 요소를 잡아서 효과를 적용하는거가 핵심
