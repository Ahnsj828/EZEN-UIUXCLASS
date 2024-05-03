// 이터러블객체
// JS에서 반복문을 사용할 수 있는 객체 => 이터러블한 객체라고 부른다(iterable)
// iterable 객체가 되기 위해서는 iteratable 속성값이 존재
// 참조타입 자료형 중에서 => 객체 & 배열
// 객체도 배열도 아닌데 반복문 사용하고싶다면 => generator()

const numArray: number[] = [1, 2, 3];

for (let value of numArray) {
  console.log(value); //  1 2 3
}

// generator() => interable 객체
// next()함수가 있냐없냐에 따라
