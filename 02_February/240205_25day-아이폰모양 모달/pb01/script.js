// // HTML에서 작성한 요소를 선택자로 불러오고자 할 때!! 항상 "$"라는 특수문자를 쓴다
// // template literal => js는 $를 좋아한다 html에서 에밋할때도 $쓴다

// // 클릭했을때 컴퓨터한테 알리고
// $(".testimonial-pic img").click(function () {
//   // testimonial-pic안쪽에 이미지 (후손형식의 선택자)
//   // 지칭할때 this
//   $(this).addClass("active");
//   //$(this) 4장중 선택된 그것
//   $(this).siblings().removeClass("active");
//   // 선택받지 못한 애들한테는 빼줘
//   $(".testimonial .content").removeClass("active");
//   $("#" + $(this).attr("data-alt")).addClass("active");
//   // 예외 조항 처리
// });
// // 자바스크립트에서도 id는 # clss는 .
// // attr 속성의 값을 찾아 오고싶을때

// ---------------------여기까지 제이쿼리로 구현한거다-----------
// 제이쿼리는 변수가져올 필요없다. 클래스 아이디로 가져왔다
// JS는 변수를 만들어놓고 해야한다
const pics = document.querySelectorAll(".testimonial-pic img");
// pics(=pictures)
const contents = document.querySelectorAll(".testimonial .content");
// content가 4개 필요하다 => contents
pics.forEach((pic) => {
  pic.addEventListener("click", function () {
    function siblings(t) {
      const children = t.parentElement.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }
    }
    siblings(this);
    this.classList.add("active");

    // 어떤요소를 선택하게 된다면
    contents.forEach(function (content) {
      // forEach반복문 / 반복하는 함수
      content.classList.remove("active");
    });
    const targetContentID = this.getAttribute("data-alt");
    const targetContent = document.querySelector("#${targetContentId}");
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});
