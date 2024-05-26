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

const reset = () => {
  nextPageBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
};

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

//
//
//
// < foundation_page_(max-width: 1024px)_main_slide >
let currentIndex = 0;

function switchSlide() {
  const slides = document.querySelectorAll(".slide");
  currentIndex = (currentIndex + 1) % slides.length;

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  const slideBar = document.querySelector(".slide-bar");
  if (currentIndex === 0) {
    slideBar.style.transform = "translateX(0)";
  } else {
    slideBar.style.transform = "translateX(100%)";
  }
}

setInterval(switchSlide, 3000);
//
//
//
//
//  << foundation-nav-tabs - 마우스 스크롤시 헤더 밑에 fix >>
document.addEventListener("DOMContentLoaded", function () {
  const navTabs = document.querySelector(".foundation-nav-tabs");
  const navTabsOffsetTop = navTabs.offsetTop;
  const header = document.querySelector(".common-header");

  function checkScroll() {
    if (window.scrollY >= navTabsOffsetTop - header.offsetHeight) {
      navTabs.classList.add("fixed-nav-tabs");
    } else {
      navTabs.classList.remove("fixed-nav-tabs");
    }

    const isFixed = navTabs.classList.contains("fixed-nav-tabs");
    if (isFixed) {
      navTabs.classList.add("nav-tabs-fixed-style");
    } else {
      navTabs.classList.remove("nav-tabs-fixed-style");
    }
  }

  window.addEventListener("scroll", checkScroll);
});
//
//
//
//
//  << foundation-banner-list - 배너에 글자들 >>
const sloganList = document.getElementById("foundation-banner-list");
const slogans = sloganList.getElementsByTagName("li");
let bannerList = 0;

function showNextSlogan() {
  slogans[bannerList].style.display = "none";
  bannerList = (bannerList + 1) % slogans.length;
  slogans[bannerList].style.display = "list-item";
}

setInterval(showNextSlogan, 200);
//
//
//
//
//  << foundation-banner-768px-list - 배너에 글자들(768px) >>
const sloganList768 = document.getElementById("foundation-banner-768px-list");
const slogans768 = sloganList768.getElementsByTagName("li");
let bannerList768 = 0;

function showNextSlogan768() {
  slogans768[bannerList768].style.display = "none";
  bannerList768 = (bannerList768 + 1) % slogans768.length;
  slogans768[bannerList768].style.display = "list-item";
}

setInterval(showNextSlogan768, 200);
//
//
//
//
//  < foundation-course-A - 이미지 슬라이드 slide >
let fcCurrentIndex = 0;

function switchFcSlide() {
  const FcSlides = document.querySelectorAll(".slide-course");
  fcCurrentIndex = (fcCurrentIndex + 1) % FcSlides.length;

  FcSlides.forEach((slide) => {
    slide.style.transform = `translateX(-${fcCurrentIndex * 100}%)`;
  });
}
setInterval(switchFcSlide, 3000);
//
//
//
//
//  << foundation-course-A-steps - 스텝 슬라이드 slide >>
const sloganStepA = document.getElementById("Aslide-steps");
const slogansA = sloganStepA.getElementsByTagName("div");
let bannerListA = 0;

function showNextSloganA() {
  slogansA[bannerListA].style.display = "none";
  bannerListA = (bannerListA + 1) % slogansA.length;
  slogansA[bannerListA].style.display = "list-item";
}

setInterval(showNextSloganA, 3000);
//
//
//
//
//  < foundation-course-B - 슬라이드 slide >
let fcCurrentIndexB = 0;

function switchFcSlideB() {
  const FcSlidesB = document.querySelectorAll(".slide-courseB");
  fcCurrentIndexB = (fcCurrentIndexB + 1) % FcSlidesB.length;

  FcSlidesB.forEach((slide) => {
    slide.style.transform = `translateX(-${fcCurrentIndexB * 100}%)`;
  });
}
setInterval(switchFcSlideB, 3000);
//
//
//
//
//  << foundation-course-B-steps - 스텝 슬라이드 slide >>
const sloganStepB = document.getElementById("Bslide-steps");
const slogansB = sloganStepB.getElementsByTagName("div");
let bannerListB = 0;

function showNextSloganB() {
  slogansB[bannerListB].style.display = "none";
  bannerListB = (bannerListB + 1) % slogansB.length;
  slogansB[bannerListB].style.display = "list-item";
}

setInterval(showNextSloganB, 3000);