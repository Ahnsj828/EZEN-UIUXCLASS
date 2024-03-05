// 출력을 받고자 하는건 import
import products from "./products.js";
// => ESM 모듈 (확장자를 써줘야한다)

// import products from "./products";
// => CJS 모듈
// Failed to load resource: the server responded with a status of 404 (Not Found) 라고뜬다

const button = document.querySelector("button");
// console.log(button);

// button.addEventListener("click", () => {
//   // console.log("click");
// });

// const importData = () => {
//   products.data.map((product) => {
//     const ul = document.querySelector("ul");
//     // ul태그를 가져왔다 / li,h3을 ul에 넣으려고
//     const li = document.createElement("li");
//     // li를 만들고
//     const h3 = document.createElement("h3");
//     // h3를 만들고

//     h3.innerText = product.name;
//     ul.appendChild(h3);
//     ul.appendChild(li);
//   });
// };

// button.addEventListener("click", importData);
//
//
//
//
// 누르면 한번만 나오게 되어야하는데 계속 나온다
// 이미 데이터가 있으면 불러오지마라
// 데이터가 없는 경우에만 불러와라
// const importData = () => {
//   products.data.map((product) => {
//     const ul = document.querySelector("ul");
//     // ul태그를 가져왔다 / li,h3을 ul에 넣으려고
//     const li = document.createElement("li");
//     // li를 만들고
//     const h3 = document.createElement("h3");
//     // h3를 만들고
//     li.id = product.id;

//     if (!document.getElementById(product.id)) {
//       //id불러와야된다 => # /그런데 조건식 안에는 #가 안먹는다 =>
//       // 아이디 값을 찾지 못할 때에만 값을 넣어라

//       h3.innerText = product.name;
//       ul.appendChild(h3);
//       ul.appendChild(li);
//     }
//   });
// };

// button.addEventListener("click", importData);
//
//
//
//

// const createItem = (product) => {
//   const ul = document.querySelector("ul");
//   const li = document.createElement("li");
//   const h3 = document.createElement("h3");
//   const span = document.createElement("span");
//   const div = document.createElement("div")
//   const img = document.createElement("img");

//   li.id = product.id;

//   const attr = document.createAttribute("src");
//   attr.value = product.img;
//   img.setAttributeNode(attr);

//   h3.className = "name";
//   h3.innerText = product.name;

//   const price = new Intl.NumberFormat("ko-kr" {
//     style: "currency",
//     // 화폐단위의 스타일을 적용할거다
//     currency: "KRW",
//   }).format(product.price)
//   //Intl =  international language
//   // NumberFormat 넘버 포멧

//   h3.className = "price";
//   h3.innerText = product.price;

//   // ul.appendChild(h3);
//   // ul.appendChild(span);

//   // ul.append(h3, span, img);
  
//   div.append(h3, )
//   ul.append(h3, span, img);
//   ul.appendChild(li);
// };
// const importData = () => {
//   products.data.map((product) => {
//       createItem(product);
//     }
//   );
// };

// // importData();

// button.addEventListener("click", importData);
// 
// 
// 
// 
const button = document.querySelector(".container > button")
const asceButton = document.querySelector(".ascending")
const descButton = document.querySelector(".descending")

const removeItems = () => {
  const items = document.querySelectorAll("li")
  items.forEach((item) => {
    
  }
}

const sortAsce = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.price - b.price
    // 오름차순으로 정렬해줘
  })
  removeItems()

  myProeucts.forEach(products){}
}

const createItem = (product) => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const div = document.createElement("div")
  const img = document.createElement("img");

  li.id = product.id;

  const attr = document.createAttribute("src");
  attr.value = product.img;
  img.setAttributeNode(attr);

  h3.className = "name";
  h3.innerText = product.name;

  const price = new Intl.NumberFormat("ko-kr" {
    style: "currency",
    // 화폐단위의 스타일을 적용할거다
    currency: "KRW",
  }).format(product.price)
  //Intl =  international language
  // NumberFormat 넘버 포멧

  h3.className = "price";
  h3.innerText = product.price;

  // ul.appendChild(h3);
  // ul.appendChild(span);

  // ul.append(h3, span, img);
  
  div.append(h3, )
  ul.append(h3, span, img);
  ul.appendChild(li);
};
const importData = () => {
  products.data.map((product) => {
      createItem(product);
    }
  );
};

// importData();

button.addEventListener("click", importData);
asceButton.addEventListener("click", sortAsce)
descButton.addEventListener("click", sortDesc)