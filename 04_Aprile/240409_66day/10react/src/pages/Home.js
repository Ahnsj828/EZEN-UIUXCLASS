// // rafce
// import React from "react";
// // import { useSearchParams } from "react-router-dom";
// // useSearchParams 상단 주소창에서 쿼리스트링의 값을 찾아 올 때 사용하는 리액트 훅
// import Button from "../component/Button";

// const Home = () => {
//   //   const [searchParams, setSearchParams] = useSearchParams();
//   //   console.log(searchParams.get("sort"));
//   return (
//     <div>
//       {/* <Button text={"버튼 텍스트"} onClick={() => alert("hi")} /> */}
//       <Button text={"기본 버튼"} onClick={() => alert("default button")} />
//       <Button
//         text={"긍정 버튼"}
//         type="positive"
//         onClick={() => alert("positive button")}
//       />
//       <Button
//         text={"부정 버튼"}
//         type="negative"
//         onClick={() => alert("negative button")}
//       />
//     </div>
//   );
// };

// export default Home;

// // console.log(searchParams.get)
// //   searchParams안에 get이라는 매서드함수를써야한다
// //   form 태그에서 get이 이 get이다

// //   console.log(searchParams.get("sort"))
// //   sort에 매칭되는 값을 찾아와라

//
// ---------------------------------------------
//

// rafce
import React from "react";
import Button from "../component/Button";
import Header from "../component/Header";

const Home = () => {
  //   const [searchParams, setSearchParams] = useSearchParams();
  //   console.log(searchParams.get("sort"));
  return (
    <div>
      <Header
        title={"Home"}
        leftChild={
          <Button
            text="긍정버튼"
            type="positive"
            onClick={() => alert("positive button")}
          />
        }
        rightChild={
          <Button
            text="부정버튼"
            type="negaitive"
            onClick={() => alert("negaitive button")}
          />
        }
      />
    </div>
  );
};

export default Home;
