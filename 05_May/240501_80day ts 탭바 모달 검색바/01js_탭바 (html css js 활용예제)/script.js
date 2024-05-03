const tabBtns = document.querySelectorAll(".tab-btn a");
// console.log(tabBtns);
// 배열이다! => 반복문가라

// tabBtns.forEach((tabBtn) => {
//   tabBtn.addEventListener("click", function () {
//     this.classList.add("active");
//   });
// });

// 내가 선택 하지 않은 애들 선택 해제
tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener("click", function () {
    tabBtns.forEach((otherBtn) => {
      otherBtn.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// 여기서 업그레이드 => 오른쪽 토글버튼, 왼쪽 날개 해서 클릭했을때 되는거 , api정보 가져와서 관련 정보 밑에 넣게 하는거 등등
