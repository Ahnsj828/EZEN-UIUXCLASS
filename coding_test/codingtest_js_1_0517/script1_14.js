// 가장 긴 문자열
//  N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요

// 입력 설명 :
// 첫줄에 자연수 N이 주어진다 (3<=N<=30)
// 두번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.
// 각 문자열의 길이는 서로 다릅니다

// 출력설명 : 첫줄에 가장 긴 문자열을 출력한다

// 입력예제1
// 5
// teacher
// time
// student
// beautiful
// good

// 출력예제1 : beautiful

// const arr = [5, "teacher", "time", "student", "beautiful", "good"];

// const solution = (arr) => {
//   let answer = [];

//   for (let i = 0; i < arr.length; i++) {
//     answer.push(arr[i].split("").length);
//   }
//   // return answer;
//   console.log(answer);
// };

// -------------------------------------------------------------------------
// < 쌤 >

// 배열안에 값을 참고해서 긴 문자열을 추출

const arr = [5, "teacher", "time", "student", "beautiful", "good"];
// 6개의 값을 갖고 있는 배열

const solution = (arr) => {
  let answer = "";
  // 가장 긴 문자열이 담길 변수

  // JS에가 사용가능한 가장 작은 정수값
  let max = Number.MIN_SAFE_INTEGER;

  for (let text of arr) {
    if (text.length > max) {
      max = text.length; // 해당문자열의 갯수
      answer = text; // 해당 문자
    }
  }
  return answer;
};

console.log(solution(arr));
