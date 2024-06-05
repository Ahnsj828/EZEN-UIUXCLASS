const arr = [5, 3, 7, 2, 4, 6, 9, 1, 8];

const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const divide = (arr, left, right) => {
  let pivot = arr[left];
  // 최초의 피봇값은 배열에 가장 왼쪽에 있는 값
  let leftStartIndex = left + 1;
  // left에서 1을 더한 값의 인덱스
  let rightStartIndex = right;

  while (leftStartIndex <= rightStartIndex) {
    while (leftStartIndex <= right && pivot >= arr[leftStartIndex]) {
      leftStartIndex++;
    }
    while (rightStartIndex >= left + 1 && pivot <= [rightStartIndex]) {
      rightStartIndex--;
    }
    if (leftStartIndex <= rightStartIndex) {
      swap(arr, leftStartIndex, rightStartIndex);
    }
  }

  swap(arr, left, rightStartIndex);
  return rightStartIndex;
};

const quickSort = (arr, left, right) => {
  // 예외조항처리
  if (left <= right) {
    let pivot = divide(arr, left, right);
    quickSort(arr, left, pivot - 1);
    // pivot - 1 => pivot이 오기직전까지를 의미
    // mdn에서 slice 찾아보기
    // 왼쪽에 하나
    quickSort(arr, pivot + 1, right);
    // 오른쪽에 하나
  }
};

console.log(" === 정렬 전 ===");
console.log(arr);
// [
//   5, 3, 7, 2, 4,
//   6, 9, 1, 8
// ]

quickSort(arr, 0, arr.length - 1);

console.log(" === 정렬 후 ===");
console.log(arr);
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]
