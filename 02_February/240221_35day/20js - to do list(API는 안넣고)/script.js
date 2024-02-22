// 1. 입력란을 찾아온다
// 2. 등록버튼을 찾아온다
// 3. 입력란에 오늘할일을 적고 등록버튼을 누르면 추가되는 이벤트 적용한다

// const listForm = document.querySelector("#listText");
// console.log(listForm);
// const addBtn = document.querySelector("#add");
// console.log(addBtn);
//
//
//
//
// ============================================
//
//  < 쌤 >
// 1. 사용자가 입력하는 값을 찾아오기 위해 입력창에 대한 정의
// 2. 사용자가 클릭할 버튼에 정의
// 3. 버튼을 클릭했을 때 이벤트에 대한 기능 정의
// 4. li 태그를 DOM 에서 생성해줘야한다
//    => 입력창을 통해서 전달받은 값을 li태그 삽입
//      => ul 태그 자식 요소로 사용해야한다
// 5. 사용자가 입력한 값을 출력할 공간에 대한 정의

const form = document.querySelector("form"); //1
const input = document.querySelector("form input[type='text']"); //2
const ul = document.querySelector("ul"); //5

// console.log(form);
// console.log(input);
// console.log(ul);

const formFnc = (e) => {
  e.preventDefault();
  // https://localhost:3000/todolist.js 안가게 / 무력하게
  // console.log("click");
  if (input.value !== "") {
    //if(input.value |== "") 조건문 / 아무내용 없이 누르면 추가 되지 않게
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    // console.log(text);
    input.value = "";
    //input.value = ""; 등록누르면 내가 입력한 내용 지워지게 하는거
  }
};

form.onsubmit = formFnc;
