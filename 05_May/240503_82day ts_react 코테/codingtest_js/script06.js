// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요
// 예를들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는  77, 41, 53, 85이므로 그합은

// 77 + 41 + 53 + 85 = 256이 되고

//  41 < 53 < 77 < 85
// 이므로 홀수들 중 최소 값은 41이된다

// 입력설명 -  첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한개 이상 반드시 존재한다

// 출력설명 - 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다

// 입력예제 - 12 77 38 41 53 92 85

// 촐력예제 - 256 41

// const arr = [12, 77, 38, 41, 53, 92, 85];

// const solution = (arr) => {

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       console.log(arr);
//     } else (arr[i] % 2 == 0) {
//       console.log(arr);
//     }
//   }
// };

// console.log(solution(arr));

// -------------------------------------------------------------------------
// < 쌤 >
const arr = [12, 77, 38, 41, 53, 92, 85];

const solution = (arr) => {
  let answer = [];

  let sum = 0; // 홀수인 값들의 합

  let min = Number.MAX_SAFE_INTEGER; // 가장 작은수

  for (let num of arr) {
    if (num % 2 === 1) {
      sum += num;
      // 홀수들의 합

      if (num < min) min = num;
    }
  }

  answer.push(sum); // 홀수들의 합
  answer.push(min); // 홀수중에 가장 작은 수

  return answer;
};
console.log(solution(arr));
