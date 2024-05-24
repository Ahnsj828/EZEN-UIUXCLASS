// 모든 tab 요소 가져오기
const tabs = document.querySelectorAll(".tab");

// 모든 tab 요소를 숨기는 함수
const hideTabs =() => {
  tabs.forEach(tab => {
    tab.style.display = "none"; 
  });
}

// 초기에 모든 tab을 숨기기
hideTabs();

// 기본적으로 첫 번째 tab을 보이게 
document.getElementById("tab1").style.display = "flex";

// tab-button 클릭 이벤트 처리
const tabButtons = document.querySelectorAll(".tab-btn a");
tabButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    event.preventDefault(); // 기본 동작 방지

    const tabId = this.getAttribute("href"); 

    // 모든 tab을 숨기고
    hideTabs();
    document.querySelector(tabId).style.display = "flex";

    // 활성 tab 표시하기 위해 모든 버튼에서 active 클래스 제거
    tabButtons.forEach(btn => {
      btn.classList.remove("active");
    });
    // 클릭한 버튼에 active 클래스 추가
    this.classList.add("active");
  });
});