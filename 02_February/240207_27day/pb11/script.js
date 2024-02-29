const titles = document.querySelectorAll(".title");
// title 4개라
// console.log(titles); 확인할때
const desc = document.querySelectorAll(".desc");
const image = document.querySelector(".image img");
// image는 하나라서

titles.forEach((title) => {
  title.addEventListener("click", function () {
    function siblings(e) {
      // e event약자
      const children = e.parentElement.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }
    }
    siblings(this);
    this.classList.add("active");
    // 선택된 애들만 줬다
    this.nextElementSibling.classList.add("active");
    // nextElementSibling 다음번 요소 형제
    const dataImage = this.getAttribute("data-image");
    // const 바구니를 만들겠다
    // this.getAttribute("data-image")했을때
    // const dataImage여기에 넣어줘
    // console.log(dataImage);
    image.src = `${dataImage}`;
    // ``(백틱)은 ~이다
    // \(역슬래시) 도 백틱이다
  });
});
