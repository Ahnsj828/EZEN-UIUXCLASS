// < 배열 >
const arr = [10, 11, 12, 13, 14];
// console.log(arr[0]);  //  10     =>    arr[0] = 10

// < 객체 >
const obj = {
  num01: 10,
  num02: 20,
  num03: 30,
  num04: 40,
  num05: 50,
};
// console.log(obj.num01);  //  10     =>    obj.num01 = 10
//  => 단순 값만 저장하는 용도이다

// 💡만약, arr배열과 obj객체에서 하나씩 꺼내와서 3씩 곱하고 배열에 넣으려면?
//   =>  배열은 쉽다 / But, 객체는 가능은 하지만 식이 길이 지고 복잡해진다

//
//
// =========================================================================================
//
//

// arrBefore에서 하나씩 꺼내서 3씩 곱하고 arrAfter에 넣어서 배열로 나열하려면?
const arrBefore1 = [1, 2, 3, 4, 5];
const arrAfter1 = [];

// < 첫번째 방법 >
const num1 = arrBefore1[0] * 3;
const num2 = arrBefore1[1] * 3;
const num3 = arrBefore1[2] * 3;
const num4 = arrBefore1[3] * 3;
const num5 = arrBefore1[4] * 3;

arrAfter1.push(num1);
arrAfter1.push(num2);
arrAfter1.push(num3);
arrAfter1.push(num4);
arrAfter1.push(num5);

console.log(arrAfter1); //   (5) [3, 6, 9, 12, 15]

//
//-----------------------------------------------------------------------------------
//
// < 두번째 방법 > - map함수
const arrBefore2 = [1, 2, 3, 4, 5];
const arrAfter2 = arrBefore2.map((num) => num * 3);
console.log(arrAfter2); //  (5) [3, 6, 9, 12, 15]

// < 세번째 방법 > - forEach함수
const arrBefore3 = [100, 200, 300, 400, 500];
arrBefore3.forEach((num) => console.log(num * 3));
const arrAfter3 = [arrBefore3];
console.log(arrAfter3); //   (5) [(100, 200, 300, 400, 500)]
