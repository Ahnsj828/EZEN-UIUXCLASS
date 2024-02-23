// // const inputTexts = document.querySelectorAll("#bookInfo input");
// // console.log(inputTexts);

// const inputTitle = document.querySelector("#title");
// console.log(inputTitle);

// const buttons = document.querySelectorAll("form .btn");
// // console.log(buttons);

// const cancleBtn = document.querySelector("form #cancleBtn");
// const saveBtn = document.querySelector("form #saveBtn");
// const deleteBtn = document.querySelector("#bookList span");
// // console.log(deleteBtn);

// saveBtn.addEventListener("click", () => {
//   const newP = document.createElement("p");
//   const textNode = document.createTextNode(title.value);
//   newP.appendChild(textNode);
//   saveBtn.appendChild();
// });
//
//
//
//
// =============================================
// 1. 제목과 저자 값을 찾아와야한다
//     => input > .value

// 액션(사용자가 값을 입력한다) , 리액션(그 값을 출력한다) => 이벤트

// 1+. 이벤트가 작동하도록 해주는 저장하기 버튼 정의
// form을 쓰고 submit을 쓸지? (얘가 정석이다)
// button을 쓰고 click할지?
//     =>e.preventDefault()

// 2. 찾아온 값을 출력해주도록 도와주는 이벤트 함수
//      =>addEventListener

// 3. 출력할 공간에 대한 정의
//      => querySelector

// 4. 삭제하기 버튼 정의
//      => createElement, appendChild

// 5. 삭제하기 버튼이 복수의 갯수로 생성
//  => 반복문을 사용해서 클릭한 삭제버튼을 찾아오기 위해서
//  => this (*클래스 함수 VS 화살표 함수)

// 6. 삭제하기 버튼 클릭 시, 목록삭제 이벤트 함수
// parentNode, removeChild

// const title = document.querySelector("title");
// const author = document.querySelector("#author");
// const save = document.querySelector("input[type='submit']");
// // 아이디로 써도 된다
// const bookList = document.querySelector("#bookList");

// // 저장하기 버튼에 이벤트줘야한다
// // save.addEventListener("click", () => {
// //   console.log("click");
// // });
// save.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // console.log("click");
//   const li = document.createElement("li");
//   li.innerHTML= `

//   `;
//   // innerHTML 텍스트랑 html태그를 다 넣을수 있따
// });

// ---------------------------------------

// const save = document.querySelector("input[type='submit']");
// const bookList = document.querySelector("#bookList");

// save.addEventListener("submit", (e) => {
//   const title = document.querySelector("title");
//   const author = document.querySelector("#author");
//   e.preventDefault();
//   const li = document.createElement("li");
//   li.innerHTML = `
//   ${title.value} - ${author.value}
//   `;
//   bookList.appendChild(li);
// });

// ---------------------------------------

// const save = document.querySelector("form");
// const bookList = document.querySelector("#bookList");

// save.addEventListener("submit", (e) => {
//   const title = document.querySelector("title");
//   const author = document.querySelector("#author");
//   e.preventDefault();
//   const li = document.createElement("li");
//   li.innerHTML = `
//   ${title.value} - ${author.value}
//   <span>삭제</span>
//   `;
//   bookList.appendChild(li);
//   title.value = "";
//   author.value = "";
// });

// ---------------------------------------
// 삭제
const save = document.querySelector("form");
const bookList = document.querySelector("#bookList");

save.addEventListener("submit", (e) => {
  const title = document.querySelector("title");
  const author = document.querySelector("#author");
  e.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = `
  ${title.value} - ${author.value}
  <span>삭제</span>
  `;
  bookList.appendChild(li);
  title.value = "";
  author.value = "";
  const deleteBtns = document.querySelectorAll("span");
  // 한개만 삭제해도 all써도 된다 (span하나)
  // 여러개중 하나만 선택해도 => 반복문
  for (let delButton of delbuttons) {
    delButton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
      // 여기에 remove써도 되는데 부모의 부모 타고 가는거 보여주려고 일부로 이렇게 함 => 체이닝 기법(자전거 체인)
    });
  }
});
