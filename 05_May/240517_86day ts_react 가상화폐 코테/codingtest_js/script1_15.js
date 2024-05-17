// 가운데 문자 출력
//  소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
// 단, 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

// 입력 설명 : 첫줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않는다
// 출력설명 : 첫줄에 가운데 문자를 출력합니다.

// 입력예제1 : study
// 출력예제1 : u

// 입력예제2 : good
// 출력예제2 : 00

// const userWord = prompt("소문자로만 된 단어를 입력하세요");

// const solution = (userWord) => {
//   let answer = "";

//   let mid = Math.floor(userWord.length / 2);

//   if (userWord.length % 2 === 0) {
//     // 짝수라면
//     answer = userWord.substring(mid - 1, mid + 1);
//   } else {
//     // 홀수라면
//     answer = userWord.substring(mid, mid + 1);
//   }
//   return answer;
// };

// console.log(solution(userWord));

// -------------------------------------------------------------------------
// https://ejayjeon.tistory.com/8 참고함
// -------------------------------------------------------------------------

// < 쌤 >

const userInput = prompt("단어를 입력하세요");

const solution = (userInput) => {
  let answer = "";
  // 값을 받을 공간

  // 사용자가 입력한 문자열의 가운데를 정의하는 기준값
  let middle = Math.floor(userInput.length / 2);
  // floor 소수점을 버리는거 / userInput.length 문자 총갯수 / 짝수일때는 딱 나뉘지만 홀수는 소숫점

  if (userInput.length % 2 === 1) {
    // 홀수라면
    answer = userInput.substring(middle, middle + 1);
    // substring 문자열에서 사용했던 메서드
    // substring(a, b) => 문자열 객체의 시작 인덱스(a)부터 종료 인덱스(b) 직전까지 문자열 반환
    // 가운데글자
  } else {
    // 사용자가 입력한 문자열 2로 나눴을때 나머지가 없다면
    // 짝수라면
    answer = userInput.substring(middle - 1, middle + 1);
    // 가운데의 앞글자, 가운데의 뒷글자
    // middle - 1 선택되어진 중앙의 직전, 바로 앞글자
  }
  return answer;
};

console.log(solution(userInput));
