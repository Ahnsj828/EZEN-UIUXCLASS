// import products from "./products.js";

// const button = document.querySelector(".container > button");
// const newlisting = document.querySelector(".newlisting");
// const asceButton = document.querySelector(".ascending");
// const descButton = document.querySelector(".descending");

// const removeItems = () => {
//   const items = document.querySelectorAll("li");
//   items.forEach((item) => {
//     item.remove();
//   });
// };

// const sortNew = () => {
//   const myProducts = products.data.sort((a, b) => {
//     return a.id - b.id;
//   });

//   removeItems();

//   myProducts.forEach((product) => {
//     createItem(product);
//   });
// };

// const sortAsce = () => {
//   const myProducts = products.data.sort((a, b) => {
//     return a.price - b.price;
//   });

//   removeItems();

//   myProducts.forEach((product) => {
//     createItem(product);
//   });
// };

// const sortDesc = () => {
//   const myProducts = products.data.sort((a, b) => {
//     return b.price - a.price;
//   });

//   removeItems();

//   myProducts.forEach((product) => {
//     createItem(product);
//   });
// };

// const createItem = function (product) {
//   const ul = document.querySelector("ul");
//   const li = document.createElement("li");
//   const h3 = document.createElement("h3");
//   const span = document.createElement("span");
//   const div = document.createElement("div");
//   const img = document.createElement("img");

//   li.id = product.id;

//   const attr = document.createAttribute("src");
//   attr.value = product.img;
//   img.setAttributeNode(attr);

//   h3.className = "name";
//   h3.innerText = product.name;

//   const price = new Intl.NumberFormat("ko-kr", {
//     style: "currency",
//     currency: "KRW",
//   }).format(product.price);

//   span.className = "price";
//   span.innerText = price;

//   div.append(h3, span);
//   li.append(div, img);
//   ul.appendChild(li);
// };

// const importData = () => {
//   // importData 상품목록 불러오기를 클릭하면 실행되는 함수다
//   products.data.map((product) => {
//     if (!document.getElementById(product.id)) {
//       createItem(product);
//     }
//   });
// };

// button.addEventListener("click", importData);
// newlisting.addEventListener("click", sortNew);
// asceButton.addEventListener("click", sortAsce);
// descButton.addEventListener("click", sortDesc);

//
//
//
//

import products from "./products.js";

const button = document.querySelector(".container > button");
const newlisting = document.querySelector(".newlisting");
const asceButton = document.querySelector(".ascending");
const descButton = document.querySelector(".descending");
const select = document.querySelector("select");
// console.log(select);

let selected = [];

const selectCategory = (e) => {
  // console.log("change"); 다른 카테고리를 누르면 change가 뜬다
  console.log(e);
  const selectedIndex = e.target.options.selectedIndex;
  // console.log("selectedIndex");
  const value = e.target.options[selectedIndex].value;
  // console.log(value); // 각 value값을 찾아왔다

  const filtered = products.data.filter((product) => {
    // product = products에 data의 각각의 개체
    return product.category === value;
    // 각각의 개체에 category의 값이 일치하게
  });
  removeItems;
  filtered.forEach((product) => {
    createItem(product);
  });
};

// const removeItems = () => {
//   const items = document.querySelectorAll("li");
//   items.forEach((item) => {
//     item.remove();
//   });
// };

const sortNew = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.id - b.id;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
  // filtered.forEach((product) => {
  //   createItem(product);
  // });
};

const sortAsce = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.price - b.price;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const sortDesc = () => {
  const myProducts = products.data.sort((a, b) => {
    return b.price - a.price;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const updateTotal = (price) => {
  const totalPrice = document.querySelector(".total-price")
  const formatted = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW"
  }).format(price)
  totalPrice.innerText = formatted
}

const calculate = () => {
  const result = selected.reduce((acc, current) => {
    return acc +.price
  }, 0);
  // console.log(result)
  updateTotal.apply(result)
};
const addCart = (e) => {
  // console.log("change");
  // console.log(e);
  const id = e.target.parentElement.parentElement.id;
  // 부모의 부모의 아이디값을 찾아올거다
  const checked = e.target.checked;
  console.log(typeof id);

  if (checked) {
    products.data.forEach((product) => {
      if (product.id === parseInt(id)) {
        selected.push(product);
        // console.log(selected)
      }
    });
  } else {
    selected = selected.filter((product) => {
      return product.id !== parseInt(id);
    });
    // console.log(selected)
  }
  calculate();
};

const createItem = function (product) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const check = document.createElement("input");
  const img = document.createElement("img");

  li.id = product.id;

  const attr = document.createAttribute("src");
  attr.value = product.img;
  img.setAttributeNode(attr);

  h3.className = "name";
  h3.innerText = product.name;

  const price = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW",
  }).format(product.price);

  span.className = "price";
  span.innerText = price;

  check.setAttribute("type", "checkbox");
  check.addEventListener("change", addCart);
  // 왜 change 냐 =>  눌렀을때 true

  div.append(check, h3, span);
  li.append(div, img);
  ul.appendChild(li);
};

const importData = () => {
  // importData 상품목록 불러오기를 클릭하면 실행되는 함수다
  products.data.map((product) => {
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });
};

button.addEventListener("click", importData);
newlisting.addEventListener("click", sortNew);
asceButton.addEventListener("click", sortAsce);
descButton.addEventListener("click", sortDesc);
select.addEventListener("change", selectCategory);
// 안에 값이 변경이된다면, 이벤트가 작동한다면 함수가 작동되게 해라
