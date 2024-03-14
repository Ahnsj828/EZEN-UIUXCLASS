// const items = document.querySelectorAll("article");
// // console.log(items);
// for (let item of items) {
//   item.addEventListener("mouseover", (e) => {
//     // 말고 froEach문써도 된다
//     // 어디든간에 마우스를 올리면
//     console.log(e.currentTarget.querySelector("video").play());
//     // 마우스를 올리면 동영상이 재생되게
//   });
//   item.addEventListener("mouseleave", (e) => {
//     // 말고 froEach문써도 된다
//     // 어디든간에 마우스를 올리면
//     console.log(e.currentTarget.querySelector("video").play());
//     // 마우스를 올리면 동영상이 재생되게

//     // 마우스가 떠나면 동영상이 떠나게
//   });
// }

const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = document.querySelector("span");
// console.log(close);

for (let item of items) {
  item.addEventListener("mouseover", (e) => {
    e.currentTarget.querySelector("video").play();
  });
  item.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
  });

  item.addEventListener("click", (e) => {
    // console.log(e);
    const tit = e.currentTarget.querySelector("h2").innerText;
    // currentTarget 이벤트발생된 형제
    // 실제로 이벤트가 발생한 요소 target
    // 실제로 이벤트가 발생한 요소의 부모 요소 currentTarget
    const txt = e.currentTarget.querySelector("p").innerText;
    const vidSrc = e.currentTarget.querySelector("video").getAttribute("src");
    // console.log(tit, txt, vidSrc);

    aside.querySelector("h1").innerText = tit;
    // h1태그 가져와서 tit에 넣어주겠다
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", vidSrc);

    aside.querySelector("video").play;
    aside.classList.add("on");

    close.addEventListener("click", () => {
      aside.classList.remove("on");
      aside.querySelector("video").pause();
    });
  });
}
