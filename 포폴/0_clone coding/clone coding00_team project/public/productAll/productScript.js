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
    header.style.height = "50px";
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

const productTopList = document.querySelector(
  ".common-responsibility-product-top-menu"
);
const productTopListBtn = document.querySelector(".common-P");
const makeupTopListBtn = document.querySelector(".common-M");

productTopListBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    productTopList.style.display === "none" ||
    productTopList.style.display === ""
  ) {
    productTopList.style.display = "flex";
    header.style.height = "500px";
  } else {
    productTopList.style.display = "none";
    header.style.height = "50px";
  }
});
makeupTopListBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    productTopList.style.display === "none" ||
    productTopList.style.display === ""
  ) {
    productTopList.style.display = "flex";
    header.style.height = "500px";
  } else {
    productTopList.style.display = "none";
    header.style.height = "50px";
  }
});

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

//=====================product js==========================

const proSlide = document.querySelector(".pro-slider-img");

const proSlideImgs = document.querySelectorAll(".pro-slider-img li");

let proCurrentIndex = 0;
let proSlideCount = proSlideImgs.length;
let proSlideInterval = 6000;

setInterval(() => {
  let proNextIndex = (proCurrentIndex + 1) % proSlideCount;
  proSlideImgs[proCurrentIndex].style.opacity = "0";
  proSlideImgs[proNextIndex].style.opacity = "1";
  proCurrentIndex = proNextIndex;
}, proSlideInterval);

const newMenu = document.querySelector(".new-product-hidden-menu");
const newMenuBtn = document.querySelector(".new-product");
newMenuBtn.addEventListener("click", () => {
  newMenu.classList.toggle("active");
});

const arrayMenu = document.querySelector(".pro-list-select");
const arrayMenuBtn = document.querySelector(".pro-icon-shin");
const totalNum = document.querySelector(".pro-total");
arrayMenuBtn.addEventListener("click", () => {
  if (arrayMenu.style.display === "none" || arrayMenu.style.display === "") {
    arrayMenu.style.display = "flex";
  } else {
    arrayMenu.style.display = "none";
  }
});

const productTotal = products.data.concat(products.data01, products.data02);
totalNum.innerText = `총 ${productTotal.length}개`;

import products from "./product_list.js";

const newArr = document.querySelectorAll(".pro-list-select li")[0];
const highArr = document.querySelectorAll(".pro-list-select li")[1];
const lowArr = document.querySelectorAll(".pro-list-select li")[2];
const selectArr = document.querySelector(".pro-icon-shin span");
const createList = function (product) {
  const proBox = document.querySelector(".proMenuArray");
  const ul = document.querySelector(".pro-product-list");
  const proLi = document.createElement("li");
  const spanNew = document.createElement("span");
  const a = document.createElement("a");
  const innerName = document.createElement("a");
  const img = document.createElement("img");
  const imgHover = document.createElement("img");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const proPrice = document.createElement("span");

  proLi.id = product.id;

  const attr = document.createAttribute("src");
  img.setAttributeNode(attr);
  attr.value = product.img;
  imgHover.className = "product-imgHover";

  const imgScale = (e) => {
    attr.value = product.imgHover;
    e.target.style.transform = "scale(1.1)";
  };
  img.addEventListener("mouseenter", imgScale);

  img.addEventListener("mouseleave", (e) => {
    e.target.style.transform = "scale(1)";
    attr.value = product.img;
  });

  div.className = "product-detail";
  spanNew.className = "product-new";
  span.className = "product-desc";
  innerName.className = "product-innerName";

  const price = new Intl.NumberFormat("us", {
    currency: "KRW",
  }).format(product.price);

  proPrice.className = "product-price";
  spanNew.innerText = product.newItem;
  span.innerText = product.desc;
  innerName.innerText = product.name;
  proPrice.innerHTML = `<b>${price}</b>원`;

  a.append(img, imgHover);
  a.onclick = function () {
    a.target = "_self";
    a.href = "../product_inner/productD.html";
  };
  proLi.append(a, spanNew, div, proPrice);
  ul.appendChild(proLi);
  let colorG = document.createElement("div");
  colorG.className = "product-color-group";

  div.append(span, innerName, colorG, proPrice);

  let colorList = product.color;
  for (let i = 0; i < colorList.length; i++) {
    let selectColor = document.createElement("img");
    selectColor.classList = "product-select-color";
    const attrs = document.createAttribute("src");
    selectColor.setAttributeNode(attrs);
    attrs.value = colorList[i];
    colorG.append(selectColor);
  }

  const firstArray = document.querySelector(".fa-list");
  const proColor = document.querySelector(".product-select-color");

  firstArray.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click");
    proLi.classList.add("active");
    img.classList.add("active");
    div.classList.add("active");
    a.classList.add("active");
    proPrice.classList.add("active");
    proColor.classList.add("active");
  });
};
const removeLists = () => {
  const lists = document.querySelectorAll(".pro-product-list li");
  lists.forEach((list) => {
    list.remove();
  });
};
const sortNew = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.id - b.id;
  });
  removeLists();
  myProducts.forEach((product) => {
    createList(product);
  });
  selectArr.innerText = "신상품순";
};
const sortAsce = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.price - b.price;
  });
  removeLists();
  myProducts.forEach((product) => {
    createList(product);
  });
  selectArr.innerText = "낮은가격순";
};
const sortDesc = () => {
  const myProducts = products.data.sort((a, b) => {
    return b.price - a.price;
  });
  removeLists();
  myProducts.forEach((product) => {
    createList(product);
  });
  selectArr.innerText = "높은가격순";
};
newArr.addEventListener("click", sortNew);
highArr.addEventListener("click", sortDesc);
lowArr.addEventListener("click", sortAsce);

const createListTwo = function (product) {
  const ul = document.querySelector(".pro-product-list-two");
  const proLi = document.createElement("li");
  const spanNew = document.createElement("span");
  const a = document.createElement("a");
  const innerName = document.createElement("a");
  const img = document.createElement("img");
  const imgHover = document.createElement("img");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const proPrice = document.createElement("span");

  proLi.id = product.id;

  const attr = document.createAttribute("src");
  img.setAttributeNode(attr);
  attr.value = product.img;
  imgHover.className = "product-imgHover";

  const imgScale = (e) => {
    attr.value = product.imgHover;
    e.target.style.transform = "scale(1.1)";
  };
  img.addEventListener("mouseenter", imgScale);

  img.addEventListener("mouseleave", (e) => {
    e.target.style.transform = "scale(1)";
    attr.value = product.img;
  });

  div.className = "product-detail";
  spanNew.className = "product-new";
  span.className = "product-desc";
  innerName.className = "product-innerName";

  const price = new Intl.NumberFormat("us", {
    currency: "KRW",
  }).format(product.price);

  proPrice.className = "product-price";
  spanNew.innerText = product.newItem;
  span.innerText = product.desc;
  innerName.innerText = product.name;
  proPrice.innerHTML = `<b>${price}</b>원`;

  a.append(img, imgHover);
  a.onclick = function () {
    a.target = "_self";
    a.href = "../product_inner/productD.html";
  };
  proLi.append(a, spanNew, div, proPrice);
  ul.appendChild(proLi);
  let colorG = document.createElement("div");
  colorG.className = "product-color-group";

  div.append(span, innerName, colorG, proPrice);
  let colorList = product.color;
  for (let i = 0; i < colorList.length; i++) {
    let selectColor = document.createElement("img");
    selectColor.classList = "product-select-color";
    const attrs = document.createAttribute("src");
    selectColor.setAttributeNode(attrs);
    attrs.value = colorList[i];
    colorG.append(selectColor);
  }

  const firstArray = document.querySelector(".fa-list");
  const proColors = document.querySelectorAll(".product-select-color");

  firstArray.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click");
    proLi.classList.add("active");
    img.classList.add("active");
    div.classList.add("active");
    a.classList.add("active");
    proPrice.classList.add("active");
    proColors.forEach((color) => {
      color.classList.add("active");
    });
  });
};
const removeLists02 = () => {
  const lists = document.querySelectorAll(".pro-product-list-two li");
  lists.forEach((list) => {
    list.remove();
  });
};
const sortNew02 = () => {
  const myProducts = products.data01.sort((a, b) => {
    return a.id - b.id;
  });
  removeLists02();
  myProducts.forEach((product) => {
    createListTwo(product);
  });
};
const sortAsce02 = () => {
  const myProducts = products.data01.sort((a, b) => {
    return a.price - b.price;
  });
  removeLists02();
  myProducts.forEach((product) => {
    createListTwo(product);
  });
};
const sortDesc02 = () => {
  const myProducts = products.data01.sort((a, b) => {
    return b.price - a.price;
  });
  removeLists02();
  myProducts.forEach((product) => {
    createListTwo(product);
  });
};
newArr.addEventListener("click", sortNew02);
highArr.addEventListener("click", sortDesc02);
lowArr.addEventListener("click", sortAsce02);
const createListThree = function (product) {
  const ul = document.querySelector(".pro-product-list-three");
  const proLi = document.createElement("li");
  const spanNew = document.createElement("span");
  const a = document.createElement("a");
  const innerName = document.createElement("a");
  const img = document.createElement("img");
  const imgHover = document.createElement("img");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const proPrice = document.createElement("span");

  proLi.id = product.id;

  const attr = document.createAttribute("src");
  img.setAttributeNode(attr);
  attr.value = product.img;
  imgHover.className = "product-imgHover";

  const imgScale = (e) => {
    attr.value = product.imgHover;
    e.target.style.transform = "scale(1.1)";
  };
  img.addEventListener("mouseenter", imgScale);

  img.addEventListener("mouseleave", (e) => {
    e.target.style.transform = "scale(1)";
    attr.value = product.img;
  });

  div.className = "product-detail";
  spanNew.className = "product-new";
  span.className = "product-desc";
  innerName.className = "product-innerName";

  const price = new Intl.NumberFormat("us", {
    currency: "KRW",
  }).format(product.price);

  proPrice.className = "product-price";
  spanNew.innerText = product.newItem;
  span.innerText = product.desc;
  innerName.innerText = product.name;
  proPrice.innerHTML = `<b>${price}</b>원`;

  a.append(img, imgHover);
  a.onclick = function () {
    a.target = "_self";
    a.href = "../product_inner/productD.html";
  };
  proLi.append(a, spanNew, div, proPrice);
  ul.appendChild(proLi);
  let colorG = document.createElement("div");
  colorG.className = "product-color-group";

  div.append(span, innerName, colorG, proPrice);
  let colorList = product.color;
  for (let i = 0; i < colorList.length; i++) {
    let selectColor = document.createElement("img");
    selectColor.classList = "product-select-color";
    const attrs = document.createAttribute("src");
    selectColor.setAttributeNode(attrs);
    attrs.value = colorList[i];
    colorG.append(selectColor);
  }

  const firstArray = document.querySelector(".fa-list");

  firstArray.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click");
    proLi.classList.add("active");
    img.classList.add("active");
    div.classList.add("active");
    a.classList.add("active");
    proPrice.classList.add("active");
  });
};
const removeLists03 = () => {
  const lists = document.querySelectorAll(".pro-product-list-three li");
  lists.forEach((list) => {
    list.remove();
  });
};
const sortNew03 = () => {
  const myProducts = products.data02.sort((a, b) => {
    return a.id - b.id;
  });
  removeLists03();
  myProducts.forEach((product) => {
    createListThree(product);
  });
};
const sortAsce03 = () => {
  const myProducts = products.data02.sort((a, b) => {
    return a.price - b.price;
  });
  removeLists03();
  myProducts.forEach((product) => {
    createListThree(product);
  });
};
const sortDesc03 = () => {
  const myProducts = products.data02.sort((a, b) => {
    return b.price - a.price;
  });
  removeLists03();
  myProducts.forEach((product) => {
    createListThree(product);
  });
};
newArr.addEventListener("click", sortNew03);
highArr.addEventListener("click", sortDesc03);
lowArr.addEventListener("click", sortAsce03);

const importData0 = () => {
  products.data.map((product) => {
    if (product.num <= 12) {
      createList(product);
    }
  });
};

const importData1 = () => {
  products.data01.map((product) => {
    if (product.num > 12 && product.num <= 24) {
      createListTwo(product);
    }
  });
};

const importData2 = () => {
  products.data02.map((product) => {
    if (product.num > 24 && product.num <= 36) {
      createListThree(product);
    }
  });
};

importData0();
importData1();
importData2();

const liBox = document.querySelector(".proMenuArray ");
const proOne = document.querySelector(".pro-product-list");
const proTwo = document.querySelector(".pro-product-list-two");
const proThree = document.querySelector(".pro-product-list-three");
const nextPageBtns = document.querySelectorAll(".inner-num li");

nextPageBtns[0].onclick = () => {
  proOne.classList.add("active");
  proOne.style.display = "flex";
  proTwo.style.display = "none";
  proTwo.classList.remove("active");
  proThree.classList.remove("active");
};

nextPageBtns[1].onclick = () => {
  proTwo.classList.add("active");
  proOne.style.display = "none";
  proTwo.style.display = "flex";
  proOne.classList.remove("active");
  proThree.classList.remove("active");
};
nextPageBtns[2].onclick = () => {
  proThree.classList.add("active");
  proTwo.style.display = "none";
  proOne.style.display = "none";
  proOne.classList.remove("active");
  proTwo.classList.remove("active");
};

const reset = () => {
  nextPageBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const pageChange = (e) => {
  const target = e.target.dataset.index;
  reset();
  for (let i = 0; i < nextPageBtns.length; i++) {
    if (target == i) {
      nextPageBtns[i].classList.add("active");
    }
  }
};

nextPageBtns.forEach((nextPageBtn) => {
  nextPageBtn.addEventListener("click", pageChange);
});
