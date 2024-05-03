// 얖은복사
// 원시타입과 달리 참조타입의 자료는 태생적으로 얕은 복사가 디폴트로 설정!

// const originalArray = [5, 3, 7, 9];
// const shallowCopiedArray = originalArray;

// console.log(originalArray, shallowCopiedArray); // [ 5, 3, 7, 9 ] [ 5, 3, 7, 9 ]

const originalArray = [5, 3, 7, 9];
const shallowCopiedArray = originalArray;

shallowCopiedArray[0] = 0;

console.log(originalArray, shallowCopiedArray); // [ 0, 3, 7, 9 ] [ 0, 3, 7, 9 ]
