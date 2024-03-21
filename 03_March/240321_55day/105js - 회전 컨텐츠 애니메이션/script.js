// 총 8개 아티클이 필요하다
const circle = document.querySelector("#circle");
const articles = circle.querySelectorAll("article");

// 복수로 가져왔다 for forEach 써라!
articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
    // css에서 준 애니메이션 효과를 js에서 컨트롤하는 속성
    // 마우스를 올리면 멈춘다
  });
  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
    // css에서 준 애니메이션 효과를 js에서 컨트롤하는 속성
    // 다시 마우스를 빼면 다시 돌아간다
  });
});

// console.log(circle, articles);
