// 1월부터 12월까지 주기
const month = document.querySelector(".month");
// console.log(month);
for (let i = 1; i <= 12; i++) {
  // 1월부터 12월까지 주기
  const option = document.createElement("option");
  // option이라는 태그를 생성하겠다

  option.innerText = `${i}월`;
  // 숫자 'i' 와 문자 '월'이 들어가니까 => `` 템프릿

  option.setAttribute("value", i);
  // value값을 주겠다 1부터 12까지

  month.appendChild(option);
  // option태그를 month한테 주겠다
}

// -----------------------------------------------

// 1일부터 31일까지 주기
const day = document.querySelector(".day");
// console.log(day);
for (let i = 1; i <= 31; i++) {
  const option = document.createElement("option");
  option.innerText = `${i}일`;
  option.setAttribute("value", i);
  day.appendChild(option);
}

// -----------------------------------------------

// 인증번호 받고 인증번호가 일치하는지 확인
const button = document.querySelector(".receive");
// 인증번호 받기
// console.log(button);

button.addEventListener("click", () => {
  // console.log("click");

  const userPhone = document.querySelector(".userphone");
  // 사용자가 입력한 번호 / 사용자 전화번호
  // console.log(userPhone);

  const phoneNum = userPhone.value.replace(/-/g, "");
  // replace라는 함수 => 어떠한 값을 교체해주겠다

  const authNum = Math.floor(Math.random() * 9000) + 1000;
  alert(`${phoneNum}님의 인증번호는 ${authNum}입니다.`);

  // 랜덤값의 4자리 번호
  const authInput = document.querySelector(
    ".authenticate div:last-child input"
  );
  // console.log(authInput);

  const authBtn = document.querySelector(".prove");

  authBtn.addEventListener("click", () => {
    if (Number(authNum) === Number(authInput.value)) {
      // 형변환 될 수 있으니까 숫자로 변환 => Number()
      alert("정상인증되었습니다. 가입하기 버튼을 눌러주세요!");
    } else {
      alert("인증번호가 불일치합니다. 다시 시도해주세요!");
    }
  });
});

// < 여기에 더 추가할 수 있다! >
// 1.이메일은 @가 들어가야한다 => @가 들어갔는지 안들어갔는지를 추가
// 2.비밀번호와 비밀번호 맞는지 다른지 확인하는 기능 => 다르면 불일치
// 3.위의 기입한 내용들이 조건들이 안맞을 때 아래 약관동의들을 체크 못하게 하는거
// 4.밑에 하단의 요소들 클릭했을때 아이콘 색 변하게 하는 기능
// 5.아이콘 클릭하면 해당 페이지로 이동
// + 이것들도 리액트로 가능하다 / 컴포넌트로 쪼갤수 있다
