import "./App.css";
// import { useState } from "react";
// import { useState, useEffect } from "react";
import { useState, useEffect, useRef } from "react";
import Viewer01 from "./components/Viewer01";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const didMountRef = useRef(false);
  //   console.log(didMountRef);
  const handleSetCount = (num) => {
    setCount(count + num);
  };
  //   useEffect(() => {
  //     console.log("count 업데이트: ", count);
  //   }, [count});
  //   두개의 매개변수 (콜백함수 ,  의존성배열(타겟팅되어야 할 요소))
  //   count 값이 변화된다면 함수를 시켜라

  //   useEffect(() => {
  //     console.log("count 업데이트: ", count, text);
  //   }, [count, text]);

  //   useEffect(() => {
  //     console.log("컴포넌트 업데이트 ");
  //   });
  //  "의존성 배열"을 설정하지 않은 경우, 컴포넌트가 랜더링 될 때마다 콜백함수를 실행시킨다

  useEffect(() => {
    if (!didMountRef.current) {
      // didMountRef 초기값이 false라 출력이 안되니까 부정연산자!사용
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트 ");
    }
  });

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  const handleChangeText = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer01 count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}
export default App;
