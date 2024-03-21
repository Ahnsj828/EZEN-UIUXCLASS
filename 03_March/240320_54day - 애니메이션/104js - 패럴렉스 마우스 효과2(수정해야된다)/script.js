const imageAll = document.querySelector(".parallaxImame");
const totalNum = imageAll.length;
console.log(imageAll, totalNum);

window.addEventListener("scroll", () => {
  // console.log("scroll");
  const scrollNum = window.scrollY;
  console.log(scrollNum);
  if (scrollNum < 1319) {
    // 본문이 vh를 다 덮는 경우
    imageAll.forEach((item, index) => {
      item.style.transform = `perspective(400px) translate3d(0, 0, ${
        scrollNum / (2 * (totalNum - index))
      }px)`;
      // translate3d는 세개의 매개변수를 갖고 있다 x축, y축, z축
      // perspective 원근감
      // 텍스트가 올라 오기 전까지
    });
  }
});
