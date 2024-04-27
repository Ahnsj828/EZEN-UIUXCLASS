// // < function 함수 > 계속 반복해서 사용할 수 있는 코드 조각이라고 생각하면 된다

// // 어떠한 이름이든 Hello를 해주는 function을 만들거다
// console.log("Hello my name is Nico")
// console.log("Hello my name is Dal")
// console.log("Hello my name is Shigatsu")
// console.log("Hello my name is Flynn")
// // 모든사람한테 인사하고 싶다면 이런 식으로 적어야한다 => 너무 많아지고 있다
// // => 이 전체 코드에서 바뀌는 부분은 끝의 이름들 뿐이다
// // 코드의 반복을 최소한으로 줄이고 싶다

// // function은 어떤 코드를 캡슐화해서 실행을 여러 번 할 수 있게 해준다
// // ex. 노래나 동영상을 무한 재생 할 수 있다 / function도 마찬가지다

// // -------------------------------------------------------

// function sayHello() {}
// // sayHello에 무엇이든 넣을 수 있다
// // const 만들때도 const라고 쓰는것처럼
// // string을 작성할 때는 ""를 써야하고 / list나 array를 만들 때 []를 해야하는 것처럼 function을 만드는 몇가지 규칙이 있다 
// // function은 ()가 필요하다
// // function은 실행하게 될 코드 블록이 필요하다 => function sayHello() {}
// // {}안에 작성하는 것이 sayHello를 실행 할때마다 실행된다
// // 실행버튼을 누를 때마다 발생한다 / 실행버튼을 누르는 법은?

// function sayHello() {
//   console.log("Hello!")
// }
// // => sayHello의 실행을 누를 때마다 console.log("Hello!")가 실행된다

// console.log() // 콘솔창에 띄울때 ()를 했었다
// Array.push()  // 배열에 추가할때도 ()를 했었다
// alert()  // 알림창할때도 ()를 했었다 
// // => ()이 괄호 두개가 function을 실행하는 방법이다
// sayHello() // Hello!
// sayHello() // Hello!
// //  => {}안에 있는 코드가 실행을 누를때마다 실행됐다

// -------------------------------------------------------

// function sayHello() {
//   console.log("Hello my name is A!")
// }
// // 아까 원했던 것 처럼 "Hello my name is" 라고 하고 뒤에 이름을 넣고 싶다면?
// //  => argument(인수)라는 것을 보내야 한다
// // argument는 functino을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법이다

// // sayHello()함수도 alert()와 같은거다
// alert()  // 아무 내용 넣지 않으면 비어있는 알림창이 뜬다
// console.log()  // 아무 내용 넣지 않으면 아무것도 안뜬다

// console.log("HaHaHa") // log로 정보를 보내려면 안에 넣으면 된다 ("HaHaHa") 
// sayHello("Nico") // function도 같은 방식이다
// // fuction을 실행하면서 데이터를 보내는 법을 안다

// -------------------------------------------------------

