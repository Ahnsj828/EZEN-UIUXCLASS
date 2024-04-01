// import React from "react";

const Body = () => {

  // const number = 1;
  // 변수는 return위에 써야한다

  // 숫자가능하다
  // const numA = 1;
  // const numB = 2;

  // 문자 가능하다
  // const strA = "안녕";
  // const strB = "리액트";

  // // Boolean 가능하다
  // const boolA = true;
  // const boolB = false;

  // const objA = {
  //   a: 1,
  //   b: 2,
  // };

  const num = 19;
  if(num % 2 === 0) {
    retrun <div> {num}은(는) 짝수입니다.</div>
  } else {
    retrun <div> {num}은(는) 홀수입니다.</div>
  }
  // return (
  //   <>
  //     <h1>{number}</h1>
  //     {} 안에 변수

  //     <h1>body</h1>
  //     <h2>{numA + numB}</h2>

  //     <h1>body</h1>
  //     <h2>{strA + strB}</h2>

  //     <h1>body</h1>
  //     <h2>{String(boolA || boolB)}</h2>

  //     <h1>body</h1>
  //     <h2>{objA}</h2>
  //     <h2>{objA.a}</h2>
  //     <h2>a: {objA.a}</h2>
  //     <h2>b: {objA.b}</h2>

  //     <h1>body</h1>
  //     <h2>
  //       {num}은(는) {num % 2 === 0 ? "짝수" : "홀수"}
  //       삼항조건연산자
  //     </h2>
  //     {/* // </h2> */}
  //   </>
  // );
};

export default Body;
