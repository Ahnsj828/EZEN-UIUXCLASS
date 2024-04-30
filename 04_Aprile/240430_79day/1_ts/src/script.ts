// const container = document.querySelector("#container");
// // console.log(container);
// // 태그를 무슨 수로 타입을 정의를하냐
// 👇🏼
const container = document.querySelector("#container") as HTMLParagraphElement;

const date = new Date();
// 현시점의 날짜 정보를 가져와서
const hours = date.getHours();
// 시간으로 쪼개고
const minutes = date.getMinutes();
// 분으로 쪼개고

// let text;
let text: string;
// let hours2;
let hours2: number;

if (hours < 12) {
  text = "오전";
  hours2 = hours;
} else {
  text = "오후";
  hours2 = hours - 12;
  // 'hours2'은(는) 'undefined'일 수 있습니다.ts(18048) 라는 오류가 뜬다
}

container.innerText = `${text} ${hours2}시 ${minutes}분 입니다`;
// 'container'은(는) 'null'일 수 있습니다.ts(18047) 라는 오류가 뜬다
