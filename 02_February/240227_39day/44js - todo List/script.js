const form = document.querySelector("form");
// console.log(form);
const input = document.querySelector("input");
// 버튼이 눌렸을때 input에 value값을 찾아와라
const ul = document.querySelector("ul");

const todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
// 서버 언어로 변환시켜줬다

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // console.log("click");
//   // 입력한 값이 ul로 들어와야한다
//   const li = document.createElement("li");
//   li.innerText = input.value;
//   ul.appendChild(li);
//   // li태그를 ul태그 자식으로 넣고싶어서
// });
// //
// //
// // 아무것도 안넣고 등록버튼 눌렸을때 빈공간이 생긴다 / 그거없애려고
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (input.value !== "") {
//    //빈 문자열이 아니라면
//     const li = document.createElement("li");
//     li.innerText = input.value;
//     ul.appendChild(li);
//     input.value = "";
//   }
// });
// //
// //
// // 리팩토링

// const addItem = (text) => {
//   // 값을 추가하는 리스트

//   if (input.value !== "") {
//     const li = document.createElement("li");
//     li.innerText = input.value;
//     ul.appendChild(li);
//   }
// };

// const handler = (e) => {
//   // input창
//   e.preventDefault();
//   addItem(input.value);
//   input.value = "";
// };

// // form.addEventListener("submit", (e) => {

// // });
// form.addEventListener("submit", handler);
//
//
//
//
//
//
const delItem = (e) => {
  // console.log(e);
  const target = e.target.parentElement;
  todos = todos.filter((todos) => todo.id !== target.id);
  save();
  target.remove();
  // console.log(target);
};

// const addItem = (text) => {
const addItem = (todo) => {
  // 값을 추가하는 리스트

  // if (text !== "") {
  if (todo.text !== "") {
    if (input.value !== "") {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const button = document.createElement("button");
    }

    // span.innerText = text;
    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(li);

    // li.innerText = input.value;
    ul.appendChild(li);

    li.id = todo.id;
    // 처음에 생길때 만들어진 id값으로 되어라
    // 개발자 도구에 가면 있다
  }
};

// 데이터를 만들라고 지시한 지점
const handler = (e) => {
  // input창
  e.preventDefault();
  const todo = {
    id: Date.now(),
    // 시간및 날짜 정보가 필요하니까 / 이벤트가 벌어진 그 순간의 값은 고유하니까
    tex: input.value,
  };
  todos.push(todo);
  // console.log(todos);

  // addItem(input.value);
  addItem(todo);

  save();

  input.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  // console.log(userTodos);

  if (userTodos) {
    // Array.from.userTodos.forEach
    userTodos.forEach((todo) => {
      addItem(todo);
    });
  } else {
    handler();
  }

  todos = userTodos;
};
// JSON javascript...
// JSON데이터는
// API 데이터 싹다 JSON이다

init();

// form.addEventListener("submit", (e) => {

// });
form.addEventListener("submit", handler);

// 객체 / 하나의 객체 안에 여러가지 값을 넣을 수 있다
// const todo = {
//   id: 5654623,
//   text: "슬램덩크",
// }
//
//
//
// // < 로컬스토리지 저장하는 방법 > - 외부의 데이터를 컨트롤하는..
// localStorage.setItem("Hello", "World");
// //localStorage에 저장하려면 key(Hello)와 value(World)값이 있어야한다
// const myData = localStorage.getItem("Hello");
// console.log(myData);

// 외부의 영역
