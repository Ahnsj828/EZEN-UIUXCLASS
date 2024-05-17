// A를 #으로
// 대문자로 이루워진 영어단어가 입력되면 단어에 포함된 `A`를 모두 '#'로 바꿔서 풀력하는 프로그램을 작성하세요
// 입력설명 : 첫번째 줄에 문자열이 입력된다
// 출력설명 : 첫번째 줄에 바뀐단어를 출력한다

// 입력예제1 : BANANA
// 출력예제1 : B#N#N#

// const userText = prompt("원하는 영어단어를 입력하세요");
// // 이거를 배열로
// // const userTextSp = [userText.];
// const userTextSp = [...userText];
// // console.log(userTextSp);
// const change = () => {
//   if (userTextSp == "A") {
//     // a가 있다면 a를 #으로 변환해라
//     userTextSp.replace("A", "#");
//     console.log(userText);
//   } else {
//     console.log(userText);
//   }
// };

// -------------------------------------------------------------------------
// < 쌤 >
const userAnswer = prompt("A가 포함된 단어 입력");

const solution = (word) => {
  let answer = word; // 사용자가 입력한 값 그대로 올거다
  answer = answer.replace(/A/gi, "#");
  // 문자열안에 특정한 요소를 찾아서 변경할때 => 정규표현식 통해서
  // 특정한 문자를 찾아서 대체한다 => replace
  // replace는 두개의 매개변수를 받는다 => 바꾸려는 문자 , 바꿔지려는 문자

  // (/A/gi, "#")
  // g : global 의미 (*전역)
  // i : ignore case 의미 (*제외 혹은 열외를 허용하지 않음)
  // A를 찾을건데 대문자든 소문자든 상관없이 / #로 바꿔라

  return answer;
};

console.log(solution(userAnswer));
