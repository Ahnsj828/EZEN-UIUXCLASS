// 백설공주와 일곱난장이
// 아홉명의 난장이가 왔는데 일곱난장이는 진짜고 두명 난장이가 가짜다. 일곱난쟁이의 키의 합이 100이 된다..
// 아홉난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하라

// 입력설명 - 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉난쟁이의 키는 모두 다르며, 가능한 정답이 여러가지인 경우에는 아무거나 출력한다

// 출력설명 - 입력된 순서대로 일곱난쟁이의 키를 출력한다

// 입력예제 1 - 20 7 23 19 10 15 25 8 13
// 출력예제 1 - 20 7 23 19 10 8 13

// const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

// const solution = (arr) => {
//   let answer = [];

//   // for (let i = 0; i < arr.length; i++) {
//   // for (let num of arr) {

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]++ === 100) {
//       answer.push([arr]);
//     }
//   }

//   return answer;
// };
// console.log(solution(arr));

// -------------------------------------------------------------------------
// < 쌤 >
const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

const solution = (arr) => {
  const answer = arr;
  // 정답_(배열)을 담을 변수

  const sum = answer.reduce((a, b) => a + b, 0);
  // 누산기 / reduce(콜백함수, 초기값)
  let flag = false;

  for (let i = 0; i < 8; i++) {
    // 8번 인덱스까지
    for (let j = i + 1; j < 9; j++) {
      // 두번째 j는 두번째 숫자부터 8번 돈다
      if (sum - (answer[i] + answer[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
        flag = true;
        break; // 반복문 종료
      }
    }
    if (flag) break;
  }
  return answer;
};

console.log(solution(arr));
