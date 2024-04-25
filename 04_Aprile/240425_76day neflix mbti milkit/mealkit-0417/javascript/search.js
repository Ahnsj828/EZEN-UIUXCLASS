// 전체삭제 버튼 클릭하면 검색한 내역 다 삭제되고 각각 개별 검색 내역을 아이콘 클릭하면 삭제되게
const allClear = document.querySelector(".btn-all-clear");
// console.log(allClear);
const searchItems = document.querySelector(".search-recet .items");
// forEach로 쓰려고 일부로 복수형으로 썼단다
// console.log(searchItems);

allClear.addEventListener("click", () => {
  // console.log("click");
  searchItems.style.display = "none";
});

const eachItems = document.querySelectorAll(".search-recet .btn-clear");
console.log(eachItems);

eachItems.forEach((item) => {
  item.addEventListener("click", function () {
    // x를 누르면 오징어볶음이랑 x가 사라져야한다
    // x와 오징어볶음이 같이 있는 부모요소 <div class="item">가 삭제되는게 가장 간편하다
    this.parentNode.style.display = "none";
    // x버튼을 누르면 부모요소인 <div class="item">가 사라진다
  });
});

// *이 화면에서 검색기능을 넣으면 좋은 커스터마이징이 된다!!!
