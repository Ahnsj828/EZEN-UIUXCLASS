const buttons = document.querySelectorAll("label");
// console.log(buttons);
// querySelectorAll 나왔다 => for문써라!! 반복문 아니면 안된다!!!
const tabItems = document.querySelector(".tabs .items");
// console.log(tabItems);
const h1 = tabItems.querySelectorAll("h1");
// console.log(h1);

buttons.forEach((button, index) => {
  // buttons 에서 각각의 button을 끄집어왔다
  button.addEventListener("click", () => {
    // console.log("click", index);
    tabItems.style.left = `-${index * 100}%`;
    // 그러고 세놈중의 어떤놈한테 효과를 줄건지 지정한다

    buttons.forEach((button) => button.classList.remove("active"));
    // 특정요소한테 효과를 주려면 나머지요소한테는 효과를 제거하고 효과를 줘라
    button.classList.add("active");

    // 특정요소한테 효과를 주려면 나머지요소한테는 효과를 제거해줘야한다
    h1.forEach((title) => title.classList.remove("active"));
    h1[index].classList.add("active");
  });
});
