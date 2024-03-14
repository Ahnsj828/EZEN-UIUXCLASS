// JS 태생적으로 동기처리 방식 지원
// 외부에서 데이터를 가져올 때 비동기방식 으로 처리를 해줘야만 큰 용량의 데이터를 다 가져오지 못한 상태라도 밑에 있는 다른 작은 규모의 데이터를 가져올 수 이 있는 효울성을 추구

// async
// 비동기는 비동기인데
// 기다리라는 조치를 취할 수 있다

// 비동기는 먼저 읽은 순서대로 출력해준다 => 데이터 용량이 낮은 애들이 먼저 보여준다

// but, async는
// 아무리 데이터 용량이 낮은 텍스트가 먼저 와도 먼저 보여줘야할 큰데이터가 필요할 때에는 보여주지 않고 기다리게한다

// const displayHello = () => {
//   console.log("Hello");
// };
// displayHello();

// // async도 new처럼 예약어라고 부른다
// // async(에이싱크롤스) 비동기적인
// async function displayHello01() {
//   console.log("Hello");
// }
// displayHello01();

// ------------------------------------------------------------------------

// 어제 복습
// 순수 Promise 객체를 활용한 비동기처리 실행문

// const whatYourFavorite = () => {
//   const fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
//   // 이 콜백함수는 두개의 매개변수를 받는다 resolve, reject
// };

// const displaySubject = (subject) => {
//   return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
// };

// whatYourFavorite().then(displaySubject).then(console.log);

// ------------------------------------------------------------------------

// async 예약어를 활용해서 Promise 객체 생성 및 사용!!

// async function whatsYourFavorite() {
//   // 앞에 async라는 예약어가 붙엇다
//   const fav = "Javascript";
//   return fav;
// }

// async function displaySubject(subject) {
//   return `Hello, ${subject}`;
// }

// whatsYourFavorite().then(displaySubject).then(console.log);
// // then이라는 매서드 함수를 쓸 수 있다

// ------------------------------------------------------------------------

// 데이터를 가져올때 순서가 있어야되는 상황이면
async function whatsYourFavorite() {
  const fav = "Typescript";
  return fav;
}
// 얘도 비동기
async function displaySubject(subject) {
  return `Hello, ${subject}`;
}
// 얘도 비동기

// 둘을 감싸는 또다른 비동기
async function init() {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result); // script.js:76 Hello, Typescript
}
// 비동기 /초기화를 시켜주는 함수
// const response = await whatsYourFavorite(); 얘가 실행될때까지 기다린다 / await
init();
