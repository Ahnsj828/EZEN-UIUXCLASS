// 1. 버튼 찾아오기
// 2. 하단영역 찾는다
// 3. 버튼에 이벤트를 부여한다

// const button = document.querySelector("#view");
// console.log(button);

// const subject = document.testForm.subject;
// const button = document.container.view;
// console.log(button);

// const major = document.querySelector("#major");
//
//
//
//
// ---------------------------------------
//
// < 쌤 >
const viewBtn = document.querySelector("#view");
const detail = document.querySelector("#detail");
// console.log(viewBtn);

viewBtn.onclick = function () {
  detail.classList.toggle("hidden");
};
