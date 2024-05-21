// 미션을 받았다
// 미션 : 세 개의 값을 줄테니 평균을 구하세요!

// 다른 방법 / 변수가 아닌 배열을 선택
const arr = [87, 70, 100];

let average = 0;

for (let i = 0; i < arr.length; i++) {
  average += arr[i];
  // average는 세 값이 더한 값
}

average /= arr.length;
console.log(average); // 85.66666666666667

//  좋은코드
// 1) 확장성이 있는 코드
// 2) 재사용 = 재활용이 가능한 코드
// 만약 숫자가 3개가 아니라 100개라면 100개만 입력하면된다

// 알고리즘을 알고 코드를 짰네
