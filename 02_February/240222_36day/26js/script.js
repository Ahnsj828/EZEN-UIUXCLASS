// 이벤트 버블링 - 부모요소에 이벤트가 전파된다(자식에 이벤트 실행하면 부모도 적용된다)
const elemets = document.querySelectorall("*");
// css 처럼 JS도 전체 선택 => *
// console.log(elemets);

for (let elemet of elemets) {
  // for(let elemet of elemets) 각각 값을 넣겠다
  elemet.addEventlistener("click", (e) => {
    console.log(
      `e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`
    );
  });
  // elemet html부터 p까지
}

// e.target;
// e.currentTarget;

// e.target 와 e.currentTarget를쓰는 경우가 다르다
// 이벤트가 발생하는 요소와
// 실제로 이벤트가 이뤄지는 요소

// ==========================
// < 이벤트 캡처링 - 부모요소에 이벤트가 전파된다 >(자식에 이벤트 실행하면 부모도 적용된다)
const elemets = document.querySelectorall("*");
// css 처럼 JS도 전체 선택 => *
// console.log(elemets);

for (let elemet of elemets) {
  // for(let elemet of elemets) 각각 값을 넣겠다
  elemet.addEventlistener("click", (e) => {
    console.log(
      `e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`
    );
  });
  // elemet html부터 p까지
}
