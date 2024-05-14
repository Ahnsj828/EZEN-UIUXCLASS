// 각각의 버튼을 눌렀을때 페이지가 변경되는거
// 세개의 버튼이 필요하다
// 이 버튼은 트리거다
const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
// console.log(menuHome, menuGame, menuJukebox);

const contentFrame = document.querySelector("#contentFrame");

// 바꿔줘야되는 요소는 iframe 요소들이다
// src속성들만 바꾸면된다
const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
};
const gameChange = () => {
  // console.log("game"); // game
  contentFrame.setAttribute("src", "./game.html");
  // setAttributeNode 속성자체를
  // setAttribute생성하고자 하는 속성의 값을 두번째 매개변수로 줄 수 있다
};
const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);
