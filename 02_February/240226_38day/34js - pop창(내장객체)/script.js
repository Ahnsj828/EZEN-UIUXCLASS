const btn = document.querySelector("button");
// console.log(btn);
const popupWidth = 600;
const popupHeight = 500;
// 600x500 사이즈의 팝업창을 만들거다

btn.addEventListener("click", () => {
  const left = (window.screen.availWidth - popupWidth) / 2;
  // availWidth 현재 웹브라우저안에 가용할 수 있는 너비
  // window.screen.availWidth-popupWidth에서 600만큼만 뺄거다
  // (window.screen.availWidth-popupWidth) / 2 수평정렬을 할거다
  const top = (window.screen.availWidth - popupHeight) / 2;
  // 수직정렬
  window.open(
    "popup.html",
    "event",
    `width = ${popupWidth}
    height = ${popupHeight} left = ${left} top =${top}`
  );
  // open( ) : 새로운 창을 열고자 할 때
  // 버튼을 클릭하면 popup.htm을열거다
  // event라는 이름으로 부르고싶다
  // 변수를 그대로 쓰고싶다
});
// removeEventListener 지우는애다
