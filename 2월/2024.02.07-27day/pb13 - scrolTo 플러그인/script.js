$("nav a").click(function (e) {
  // nav 안에 a를 선택할거다
  e.preventDefault();
  $.scrollTo(this.hash, 1500);
});
// 로하거나

// || 0 붙일거면
// $("nav a").click(function (e) {
//   // nav 안에 a를 선택할거다
//   $.scrollTo(this.hash || 0, 1500);
//   e.preventDefault();
// });
// 1000이 1초
// 1500 1.5초
// || 0  or라는 뜻이다
