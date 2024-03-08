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
for (let item of items) {
  item.addEventListener("mouseover", (e) => {
    e.currentTarget.querySelector("video").play();
  });
  item.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
  });
}
