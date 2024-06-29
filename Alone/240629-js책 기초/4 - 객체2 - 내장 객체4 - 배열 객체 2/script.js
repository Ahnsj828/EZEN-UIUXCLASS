// << 배열 객체 >>
// 변수에는 데이터가 한 개만 저장된다. 그렇다면 여러개의 데이터를 하나의 장소에 저장하려면 어떻게 해야할까?
// 여러 개의 데이터를 하나의 저장소에 저장하려면 배열 객체(Array Object)를 생성하면 된다.
// 배열은 '나눌 배'와 '열거할 열'을 사용해 만든 글자로, 글자 뜻 그대로 하나의 저장소를 나눠서 데이터를 열거하라는 의미다.

// 

// < 배열 객체의 메서드 및 속성 >
// 배열 객체에서 사용할 수 있는 메서드와 속성이다. 다음 메서드와 속성을 적절히 활용하면 배열의 순서를 바꿀 수 있을 뿐만 아니라 배열 객체에 새 데이터의 삽입과 삭제도 가능하다.

// join(연결 문자) => 배열 객체의 데이터를 연결 문자 기준으로 1개의 문자형 데이터로 반환한다.
// reverse() => 배열 객체의 데이터 순서를 거꾸로 바꾼후 반환한다.
// sort() => 배열 객체의 데이터를 오름차순으로 정렬한다.
// slice(index1, index2) => 배열 객체의 데이터중 원하는 인덱스 구간만큼 잘라서 배열 객체로 가져온다.
// splice() => 배열 객체의 지정 데이터를 삭제하고 그 구간에서 새 데이터를 삽입할 수 있다.
// concat() => 2개의 배열 객체를 하나로 결합한다.
// pop() => 배열에 저장된 데이터 중 마지막 인덱스에 저장된 데이터를 삭제한다.
// push(new data) => 배열 객체의 마지막 인덱스에 새 데이터를 삽입한다.
// shift() => 배열 객체에 저장된 데이터 중 첫번째 인덱스에 저장된 데이터를 삭제한다.
// unshift(new data) => 배열 객체의 가장 앞의 인덱스에 새 데이터를 삽입한다.
// length() => 배열에 저장된 총 데이터의 개수를 반환한다.

// ex.1) 배열 객체 메서드인 join(), concat(), slice(), sort(), reverse()를 사용한 예제
const arr_1 = ["사당", "교대", "방배", "강남"];
const arr_2 = ["신사", "압구정", "옥수"];

// 1. join()
let result = arr_1.join("-");
console.log(result);  // 사당-교대-방배-강남
// 배열에 지정된 값을 지정한 문자로 연결하여 하나의 문자열을 반환한다.
// 설명: join() 메서드는 배열의 모든 요소를 연결하여 하나의 문자열로 만든다. 각 요소는 인자로 전달된 문자열("-")로 구분된다.
// 출력: "사당-교대-방배-강남"

// 2. concat()
result = arr_1.concat(arr_2);
console.log(result);  // (7) ['사당', '교대', '방배', '강남', '신사', '압구정', '옥수']
// 2개의 배열을 하나의 배열로 만들어 반환한다.
// 설명: concat() 메서드는 두 개 이상의 배열을 합쳐서 새로운 배열을 반환한다. arr_1과 arr_2를 합쳐서 하나의 배열로 만든다.
// 출력: ['사당', '교대', '방배', '강남', '신사', '압구정', '옥수']

// 3. slice()
result = arr_1.slice(1,3);
console.log(result)  // (2) ['교대', '방배']
// 배열의 1번 이전의 인덱스 요소를 잘라낸다. 그리고 남은 값을 반환한다.
// 설명: slice() 메서드는 배열의 일부를 선택하여 새로운 배열을 반환한다. 첫 번째 인자(1)는 시작 인덱스를, 두 번째 인자(3)는 끝 인덱스를 나타내며, 끝 인덱스는 포함되지 않는다.
// 출력: ['교대', '방배'] (인덱스 1부터 2까지의 요소가 포함됩니다)

// 4. sort()
arr_1.sort();
console.log(arr_1);  // ['강남', '교대', '방배', '사당']
// 배열의 값을 오름차순으로 정렬한다.
// 설명: sort() 메서드는 배열의 요소를 정렬하고 배열을 반환한다. 기본적으로 요소들은 문자열 유니코드 순서로 정렬된다.
// 출력: ['강남', '교대', '방배', '사당']

// 5. reverse()
arr_2.reverse();
console.log(arr_2);  // (3) ['옥수', '압구정', '신사']
// 배열 순서를 거꾸로 뒤집는다.
// 설명: reverse() 메서드는 배열의 순서를 반대로 하고 배열을 반환한다.
// 출력: (3) ['옥수', '압구정', '신사']

document.write("<br/>")
document.write("============내가 해보기============")
document.write("<br/>")

// ex.1) 배열 객체 메서드인 join(), concat(), slice(), sort(), reverse()를 사용한 예제
const arr_3 = ["사당", "교대", "방배", "강남"];
const arr_4 = ["신사", "압구정", "옥수"];

// 1. join()
let result2 = arr_3.join("-");
document.write(result2);
// 배열에 지정된 값을 지정한 문자로 연결하여 하나의 문자열을 반환한다.
// 설명: join() 메서드는 배열의 모든 요소를 연결하여 하나의 문자열로 만든다. 각 요소는 인자로 전달된 문자열("-")로 구분된다.
// 출력: "사당-교대-방배-강남"

document.write("<br/>");

// 2. concat()
result2 = arr_3.concat(arr_4);
document.write(result2)
// 2개의 배열을 하나의 배열로 만들어 반환한다.
// 설명: concat() 메서드는 두 개 이상의 배열을 합쳐서 새로운 배열을 반환한다. arr_1과 arr_2를 합쳐서 하나의 배열로 만든다.
// 출력: ['사당', '교대', '방배', '강남', '신사', '압구정', '옥수']

// 2_2. 반대 경우
document.write("<br/>");
result2 = arr_4.concat(arr_3)
document.write(result2)

document.write("<br/>");

// 3. slice()
result2 = arr_3.slice(1,3)
document.write(result2)
// 배열의 1번 이전의 인덱스 요소를 잘라낸다. 그리고 남은 값을 반환한다.
// 설명: slice() 메서드는 배열의 일부를 선택하여 새로운 배열을 반환한다. 첫 번째 인자(1)는 시작 인덱스를, 두 번째 인자(3)는 끝 인덱스를 나타내며, 끝 인덱스는 포함되지 않는다.
// 출력: ['교대', '방배'] (인덱스 1부터 2까지의 요소가 포함됩니다)

// 3_2. 다른 경우
document.write("<br/>");
result2 = arr_3.slice(0,2)
document.write(result2)
document.write("<br/>");

// 3_3. 다른 경우
result2 = arr_3.slice(0,3)
document.write(result2)
document.write("<br/>");

// 3_4. 다른 경우
result2 = arr_3.slice(1,2)
document.write(result2)
document.write("<br/>");

// 4. sort()
arr_3.sort();
document.write(arr_3);
// 배열의 값을 오름차순으로 정렬한다.
// 설명: sort() 메서드는 배열의 요소를 정렬하고 배열을 반환한다. 기본적으로 요소들은 문자열 유니코드 순서로 정렬된다.
// 출력: ['강남', '교대', '방배', '사당']

document.write("<br/>");

// 5. reverse()
arr_4.reverse();
document.write(arr_4);
// 배열 순서를 거꾸로 뒤집는다.
// 설명: reverse() 메서드는 배열의 순서를 반대로 하고 배열을 반환한다.
// 출력: (3) ['옥수', '압구정', '신사']

// 
// 
document.write("<br/>")
document.write("============================================")
document.write("<br/>")
// 
// 

// ex.2) 배열 객체 메서드인 splice(), push(), shift(), unshift()를 사용한 예제
const greenArr = ["교대", "방배", "강남"];
const yellowArr = ["미금", "정자", "수서"];

greenArr.splice(2, 1, "서초", "역삼");
console.log(greenArr);  // (4) ['교대', '방배', '서초', '역삼']
// 2번 인덱스부터 1개의 데이터를 삭제한다. 그 다음 "서초", "역삼"을 삽입한다.

const data1 = yellowArr.pop();
console.log(data1)  // 수서
// yellowArr 배열 마지막 인덱스의 데이터를 data1에 저장한다.
const data2 = yellowArr.shift();
console.log(data2)  // 미금
// yellowArr 배열 가장 앞쪽 인덱스의 데이터를 data2에 저장한다.

yellowArr.push(data2);
console.log(yellowArr)  // (2) ['정자', '미금']
// data2에 저장된 데이터를 yellowArr 배열의 마지막 인덱스에 밀어 넣는다.

yellowArr.unshift(data1);
console.log(yellowArr)  // (3) ['수서', '정자', '미금']
// data1에 저장된 데이터를 yellowArr 배열의 가장 앞쪽 인덱스에 밀어 넣는다.