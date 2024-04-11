// // 변수값 업데이트 배워보기 / 특히 숫자 업데이트에 대해 알아보기
// // < Variables>
// // 변수에는 다른 타입도 저장 가능하다 / 텍스트나 문자열같은거 /물론 텍스트나 문자열같은 다른 타입도 저장 가능하다

// let score = 0;
// // console.log(score)  //  0
// // 동전을 딸 때마다 점수에 5씩 더해진다고 해보자
// // score = 5 로 할 수도 있겠지만 이건 딱 한번만 작동한다
// score = 5
// console.log(score)  //  5
// score = score + 5
// console.log(score)  //  10
// score = score + 5
// console.log(score)  //  15
// //  ...
// // 👇 이렇게 축약이 가능하다
// score += 5
// console.log(score)  //  20
// score += 10
// console.log(score)  //  30

// // 👇 마이너스(-)도 가능하다
// score -= 10
// console.log(score)  //  20
// score = score - 10
// console.log(score)  // 10

// // 👇 곱하기(*)도 가능하다
// score *= 2
// console.log(score)  //  20
// score = score * 3
// console.log(score)  // 60

// // 👇 나누기(/)도 가능하다
// score /= 2
// console.log(score)  //  30
// score = score / 3
// console.log(score)  // 10

// // 
// // ----------------------------------------------
// // 

let numLives = 9
numLives -= 1
console.log(numLives)  // 8
numLives--
console.log(numLives)  // 7
numLives--

console.log(numLives)  // 6
numLives++
console.log(numLives)  // 7
numLives++
console.log(numLives)  // 8
numLives += 4
console.log(numLives)  // 12
