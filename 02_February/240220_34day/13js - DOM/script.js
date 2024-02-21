// const h1 = document.querySelector("h1");
// // query질의 질문/ Selector선택자 => querySelector선택자를 질문할테니 찾아와줘
// console.log(h1);

// const profile = document.querySelector("#profile");
// // 아이디는 # / class는 .
// console.log(profile);

// // const img = document.querySelector("img");
// // console.log(img);

// const img = document.querySelector("#profile img");
// console.log(img);

// // const users = document.querySelector(".user");
// // console.log(users);

// // 복수일때는 querySelectorAll 써야한다
// const users = document.querySelectorAll(".user");
// console.log(users);
// // 배열형태로 가져온다 / 배열의 타입을 띈다

// const address = users[1];
// console.log(address);

//
//
// -------------------------------------------
// < 구문법 > - 얘가 더 빨리찾는다(0.6s)
// const h1 = document.getElementsByTagName("h1");
// console.log(h1);

// const profile = document.getElementsById("profile");
// console.log(profile);

// const users = document.getElementsByClassName("user");
// console.log(users);
//
//
//
//
// ==============================================
//
// const desc = document.querySelector("#desc");
// // console.log(desc);
// desc.innerText = "이름 : 홍길동";
// // dom에 어떠한 텍스트를 넣자할때 => innerText 라는 속성
//
//
//

// const desc = document.querySelector("#desc");

// const descName = desc.innerText;
// console.log(descName);
// // 웹브라우저에 출력되는 값으로만 가져온다
// // 특정요소가 가미가 되었을때 차이가 크다

// const descHtml = desc.innerHTML;
// console.log(descHtml);

// const descContext = desc.textContent;
// console.log(descContext);
// // 나중에 나온 문법이다 (신문법)
//
//
//
// ==============================================
//
// // 이벤트 핸들러 => 이벤트 작동 실행!

// // 영어 my profile을 한글로 바꾸고싶다
// const title = document.querySelector("h1");
// // title.onclick = function () {
// //   title.innerText = "마이 프로필";
// // };
// title.onclick = () => (title.innerText = "마이 프로필");
// // 앞에 on이 붙으면 핸들러다 / 피그마 프로토타입에서도 on~
// //
// //
// // ---------------------------------
// //
// const userName = document.querySelector("#desc p");
// // console.log(userName);
// userName.onclick = () => (userName.innerHTML = "이름 : <b>영심이</b>");

// const pfImg = document.querySelector("#profile img");
// // console.log(pfImg);
// pfImg.onclick = () => (pfImg.src = "./images/pf2.png");
//
//
//
//
// ==================================================
//
//
// // < 스타일 수정 >
// const title = document.querySelector("h1");

// title.onclick = () => {
//   title.style.backgroundColor = "#000";
//   title.style.color = "#fff";
// };
// // title.style 해당 노드 요소 title에 css스타일을 주겠다
// // backgroundColor 내가 적용하고싶은 스타일
//
//
//
//
//
// < 스타일 수정 >
const title = document.querySelector("h1");
const userName = document.querySelectorAll(".user")[0];
// console.log(userName);

title.onclick = () => {
  title.style.backgroundColor = "#000";
  title.style.color = "#fff";
};

// const classGroup = userName.classList;
// classList 있는지 없는지 확인해줘
// console.log(classGroup);

// userName.onclick = () => {
//   userName.classList.add("clicked");
// };

// classList => 앞에 붙은 객체의 class값을 확인해줘 (다 찾아오는거)
//
//
//
//
//
// class값이 있냐 없냐 판단하는거
// const clickedTrue = userName.classList.contains("clicked");
// // contains : 찾고서 스타일 가진애가 있으면 참 없으면 거짓 => 조건문 사용할거다
// console.log(clickedTrue);
// // true 라고 나온다
//
//
//
//
// // < 조건문을 줘서 다시 돌아오게할거다 >
// userName.onclick = () => {
//   if (!userName.classList.contains("clicked")) {
//     userName.classList.add("clicked");
//   } else {
//     userName.classList.remove("clicked");
//   }
// };
// // add( ) 클래스 값을 확인하고 추가할때 <-> remove 클래스 값을 확인하고 제거할때
//
//
//
//  < toggle 기능 > 번잡스러워서 더 간략하게 (3줄을 1줄로)
userName.onclick = () => {
  userName.classList.toggle("clicked");
};
