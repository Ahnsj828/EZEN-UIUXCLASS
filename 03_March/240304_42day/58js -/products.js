const products = {
  data: [
    {
      id: 1,
      name: "Cup",
      price: 9900,
      category: "life",
      img: "./img/cup.jpg",
    },
    {
      id: 2,
      // id: Date.now,
      // 현시점의 날짜에 대한 밀리초 / 값
      name: "Mouse",
      price: 15000,
      category: "if",
      img: "./img/mouse.jpg",
    },
    {
      id: 3,
      name: "Keyboard",
      price: 21000,
      category: "it",
      img: "./img/keyboard.jpg",
    },
    {
      id: 4,
      name: "Book",
      price: 19700,
      category: "book",
      img: "./img/book.jpg",
    },
    {
      id: 5,
      name: "Pen",
      price: 1500,
      category: "book",
      img: "./img/pen.jpg",
    },
  ],
};
// 모듈화 되어져 있는 데이터

export default products;
// 이 하나만 내보낼거야
// 출력을 하고 자하는건 export
// 출력을 받고자 하는건 import
