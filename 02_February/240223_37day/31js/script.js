// 내장객체
const today = new Date();
// 오늘 지금 이 시점에 시간 날짜 정보를 갖고오고 싶다 => Date()라는 함수
// console.log(today);
// Fri Feb 23 2024 12:54:20 GMT+0900 (한국 표준시)

const hrs = today.getHours();
// 오늘 지금 이 시점에 시간 정보를 갖고오고 싶다 => getHours()라는 함수
// 12:54:20 시간만 가져오고싶다
// console.log(hrs); // 12

const newImg = document.childElementCount("img");
const container = document.childElementCount("container");
// 컨테이너 정의 이유 => 컨테이너 밑에 이미지 놓으려고
newImg.src = hrs < 12 ? "./images/morning.jpg" : "./images/afternoon.jpg";
// 이미지는 기본적으로 src속성을 쓸수 있다 => newImg가 img니까 src속성을 쓸 수 있다
container.appendChild(newImg);
