// * 1~100까지의 숫자들을 제곱한 값들의 합
//  1) 명령형 방식으로

let squareSum = 0;

for (let i = 1; i <= 100; i++) {
  squareSum += i * i;
  // 제곱 => 본인을 한번더 곱한거
}
console.log(squareSum);
