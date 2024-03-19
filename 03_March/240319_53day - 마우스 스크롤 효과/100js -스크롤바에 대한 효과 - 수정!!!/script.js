// 0% : 스크롤이 시작된 최초의 값
// 100% : (스크롤이 끝나는 마지막 좌표값 / {스크롤이 가능한 영역까지 포함한 전체문서 - 현제 보여지고 있는 웹 브라우저 화면 영역}) * 100
// => 이미 보여지고 있는 처음 영역은 관여하면 안되서 뺀거다

// h1 찾아와야된다
// 상단에 스크롤바를 찾아와야된다 (움직이는 바를 가져와야된다 감싸고 있는 공간이 아니라)

// 보고있는 화면 100vh를 제외한 부분만 스크롤에 관여해야한다 / 0부터 100에 관여하면안된다

// ==============================================

const h1 = document.querySelector("h1");
const progressbar = document.querySelector("bar");

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
  // 퍼센테이트지로
  // toFixed 소수점을 정수로
};
// percent 함수에 대한 반환값이 필요하다 => retrun

// 마우스 무브에 대한 이벤트들은 모두 윈도우가 관리하는것처럼 스크롤도 윈도우 영역이다
window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  // 스크롤 이벤트가 실행되면 이벤트 객체는 window의 scrollY값을 쓸 수 있다

  const scrollNum = window.screenY;
  // 스크롤이 시작됐을때부터 최대치 까지
  const documentHeight = document.body.scrollHeight - window.innerHeight;
  // 전체 높이(스크롤이 가능한 모든영역)에서 우리가 보고 있는 처음 영역을 뺄거다
  // console.log(scrollNum, documentHeight);

  const per = percent(scrollNum, documentHeight) + "%";
  // 함수에 대한 정의값
  // 값 뒤에 %를 붙이겠다

  h1.innerText = per;
  progressbar.style.width = per;
  // 상단 스크롤바 => 처음에는 with: 0 마지막에는 width: 100으로
});
