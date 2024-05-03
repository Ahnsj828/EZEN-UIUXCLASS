// < 깊은복사 >
// const original = 1;
// let copied = original;

// console.log(original, copied); // 1 1
// ------------------------------------------

const original = 1;
let copied = original;

copied += 2;

console.log(original, copied); // 1 3

// 원시타입의 경우, 원래부터 태생적으로 깊은 복사의 형식의 띄고있다. => 따라서 복제가 되어진 데이터의 값을 바꾸더라도 원본데이터값이 바뀌지 않는다
