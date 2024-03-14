const button = document.querySelector("button");
const result = document.querySelector("#result");

function* train() {
  yield "판교";
  yield "이매";
  yield "삼동";
  yield "경기광주";
  yield "초월";
  yield "곤지암";
  yield "신둔도예촌";
  yield "이천";
  yield "부발";
  yield "세종대왕릉";
  yield "여주";
}
// 제너레이터 함수를 만들었다

const gyeonggang = train();

const trainChange = () => {
  // console.log("click");  //  버튼을 누르면 수가 증가한다
  let current = gyeonggang.next();
  if (current.done !== true) {
    result.innerText = current.value;
  } else {
    result.innerText = "종점입니다!";
    button.setAttribute("disabled", "disabled");
    // 한정적인 무언가를 주고 싶을때 사용한다 /
  }
};

button.addEventListener("click", trainChange);
