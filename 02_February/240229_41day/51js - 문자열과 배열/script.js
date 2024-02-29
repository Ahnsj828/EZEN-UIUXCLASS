// 사용자가 이메일주소를 입력하면, result 공간에 사용자의 이메일 정보를 출력하게 해주세요!!

// 단, 이메일 주소중 @ 앞의 내용을 세자리까지만 출력하게 해주세요. 그리고 네번째 자리부터는 ...온점으로 표기해주세요!

// 사용자가 입력한 이메일 : abcd@naver.com
// 출력되어야할 이메일 : abc...@naver.com
//

// // console.log(str4.substring(1, 4));
// const userInput = document.querySelector("form #userInput");
// console.log(userInput);

// const button = document.querySelector("from input[type='submit']");
// console.log(button);

// prompt;

//
//
// ----------------------------------------
// 쌤
// input태그
// 전제조건 : 모든 이메일 주소에는 @이 존재한다!
// 1.@이라는 문자열을 중심으로 앞, 뒤쪽으로 두 개로 쪼갠다!
// 쪼개는거 split함수
// 2. 앞쪽에 쪼개진 문자열에서 1~3번 인덱스까지만 정상출력 +...
// substring 혹은 slice함수
// 3. 뒤쪽에 쪼개진 문자열은 그대로 보관하고 있다가 앞쪽 문자열과 합친다.
//

const userEmail = document.querySelector("#userEmail");
const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
const result = document.querySelector("#result");
// 출력공간정의
console.log(userEmail, button, result);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("click");
  //실행 버튼 눌렀을때 click이 뜨면 이벤트가 실행될 준비가 됐다
  let userName = "";
  let = "domain";

  if (userEmail.value !== "") {
    userName = userEmail.value.split("0")[0];
    userName = userName.substring(0, 3);
    domain = userEmail.value.split("0")[1];
    result.innerText = `${userName}****@${domain}`;
    userEmail.value = "";
    console.log(userName);
  }
  // userEmail이 값이 존재할때만 작동하게 할거다 / 빈공간이 아닌 어떠한 값이 들어온다면 작동하게할거다
});
