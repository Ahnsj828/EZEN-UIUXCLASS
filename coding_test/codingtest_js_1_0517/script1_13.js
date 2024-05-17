// 대소문자 변환
//  대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요

// 입력 설명 : 첫줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않는다
// 출력설명 : 첫줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력한다

// 입력예제1 : StuDy
// 출력예제1 : sTUdy

// const userAnswer = prompt("영어단어를 입력하세요");

// const solution = (userAnswer) => {
//   let answer = "";

//   for (let word of userAnswer) {
//     if (word === word.toLowerCase()) {
//       answer += word.toUpperCase();
//     } else if (word === word.toUpperCase()) {
//       answer += word.toLowerCase();
//     }
//   }
//   return answer;
// };

// console.log(solution(userAnswer));

// -------------------------------------------------------------------------
// < 쌤 >

const userInput = prompt("영어단어를 입력하세요");

const solution = (userInput) => {
  // userInput 인자값(인수)으로 받는다
  let answer = "";
  // 대문자인지 소문자인지 넣어줄 공간이 필요해서 만든거다 / 빈 문자열로
  // 문자열은 이터러블한 객체라고 생각하면된다

  for (let k of userInput) {
    // 사용자가 입력한 영어 단어에 문자를 하나씩 끄집어내서
    if (k === k.toUpperCase()) {
      // 그 문자가 대문자와같다면
      answer += k.toLowerCase();
      // 소문자로 변환시켜서 넣고
    } else {
      // 그렇지 않으면 / 그 문자가 소문자와같다면
      answer += k.toUpperCase();
      // 대문자로 변환시켜서 넣겠다
    }
  }
  return answer;
};

console.log(solution(userInput));
