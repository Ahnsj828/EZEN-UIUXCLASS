// // 몸무게 / (키를 100으로 나누고 => 제곱)
// // 키 170 => 170/100
// // 몸무게 73
// // BMI 계산 공식 =>  73 / (1.7 * 1.7)

// // 1. 사용자한테 키값을 받는다
// //     => 입력창에 대한 정의하기
// // 2. 사용자한테 몸무게값을 받는다
// //     => 입력창에 대한 정의하기
// // 3. 버튼에 대한 정의와 버튼을 클릭했을 때 계산에 대한 기능 정의
// // 4. 결과값을 출력할 공간에 대한 정의

// const userHeight = document.querySelector("#height");
// // console.log(userHeight);
// const userWeight = document.querySelector("#weight");
// // console.log(userWeight);
// const calcBtn = document.querySelector("form input[type='submit']");
// // console.log(calcBtn);

// const formFnc = (userHeight, userWeight) => {
//   const result = userWeight / {(userHeight/100)*(userHeight/100)}
// }

// form.onsubmit = formFnc;
// //
// //
// //
// //
// // ===========================================
// 1. Height & Weight 값 정의하기
// 2. button & result 정의하기
// 3. button 클릭시 이벤트 연산 작업하기
// 3-1. H & W 값 활용해서 => 연산해서 => 특정한 변수명 안에다가 => 할당
// 3-2. 함수 & 조건문 활용해서 연산작업
// 4. result에 출력하기

//
//
// const height = document.querySelector("#height"); //1
// const weight = document.querySelector("#weight"); //1
// const form = document.querySelector("form"); //2
// // 버튼을 가지고 올거냐 / form안에 submit 쓸꺼냐
// const result = document.querySelector(".result");

// // const formHandler = (e) => {
// //   e.preventDefault();
// //   // console.log("test");
// // };
// // // 이벤트를 참조변수로 사용해서 console.log("test");얘가 서버로 전송하지 못하게

// // form.onsubmit = formHandler;

// const formHandler = (e) => {
//   e.preventDefault();
//   const heightValue = height.value;
//   const weighttValue = weight.value;
//   console.log(heightValue, weighttValue);
// };

// form.onsubmit = formHandler;
//
//
//
//
// -----------------------=> 이렇게 바꾸기

// const form = document.querySelector("form"); //2
// // 버튼을 가지고 올거냐 / form안에 submit 쓸꺼냐
// const result = document.querySelector(".result");

// const formHandler = (e) => {
//   e.preventDefault();
//   const height = document.querySelector("#height"); //1
//   const weight = document.querySelector("#weight"); //1
// };

// form.onsubmit = formHandler;
// //
// //
// //
// //
// // -----------------------=> 이렇게 바꾸기

// const form = document.querySelector("form"); //2
// // 버튼을 가지고 올거냐 / form안에 submit 쓸꺼냐
// const result = document.querySelector(".result");

// const formHandler = (e) => {
//   e.preventDefault();
//   const height = document.querySelector("#height").value / 100; //1
//   const weight = document.querySelector("#weight").value; //1

//   const bmiFnc = (weight, height) => {
//     return (weight / (height * height)).toFixed(1);
//   };

//   console.log(bmiFnc(weight, height));
// };

// form.onsubmit = formHandler;
//
//
//
//
// -----------------------=> 이렇게 바꾸기

const form = document.querySelector("form"); //2
// 버튼을 가지고 올거냐 / form안에 submit 쓸꺼냐
const result = document.querySelector(".result");

const calculate = (weight, height) => {
  return (weight / (height * height)).toFixed(1);

  const formHandler = (e) => {
    e.preventDefault();
    const height = document.querySelector("#height").value / 100; //1
    const weight = document.querySelector("#weight").value; //1

    const bmi = calculate(weight, height);
    
    const display = (bmi) => {
      let group
      if(bmi >= 30.0) {
        group = "중등도 비만"
      } else if(bmi >= 25.0) {
        group = "경도 비만"
      } else if(bmi >= 23.0) {
        group = "과체중"
      } else if(bmi >= 18.5) {
        group = "정상"
      } else {
        group = "저체중"
      }

      result.innerText = ``
  };

form.onsubmit = formHandler;

// 정상적으로 값이 작동하는지 의식의 흐름대로 코드를 치고
// 함수를 쪼개고 나눴다
