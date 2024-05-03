// 1) 명령형 방식으로
// imperative-sum.ts
let sum = 0;
for (let i = 1; i <= 100; i++) {
  // let i = 1; => 1부터 시작
  // i <= 100; =>100까지 증가
  // i++ => 증가 연산자
  sum += i;
  // 복합 대입 연산자 i
}
console.log(sum); // 5050

// import 로 range 안가져왔는데 왜 나오는거지?
