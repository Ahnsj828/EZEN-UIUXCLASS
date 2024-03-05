const products = {
  data: [
    {
      // id: 1,
      id: Date.now(),
      // id: new Date() 현시점의 날짜정보를 가져온다 /
      // id: Date.now() 밀리초까지 가져온다
      name: "Cup",
      price: 9900,
      category: "life",
      img: "./img/cup.jpg",
    },
    {
      // id: 2,
      id: Date.now() + 1,
      name: "Mouse",
      price: 15000,
      category: "it",
      img: "./img/mouse.jpg",
    },
    {
      // id: 3,
      id: Date.now() + 2,
      name: "Keyboard",
      price: 21000,
      category: "it",
      img: "./img/keyboard.jpg",
    },
    {
      // id: 4,
      id: Date.now() + 3,
      name: "Book",
      price: 19900,
      category: "book",
      img: "./img/book.jpg",
    },
    {
      // id: 5,
      id: Date.now() + 4,
      name: "Pen",
      price: 1500,
      category: "book",
      img: "./img/pen.jpg",
    },
    // 모든 id를 동일한 시점에 생성하게 되면 5개 모두 나오지 않고 하나만 나온다
    // => 이유 : script.js 에서 동일한 아이디는 또 나오지 않게 지정해서
    // 그래서 다 1씩 증가 더해줬다
  ],
};

export default products;
