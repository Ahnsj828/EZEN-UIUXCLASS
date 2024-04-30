// main slider < 슬라이드 >
const goodsSlider = document.querySelector(".goods-detail-slider");
// console.log(goodsSlider);
const pagers = document.querySelectorAll(".pagers span");
// 페이저들
console.log(pagers); // NodeList(4) [span.active, span, span, span]유사배열 => 반복문

const pics = [
  "goods-detail-01",
  "goods-detail-02",
  "goods-detail-03",
  "goods-detail-04",
];
// 이미지를 배열로 가져왔다

goodsSlider.style.backgroundImage = `url("../images/${pics[0]}")`;

// pagers.forEach((pager) => {
//   // pagers에서 각각의 pager가져와서
//   pager.addEventListener("click", () => {
//     // console.log("click"); // click하면 문제없이 나온다
//     this.clasLish.add("active");
//     // this객체를 자주 사용하는 이유 => 실무에서 사용하는 빈도가 많다
//     // 이제 pager 클릭하면 빨강색이 된다 => 문제가 다 빨갛게 된다. 선택한 애만 빨강색 되게 하고싶다
//   });
// });
// 👇🏼

// pagers.forEach((pager) => {
//   // pagers에서 각각의 pager가져와서
//   pager.addEventListener("click", function () {
//     pager.forEach((pager) => {
//       pager.classList.add("active");
//     });
//     this.clasLish.add("active");
//   });
// });

// pagers.forEach((pager, idx) => {
//   pager.addEventListener("click", function () {
//     pager.forEach((pager) => {
//       pager.classList.add("active");
//     });
//     this.clasLish.add("active");
//     goodsSlider.style.backgroundImage = `url("../images/${pics[idx]}")`;
//   });
// });

// const rotation = () => {
//   pagers.forEach((pager, idx) => {
//     pager.addEventListener("click", function () {
//       pager.forEach((pager) => {
//         pager.classList.add("active");
//       });
//       this.clasLish.add("active");
//       goodsSlider.style.backgroundImage = `url("../images/${pics[idx]}")`;
//     });
//   });
// };

// setInterval(rotation, 3000);

// let index = 0;
// const rotation = () => {
// 	index = (index + 1)% pics.length
// 	// % pics.length => 4가되면 돌아오게 =>  나머지가 0이되면 돌아오게되게 / 0 1 2 3 > 4가되면 돌아오게
//   const rotation = () => {
//     pagers.forEach((pager, idx) => {
//       pager.addEventListener("click", function () {
//         pager.forEach((pager) => {
//           pager.classList.add("active");
//         });
//         this.clasLish.add("active");
//         goodsSlider.style.backgroundImage = `url("../images/${pics[idx]}")`;
//       });
//     });
//   };
// };

// setInterval(rotation, 3000);

let index = 0;
const rotation = () => {
  index = (index + 1) % pics.length;

  pagers.forEach((pager, idx) => {
    if (index === idx) {
      pager.classList.add("active");
      goodsSlider.style.backgroundImage = `url("../images/${pics[idx]}")`;
    } else {
      pager.classList.remove("active");
    }
    pager.addEventListener("click", function () {
      pager.forEach((pager) => {
        pager.classList.add("active");
      });
      this.clasLish.add("active");
      goodsSlider.style.backgroundImage = `url("../images/${pics[idx]}")`;
    });
  });
};

setInterval(rotation, 3000);

// ========================================================
// bottom accordion < 아코디언 >
const goodsTitles = document.querySelectorAll(".goods-accordion .title");
// console.log(goodsTitles); // NodeList(4) [div.title.active, div.title, div.title, div.title] =>  배열이다

// goodsTitles.forEach((title) => {
//   title.addEventListener("click", function () {
//     // console.log("click");
//     const nextSibling = this.nextElementSibling;
//     // 형제 siblings
//     // 얘를 선택하면 nextElementSibling를 nextSibling로
//     // console.log(nextSibling);
//     nextSibling.style.display = "block";
//   });
// });

// goodsTitles.forEach((title) => {
//   title.addEventListener("click", function () {
//     // console.log("click");
//     const nextSibling = this.nextElementSibling;
//     goodsTitles.forEach((otherTitle) => {
// 			if(otherTitle !== this) {

// 			}
// 		})
//     nextSibling.style.display = "block";
//   });
// });

// goodsTitles.forEach((title) => {
//   title.addEventListener("click", function () {
//     // console.log("click");
//     const nextSibling = this.nextElementSibling;
//     goodsTitles.forEach((otherTitle) => {
//       if (otherTitle !== this) {
//         otherTitle.nextElementSibling.style.display = "none";
//       }
//     });
//     nextSibling.style.display = "block";
//   });
// });

goodsTitles.forEach((title) => {
  title.addEventListener("click", function () {
    // console.log("click");
    const nextSibling = this.nextElementSibling;
    goodsTitles.forEach((otherTitle) => {
      if (otherTitle !== this) {
        otherTitle.nextElementSibling.style.display = "none";
      }
    });
    if (nextSibling.style.display === "block") {
      // 열려져 있는 상황이라고 한다면
      // === 같다면 /  비교연산자
      nextSibling.style.display = "none";
      //  =  주겠다 /할당연산자
    }
    nextSibling.style.display = "block";
  });
});
