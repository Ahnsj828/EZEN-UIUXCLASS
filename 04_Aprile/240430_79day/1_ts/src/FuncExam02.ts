// 타입 별칭 => 함수 타입 시그니처 대체 하기 위한 목적이다
type stringNumberFunc = (arg0: string, arg1: number) => void;
// 함수의 타입을 이렇게 만든거다

// 👇🏼 가져다 쓰면 된다
const f: stringNumberFunc = function (a, b) {}; // 익명 함수 형태
const g: stringNumberFunc = (c, d) => {}; // 화살표 함수 형태
