// const orderButton = document.querySelector("#order");
// // 주문하기 버튼이 일종의 trigger열할을할거다
// const title = document.querySelector("#container h2");
// const orderInfo = document.querySelector("#orderInfo");

// orderButton.addEventListener(
//   "click",
//   () => {
//     const newP = document.createElement("p");
//     const textNode = document.createTextNode(title.innerText);
//     newP.appendChild(textNode);

//     newP.style.fontSize = "1.2rem";

//     newP.style.color = "crimson";

//     orderInfo.appendChild(newP);
//   },
//   { once: true }
//   // 동일한거에 대해 1회 한번만
// );
//
//
//
// =====================================================

const newImg = document.createElement("img");
// 뭔가를 만들때는 create
// img태그를만들었다
const srcNode = document.createAttribute("src");
// createAttribute 속성을 만든다
// ATTRIBUTE 속성
// img의 속석src를 만들었다
srcNode.value =
  "https://img.khan.co.kr/news/2023/01/02/news-p.v1.20230102.1f95577a65fc42a79ae7f990b39e7c21_P1.png";
newImg.setAttributeNode(srcNode);
// newImg뒤에 속성값 혹은 매서드 를 만들 수 있다

document.body.appendChild(newImg);

console.log(newImg);
