// 연필 1다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요

// 첫번째 줄에 1000 이하의 자연수 N이 입력된다

// 첫번째 줄에 필요한 다스 수를 출력합니다

// 입력예제 1 = 25 / 출력예제 1 = 3
// 입력예제 2 = 178 / 출력예제 2 = 15

// const studentNum = Number(prompt("학생들의 총 인원은?"));

// const result = (studentNum, dozen) => {
//   let dozen = studentNum / 12;

//   if (studentNum % 12 !== 0) {
//     dozen + 1;
//   } else {
//     dozen;
//   }
//   return studentNum, dozen;
// };

// console.log(result(studentNum, dozen));

// ===========================================

// < 쌤 >
const a = Number(prompt("사람 수"));

const solution = (n) => {
  let answer;
  answer = Math.ceil(n / 12);
  // js 수학객체
  // console.log(answer);
  return answer;
};

console.log();
