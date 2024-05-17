// 대문자로 통일
//  대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성하라

// 입력 설명 : 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않는다
// 출력설명 : 첫줄에 대문자로 통일된 문자열이 출력된다.

// 입력예제1 : ItisTimeToStudy
// 출력예제1 : ITISTIMETOSTUDY

// const word = prompt("문자를 입력하세요");

// // const solution (word) => {
// // 	word.toUpperCase()
// // }

// console.log(solution(word));
// // console.log(word);

// -------------------------------------------------------------------------
// < 쌤 >

const userAnswer = prompt("영어단어를 입력하세요");

const solution = (userAnswer) => {
  // userAnswer을 인자값(인수)으로 받는다
  let answer = "";

  for (let word of userAnswer) {
    // 사용자가 입력한 영어 단어에 문자를 하나씩 끄집어내서
    if (word === word.toLowerCase()) {
      // 그 문자가 소문자와같다면
      answer += word.toUpperCase();
      // 대문자로 변환시켜서 넣고
    } else {
      // 대문자와 같다면
      answer += word;
      // 그대로 넣겠다
    }
  }
  return answer;
};

console.log(solution(userAnswer));
