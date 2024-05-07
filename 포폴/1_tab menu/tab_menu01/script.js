// const tabBtns = document.querySelectorAll(".tab-btn a")
// console.log(tabBtns)

// tabBtns.forEach((tabBtn) => {
//   tabBtn.addEventListener("click", function () {
//     tabBtns.forEach((otherBtn) => {
//       otherBtn.classList.remove("active");
//     });
//     this.classList.add("active");
//   });
// });
// ============================================
// function openTab(evt, tab) {
// 	var i, tabcontent, tablinks;
// 	tabcontent = document.getElementsByClassName("tab");
// 	for (i = 0; i < tabcontent.length; i++) {
// 		tabcontent[i].style.display = "none";
// 	}
// 	tablinks = document.querySelectorAll("tab-btn a");
// 	for (i = 0; i < tablinks.length; i++) {
// 		tablinks[i].className = tablinks[i].className.replace(" active", "");
// 	}
// 	document.getElementById(tab).style.display = "block";
// 	evt.currentTarget.className += " active";
// }

// //Horizontal scroll for the tabs on mousewheel. If tabs are longer than the content section, there's a scroll bar but it's hidden to retain the design.
// if (window.innerWidth > 800) {
// 	const scrollContainer = document.querySelector(".tab-btn");

// 	scrollContainer.addEventListener("wheel", (evt) => {
// 		evt.preventDefault();
// 		scrollContainer.scrollLeft += evt.deltaY;
// 	});
// }

// ============================================

// JavaScript 코드

document.addEventListener("DOMContentLoaded", function() {
  // 페이지가 로드되면 실행될 함수

  // 모든 탭 요소 가져오기
  const tabs = document.querySelectorAll(".tab");

  // 모든 탭 요소를 숨기는 함수 정의
  function hideTabs() {
    tabs.forEach(tab => {
      tab.style.display = "none"; // 탭 숨기기
    });
  }

  // 초기에 모든 탭을 숨기기
  hideTabs();

  // 첫 번째 탭을 보이게 함
  document.getElementById("tab1").style.display = "flex";

  // 탭 버튼 클릭 이벤트 처리
  const tabButtons = document.querySelectorAll(".tab-btn a");
  tabButtons.forEach(button => {
    button.addEventListener("click", function(event) {
      event.preventDefault(); // 기본 동작 방지

      const tabId = this.getAttribute("href"); // 클릭한 버튼의 href 속성값(탭 ID) 가져오기

      // 모든 탭을 숨기고
      hideTabs();
      // 클릭한 탭만 보이게 함
      document.querySelector(tabId).style.display = "flex";

      // 활성 탭 표시를 위해 모든 버튼에서 active 클래스 제거
      tabButtons.forEach(btn => {
        btn.classList.remove("active");
      });
      // 클릭한 버튼에 active 클래스 추가
      this.classList.add("active");
    });
  });
});
