// Use if/else etc.
// if... else : 조건식의 결과에 따라 {}로 묶인 블록의 실행 여부를 결정하는 조건문입니다. 참고 자료
// classList : 요소에 적용된 클래스들의 이름을 리스트 형태로 반환해 줍니다. 참고 자료
// remove : classList의 메서드입니다. classList를 통해 반환된 리스트 중에서 원하는 클래스를 제거할 수 있습니다. classList의 참고 자료에서 확인할 수 있습니다.
// add : classList의 메서드입니다. classList의 리스트에 원하는 클래스를 추가할 수 있습니다. classList의 참고자료에서 확인할 수 있습니다.
// innerWidth : 브라우저의 가로 길이를 나타내는 Window 객체의 프로퍼티입니다. 참고자료
// console.log(window.innerWidth);

// ------------------------------------------------
// < https://developer.mozilla.org/ko/docs/Web/API/Window/innerWidth > mdn - Window.innerWidth

// const heightOutput = document.querySelector("#height");
// const widthOutput = document.querySelector("#width");

// function updateSize() {
//   heightOutput.textContent = window.innerHeight;
//   widthOutput.textContent = window.innerWidth;
// }

// updateSize();
// window.addEventListener("resize", updateSize);

// ------------------------------------------------
// < https://lakelouise.tistory.com/37 > tstory - [자바스크립트] window 창 크기

// const body = document.querySelector("body");

// function handleResize() {
// 	const length = window.innerWidth;

//   if (length < 800) {
// 		// body.className = "small";
//     console.log("small");
//   } else if (length > 800 && length < 1200) {
// 		// body.className = "medium";
//     console.log("medium");
//   } else if (length > 1200) {
// 		// body.className = "large";
//     console.log("large");
//   }
// }

// window.addEventListener("resize", handleResize);

// ------------------------------------------------
// < https://developer.mozilla.org/en-US/docs/Web/API/Element/classList > mdn - Element: classList property

// const div = document.createElement("div");
// div.className = "foo";

// console.log(div.outerHTML); //    <div class="foo"></div>
// // our starting state: <div class="foo"></div>

// // use the classList API to remove and add classes
// div.classList.remove("foo");
// console.log(div.outerHTML); //    <div class=""></div>
// div.classList.add("anotherclass");
// console.log(div.outerHTML); // <div class="anotherclass"></div>

// console.log(div.outerHTML);
// // <div class="anotherclass"></div>

// // if visible is set remove it, otherwise add it
// div.classList.toggle("visible");
// console.log(div); //    div.anotherclass.visible
// console.log(div.outerHTML); //   <div class="anotherclass visible"></div>

// // add/remove visible, depending on test conditional, i less than 10
// // div.classList.toggle("visible", i < 10);

// console.log(div.classList.contains("foo")); // false

// // // add or remove multiple classes
// div.classList.add("foo", "bar", "baz");
// console.log(div.outerHTML); //  <div class="anotherclass visible foo bar baz"></div>
// div.classList.remove("foo", "bar", "baz");
// console.log(div.outerHTML); //  <div class="anotherclass visible"></div>

// // add or remove multiple classes using spread syntax
// const cls = ["foo", "bar"];
// div.classList.add(...cls);
// console.log(div.outerHTML); //  <div class="anotherclass visible foo bar"></div>
// div.classList.remove(...cls);
// console.log(div.outerHTML); //  <div class="anotherclass visible"></div>

// // replace class "foo" with class "bar"
// div.classList.replace("foo", "bar");
// console.log(div.outerHTML); //  <div class="anotherclass visible"></div>

// ------------------------------------------------

const body = document.querySelector("body");

function handleResize() {
  const length = window.innerWidth;

  if (length < 800) {
    // body.className = "small";
    console.log("small");
  } else if (length > 800 && length < 1200) {
    // body.className = "medium";
    console.log("medium");
  } else if (length > 1200) {
    // body.className = "large";
    console.log("large");
  }
}

window.addEventListener("resize", handleResize);
