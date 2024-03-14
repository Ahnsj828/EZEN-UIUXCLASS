// 마우스 스크롤을 하든, 손가락으로 스크롤을 하든 스크롤 이벤트가 필요하다!!

const scrollEvent = () => {
  // console.log("scroll"); // 스크롤할때마다 scroll숫자가 올라갔다
  const hashList = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  // console.log("scrollY");
  if (scrollY > 300) {
    // if (scrollY > 275) 하면 이상하다
    hashList.classList.add("active");
  } else {
    hashList.classList.remove("active");
  }
};

window.addEventListener("scroll", scrollEvent);

//
//
//

// 마우스 & 손가락
// click : 마우스를 클릭했다가 떼는 순간 이벤트 발생!
// 마우스를 눌려져있는 상태에서 / 누르고 있는 상태에서 이벤트가 발생된다 => mousedown
// 손가락 이벤트 => touchstart

// 컴퓨터 혹은 모바일 디바이스는 사용자가 얼만큼 스크롤을 했는지 어떻게 알 수 있을까?

// 사용자가 스크롤하고 두번째 스크롤할때 컴퓨터가 어떻게 알 수 있을까?

// scrollWidth : 사용자가 스크롤을 할 수 있는 전체 총 너비값 (디바이스 너비값이 아니다! )
//                디바이스에 나타나지 않더라도 내가 스크롤할 요소의 너비값                      =>   652
// clientWidth : 사용자의 눈으로 확인이 가능한 디바이스 매체상의 너비값 (디바이스의 너비값)      =>   390
// 스크롤이 가능한 영역너비 =>    652 - 390 = 262px

// 사용자가 처음으로 스크롤을 하기 위해서 찍은 지점을 알아야한다
let startX = 0; // 사용자가 처음으로 스크롤을 하기 위해서 찍은 지점

// 사용자가 스크롤을 한 이후의 지점 = 종착지점 (찍은 지점에서 움직인 지점을 알아야한다)
let nowX = 0; // 사용자가 스크롤을 한 이후의 지점 = 종착지점

// 사용자가 스크롤을 통해서 이동한 만큼의 너비가 있어야한다
let listX = 0;

// 사용자가 더이상 스크롤을 사용하지 않을 경우의 마지막 종료지점
let endX = 0;

// 두번째로 스크롤을 움직이고자 할 때, 세팅되어야 하는 위치값
// listX + nowX - startX

const hashContent = document.querySelector(".hashcontent");
const listScrollWidth = hashContent.scrollWidth + 294;
const listClientWidth = hashContent.clientWidth;
const minus = listClientWidth - listScrollWidth;

console.log(listScrollWidth);
console.log(listClientWidth);
console.log(minus);

const getClientX = (e) => {
  const isTouches = e.touches ? true : false;
  // 손가락 터치에 관한 함수
  return isTouches ? e.touches[0].clientX : e.clientX;
  // 만약 참이라면 //  만약 거짓이라면
};

const getTranslateX = () => {
  console.log(window.getComputedStyle(hashContent).transform);
  //getComputedStyle 3차원에 대한 함수
  return parseInt(
    window.getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  console.log("종착지점: ", nowX);
  setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    // 오른쪽 끝까지 갔을때
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
    // 아무리 오른쪽으로 가려고해도 무시하고 무시가고 0점 위치로 해라
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    // 얘가 오른쪽으로 갈 수 있는 최대 위치
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listScrollWidth;
  }


  window.removeEventListener("mousedown", onScrollStart);
  window.removeEventListener("touchstart", onScrollStart);
  window.removeEventListener("mousemove", onScrollMove);
  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mouseup", onScrollEnd);
  window.removeEventListener("touchend", onScrollEnd);

  setTimeout(() => {
    bindEvents();
    hashContent.style.transition = "";
  }, 100);
};

const onScrollStart = (e) => {
  // console.log("onScrollstart");
  startX = getClientX(e);
  // getClidentX 손가락이냐 마우스냐 판단하는 함수
  console.log("스타트지점: ", startX); // 찍은 좌표가 뜬다
  window.addEventListener("mousemove", onScrollMove);
  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mouseup", onScrollEnd);
  // 손가락을 떼는거
  window.addEventListener("touchend", onScrollEnd);
  // 마우스 떼는거
};

const bindEvents = () => {
  // 이벤트가 동일하게 같이 움직이게 해야해서 함수로하는거다
  hashContent.addEventListener("mousedown", onScrollStart);
  hashContent.addEventListener("touchstart", onScrollStart);
};

bindEvents();
