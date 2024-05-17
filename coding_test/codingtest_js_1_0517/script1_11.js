// 대문자 찾기
//  한개의 문자열을 입력 받아 해당 문자열에 알파벳 대문자가 몇개 있는지 알아내는 프로그램을 작성하세요

// 입력 설명 : 첫줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않는다
// 출력설명 : 첫줄에 대문자의 개수를 출력한다.

// 입력예제1 : KoreaTimeGood
// 출력예제1 : 3

// const userWord = prompt("한개의 문자를 입력하세요");

// function solution(s) {
//   let answer = 0;

//   for (let x of s) {
//     if (x === x.toUpperCase()) answer++;
//   }
//   return answer;
// }

// console.log(answer);

// -------------------------------------------------------------------------
// < 쌤 >

const word = prompt("문자를 입력하세요");

const solution = (word) => {
  // (word) 사용자한테 받은 문자를 인자값으로

  let answer = 0;

  for (let b of word) {
    // 받은 문자를 하나하나 체크를해서
    if (b === b.toUpperCase()) answer++;
    // 해당 문자를 대문자로 바꾼거와 같다고 한다면 / 0인 answer를 증가시켜라
  }
  return answer;
};

console.log(solution(word));
