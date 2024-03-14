const pizza = () => {
  // pizza라는 함수 선언
  return new Promise((resolve, reject) => {
    // pizza 아까는 객체였고 지금은 함수다
    resolve("피자를 주문합니다.");
  });
};

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 도우 준비👈");
    }, 3000);
  });
};

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("토핑완료🤚");
    }, 1000);
  });
};

const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("굽기완료👌");
    }, 2000);
  });
};

// pizza()
//   .then((result) => step1(result))
//   .then((result) => step2(result))
//   .then((result) => step3(result));
//   .then((result) => console.log(result));
//   .then(() => {
//     console.log("피자가 준비되었습니다!")
//   })
// pizza라는 함수 호출
// then이라는 매서드가 있다 => 콜백함수를 쓸 수 있다

// 👇

pizza()
  .then(step1)
  .then(step2)
  .then(step3);
  .then(console.log);
  .then(() => {
    console.log("피자가 준비되었습니다!")
  })