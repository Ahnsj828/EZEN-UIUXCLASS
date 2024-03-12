// http://dummyjson.com/quotes
// 30개 명언이 적혀있는곳

const quoteURL = "http://dummyjson.com/quotes";

fetch(quoteURL)
  .then((response) => response.json())
  // 객체로 변환했다
  .then((data) => {
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * 30);
    // 새로고침할때마다 30개의 명언중 하나로 바뀌게할거다 / 랜덤으로
    // 0부터 29수가 나와야한다
    result.querySelector(".quote").innerText = data.quotes[random].quote;
    // 인용문이 들어가야되는 공간
    result.querySelector(".author").innerText = data.quotes[random].author;
  });
