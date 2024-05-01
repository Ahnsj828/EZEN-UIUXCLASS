export class A {
  value: number = 1;
  method: () => void = function (): void {
    console.log(`value: ${this.value}`);
  };
}
// this 에러가 났다

// 함수에서 매개변수의 타입을 지정하지 않으면 에러가 발생한다!!
// 왜? => 함수의 매개변수에 어떤 값이 들어올지 모르기 때문에
// tsconfig.json에서 "noImplicitThis": false =>하면 에러사라진다
