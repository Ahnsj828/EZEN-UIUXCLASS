// 회문 문자열
// 앞에서 읽을때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이 "Yes", 회문 문자열이 아니면 "NO"를 출력하는 프로그램을 작성하세요.
// 단, 회문을 검사할 때 대소문자를 구분하지 않습니다.

// 입력 설명 : 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
// 출력설명 : 첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.

// 입력예제1 : gooG

// 출력예제1 : YES

// const userWord = prompt("문자를 입력하세요");
// const solution = (userWord) => {
//   let obj = {};
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (obj[userWord[i]]) {
//       // result.pu
//       result.push("YES");
//     } else {
//       result.push("NO");
//     }
//   }
// };

// console.log(solution(userWord(result)));

// -------------------------------------------------------------------------
// < 쌤 >
const userWord = prompt("영어단어를 입력하세요");
const solution = (userWord) => {
  let answer = "YES"; // 기본값으로 yes

  // 대소문자 구분 안해도 된다 => 사용자한테 받은 문자를 소문자로 바꿔놓고 하겠다
  const test = userWord.toLowerCase();

  // 반으로 나눠서 비교해야된다
  const len = test.length; // len 문자열의 갯수

  for (let i = 0; i < Math.floor(len / 2); i++) {
    // Math.floor(len / 2) 문자를 둘로 나누고 소숫점 은 버리겠다
    // ex) Math.floor(45.95); //  45
    // 2로 나눠서 딱 나눠떨어지지 않는 문자열이라면 => 홀수라면  / 절반 그 앞까지만 검사
    if (test[i] !== test[len - i - 1]) {
      // test[i] 오른쪽에서 시작한 문자열이랑 test[len - i - 1]왼쪽에서 시작하는 문자열이 같지 않다면
      return "No";
    }
  }
  return answer;
};

console.log(solution(userWord));

// 이걸로 지뢰찾기 게임 만들 수 있다
