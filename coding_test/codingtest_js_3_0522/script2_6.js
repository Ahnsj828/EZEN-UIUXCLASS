// 격자판 최대합
// 5+5 격자판에 아래와 같이 숫자가 적혀있습니다.

// 입력 설명 : 첫줄에 자연수 N이 주어진다.(1<=N<=50)
// 두번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다

// 출력설명 : 최대합을 출력한다

// 입력예제1 :
// 5
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19

// 출력예제1 :
//155

// const arrA = [
//   [10, 13, 10, 12, 15],
//   [12, 39, 30, 23, 11],
//   [11, 25, 50, 53, 15],
//   [19, 27, 29, 37, 27],
//   [19, 13, 30, 13, 19],
// ];

// // 가장 큰 배열 합을 찾아내는 함수
// function findLargestSumArray(arr) {
//   let maxSum = -Infinity;
//   let maxArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     const sum = arr[i].reduce((acc, current) => acc + current, 0);
//     if (sum > maxSum) {
//       maxSum = sum;
//       maxArray = arr[i];
//     }
//   }

//   return { maxArray, maxSum };
// }

// // 특정 인덱스들의 합을 계산하는 함수
// function calculateSpecialSums(arr) {
//   let diagonalSum1 = 0;
//   let diagonalSum2 = 0;

//   for (let i = 0; i < arr.length; i++) {
//     diagonalSum1 += arr[i][i]; // 첫 번째 방식: arr[0][0], arr[1][1], ..., arr[4][4]
//     diagonalSum2 += arr[i][arr.length - 1 - i]; // 두 번째 방식: arr[0][4], arr[1][3], ..., arr[4][0]
//   }

//   return { diagonalSum1, diagonalSum2 };
// }

// // 결과 출력 함수
// function printResults(arr) {
//   const largestSumResult = findLargestSumArray(arr);
//   console.log(`Array with the largest sum: ${largestSumResult.maxArray}`);
//   console.log(`Largest sum: ${largestSumResult.maxSum}`);

//   const specialSumsResult = calculateSpecialSums(arr);
//   console.log(`Sum of the first diagonal: ${specialSumsResult.diagonalSum1}`);
//   console.log(`Sum of the second diagonal: ${specialSumsResult.diagonalSum2}`);
// }

// // 함수 호출
// printResults(arrA);
// -------------------------------------------------------------------------
// < 쌤 >
// 숙제

// 각 행의 합 중에서 가장 큰 값을 찾기
// 각 열의 합 중에서 가장 큰 값을 찾기
// 좌.우측 대각선의 합을 찾기

// 위 3개의 값을 비교한 것 가운데 가장 큰 값

// Java를 하면 알겠지만
// 중첩 for문 사용
// Math 수학객체 => 메서드 함수 max() : 인자값들 가운데 가장 큰 값을 도출!!

const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

const solution = (arr) => {
  // 비교값 만들어서 크면 기준값으로 정하고 더 큰애가 나오면 다시 바꾸고 이렇게..

  // 기준값
  let answer = Number.MIN_SAFE_INTEGER; // JS에서 가장 작은 정수값 // -9007199254740991

  // 반복실행하고자 하는 숫자 (아이템의 갯수만큼 반복해서 더해줘야한다 =>  반복문 )
  let n = arr.length;

  // 실제 연산된 결과값을 저장할 수 있는 공간 (*행에대한 저장 공간)
  let sum1 = 0;

  // 실제 연산된 결과값을 저장할 수 있는 공간 (*열에대한 저장 공간)
  let sum2 = 0;

  // 반복문(중첩for문 쓸거다)
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j]; // 행
      // 복합대입연산자라 각각의 행을 더한값이 들어갈거다
      sum2 += arr[j][i]; // 열
    }
    // 여러가지 값을 가운데 가장 큰값을 찾아라 => Math.max()
    answer = Math.max(answer, sum1, sum2); // 재할당 (answer, sum1, sum2중에 가장 큰놈을 answer에 다시담는다 =>재할당)
  }

  // 대각선 합들
  sum1 = sum2 = 0; // 대각선 합 구해야되니까
  // sum1 왼쪽에서 시작하는 대각선 / sum2 오른쪽에서 시작하는 대각선
  for (let i = 0; i < n; i++) {
    // 좌측 대각선의 합
    sum1 += arr[i][i];
    // 우측 대각선의 합
    sum2 += arr[i][n - i - 1]; // [n - i - 1] n은 5라는 고정값이 있어서 4,3,2,1,0
  }
  answer = Math.max(answer, sum1, sum2); // answer에 합들중에 가장 큰애가 나올거다
  return answer;
};

console.log(solution(arr)); // 배열을 받아서 연산작업을해서 어떠한 결과값을 도출하겠다

// ===================================================================

// 백엔드에서 서버에서 데이터를 찾아오는 방식 / 행과 방식을 찾는 대표적 방식
// 👇🏼
// sum1 += arr[i][j]; // 행
// sum2 += arr[j][i]; // 열
