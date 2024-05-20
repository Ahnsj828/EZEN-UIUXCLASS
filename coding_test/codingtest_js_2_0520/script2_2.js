// -------------------------------------------------------------------------
// < 쌤 >

// 총 5명의 친구 : 130 135 148 150 135

const arr = [130, 135, 148, 140, 145, 150, 150, 153];

const solution = (arr) => {
  let answer = 1;
  let max = arr[0];

  for (let i = 1; i < arr.lenght; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
};
console.log(solution(arr));
