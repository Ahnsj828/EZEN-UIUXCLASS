// 오늘 옆에 있는 친구들과 점심을 먹는다!
// 상기 후보 메뉴들은 짜장면, 돈까스, 부대찌개, 회덮밥, 마라탕 등등 메뉴가 있다
// 상기 메뉴 중 랜덤으로 1개 메뉴를 선택해서 웹 브라우저 출력될 수 있도록 코드를 작성해보기!

// 1. 메뉴들을 정의한다
// 2. 메뉴들을 랜덤으로 출력되게한다
// 3. 정해진 메뉴를 웹브라우저로 출력한다

// window.onload = () => {
//   const rndMenu = Math.ceil(Math.random(num) * 5);
//   document.
// };

// const menu = (menu) => {
// const user
// }

//
//
// --------------------------
const menu = ["짜장면", "돈까스", "된장국", "김치찌개", "회덮밥", "컵라면"];
const menuNum = Math.floor(Math.random() * menu.length);
// Math.floor 뒤에 소수점 버려야된다
const result = menu[menuNum];
document.write(result);
// 굳이 ` ` 백틱을 쓸 필요가 없다
