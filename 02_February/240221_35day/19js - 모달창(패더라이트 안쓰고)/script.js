// // 1. clilck 버튼을 찾아온다
// // 2. 보여줄 영역을 찾는다
// // 3. 버튼에 이벤트를 부여한다
// // 4. close 버튼을 찾아온다
// // 5. close 버튼을 누르면 창이 없어지게 한다

// const clickBtn = document.querySelector(".open");
// // console.log(clickBtn);
// const section = document.querySelector(".modal");
// // console.log(section);
// clickBtn.onclick = function () {
//   detail.classList.toggle("hidden");
// };
// //
// //
// //
// //
// =================================================
//
//  < 쌤 >
// 1. open 버튼에 대한 정의
// 2. close버튼에 대한 정의
// 3. 출력되어야할 모달 페이지 정의

const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
// console.log(openButton);
// console.log(closeButton);
const container = document.querySelector(".container");
// console.log(container);

const openFnc = () => {
  // open function
  // console.log("open");
  openButton.style.display = "none";
  container.style.display = "flex";
  // JS로 CSS컨트롤 할 수 있다
};

const closeFnc = () => {
  // close function
  // console.log("close");
  container.style.display = "none";
  openButton.style.display = "block";
};

openButton.onclick = openFnc;
closeButton.onclick = closeFnc;
