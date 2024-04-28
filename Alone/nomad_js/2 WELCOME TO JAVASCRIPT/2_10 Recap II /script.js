// // < object >
// // list를 쓰면, 항목들에 공통된 맥락이 있다는 점이 마음에 들 거다
// const days = ["mon", "tue", "wed"]
// // 의미가 있는 property를 저장하려고 할 때가 문제다
// // 연관되어 있는 property들을 그룹으로 묶어서 저장해야 할 때말이다

// // playerA라는 object를 만든다 / 여느 variable을 만들 때처럼 같은 시작이다
// // 근데 Array, Boolean, Text, null갖는것 대신에
// const playerA = {} // 이런 식으로 만든다
// // player라는 Object의 property를 작성할 수 있다
// const playerB = {
//   name: "Nico",
//   age: 88,
// }
// // player라는 varibale안에 name이라는 일종의 variable을 만드는거다 
// // => 정식 명칭은 variable이 아니라 property다
// // ==> object가 생겼다

// console.log //=> console에 많은 property가 있고, 그중 하나가 log다
// // => 둘은 비슷한 스타일을 갖고있다 => console도 object다!!!!
// console.log(playerB, console)
// // {name: 'Nico', age: 88}
// // console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
// //  => 이 안에 console이란 object안에 있는것들이 나온다
// //   => 안에 f로 시작하는건 function(함수)이란 뜻이다
// // ==> 둘다 비슷하게 생겼다 / 둘다 object다!!!

// console.log(playerB.name)
// // array에서 한개의 element를 가져올 수 있던 것처럼, object중 한 개의 element를 가져올 수  있다

// // array처럼 update도 할 수 있다
// console.log(playerB.name = "Nicolas")  // Nicolas
// // 👇🏻 이렇게도 가능하다
// playerB.name = "Ahn"
// console.log(playerB) // {name: 'Ahn', age: 88}

// // object를 만든 이후에, object안에 새로운 item을 만드는 것도 가능하다
// playerB.sexy = "soon"
// console.log(playerB) // {name: 'Ahn', age: 88, sexy: 'soon'}

// // ----- object만드는법 / 만든 object는 js가 미리 준비한 object랑 비슷하게 생겼다는 것을 배웠다.(console.log같은거) / object(player)에서 item(property)을 가져오는 방법 / object(player)안에 새 property를 만드는 방법 / 

// 
// ----------------------------------------------------------------------
// //  < function(함수) >
// // function은 어떤코드를 캡슐화해서 그걸 계속 반복해서 사용할 수 있도록 한거다
// // ex) 노래나 동영상을 반복 재생하는 것처럼

// function plus() {
//   console.log(2+2)
// }
// // function을 실행시키려면 ()가 있어야 한다 👇🏻
// plus()
// // function을 여러번 실행시키고 싶다면 여러번 적으면 된다

// // fuction안에 미리 data를 넣어 두는것보다 fuction 밖에서 data를 넣을 수 있게 하는것이 훨 낫다 / fuction의 목적은 여러 가지 일을 같은 코드로 하기 위함이기 때문이다

// // fuction 안으로 data를 보내는 방법
// alert("hahaha")  
// // => alert fuction으로 data를 보냈다 / 브라우저 코드의 어딘가에 누군가가 alert라는 fuction을 만들어 놓아서 사용이 가능한거다
// // => alert fuction은 "hahaha"라는 data를 받은거다

// function plusA(a, b) {
//   console.log(a, b)
//   console.log(a + b)
// } // => a와 b는 data를 받으면 되는 대체되는 place holder(자리 표시자)일 뿐이다
// plusA(3, 5)
// plusA(243, 541)

// function plusB(potato) {
//   console.log(potato)
//   console.log(potato - 5)
// } 
// plusB(3, 5)
// plusB(243, 541)
// // => 많은 argument를 보내더라도 문제가 되지 않는다
// // => potato는 fuction의 body에서만 사용 가능하다 / fuction plusB(potato) {body}
// //    potato는 plusB밖에서는 접근할 수 없다

// ----------------------------------------------------------------------

// const calculatorEx = {
//   add : function(a, b) {
//     console.log(a + b)
//   }
// }
// calculatorEx.add(2, 7)

// < 코드 과제 >
// calculator라는 이름의 Object에 
// a+b(a더하기 b) , a-b(a빼기 b) , a/b(a나누기 b) ,a**b(a의 b제곱) 함수 만들기
// 마지막에 
// calculator.add(1, 2) 더하기
// calculator.min(1, 2) 빼기
// calculator.div(1, 2) 나누기 
// calculator.powerof(1, 2) 제곱
// console.log만 사용하고 calculator라는 object안의 fucntion을 사용해라

const calculator = {
  add: function(a, b) {
    console.log(a + b)
  },
  min: function(a, b) {
    console.log(a - b)
  },
  div: function(a, b) {
    console.log(a / b)
  },
  powerof: function(a, b) {
    console.log(a ** b)
  }
}

calculator.add(3, 2) // 5
calculator.min(3, 2) // 1
calculator.div(3, 2) // 1.5
calculator.powerof(3, 2) // 9
