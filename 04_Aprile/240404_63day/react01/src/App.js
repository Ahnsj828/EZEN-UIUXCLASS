import { useState, useRef } from "react";
// input태그(새로운 todo 입력란)의 상태값이 변화되어야하니까 useState
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

// < Mockup Data - 샘플링 작업물 >
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React.js 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "헬스장가서 유산소 운동",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "포트폴리오 만들기",
    createDate: new Date().getTime(),
  },
];
// - id -> 아이템(할일목록들)마다 고유의 id가 존재해야한다
// - boolean -> 할일을했는지 안했는지 여부
// - todotext
// - tododate
// -------------------------------------
// 윈시타입 / 참조타입
// - 객체유형 타입 자료 1차 저장을 해야한다!!
// - filter함수 => 이터러블 객체
// - 순회가능 데이터 형태
// - 배열
//   데이터를 하나씩 추가하고 데이터를 검색하려고한다 =>검색기능 => filter => 배열
// -------------------------------------
// []배열
// 배열안에 들어가야되는 아이템들 => 객체 {}
// 기본적으로 할일을 안했으니 => false

function App() {
  const [todo, setTodo] = useState([mockTodo]);
  const idRef = useRef(3);
  //   console.log(idRef);
  //   useRef 반환값은 객체 형태를 띄고있다

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };
  //  const onCreate 기존에 만들어 놓은 데이터에 추가해서 만드는 함수 정의  => create
  //   사용자가 할일을 입력하고 추가버튼을 누르면 함수가 작동하고 todo에 추가되어야한다

  //   newItem 신규값
  // ...todo 기존값
  //   newItem, ...todo 둘 순서가 바뀌면 신규랑 기존위치가 달라진다
  //  신규가 추가 되어도 기존의 값이 존재되어야하니까 => 전개연산자  => ...todo

  //   배열 []  setTodo([newItem, ...todo]);

  //   idRef.current += 1; 추가하게되면 id값이 하나 더 올려줘야하니까
  //   id값이 증가한상태에서 추가가된다

  const onUpdate = (targetId) => {
    setTodo(
      todo.map(
        (it) => (it.id === targetId ? { ...it, isDone: !it.isDone } : it)
        // if (it.id === targetId) {
        //   return { ...it, isDone: !it.isDone };
        // } else {
        //   return it;
        // }
      )
    );
  };
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}
export default App;
