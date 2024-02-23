// const tsNode = document.createElement("p");
// const tsTextNode = document.createTextNode("Typescript");
// tsNode.appendChild(tsTextNode);

// const basisNode = document.querySelectorAll("p")[0];
// console.log(basisNode);
// // document.body.appendChild(tsNode);

// document.body.insertBefore;
// // insertBefore 어떤 요소의 앞에 넣겠다 /전후문자 선택자와비슷하다
// // insertBefore 라는 함수는 두개의 매개변수를 갖는다
// //
//
//
// =====================================================

// const heading = document.querySelector("h1");
// // heading.remove() 그냥 지워버리는거
// // 하지만 우린 어떠한 이벤트를 주려고 제거한다
// heading.addEventListener("click", () => {
//   heading.remove;
// });

// // 클릭한 이벤트의 부모를 찾아오기!!!
//
//
// =====================================================
// const heading = document.querySelector("h1");
// const parentH1 = heading.parentNode;
// console.log(parent);
//
//
// this 객체 : 이벤트가 실행될때 그 당사자 객체
// 단 조건!!! => 현재 선택한 li태그를 this객체로 대체해서 사용할수 있다
// 단, 클래스 함수를 사용할 때에만 가능!! => 화살표함수를 사용할 때에는 this객체가 이벤트를 실행시키는 당사자 = 주체가 되는것이 아니라 window 객체가 this가 된다1!
// =====================================================
// const items = document.querySelectorAll("li");
// // console.log(items);
// for (let item of items) {
//   item.addEventListener("click", () => {
//     item.parentNode.removeChild(item);
//     // li의 부모 ul
//     // item.parentNode.removeChild(item); 를 다르게 바꿔줄 수 있다
//     this.parentNode.removeChild(this);
//   });
//   // 이벤트 종류,타입 / 화살표 함수(콜백함수)
// }
//
//
// =====================================================

const buttons = document.querySelectorAll("p span");
// console.log(buttons);
// 배열형태의 이터러블 객체다  => for문을 쓸 수 있다
for (let button of buttons) {
  button.addEventListener("click", function () {
    this.pqrentnode.remove();
    // 아까는 li 자체를 지우는거고 이번에는 글자를 지우는거라
    // => remove
  });
}
