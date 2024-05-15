const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("form");
const todoList = document.querySelector("#todo-list");
// console.log(todoInput, addButton, todoList);

const getLocal = () => {
  let todos = [];
  if (localStorage.getItem("todos") === null) {
    todos = [];
    // 빈배열을 만들고 시작해라
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    // 이미 값이 있던 상태였더라면 / 파씽해서 객체형태로 바꿔서 todos에 넣어라
  }

  todos.forEach(() => {
    // todos는 배열이다 => 배열은 반복문을 쓸 수 있다
    const newDiv = document.createElement("div");
    newDiv.className = "todo-content";

    const newTodo = document.createElement("li");
    newTodo.innerText = "todo";

    const completeButton = document.createElement("button");
    completeButton.innerText = "완료";
    completeButton.className = "conplet-button";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";
    deleteButton.className = "delete-button";

    // newDiv.appendChild(newTodo);
    newTodo.append(completeButton, deleteButton);
    todoList.appendChild(newTodo);
  });
};

const saveToLocal = (todo) => {
  // console.log(todo);
  // let todos = "";
  let todos = [];
  if (localStorage.getItem("todos") === null) {
    // getItem 어떤 값을 찾아올거다  / 이름은 todos
    // 아무값도 없을때는 저장이 안되어야한다
    todos = [];
    // 찾아올 값이 없으면 그대로 두겠다
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    // 있으면...?
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (e) => {
  e.preventDefault();
  // console.log("click");
  // const newDiv = document.createElement("div");
  if (todoInput.value !== "") {
    // 아무것도 입력안하고 추가했는데 빈 문자열도 추가됐다 => 없애야한다
    const newDiv = document.createElement("div");
    newDiv.className = "todo-content";
    const newTodo = document.createElement("li");
    // li 태그 만들기
    newTodo.innerText = todoInput.value;
    newTodo.className = todo;

    const completeButton = document.createElement("button");
    completeButton.innerText = "완료";
    completeButton.className = "conplet-button";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";
    deleteButton.className = "delete-button";

    // newDiv.appendChild(newTodo);
    newTodo.append(newTodo, completeButton, deleteButton);
    todoList.appendChild(newDiv);
    saveToLocal(todoInput.value);
    todoInput.value = "";
  }
};

const manageTodo = (e) => {
  // console.log("click");
  // console.log(e.target.classList[0]); // 해당요소를 찾아온다
  const whichButton = e.target.classList[0];
  if (whichButton === "complete-button") {
    const todo = e.target.parentElement;
    // 완료라는거의 부모요소 li를 찾아왔다
    todo.children[0];
    // todo의 자식요소중에서 0번째
  }
};

// 트리거(방아쇠) 역할
addButton.addEventListener("submit", addTodo);

document.addEventListener("DOMContentLoaded", getLocal);
// 웹브라우저가 html문서 js요소를 다 파싱하게 된다면 다 읽게 된다면 getLocal함수를 실행하라
// DOMContentLoaded 약간 용량이 좀 큰 사진들은 불러올때 안와 진다
addButton.addEventListener("submit", addTodo);
todoList.addEventListener("click", manageTodo);
// 삭제를 누르면 부모요소인 li가 사라지게할거다
