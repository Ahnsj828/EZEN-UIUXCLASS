// const mainHeader = document.querySelector(".mainHeader");
// const progressBar = document.querySelector(".bar");
// const coverWrap = document.querySelector(".coverWrap");
// const coverTitle = coverWrap.querySelector(".coverTitle");
// const dimd = coverWrap.querySelector(".dimd");
// const contentWrap = document.querySelector(".contentWrap");
// // console.log(mainHeader, progressBar, coverWrap, coverTitle, dimd, contentWrap);

// const coverHeight = window.innerHeight;
// // innerHeight 웹브라우저 내에 높이 100vh
// // outerHeight 웹브라우저 전체 높이 / 탭도 포함한
// // console.log(coverHeight);

// coverWrap.style.height = coverHeight + "px";
// contentWrap.style.marginTop = coverHeight + "px";
// // marginTop은 margin-top라는거다

// const percent = (scrollNum, documentHeight) => {
//   return ((scrollNum / documentHeight) * 100).toFixed(0);
//   // return으로 안에 있는 값을 찾아와야한다
//   // toFixed 소수점 없애려고
// };

// const scrollEvent = () => {
//   // console.log("scroll");
//   const scrollNum = window.scrollY;
//   // y축으로부터 scroll을 얼마나했나
//   // console.log(scrollNum);
//   // const documentHeight = document.body.scrollHeight - coverHeight;
//   // // documentHeight 스크롤이 가능한 높이 = 스크롤이 가능한 전체 높이 - 처음 보고 있는 화면의 높이
//   const documentHeight = document.body.scrollHeight;
//   // scrollHeight에 margin값이 들어가있어서 뺐다

//   const per = percent(scrollNum, documentHeight) + "%";
//   // console.log(per);
// };

// window.addEventListener("scroll", scrollEvent);
//
//
//
//
//
// << 프로그래스 바 >>
// const mainHeader = document.querySelector(".mainHeader");
// const progressBar = document.querySelector(".bar");
// const coverWrap = document.querySelector(".coverWrap");
// const coverTitle = coverWrap.querySelector(".coverTitle");
// const dimd = coverWrap.querySelector(".dimd");
// const contentWrap = document.querySelector(".contentWrap");

// const coverHeight = window.innerHeight;

// coverWrap.style.height = coverHeight + "px";
// contentWrap.style.marginTop = coverHeight + "px";
// // marginTop은 margin-top라는거다

// const percent = (scrollNum, documentHeight) => {
//   return ((scrollNum / documentHeight) * 100).toFixed(0);
// };

// const scrollEvent = () => {
//   const scrollNum = window.scrollY;
//   const documentHeight = document.body.scrollHeight;

//   const per = percent(scrollNum, documentHeight) + "%";

//   progressBar.style.width = per;

//   if (scrollNum >= coverHeight) {
//     //scrollNum스크롤 내려가서 % 수치가 coverHeight처음에보고있는 웹브라우저 너비보다 크거나 같아지는 순간이 된다면
//     mainHeader.classList.add("fixed");
//   } else {
//     mainHeader.classList.remove("fixed");
//     // 영역을 벗어나면 사라져라 (스크롤 위로 올렸을때)
//   }
// };

// window.addEventListener("scroll", scrollEvent);
//
//
//
//
//
// << 패럴랙스? >>
const mainHeader = document.querySelector(".mainHeader");
const progressBar = document.querySelector(".bar");
const coverWrap = document.querySelector(".coverWrap");
const coverTitle = coverWrap.querySelector(".coverTitle");
const dimd = coverWrap.querySelector(".dimd");
const contentWrap = document.querySelector(".contentWrap");

const coverHeight = window.innerHeight;

coverWrap.style.height = coverHeight + "px";
contentWrap.style.marginTop = coverHeight + "px";
// marginTop은 margin-top라는거다

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

const scrollEvent = () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight;

  const per = percent(scrollNum, documentHeight) + "%";

  progressBar.style.width = per;

  if (scrollNum >= coverHeight) {
    mainHeader.classList.add("fixed");
  } else {
    mainHeader.classList.remove("fixed");
    // coverTitle.style.top = -scrollNum + "px";
    // // 현재요소에서 스크롤 내릴때 얘는 위로 올라가야한다 =>  음수 값
    // // top 줘야되서 css에서 .coverTitle한테 position: relative; 준거다
    coverTitle.style.top = -scrollNum / 5 + "px";
    // 조금 천천히 올라가게 하려고 / 10
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 15}px`;
    // 가로는 움직일 필요없어서 center / 수평의 정렬
    // ${-scrollNum}px 세로 / 수직의 정렬
    // 위로 올라가야되니까 음수로 되어야하니까 -scrollNum
    //  / 15  속도를 천천히 (큰수로 나눌수록 더 천천히)

    // dimd.style.backgroundColor = `rgba(0,0,0,${scrollNum})`;
    // // 이건 너무 갑자기 어두워 진다
    // dimd.style.backgroundColor = `rgba(0,0,0,${scrollNum / 1000})`;
    // 얘는 처음 시작할때 css에서 준 0.4로하다가 1로됐다가 오버레이가 시작하게된다
    dimd.style.backgroundColor = `rgba(0,0,0,${0.4 + scrollNum / 1000})`;
    // css 에서 준것처럼 처음 시작할때부터 0.4로시작하겠다
  }
};

window.addEventListener("scroll", scrollEvent);
