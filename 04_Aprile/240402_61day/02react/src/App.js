// import "./App.css";
// import { useState } from "react";
// // react라는 라이브러리에서 useState라는 훅을 가져왔다

// function App() {
//   console.log("update!");
//   const [count, setCount] = useState(0);
//   // count초기값 / setCount초기값을 변화시킬 수 있는 함수
//   const onIncrease = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div className="App">
//       <h2>{count}</h2>
//       <button onClick={onIncrease}>+</button>
//     </div>
//   );
// }

// export default App;
// // 숫자 하단에 버튼을 생성하고, 그 버튼이 클릭이 될 때마다 값이 증가하게 만들고 싶다!
// // (처음 상태(state!!)가 변화가 되게 하려는거)

// // react 훅은 8~90% 다 함수다 / useState()도 함수

// //
// //
// //
// //

// import "./App.css";
// import { useState } from "react";
// // react라는 라이브러리에서 useState라는 훅을 가져왔다

// function App() {
//   const [text, setText] = useState("");
//   //   처음에는 빈 문자열이여야하니까 ""
//   const handleOnChange = (e) => {
//     setText(e.target.value);
//     // e.target.value 사용자가 입력한 값
//     console.log(e.target.value);
//   };
//   return (
//     <div>
//       <input value={text} onChange={handleOnChange}></input>
//       <div>{text}</div>
//     </div>
//   );
// }
// {
//   /* <input value={text} onChange={handleOnChange}></input>에 value={text} 해서 사용자가 입력한 값을 알게된다 */
// }
// export default App;

// //
// //
// //
// //

// import "./App.css";
// import { useState } from "react";
// // react라는 라이브러리에서 useState라는 훅을 가져왔다

// function App() {
//   const [date, setDate] = useState("");
//   const handleOnChange = (e) => {
//     console.log(e);
//     setDate(e.target.value);
//   };
//   return (
//     <div>
//       <input value={date} type="date" onChange={handleOnChange} />
//     </div>
//   );
// }

// export default App;

// //
// //
// //
// //

// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [option, setOption] = useState("");
//   const handleOnChange = (e) => {
//     console.log(e.target.value);
//     setOption(e.target.value);
//   };
//   return (
//     <div>
//       <select value={option} onChange={handleOnChange}>
//         <option key={"1번"}>1번</option>
//         <option key={"2번"}>2번</option>
//         <option key={"3번"}>3번</option>
//       </select>
//     </div>
//   );
// }

// export default App;

// //
// //
// //
// //

// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [text, setText] = useState("");
//   const handleOnChange = (e) => {
//     // console.log(e.target.value); // 아 이벤트 핸들러가 정상적으로 작동하는구나
//     console.log(setText);
//   };
//   return (
//     <div>
//       <textarea value={text} onChange={handleOnChange}></textarea>
//     </div>
//   );
// }
// // onChange라는 이벤트핸들러가 작동되면 handleOnChange 함수가 시작되게 해라

// export default App;

//
//
//
//

// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [gender, setGender] = useState("");
//   const [birth, setBirth] = useState("");
//   const [bio, setBio] = useState("");

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const onChangeGender = (e) => {
//     setGender(e.target.value);
//   };
//   const onChangeBirth = (e) => {
//     setBirth(e.target.value);
//   };
//   const onChangeBio = (e) => {
//     setBio(e.target.value);
//   };

//   return (
//     <div className="container">
//       <div>
//         <input value={name} placeholder="이름" onChange={onChangeName} />
//       </div>
//       <div>
//         <select value={gender} onChange={onChangeGender}>
//           <option key={""}></option>
//           <option key={"여성"}>여성</option>
//           <option key={"남성"}>남성</option>
//         </select>
//       </div>
//       <div>
//         <input value={birth} type="date" onChange={onChangeBirth} />
//       </div>
//       <div>
//         <textarea value={bio} onChange={onChangeBio} />
//       </div>
//     </div>
//   );
// }

// export default App;
//
// 👇🏼
import "./App.css";
import { useState } from "react";

function App() {
  //   const [name, setName] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [birth, setBirth] = useState("");
  //   const [bio, setBio] = useState("");

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };
  //   const onChangeGender = (e) => {
  //     setGender(e.target.value);
  //   };
  //   const onChangeBirth = (e) => {
  //     setBirth(e.target.value);
  //   };
  //   const onChangeBio = (e) => {
  //     setBio(e.target.value);
  //   };

  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });
  //   useState({}) 객체형태로 주려고 {}

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  //    setState({}) 얘도 객체 형태로 {}

  return (
    <div className="container">
      <div>
        <input
          name="name"
          value={state.name}
          placeholder="이름"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={handleOnChange}>
          <option key={""}></option>
          <option key={"여성"}>여성</option>
          <option key={"남성"}>남성</option>
        </select>
      </div>
      <div>
        <input
          name="birth"
          value={state.birth}
          type="date"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <textarea name="bio" value={state.bio} onChange={handleOnChange} />
      </div>
    </div>
  );
}

export default App;
