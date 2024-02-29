// const box = document.querySelector("#box");
// box.addEventListener("click", (e) => {
//   // 클릭이라는 이벤트가 발생했을때 어떤한 기능이 구현할 수 있게
//   // e를 매개변수라고 부르는데 참조변수라고도 부른다(상황에따라)
//   alert(`이벤트 발생위치 : ${e.pageX}, ${e.pageY}`);
// });

// // pageX	현재 작업하고 있는 html 전체문서를 기준으로 이벤트가 발생한 가로 위치값 반환
// // pageY	현재 작업하고 있는 html 전체문서를 기준으로 이벤트가 발생한 세로 위치값 반환

// // sticky할때 사용하기에 좋은 녀석
// // 개인프로젝트에서 스크롤 내리다가 어느 위치 도달하면 이미지sticky 효과줄거야! 할때 쓰는녀석
// //
// //
//
// ============================================

// document.body.addEventListener("keydown", (e) => {
//   const result = document.querySelector(".result");
//   result.innerText = `
//   code: ${e.code},
//   key: ${e.key}
//   `;
// });
// // 어떤값을 입력했을때 그 내용 전체를 알기 위함이 아니다
// 한/영 키를 누르면 눌렀다고 뜬다

document.body.addEventListener("keypress", (e) => {
  const result = document.querySelector(".result");
  result.innerText = `
  code: ${e.code},
  key: ${e.key}
  `;
});
// // // keypress는 한글 인식못한다
// // 한/영 키를 눌렀는지 안눌렀는지 모른다
