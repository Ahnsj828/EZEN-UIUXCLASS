// 우측 버튼을 클릭했을 때, 하단 메뉴가 출력될 수 있도록!

const titles = document.querySelectorAll(".category-accordion .title");
// titles는 유사배열이다
const details = document.querySelectorAll(".category-accordion .detail");
// console.log(details);

const firstDetail = titles[0].nextElementSibling;
// titles[0] => titles의 0번째
// Sibling 형제라는 뜻이다
// console.log(firstDetail);
firstDetail.style.display = "block";

titles.forEach((title) => {
  // 각각의 아이템을 찾아와서 => title
  // title.addEventListener("click", () => {
  //   console.log("click");
  // });

	// this를쓰면 이렇게👇🏼

  title.addEventListener("click", funtion() {
		titles.forEach((title) => {
			title.classList.remove("active")
			// 모든 이벤트를 제거하고 시작해야한다
		})
		this.classList.toggle("active")
		const detail = this.nextElementSibling
		detail.style.display = "block"

		details.forEach(d) => {
			if(d !== detail) {
				d.style.display = "none"
			}
		}
  });
});

// 아코디언에 화살표를 돌게하려면 => Boolean값을 주면 가능하다