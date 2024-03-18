// 1. 처음 데이터가 생성되면, todo

// 2. 드래그 & 드롭기능
//  - todo / doing / done
//    todo 안에도 객체들을 담을 수 있어야하고
//    doing도           ''
//    done도            ''
//    => 배열이 필요하겠구나!!! 라고 와닿아야한다!!

// 3. 웹 브라우저 안에서 드래그 & 드롭 기능을 사용하려면 반드시 draggable 속성값이 존재 해야만 한다!! => draggable 값이 ture로 존재해야 한다

// 4. 웹 브라우저에서 드래그 & 드롭 기능 => 이벤트 처리
// 드래그 , 드롭도 이벤트다

// ===============================================

const form = document.querySelector("form");
// console.log(form);

const blocks = document.querySelectorAll(".list");
// console.log(blocks);

let from,
  to = undefined;

// let todoList = [];
// // todoList는 배열의 형태를 갖고있고
// // 처음는 값이 없어서 빈 배열로
// // 신규의 배열로 재할당할거다 => 그래서let으로
// let doingList = [];
// let doneList = [];
// // 👇이렇게 요약해줄수 있다
let todoList = [],
  doingList = [],
  doneList = [];
// 독립데이터이다

const lists = {
  todo: todoList,
  doing: doingList,
  done: doneList,
  // 객체형태로 해줘야한다
  // 내용물을 이동해줘야해서
  // 그래서 자료구조 배워야한다
};

const saveList = (listId) => {
  // 로컬스토리지에 값을 저장하는
  localStorage.setItem(listId, JSON.stringify(lists[listId]));
  // 온점표기법과 대괄호 표기법을 알아야 한다!
};

const dragstart = (e) => {
  // console.log("start");
  // 나의 출발지점을 알려줘야한다
  // 이벤트가 발생해야지만 실행되니까 참조변수를 이벤트로 지정해야한다
  // 시작되어지는 순간 재할당 된다
  from = e.target.parentElement.id;
  // 출발지점 요소
  // console.log(e.target.parentElement);
  to = form;
};

const dragover = (e) => {
  // console.log(e);
  // const { id } = e.target;
  // console.log(id); // 드래그하는 순간 id가 나왔다
};

const { id: targetId } = e.target;
const listIds = Object.keys(lists);
// console.log(listIds); // 배열로 가져왔다
// console.log(listIds, targetId); // id값도 가져왔다

if (listIds.includes(targetId)) {
  // 만약에 listIds가 targetId를 감싸안고 있다면
  to = targetId;
  // targetId해당 값을 to로(도작지점) 해라
}

const dragend = (e) => {
  // console.log("end");
  // 도착지점
  // 도착지점에 가서는 두가지 기능이 있어야하낟
  // 기존 아이템을 다시 제거하고 새로온애가 포함된 완성본이 있어야한다
  // ex. 1번부터 5번까지 요소가 있는데 거기에 새로운 요소 6번이 추가되면 새로 만들어지는게 아니라 1번부터6번까지 포함한 요소가 있어야한다

  // console.log(e.target.parentElement);
  const { id } = e.target;

  e.target.remove();
  // 이사가려는 요소가 기존에 있었던 곳에서 지워져야한다
  lists[from] = lists[from].filter((todo) => {
    // 첫번째 인자값 todo
    if (todo.id !== id) {
      // 선택받은놈 제외하고 남은 애들만 새로 배열하겠다
      return todo;
      // 내가 todo에서 빼온 요소 뺀 나머지를 다시 배열하면된다
    } else {
      createElement(to, todo);
      // 선택받은 애를 기존 구역에서 없애줘야한다
    }
  });

  saveList(from);
  saveList(to);
};

const removeTodo = (e) => {
  e.preventDefault();
  // console.log("remove");
  // 편집하고자 하는 요소의 id를 찾아와라
  const { id } = e.target;
  // console.log(id);
  const { id: listId } = e.target.parentElement;

  e.target.remove();
  lists[listId] = lists[listId].filter((todo) => {
    return todo.id !== id;
  });
  savelod;
};

const createElement = (listId, todo) => {
  // listId todo 냐 doing이냐 done이냐를 정의할 값
  const list = document.querySelector(`#${listId}`);
  //document.querySelector(`${listId}`) 이 함수는 전혀 변함이 없어서 let이아닌 const써도 된다 => const list
  // todo 란에만 들어갈거면`#${listId}`아니라 #todo 해도된다
  // 하지만 doning란에 이동시키고 done란에 이동시켜야되는데
  // 그러면 값이 바뀔거다 변수를 쓸때는 템플릿리터럴을 사용해야한다
  // 하나의 고정값이 되면 안되서
  // 변수앞에 $를쓴다는건 템프릿리터럴을 쓰겠다는거다 => ``백팃을 써야된다!!
  const item = document.createElement("div");
  // 새로 생기는 요소를 div로 감싸서 이동 삭제 해주는게 좋아서 div로 하는거다

  item.id = todo.id;
  item.innerText = todo.text;
  item.className = "item";
  item.draggable = true;
  // draggable = true; => 드래그 앤 드롭을 할수 있다 => 이벤트를 할수 있다

  item.addEventListener("dragstart", dragstart);
  // 드래그가 시작되어지는
  item.addEventListener("dragend", dragend);
  // dragend = 드래그해서 어딘가에 종착점에 도착했을때 실행되는 이벤트
  // dragstart와 dragend는 draggable가 없으면 못쓴다

  item.addEventListener("contextmenu", removeTodo);
  // 마우스 좌클릭 => click 이벤트
  // 마우스 우클릭 => contextmenu

  list.appendChild(item);
  lists[listId].push(todo);
  // key값 찾아오는 방법 => .온점표기법 이나 []대괄호표기법
  // todo 사용자가 입력해서 받아온 값
};

const createTodo = (e) => {
  e.preventDefault();
  // 서버로 데이터를 전송하지못하게
  // console.log("submit");

  const input = document.querySelector("input[type='text']");
  // type속성을 갖은 input태그를 가져와라
  // console.log(input);

  // const text = input.value;
  // 사용자가 입력한 값을 받아와야한다 그럴때 const text = input.value; 사용
  // 객체로 만들기

  // const id = String(Date.now());
  // const id = Date.now();
  const id = uuidv4();

  const newTodo = {
    id,
    text: input.value,
  };

  console.log(newTodo);
  createElement("todo", newTodo);
  // console.log(newTodo);
  input.value = "";
  // 입력란을 지워주게하려고
  saveList("todo");
};

// 새로고침을 하는 순간 로컬스토리지에 값이 있으면 불러와야한다
const loadList = () => {
  // 이벤트와 상관없이 무조건 실행해야한다
  // 무조건 값을 찾아와야한다
  const userTodoList = JSON.parse(localStorage.getItem("todo"));
  // todo값을 찾아서 userTodoList에 넣어라
  const userDoingList = JSON.parse(localStorage.getItem("doing"));
  const userDoneList = JSON.parse(localStorage.getItem("done"));

  if (userTodoList) {
    // userTodoList만약에 에 값이 하나라도 있다면 => 참이라면
    userTodoList.forEach((todo) => {
      createElement("todo", todo);
      // "todo"어디메 todo무엇을
    });
  }
  if (userDoingList) {
    // userTodoList만약에 에 값이 하나라도 있다면 => 참이라면
    userDoingList.forEach((todo) => {
      createElement("todo", todo);
      // "todo"어디메 todo무엇을
    });
    if (userDoneList) {
      // userTodoList만약에 에 값이 하나라도 있다면 => 참이라면
      userDoneList.forEach((todo) => {
        createElement("todo", todo);
        // "todo"어디메 todo무엇을
      });
    }
  }
};

loadList();

form.addEventListener("submit", createTodo);
blocks.forEach((block) => {
  block.addEventListener("dragover", dragover);
  // 누구한테 쓸지 모르니 반복문 => for of나 forEach
});
