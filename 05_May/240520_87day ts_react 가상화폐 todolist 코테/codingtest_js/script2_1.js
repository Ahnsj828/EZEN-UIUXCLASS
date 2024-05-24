// 큰 수 출력하기
// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫번째 수는 무조건 출력한다)

// 입력 설명 : 첫줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.
// 출력설명 : 자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.

// 입력예제1
// 6
// 7 3 9 5 6 12

// 출력예제1 : 7 9 6 12

// const arr = [7, 3, 9, 5, 6, 12];

// const solution = (arr) => {
// 	let answer = []

// 	if(arr.i > n) {
// 		answer.
// 	}
// }

// -------------------------------------------------------------------------
// < 쌤 >
const arr = [7, 3, 9, 5, 6, 12];

const solution = (arr) => {
  let answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
};

console.log(solution(arr));
