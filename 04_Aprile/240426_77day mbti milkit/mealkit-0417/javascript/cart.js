// 전체삭제 버튼을 클릭하면 => 안에 요소들이 없어지고 모든상품들이 다 삭제됐다는 이미지와 밑에 요소들만 나오게
const allClear = document.querySelector(".btn-all-clear");
// console.log(allClear);
const checkAll = document.querySelector(".cart-items-check-all");
const cartItems = document.querySelector(".cart-items");
// console.log(cartItems);
const summary = document.querySelector(".cart-items-summary");
const btnOrder = document.querySelector(".btn-order");
const img = document.querySelector(".cart-item-empty");

allClear.addEventListener("click", () => {
  // console.log("click");
  checkAll.style.display = "none";
  cartItems.style.display = "none";
  summary.style.display = "none";
  btnOrder.style.display = "none";
  img.style.display = "block";
});

//
//
//
// 개별아이템 클릭했을때에도 사라지게
// 개별아이템 2개 다 클릭했을때 => 전체 삭제 => 이미지가 나오게
const itemClear = document.querySelectorAll(".cart-content .btn-clear");
// console.log(itemClear); // 유사배열 형태로 나왔다 => 반복문밖에없다

// itemClear.forEach((item) => {
//   // callback함수로
//   item.addEventListener("click", () => {
//     // console.log("click");
// 		// 선택되어진 부모요소를 찾을거다
// 		// 지금 선택된 요소 => this
//   });
// });

itemClear.forEach((item) => {
  // callback함수로
  item.addEventListener("click", function () {
    // console.log("click");
    // 선택되어진 부모요소를 찾을거다
    // 지금 선택된 요소 => this
    this.parentElement.parentElement.style.display = "none";
    // parentElement + parentElement => 조부모
  });
});

//
//
//
// 개별 x버튼 두개를 누르면 두개가 다 삭제되고, 전체삭제와 동일한 페이지가 나오게 하려고한다
// => 이런게 알고리즘문제다

// 두가지 아이템이 있다는 카운팅
// itemClear => 유사배열
// 배열안에 아이템의 갯수가 몇개인지 알수 있는방법 => length

let clickedCount = 0;
// 증감연산자 쓸거라 const 쓰면안된다

itemClear.forEach((item) => {
  // itemClear 유사배열 => length쓸 수 있다
  item.addEventListener("click", function () {
    this.parentElement.parentElement.style.display = "none";
    clickedCount++;

    if (clickedCount === itemClear.length) {
      checkAll.style.display = "none";
      cartItems.style.display = "none";
      summary.style.display = "none";
      btnOrder.style.display = "none";
      img.style.display = "block";
    }
  });
});

//
//
//
// 전체선택input을 누르면 밑에 체크박스둘이 동시에 같이 눌리게
const cartCheckAll = document.querySelector(".cart-chk-all");
// console.log(cartCheckAll);

cartCheckAll.addEventListener("click", () => {
  // console.log("click");
  const cartCheck = document.querySelectorAll(".cart-chk");
  // 로컬스코프
  // .cart-chk 개별적인 체크박스
  cartCheck.forEach((checkbox) => {
    // checkbox 각각의 요소들
    checkbox.checked = cartCheckAll.checked;
  });
});

//
//
//
// 두개의 상품에 값을 넣고
const a = 11760;
const b = 18800;
const price01 = document.querySelector(".price01");
const price02 = document.querySelector(".price02");
// console.log(price01, price02);
const priceSum = document.querySelectorAll(".priceSum");
// console.log(priceSum);

price01.innerText = a.toLocaleString() + " 원";
//innerText => node 안에 text를 넣겠다
// 값에 원이라는 글자를넣겠다
// toLocaleString 해당 함수를 쓰는 국가에 맞는 표기를 쓸때 사용
// ex) 우린 "년 월 일"  /  미국 "일 월 년"
// => 감정일기장에서 날씨할때? 썼었다
price02.innerText = b.toLocaleString() + " 원";

const switchCommas = (a + b).toLocaleString();
// console.log(switchCommas);
// js나 파이썬에서는 형변화가 잘 일어난다

priceSum.forEach((item) => {
  item.innerText = switchCommas + "원";
});

// +여기서 x버튼 누르면 하나만 남게되면 총 상품가격은?
