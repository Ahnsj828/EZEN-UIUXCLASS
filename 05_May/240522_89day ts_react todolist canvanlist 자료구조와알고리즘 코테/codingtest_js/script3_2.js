// 유효한 팰린드롬
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
// 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 "NO"를 출력하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.
// 알파벳 이외의 문자들을 무시합니다.

// 입력 설명 : 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

// 출력설명 : 첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.

// 입력예제1 : found7, time: study; Yduts: emit, 7Dnuof

// 출력예제1 : YES

// const userText = prompt("영어문장을 입력하세요");
// const strUserText = userText.toString();
// const solution = () => {
//   let answer = "YES";

//   const test = userText.toLowerCase();

//   const len = test.length;

//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     if (test[i] !== test[len - i - 1]) {
//       return "No";
//     }
//   }
//   return answer;
// };

// console.log(solution(strUserText));

// console.log(strUserText);

// -------------------------------------------------------------------------
// < 쌤 >
// 회문문자열 -  앞뒤가 똑같은
// 팰린드롬 - 문자열을 조합한 문장을 의미한다

const str = "found7, time: study Yduts :emit ,7Dnuof";
// 팰린드롬으로서 적합한 문장

const solution = (str) => {
  // 팰린드롬이라는 가정하에서
  let answer = "YES"; // 팰린드롬이면 YES

  const test = str.toLowerCase().replace(/[^a-z]/g, ""); // 대소문자 가리지 않기 위해
  // /[^a-z]/g 정규표현식
  // .replace(/[^a-z]/g, "")👇🏼
  // 빈공간이나 특수문자 제거해서 문자열만 찾아와서 문자로 만들거다 / 알파벳 요소만 찾아서 하나의 문자로 만들거다

  // console.log(test);

  // 반으로 나눠서 뒤집어서 같냐 안같냐 /
  // 문자열을 배열로 만들어야한다
  // 문자들을 하나 하나씩 꺼내서 각각의 아이템으로 만드는방법
  if (test.split("").reverse().join("") !== test) {
    // test.split("") 배열안의 아이템으로
    // .reverse() 반대로 뒤집어서
    // .join("") 다시 배열로
    return "NO";
  }

  return answer;
};

console.log(solution(str));

// split을한다면 => ["f","o","u","n","d"...]
// reverse를 한다면 반대로
// join 각가의 문자 구분자를 다시 문자로
