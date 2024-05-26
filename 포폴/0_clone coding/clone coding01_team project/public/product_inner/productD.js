//common

const mainProduct = document.querySelector(".common-product-hover");
const productList = document.querySelector(".common-product-hover-menu");
const header = document.querySelector("header");
const mainbrand = document.querySelector(".common-brand-hover");
const brandList = document.querySelector(".common-brand-hover-menu");
const mainMake = document.querySelector(".common-makeup-hover");

//MainPage Product Click Event
mainProduct.addEventListener("mouseenter", () => {
  productList.classList.add("active");
  header.style.height = "464px";
  brandList.classList.remove("common-active-brand");
  header.style.background = "rgba(255, 255, 255, 0);";
});
mainProduct.addEventListener("mouseleave", () => {
  productList.classList.remove("active");
  header.style.height = "100px";
});

//MainPage Brand Click Event
console.log(mainbrand);
mainbrand.addEventListener("mouseenter", () => {
  brandList.classList.add("common-active-brand");
  header.style.height = "155px";
});
brandList.addEventListener("mouseleave", () => {
  brandList.classList.remove("common-active-brand");
  header.style.height = "100px";
});
//MainPage Makeup Click Event
mainMake.addEventListener("mouseenter", () => {
  brandList.classList.remove("common-active-brand");
  header.style.height = "100px";
});
mainMake.addEventListener("mouseleave", () => {
  header.style.height = "100px";
});

//MainPage Search Click Event
const searchClickClose = document.querySelector(".common-search-click-icon i");
const searchContent = document.querySelector(".common-search-click");
const searchClickOpen = document.querySelector(".common-search-btn img ");
console.log(searchContent);
searchClickOpen.onclick = () => {
  searchContent.classList.add("common-active-searchContent");
};
searchClickClose.onclick = () => {
  searchContent.classList.remove("common-active-searchContent");
};

//MainPage tigger Click Event
const mainTrigger = document.querySelector(".common-trigger-btn");
const reTriggerBtn = document.querySelector(".common-repon-toggle-btn ");
const mainGnb = document.querySelector(".common-toggle-btn-click");

//MainPage Store Brand
const brandStore = document.querySelector(".common-brand-store-select");
const brandStoreMenu = document.querySelector(".common-brand-store-select p");
const brandStoreIcon = document.querySelector(".common-brand-store-select i");
const brandStoreList = document.querySelector(".common-store-list");

brandStore.addEventListener("click", () => {
  brandStore.classList.toggle("active");
  brandStoreList.classList.toggle("active");
  brandStoreMenu.classList.toggle("active");
  brandStoreIcon.classList.toggle("active");
});

//gototop

const gototopBtn = document.querySelector("#common-gototop");

const scrollHead = () => {
  if (window.scrollY > 0) {
    gototopBtn.classList.add("active");
    header.classList.add("active");
    brandList.style.background = "none";
    productList.style.background = "none";
  } else {
    gototopBtn.classList.remove("active");
    header.classList.remove("active");
    brandList.style.background = "rgba(255, 255, 255, 0.7)";
    productList.style.background = "rgba(255, 255, 255, 0.7)";
  }
};

if (mainGnb.style.display === "none" || mainGnb.style.display === "") {
  window.addEventListener("scroll", scrollHead);
} else {
  window.removeEventListener("scroll", scrollHead);
}

gototopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: header, behavior: "smooth" });
});

//responsibility
const commonMenu = document.querySelector(
  ".common-responsibility-toggle-menu-inner-title-menu"
);
const commonMenuList = document.querySelector(
  ".common-responsibility-toggle-menu-inner-title-list-menu"
);
const commonCate = document.querySelector(
  ".common-responsibility-toggle-menu-inner-title-cate"
);
const commonCateList = document.querySelector(
  ".common-responsibility-toggle-menu-inner-title-list-cate "
);
const commonReToggleMenu = document.querySelector(
  ".common-responsibility-toggle-menu"
);
const commonReXbtn = document.querySelector(
  ".common-responsibility-search-box-icon-x"
);

//반응형 menu, category
commonMenu.addEventListener("click", () => {
  commonMenu.classList.add("active");
  commonMenuList.classList.add("active");
  commonMenuList.style.display = "block";
  commonCateList.style.display = "none";
  commonCate.style.borderBottom = "2px solid #777";
  commonCate.style.color = "#777";
});
commonCate.addEventListener("click", () => {
  commonCate.classList.add("active");
  commonMenu.classList.remove("active");
  commonMenuList.style.display = "none";
  commonCateList.style.display = "block";
  commonCate.style.borderBottom = "2px solid #111";
  commonCate.style.color = "#111";
});
//main 삼단바 버튼 + 반응형
const desktopToggle = () => {
  mainTrigger.classList.toggle("active");
  if (mainGnb.style.display === "none" || mainGnb.style.display === "") {
    mainGnb.style.display = "block";
    header.style.backgroundColor = "transparent";
    window.removeEventListener("scroll", scrollHead);
  } else {
    mainGnb.style.display = "none";
    window.addEventListener("scroll", scrollHead);
  }
};

mainTrigger.addEventListener("click", desktopToggle);

let Width = window.innerWidth;

window.addEventListener("resize", function () {
  re();
});

const re = () => {
  if (innerWidth <= 1024) {
    mainTrigger.style.display = "none";
    reTriggerBtn.style.display = "block";
    mainGnb.style.display = "none";
    header.style.height = "100px";
    reTriggerBtn.addEventListener("click", () => {
      commonReToggleMenu.classList.add("active");
    });
  } else {
    mainTrigger.style.display = "block";
    reTriggerBtn.style.display = "none";
    header.style.height = "100px";
  }
};
re();

commonReXbtn.onclick = () => {
  commonReToggleMenu.classList.remove("active");
};

//responsibility-Store Brand
const RebrandStore = document.querySelector(
  ".common-responsibility-brand-store-select"
);
const RebrandStoreMenu = document.querySelector(
  ".common-responsibility-brand-store-select p"
);
const RebrandStoreIcon = document.querySelector(
  ".common-responsibility-brand-store-select i"
);
const RebrandStoreList = document.querySelector(
  ".common-responsibility-store-list"
);
console.log(RebrandStoreList);

RebrandStore.addEventListener("click", () => {
  RebrandStore.classList.toggle("active");
  RebrandStoreList.classList.toggle("active");
  RebrandStoreMenu.classList.toggle("active");
  RebrandStoreIcon.classList.toggle("active");
});

const addtocart = document.querySelector("#common-addtocart");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    addtocart.style.bottom = "80px";
  } else {
    addtocart.style.bottom = "10px";
  }
});
//반응형 삼단바 리스트 마우스 오버
const CommonReTitle = document.querySelectorAll(".common-responsibility-menu");
const CommonReList = document.querySelectorAll(
  ".common-responsibility-menu-list "
);
const CommonMinusBtn = document.querySelectorAll(
  ".common-responsibility-menu-plus span:nth-child(2)"
);

// addtocart 클릭이벤트

const pinkAddtocart = document.querySelector("#common-addtocart");
const addToCartMenu = document.querySelector(".common-addtocart-click");

const reAddtocart = () => {
  if (window.innerWidth <= 768) {
    pinkAddtocart.classList.add("active");
  } else {
    pinkAddtocart.classList.remove("active");
  }
};

window.addEventListener("resize", function () {
  reAddtocart();
});

reAddtocart();

pinkAddtocart.addEventListener("click", () => {
  if (
    addToCartMenu.style.display === "none" ||
    addToCartMenu.style.display === ""
  ) {
    addToCartMenu.style.display = "flex";
    pinkAddtocart.style.transform = "rotate(45deg)";
  } else {
    addToCartMenu.style.display = "none";
    pinkAddtocart.style.transform = "rotate(0)";
  }
});

const commonCateBtn = document.querySelector(
  ".common-responsibility-toggle-menu-inner-title-cate"
);
const commonCateMenu = document.querySelector(
  ".common-responsibility-toggle-menu-inner-title-list-cate"
);

commonCateBtn.addEventListener("click", () => {
  commonCateMenu.classList.toggle("active");
});

const commonMenuBtn = document.querySelectorAll(".common-responsibility-menu");
const commonMenuBtnA = document.querySelectorAll(
  ".common-responsibility-menu a"
);
const commonMenuInner = document.querySelectorAll(
  ".common-responsibility-menu-list"
);
const commonBtnPlus = document.querySelectorAll(
  ".common-responsibility-menu-plus span:nth-child(2)"
);
const commonReMenuCate = document.querySelectorAll(
  ".common-responsibility-menu-cate-left"
);
const commonReMenuCateR = document.querySelectorAll(
  ".common-responsibility-menu-cate"
);
const commonReMenuCateLi = document.querySelectorAll(
  ".common-responsibility-menu-list-cate"
);
const commonReMenuCateLiR = document.querySelectorAll(
  ".common-responsibility-menu-list-cate-lip"
);
const commonBtnPlusCate = document.querySelectorAll(
  ".common-responsibility-menu-plus-cate span:nth-child(2)"
);

const commonMenuBtnIdx = (i) => {
  // commonMenuInnerReset(i);
  for (let i = 0; i < commonMenuBtn.length; i++) {
    commonMenuBtn[i].addEventListener("click", () => {
      commonMenuInner[i].classList.toggle("active");
      commonBtnPlus[i].classList.toggle("active");
    });
  }
};
commonMenuBtnIdx();

const commonMenuCateBtnIdx = (i) => {
  for (let i = 0; i < commonReMenuCate.length; i++) {
    commonReMenuCate[i].addEventListener("click", () => {
      console.log("click");
      commonReMenuCateLi[i].classList.toggle("active");
      commonBtnPlusCate[i].classList.toggle("active");
    });
  }
};
commonMenuCateBtnIdx();

// ==================footter=================
const commonFamily = document.querySelector(".common-footer-family");
const commonFamilyHidden = document.querySelector(
  ".common-footer-family-hidden"
);
const commonFootIcon = document.querySelector(".common-footer-family > a i");
const commonMap = document.querySelector(".common-footer-Map");
const commonMapHidden = document.querySelector(".common-footer-Map-hidden");
const commonFootIconR = document.querySelector(".common-footer-Map > a i");

commonFamily.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    commonFamilyHidden.style.display === "none" ||
    commonFamilyHidden.style.display === ""
  ) {
    commonFamilyHidden.style.display = "flex";
    commonFootIcon.classList.add("active");
  } else {
    commonFamilyHidden.style.display = "none";
    commonFootIcon.classList.remove("active");
  }
});

commonMap.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    commonMapHidden.style.display === "none" ||
    commonMapHidden.style.display === ""
  ) {
    commonMapHidden.style.display = "flex";
    commonFootIconR.classList.add("active");
  } else {
    commonMapHidden.style.display = "none";
    commonFootIconR.classList.remove("active");
  }
});
//상단 검색메뉴 페이지별로 연동하기
const commonSearchInput = document.querySelector(".common-search-box-header");
const commonHeaderMenuClickPro = document.querySelector(
  ".common-product-hover-menu "
);
const commonHeaderMenuClickBran = document.querySelector(
  ".common-brand-hover-menu "
);
const commonHeaderMenuClick = document.querySelectorAll(
  ".common-header-menu > a"
);

// Dproduct

const DbackBtn = document.querySelector(".proD-backBtn");
const DnextBtn = document.querySelector(".proD-nextBtn");
const DclickImg = document.querySelector(".clickImg");
const DslideImg = document.querySelector(".proDSlideBox");

const Dbar = document.querySelector(".proD-bar");
const smallImgs = document.querySelectorAll(".proD-small-image img");
const DsmallClickImgs = document.querySelectorAll(".proD-small-image img");
const DselectColors = document.querySelectorAll(".proD-text-color");

const DproItems = document.querySelectorAll(".proD-item");
const proDClear = document.querySelector(".proD-clear");
console.log(proDClear);

const per = 10;
let i = 0;
DnextBtn.addEventListener("click", () => {
  if (i < 9) {
    i++;
    DslideImg.style.transform = `translateX(-${per * i}%)`;
    Dbar.style.transform = `translateX(${per * i * 10}%)`;
    smallImgs.forEach((img) => {
      img.classList.remove("active");
      smallImgs[i].classList.add("active");
    });
  }
});

DbackBtn.addEventListener("click", () => {
  if (i > 0) {
    i--;
    DslideImg.style.transform = `translateX(-${per * i}%)`;
    Dbar.style.transform = `translateX(${per * i * 10}%)`;
    smallImgs.forEach((img) => {
      img.classList.remove("active");
      smallImgs[i].classList.add("active");
    });
  } else {
    img.classList.add("active");
  }
});

DsmallClickImgs.forEach((img, i) => {
  img.addEventListener("click", () => {
    if (i < 10) {
      DslideImg.style.transform = `translateX(-${per * i}%)`;
      Dbar.style.transform = `translateX(${per * i * 10}%)`;
      smallImgs.forEach((img) => {
        img.classList.remove("active");
        smallImgs[i].classList.add("active");
      });
    }
  });
});

DselectColors[0].addEventListener("click", () => {
  proDClear.classList.remove("active");
  DproItems[1].classList.remove("active");
  DclickImg.src = "../content_img/wh_Blusher_melon_01.png";
  DselectColors[0].style.border = "1px solid black";
  DselectColors[1].style.border = "none";
  proDClear.classList.add("active");
  DproItems[0].classList.add("active");
});
DselectColors[1].addEventListener("click", () => {
  proDClear.classList.remove("active");
  DproItems[0].classList.remove("active");
  DclickImg.src = "../content_img/wh_Blusher_melon_02.png";
  DselectColors[1].style.border = "1px solid black";
  DselectColors[0].style.border = "none";
  proDClear.classList.add("active");
  DproItems[1].classList.add("active");
});

proDClear.addEventListener("click", () => {
  proDClear.classList.remove("active");
  DselectColors[0].style.border = "none";
  DselectColors[1].style.border = "none";
  DclickImg.src = "../content_img/wh_Blusher_P_01.jpg";
});

//하단 random IMG

import products from "./productD_list.js";

const createList = function (product) {
  const proRanImg = document.querySelector(".proD-youlike-wrap");
  const proRanLi = document.createElement("li");
  const ranImg = document.createElement("img");
  const imgHover = document.createElement("img");
  const ranImgA = document.createElement("a");
  const ranImgDiv = document.createElement("div");
  const ranImgPrice = document.createElement("div");

  proRanLi.id = product.id;

  const attr = document.createAttribute("src");
  ranImg.setAttributeNode(attr);
  attr.value = product.img;
  imgHover.className = "product-imgHover";
  const imgScale = (e) => {
    attr.value = product.imgHover;
    e.target.style.transform = "scale(1.1)";
  };
  ranImg.addEventListener("mouseenter", imgScale);

  ranImg.addEventListener("mouseleave", (e) => {
    e.target.style.transform = "scale(1)";
    attr.value = product.img;
  });

  const price = new Intl.NumberFormat("us", {
    currency: "KRW",
  }).format(product.price);
  ranImgDiv.innerText = product.name;
  ranImgPrice.innerText = `${price}원`;
  ranImgPrice.className = "random-imgBox-price";
  ranImgDiv.className = "random-imgBox-title ";
  ranImgA.className = "random-imgBox";
  ranImg.className = "random-imgBox-img";
  proRanLi.className = "proD-youlike-imgBox";
  ranImgA.append(ranImg, imgHover);
  proRanLi.append(ranImgA, ranImgDiv, ranImgPrice);
  proRanImg.appendChild(proRanLi);
};
const importData = () => {
  products.data.map((product) => {
    if (
      (product.num != 1 && product.category === "face") ||
      product.category === "eye"
    ) {
      createList(product);
    }
  });
};
importData();
