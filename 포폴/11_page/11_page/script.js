const trigger = document.querySelector(".trigger");
const gnb = document.querySelector(".menu");
const header = document.querySelector("header");

trigger.addEventListener("click", () => {
  gnb.classList.toggle("active");
  trigger.classList.toggle("active");
});

// ==============================================
// document.addEventListener("DOMContentLoaded", () => {
//   const menues = document.querySelectorAll(".menu a");

//   menues.forEach((menu) => {
//     menu.addEventListener("click", function (event) {
//       event.preventDefault(); // 기본 링크 동작을 막습니다.

//       // 모든 메뉴에서 menu-on 클래스를 제거하고 menu-off 클래스를 추가합니다.
//       menues.forEach((item) => {
//         item.classList.remove("menu-on");
//         item.classList.add("menu-off");
//       });

//       // 클릭한 메뉴에만 menu-on 클래스를 추가하고 menu-off 클래스를 제거합니다.
//       this.classList.add("menu-on");
//       this.classList.remove("menu-off");

//       // 원하는 위치로 스크롤합니다.
//       const targetId = this.getAttribute("href").substring(1);
//       document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
//     });
//   });
// });
// ==============================================
document.addEventListener("DOMContentLoaded", () => {
  const menues = document.querySelectorAll(".menu a");

  // 초기 상태 설정: 첫 번째 메뉴 항목에만 menu-on 클래스를 추가
  if (menues.length > 0) {
    menues.forEach((menu, index) => {
      if (index === 0) {
        menu.classList.add("menu-on");
        menu.classList.remove("menu-off");
      } else {
        menu.classList.remove("menu-on");
        menu.classList.add("menu-off");
      }
    });
  }

  menues.forEach((menu) => {
    menu.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 링크 동작을 막습니다.

      // 모든 메뉴에서 menu-on 클래스를 제거하고 menu-off 클래스를 추가합니다.
      menues.forEach((item) => {
        item.classList.remove("menu-on");
        item.classList.add("menu-off");
      });

      // 클릭한 메뉴에만 menu-on 클래스를 추가하고 menu-off 클래스를 제거합니다.
      this.classList.add("menu-on");
      this.classList.remove("menu-off");

      // 선택된 메뉴 항목의 HTML 구조를 변경합니다.
      menues.forEach((item) => {
        if (item === this) {
          // 현재 선택된 메뉴 항목에만 추가적인 HTML을 삽입합니다.
          if (!item.querySelector(".menu-on-icon")) {
            const iconLeft = document.createElement("span");
            iconLeft.classList.add("menu-on-icon", "menu-left");
            iconLeft.innerText = " > ";

            const iconRight = document.createElement("span");
            iconRight.classList.add("menu-on-icon", "menu-right");
            iconRight.innerText = " < ";

            item.prepend(iconLeft);
            item.append(iconRight);
          }
        } else {
          // 선택되지 않은 메뉴 항목에는 추가적인 HTML을 제거합니다.
          item.querySelectorAll(".menu-on-icon").forEach((icon) => {
            icon.remove();
          });
        }
      });

      // 원하는 위치로 스크롤합니다.
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
});

// ==============================================

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  var headerHeight = header.offsetHeight; // 헤더의 높이
  
  if (window.pageYOffset >= 130) { // 스크롤이 100px 이상 내려갔을 때
    header.style.background = "rgba(255, 247, 225, 0.5)"; // 헤더 배경 색상 변경
  } else {
    header.style.background = "transparent"; // 스크롤이 100px 이하로 올라갔을 때 원래 배경 색상으로 변경
  }
});

// ==============================================