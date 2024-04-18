let arr_1 = ["A", "B", "C", "D", "E", "F", "G"];
let arr_2 = ["a", "b", "c"];
let arr_3 = ["ㅁ", "ㄴ", "ㅅ", "ㄱ", "ㄷ", "ㅂ", "ㄹ"];

// join(연결문자)  -  배열 객체의 데이터를 연결 문자 기준으로 1개의 문자형 데이터로 반환
// reverse()  -  배열 객체의 데이터 순서를 거꾸로 바꾼 후 반환한다
// sort()  -  배열 객체의 데이터를 오름차순으로 정렬한다
// sliec(index1, index2)  -  배열 객체의 데이터 중 원하는 인덱스 구간만큼 잘라서 배열 객체로 가져온다
// splice()  -  배열 객체의 지정 데이터를 삭제하고 그 구간에 새 데이터를 삽입할 수 있다
// concat()  -  2개의 배열 객체를 하나로 결합한다
// pop()  -  배열에 저장된 데이터 중 마지막 인덱스에 저장된 데이터를 삭제한다
// ↕
// push(new data)  -

// < join >
let result = arr_1.join("-");
console.log(result); //   A-B-C-D-E-F-G
// 배열에 저장된 값을 지정한 문자로 연결하여 하나의 문자열을 반환합니다

result = arr_3.join("");
console.log(result); //   ㅁㄴㅅㄱㄷㅂㄹ
// 배열에 저장된 값을 지정한 문자로 연결하여 하나의 문자열을 반환합니다

result = arr_2.join();
console.log(result); //   a,b,c
// 배열에 저장된 값을 지정한 문자로 연결하여 하나의 문자열을 반환합니다

// < concat >
result = arr_1.concat(arr_2);
console.log(result); //   (10) ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'a', 'b', 'c']
// 2개의 배열을 하나의 배열로 만들어 반환합니다

// < slice >
result = arr_1.slice(1, 3);
console.log(result); //   (2) ['B', 'C']
// 배열의 1번 이전의 인덱스 요소를 잘라냅니다. 그리고 남은 값을 반환합니다

result = arr_1.slice(1, 5);
console.log(result); //   (4) ['B', 'C', 'D', 'E']
// 배열의 1번 이전의 인덱스 요소를 잘라냅니다. 그리고 남은 값을 반환합니다

// < sort >
arr_1.sort();
console.log(arr_1); //   (7) ['A', 'B', 'C', 'D', 'E', 'F', 'G']
// 배열의 값을 오름차순으로 정렬합니다

arr_3.sort();
console.log(arr_3); //   (7) ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ']
// 배열의 값을 오름차순으로 정렬합니다

// < reverse >
arr_2.reverse();
console.log(arr_2); //   (3) ['c', 'b', 'a']
// 배열 순서를 거꾸로 뒤집습니다
