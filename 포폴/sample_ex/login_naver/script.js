//  << navigation >>
const idLogin = document.querySelector("#idLogin");
const disposableLogin = document.querySelector("#disposableLogin");
const qrLogin = document.querySelector("#qrLogin");
// console.log(idLogin, disposableLogin, qrLogin);

const contentFrame = document.querySelector("#contentFrame");
console.log(contentFrame);

const idChange = () => {
  //   console.log("id");
  contentFrame.setAttribute("src", "./id.html");

  //   👇🏼css
  //   menuGame.style = "colr: #fff; background: #298db5";
  //   menuJukebox.style = "colr: #fff; background: #298db5";
  //   // 다른거를 누르면 리셋되게 할거다
  //   menuHome.style = "color: #000; background: #fff";
};

const disposableChange = () => {
  //   console.log("disposable");
  contentFrame.setAttribute("src", "./disposable.html");
  //   // setAttributeNode 속성자체를
  //   // setAttribute생성하고자 하는 속성의 값을 두번째 매개변수로 줄 수 있다

  //   👇🏼css
  //   menuHome.style = "colr: #fff; background: #298db5";
  //   menuGame.style = "colr: #fff; background: #298db5";
  //   // 다른거를 누르면 리셋되게 할거다
  //   menuGame.style = "color: #000; background: #fff";
  //   // 버튼이 눌려졌다는게 식별이 될수 있게 효과를 줬다
};

const qrChange = () => {
  //   console.log("qr");
  contentFrame.setAttribute("src", "./qr.html");

  //   👇🏼css
  //   menuGame.style = "colr: #fff; background: #298db5";
  //   menuHome.style = "colr: #fff; background: #298db5";
  //   // 다른거를 누르면 리셋되게 할거다
  //   menuJukebox.style = "color: #000; background: #fff";
};

idLogin.addEventListener("click", idChange);
disposableLogin.addEventListener("click", disposableChange);
qrLogin.addEventListener("click", qrChange);
