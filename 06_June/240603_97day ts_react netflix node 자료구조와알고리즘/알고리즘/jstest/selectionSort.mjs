// < 선택정렬 >
// [6, 3, 4, 1, 2, 5]
// 선택 되지 않은 모든 것을 비교한다 / 싹 다 비교해서 가장 작은값을 찾는다 => 그걸 배열 첫번째로
// [1, 6, 3, 4, 2, 5]
// 1은 정렬 완료 나머지는 정렬이 안됐다 / 정렬 안된애들끼리 비교
// [1, 2, 6, 3, 4, 5]
// ...
// [1, 2, 3, 4, 5, 6]

const arr = [4, 2, 1, 3];

// 각 아이템은 3번의 반복이 필요하다!!
// i = 0, 1, 2
// 초기 세팅값 = i값을 가장 작은 값을 가지고 있는 인덱스라고 정의 하겠다  =>     i < arr.length - 1;
// i = 0일때  /   j = 1, 2, 3
// i = 1일때  /   j = 2, 3
// i = 2일때  /   j = 3

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    // i는 4보다 작은숫자   =>     i < arr.length - 1;
    let minValueIndex = i;

    // 중첩 for문
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValueIndex]) {
        minValueIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minValueIndex];
    arr[minValueIndex] = temp;
  }
};

// console.log(selectionSort(arr));
selectionSort(arr);
console.log(arr);

// [ 1, 2, 3, 4 ] => 등차수열 형태
//  시간복잡도 => o(n2)
