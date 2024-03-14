// 수학객체
// Math

let num = 2.1234;
// 실수가 들어오게됐다
let maxNum = Math.max(10, 5, 8, 30); // 30
// 식별자 변수 안에다가  네개의 인자값을 할당했다
console.log(maxNum);

let minNum = Math.min(10, 5, 8, 30); // 5
console.log(minNum);

let roundNum = Math.round(num); // 2 (2.1234에 1을 반올림해서 2)
// 경계선 이상이냐 이하냐에따라서 반올림할것이냐 말것이냐
console.log(roundNum);

let floorNum = Math.floor(num); // 2
// floo바닥 / 소수점 이후를 버린다
console.log(floorNum);

let ceilNum = Math.ceil(num); // 3
// 소수점 수를 무조건 값을 올린다
console.log(ceilNum);

let rndNum = Math.random(num);
let rndNum2 = Math.random(num) * 10;
// 랜덤 / 마구잡이식 / 많이쓰인다 / 난수형태로 값을 반환해준다 -> 굳이 매개변수를 넣어줄 필요없다 / 새로고침하면 숫자가 계속 변한다
// 로또번호 생성기
// 0을 초과하면서 1미만인 실수값만 나온다 / 소수점만 나온다
// ex. 무신사에서 바코드 생성할때 / 네이버 웨일에서 배경화면이 매번 바뀌는거
console.log(rndNum);
console.log(rndNum2);

let piNum = Math.PI;
// 원주율 / 모든 입체적인것을 만들때 필수로 사용된다 / 코사인,탄젠트 등등을 사용해서 입체감을만든다 / 도형을 만드는 분야한테만 중요
console.log(piNum);
