const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("form");
const todoList = document.querySelector("#todo-list");
// console.log(todoInput, addButton, todoList);

const addTodo = (e) => {
  e.preventDefault();
  // console.log("click");
  // const newDiv = document.createElement("div");
  const newTodo = document.createElement("li");
  // li 태그 만들기
  newTodo.innerText = todoInput.value;

  const completeButton = document.createElement("button");
  completeButton.innerText = "완료";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "삭제";

  // newDiv.appendChild(newTodo);
  newTodo.append(completeButton, deleteButton);
  todoList.appendChild(newTodo);
  todoInput.value = "";
};

// 트리거(방아쇠) 역할
addButton.addEventListener("submit", addTodo);
