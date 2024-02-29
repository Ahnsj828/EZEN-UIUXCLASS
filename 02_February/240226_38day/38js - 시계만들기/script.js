const today = new Date();

const displayDate = document.querySelector("#today");
const year = today.getFullYear();
// 연도를 찾아오고싶을때
const month = today.getMonth() + 1;
// 월을 찾아오고싶을때
// 월은 0부터 시작이라서  +1
const date = today.getDate();
// 일을 찾아오고싶을때
const day1 = today.getDay();

// if ((day1 = 0)) {
//   // return
//   displayDate.innerText = `${year}년 ${month}월 ${date}일 일요일`;
// }
// if ((day1 = 1)) {
//   // return
//   displayDate.innerText = `${year}년 ${month}월 ${date}일 월요일`;
// }
// ... // 이건 비효율적이다

let day2 = "";
// 값을 넣긴 넣되 빈문자열(빈공백)을 넣어줘야한다

// switch문 (종결문을 지어줄 수 있는 break문을 넣어줘야한다)\
// 여러선택지에서 뽑아서 결과값을 줘야할때는 => switch문
switch (day1) {
  case 0:
    day2 = "일요일";
    break;
  case 1:
    day2 = "월요일";
    break;
  case 2:
    day2 = "화요일";
    break;
  case 3:
    day2 = "수요일";
    break;
  case 4:
    day2 = "목요일";
    break;
  case 5:
    day2 = "금요일";
    break;
  case 6:
    day2 = "토요일";
    break;
}

// displayDate.innerText = `${year}년 ${month}월 ${date}일 <span style="font-weight:bold">${day2}</span>`;

// const displayTime = document.querySelector("#clock");

// const hrs = today.getHours();
// const mins = today.getMinutes();
// const secs = today.getSeconds();

// displayTime.innerText = `${hrs} : ${mins} : ${secs}`;

// const clock = () => {
//   // 1초에 한번씩 초,분,시각을 가져오게해서 변경된값을 넣어주게하려는거
// }

//
//
//
//
//
//
// // << 시간이 자동적으로 움직이게 >>

//  displayDate.innerText = `${year}년 ${month}월 ${date}일 <span style="font-weight:bold">${day2}</span>`;

// const displayTime = document.querySelector("#clock");

// const clock = () => {
//   let current = new Date();
//   let hrs = current.getHours();
//   let mins = current.getMinutes();
//   let secs = current.getSeconds();
//   displayTime.innerText = `${hrs} : ${mins} : ${secs}`;
//   // 1초에 한번씩 초,분,시각을 가져오게해서 변경된값을 넣어주게하려는거
// };

// setInterval(clock, 1000);
// // 1초에 한번씩 바뀌게 /
//
//
//
//
//
//
// // << 군대식 말고 일반인 방식으로 표시하는 방법 >>

displayDate.innerText = `${year}년 ${month}월 ${date}일 <span style="font-weight:bold">${day2}</span>`;

const displayTime = document.querySelector("#clock");

const clock = () => {
  let current = new Date();
  let hrs = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();

  let period = "AM";
  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  // if(hrs === 0) 새벽 12시가되면

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  displayTime.innerText = `${hrs} : ${mins} : ${secs}`;
  // 1초에 한번씩 초,분,시각을 가져오게해서 변경된값을 넣어주게하려는거
};

setInterval(clock, 1000);
// 1초에 한번씩 바뀌게 /
