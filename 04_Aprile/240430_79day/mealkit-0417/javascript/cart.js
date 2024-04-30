const allClear = document.querySelector(".btn-all-clear");
const checkAll = document.querySelector(".cart-items-check-all");
const cartItems = document.querySelector(".cart-items");
const summary = document.querySelector(".cart-items-summary");
const btnOrder = document.querySelector(".btn-order");
const img = document.querySelector(".cart-item-empty");

allClear.addEventListener("click", () => {
  checkAll.style.display = "none";
  cartItems.style.display = "none";
  summary.style.display = "none";
  btnOrder.style.display = "none";
  img.style.display = "block";
});

const itemClear = document.querySelectorAll(".cart-content .btn-clear");
let totalPaymentAmount = 0;
let clickedCount = 0;

itemClear.forEach((item) => {
  item.addEventListener("click", function () {
    const productPriceText =
      this.parentElement.parentElement.querySelector(".productPrice").innerText;
    const productPrice = parseFloat(productPriceText.replace(/,/g, ""));
    if (this.checked) {
      totalPaymentAmount += productPrice;
    } else {
      totalPaymentAmount -= productPrice;
    }
    updateTotalPaymentDisplay();

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

const cartCheckAll = document.querySelector(".cart-chk-all");
const cartCheck = document.querySelectorAll(".cart-chk");

cartCheckAll.addEventListener("click", () => {
  cartCheck.forEach((checkbox) => {
    checkbox.checked = cartCheckAll.checked;
  });
  totalPaymentAmount = 0;
  cartCheck.forEach((checkbox, idx) => {
    if (checkbox.checked) {
      const productPriceText = productPrices[idx].innerText;
      const productPrice = parseFloat(productPriceText.replace(/,/g, ""));
      totalPaymentAmount += productPrice;
    }
  });
  priceSum.forEach((item) => {
    item.innerText = totalPaymentAmount.toLocaleString();
  });
});

// ===================================================
// < price Auto >
const productNames = document.querySelectorAll(".productName");
const productPrice = document.querySelectorAll("productPrice");
const priceSum = document.querySelectorAll(".priceSum");
// console.log(productNames, productPrice, priceSum);

// json 파일 가져오기
fetch("../products.json")
  .then((response) => response.json())
  // .then((jsonData) => console.log(jsonData));
  .then((jsonData) => {
    json.data.forEach((item, idx) => {
      productNames[idx].innerText = item.name;
      productPrice[idx].innerText = item.price.toLocaleString() + "원";
      totalPaymentAmount += item.price;
    });
    update();
  });

cartCheck.forEach((checkbox) => {
  // 유사배열 => 반복문
  checkbox.addEventListener("click", function () {
    // this객체 사용하려고 function함
    // 체크박스 선택했을때
    const productPriceText =
      this.parentElement.parentElement.querySelector(".productPrice").innerText;
    // parentElement.parentElement 부모요소의 부모요소

    const productPrice = parseInt(productPriceText.replace(/,/g, ""));
    // replace 문자열 안에 특정한 값을 찾아와서 대체해라
    // 변환시키려고 정규표현식( /,/g )
    // global에서 찾아서 "" 빈문자열로 대체해라
    // parsefloat나 parseInt나 상관없다

    if (this.checked) {
      totalPaymentAmount += productPrice;
    } else {
      totalPaymentAmount -= productPrice;
    }
    update();
  });
});

function update() {
  priceSum.forEach((item) => {
    item.innerText = totalPaymentAmount.toLocaleString();
  });
}
