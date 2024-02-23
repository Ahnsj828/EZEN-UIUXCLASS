const newP = document.createElement("p");
// element 요소 / rem에서 element
// 내가 p라태그들의 요소를 만들어서 newP에 넣겠다
const textNode = document.createTextNode("Typescript");
// console.log(newP);
// console.log(textNode);

// append 어펜드 : 무언가를 껴넣다
newP.appendChild(textNode);
// p 태그를 부모로 하고 textNode를 만들겠다

document.body.appendChild(newP);
// document안에 body태그안에 만들겟다
// 그렇지만 이런건 JS로 하지말고 HTML로 해라!
