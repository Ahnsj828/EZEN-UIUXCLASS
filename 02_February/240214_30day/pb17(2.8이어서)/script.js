// slick.js : history-info
$(".history-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// slick.js : project-photo
$(".project-photo").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  cssEase: "linear",
});

// header > trigger btn

$(".trigger").click(function () {
  $(this).toggleClass("active");
  // $(this) 트리거버튼을 의미한다
  $(".gnb").toggleClass("active");
});
// 메뉴 누르면 숨겨져있던 트리거 메뉴가나온다

$(".menu a").click(function () {
  $(".gnb").removeClass("active");
  $(".trigger").removeClass("active");
});
// 메뉴트리거가 나온상태에서 클릭하면 메뉴트리거가 사라진다

// scrollTo : header > tirgger btn
$(".menu a").click(function () {
  $.scrollTo(this.hash || 0, 900);
});
// 스무스하게 이동
// 900 = 0.9s

// header scroll event
$(window).scroll(function () {
  if ($(window).scrollTop() > 50) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
});
