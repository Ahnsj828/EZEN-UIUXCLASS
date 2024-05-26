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
const searchClickOpen = document.querySelector(".common-search-btn i ");
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
    brandList.style.background = "rgba(255, 255, 255, 0)";
    productList.style.background = "rgba(255, 255, 255, 0)";
  }
};

if ((mainGnb.style.display = "none")) {
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
  commonMenu.classList.toggle("active");
  commonMenuList.classList.toggle("active");
  commonMenuList.style.display = "block";
  commonCateList.style.display = "none";
  commonCate.style.borderBottom = "2px solid #777";
  commonCate.style.color = "#777";
});
commonCate.addEventListener("click", () => {
  commonCate.classList.toggle("active");
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
    header.style.backgroundColor = " background: rgba(255, 255, 255, 0);";
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
    reTriggerBtn.addEventListener("click", () => {
      commonReToggleMenu.classList.add("active");
    });
  } else {
    mainTrigger.style.display = "block";
    reTriggerBtn.style.display = "none";
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

const pinkAddtocart = document.querySelector("#common-addtocart");
console.log(pinkAddtocart);

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

console.log(commonReMenuCateLiR);

// const commonMenuInnerReset = (i) => {
//   for (let i = 0; i < commonMenuBtn.length; i++) {
//     commonMenuBtn[i].removeEventListener("click", () => {
//       commonMenuInner[i].classList.remove("active");
//       commonBtnPlus[i].classList.remove("active");
//     });
//   }
// };
// commonBtnPlus.classList.remove("active")

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
  if (commonFamilyHidden.style.display === "none") {
    commonFamilyHidden.style.display = "flex";
    commonFootIcon.classList.add("active");
  } else {
    commonFamilyHidden.style.display = "none";
    commonFootIcon.classList.remove("active");
  }
});

commonMap.addEventListener("click", (e) => {
  e.preventDefault();
  if (commonMapHidden.style.display === "none") {
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

// commonHeaderMenuClickBran.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (commonSearchInput.style.display === "none") {
//     commonSearchInput.style.display = "block";
//   } else {
//     commonSearchInput.style.display = "none";
//   }
// });
// commonHeaderMenuClickPro.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (commonSearchInput.style.display === "none") {
//     commonSearchInput.style.display = "block";
//   } else {
//     commonSearchInput.style.display = "none";
//   }
// });
//
//
//
//
//
//
//main-slide

const mainSlides = document.querySelector(".main-slides");
const mainSlide = mainSlides.querySelectorAll("li");
const mainSlideCount = mainSlide.length;
// console.log(mainSlideCount);
const mainSlideWidth = 100;
const mainPercent = "%";

const mainPrevBtn = document.querySelector(".main-prev");
const mainNextBtn = document.querySelector(".main-next");
//console.log(mainPrevBtn, mainNextBtn);

//pager
const mainPagers = document.querySelector(".main-pager");
const mainPager = document.querySelectorAll(".main-pager li");

const mainText = document.querySelectorAll(".main-slides-text"); //

//최초 인덱스값
let mainCurrentIdx = 0;

//li style setting

const mainUpdateWidth = () => {
  const mainCurrentSlides = document.querySelectorAll(".main-slides li");
  const mainNewSlideCount = mainCurrentSlides.length;
  console.log(mainCurrentIdx, mainNewSlideCount);
  const mainNewWidth = `${mainSlideWidth * mainNewSlideCount}${mainPercent}`;
  mainSlides.style.width = mainNewWidth;
};

const mainMakeClone = () => {
  for (let i = 0; i < mainSlideCount; i++) {
    const mainCloneSlide = mainSlide[i].cloneNode(true);
    mainCloneSlide.classList.add("clone");
    mainSlides.appendChild(mainCloneSlide);
  }

  for (let i = mainSlideCount - 1; i >= 0; i--) {
    const mainCloneSlide = mainSlide[i].cloneNode(true);
    mainCloneSlide.classList.add("clone");
    mainSlides.prepend(mainCloneSlide);
  }
  mainUpdateWidth();
  setTimeout(() => {
    mainSlides.classList.add("animated");
  }, 100);
};

mainMakeClone();

//pager
const movePager = () => {
  mainPager.forEach((pager) => {
    if (pager.classList.contains("active")) {
      pager.classList.remove("active");
    }
  });
  mainPager[mainCurrentIdx].classList.add("active");
};

const mainMoveSlide = (num) => {
  if (num < 0) {
    mainSlides.classList.remove("animated");
    mainText.classList.remove("active");
    num = mainSlideCount - 1;

    setTimeout(() => {
      mainSlides.classList.add("animated");
      mainText.classList.add("active");
    }, 500);
  }
  //console.log(mainCurrentIdx, mainSlideCount);
  if (mainCurrentIdx === mainSlideCount) {
    setTimeout(() => {
      mainSlides.classList.remove("animated");
      mainText.classList.remove("active");
      mainSlides.style.left = "0px";
      mainCurrentIdx = 0;
    }, 500);
    setTimeout(() => {
      mainSlides.classList.add("animated");
      mainText.classList.add("active");
    }, 500);
  }

  mainSlides.style.left = `${-num * mainSlideWidth}${mainPercent}`;
  mainCurrentIdx = num;
  movePager();
};

mainNextBtn.addEventListener("click", () => {
  mainMoveSlide(mainCurrentIdx + 1);
  movePager(mainCurrentIdx + 1);
});

mainPrevBtn.addEventListener("click", () => {
  mainMoveSlide(mainCurrentIdx - 1);
  movePager(mainCurrentIdx - 1);
});

//auto slide
const mainAutoSlide = () => {
  mainTimer = setInterval(() => {
    mainMoveSlide(mainCurrentIdx + 1);
  }, 8000);
};

mainAutoSlide();

const mainStopSlide = () => {
  clearInterval(mainTimer);
};

mainSlides.addEventListener("mouseenter", () => {
  mainStopSlide();
});

mainSlides.addEventListener("mouseleave", () => {
  mainAutoSlide();
});

//
//
//
//new-slide
document.addEventListener("DOMContentLoaded", function () {
  const slideWrapper = document.querySelector(".main-new-contents");
  const slides = document.querySelectorAll(".main-new-content");
  const prevBtn = document.querySelector(".fa-angle-left");
  const nextBtn = document.querySelector(".fa-angle-right");
  let slideIndex = 0;

  // 다음 슬라이드 보기
  function nextSlide() {
    if (slideIndex < slides.length - 1) {
      slideIndex++;
    } else {
      slideIndex = 0;
    }
    updateSlidePosition();
  }

  // 이전 슬라이드 보기
  function prevSlide() {
    if (slideIndex > 0) {
      slideIndex--;
    } else {
      slideIndex = slides.length - 1;
    }
    updateSlidePosition();
  }

  // 슬라이드 위치 업데이트
  function updateSlidePosition() {
    const offset = -slideIndex * slides[0].offsetWidth;
    slideWrapper.style.transform = `translateX(${offset}px)`;
  }

  // 좌우 버튼 클릭 이벤트 리스너 추가
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
});

//sns-page 인스타그램 slide

const snsImg = [
  "insta-img1.jpg",
  "insta-img2.jpg",
  "insta-img3.jpg",
  "insta-img4.jpg",
  "insta-img5.jpg",
];

const instaArrows = document.querySelectorAll(".sns-arrow");
const snsSlide = document.querySelector(".main-sns-slide");
const instaImg = document.createElement("img");
const instaSrc = document.createAttribute("src");

const instaImgSrc = `./main-images/sns/${snsImg[0]}`;
instaSrc.value = instaImgSrc;
instaImg.setAttributeNode(instaSrc);
snsSlide.appendChild(instaImg);

let si = 0;

const snsChangeImg = (direction) => {
  if (direction === "next") {
    si++;
    if (si >= snsImg.length) {
      si = 0;
    }
  } else if (direction === "prev") {
    si--;
    if (si < 0) {
      si = snsImg.length - 1;
    }
  }
  instaSrc.value = `./main-images/sns/${snsImg[si]}`;
};

instaArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const direction = e.target.id === "left" ? "prev" : "next";
    //자동으로 돌려주기위해서 함수선언
    snsChangeImg(direction);
  });
});

const snsAutoSlide = () => {
  timer = setInterval(() => {
    snsChangeImg("next");
  }, 5000);
};

snsAutoSlide();

const snsStopSlide = () => {
  clearInterval(timer);
};

snsSlide.addEventListener("mouseenter", () => {
  snsStopSlide();
});

snsSlide.addEventListener("mouseleave", () => {
  snsAutoSlide();
});

//news-slide
const newsSlider = document.querySelector(".main-news-contents");
const newsSlides = document.querySelectorAll(".main-news-content");
const newsPrevBtn = document.querySelector("#news-lbtn");
const newsNextBtn = document.querySelector("#news-rbtn");

let newsCounter = 0;
const newsSlideWidth = newsSlides[0].clientWidth;

// Move slides to the left
const newsSlideLeft = () => {
  if (newsCounter > 0) newsCounter--;
  newsSlider.style.transform = `translateX(${
    (-newsSlideWidth - 10) * newsCounter
  }px)`;
};

// Move slides to the right
const newsSlideRight = () => {
  if (newsCounter < newsSlides.length - 1) newsCounter++;
  newsSlider.style.transform = `translateX(${
    (-newsSlideWidth - 10) * newsCounter
  }px)`;
};
// Event listeners for buttons
newsPrevBtn.addEventListener("click", newsSlideLeft);
newsNextBtn.addEventListener("click", newsSlideRight);
