// 제이쿼리 문법은 항상 $로 시작한다
$(function () {
  $(".scroll").click(function (e) {
    e.preventDefault();
    // a태그의 기능을 무력화시켰다
    $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 500);
    // 1000(1000밀리초) 1초로 움직이겠다
    // 500 0.5초로 움직이겠다
  });

  $(window).resize(function () {
    $(".container").width($(window).width()).height($(window).height());
    $(".content").each(function () {
      $(this)
        .css("margin-left", ($(this).width() / 2) * -1 + "px")
        .css("margin-top", ($(this).height() / 2) * -1 + "px");
    });
  });

  setTimeout(function () {
    $(window).resize();
  }, 0);

  $(".container").parallaxScroll({
    friction: 0.5,
  });
});
