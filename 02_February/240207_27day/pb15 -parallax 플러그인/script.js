let we = $(window);
$('section[data-type="background"]').each(function () {
  // js 나 jquery는 "" 안에 ''를 못쓴다
  let bg = $(this);
  wd.scroll(function () {
    // wd window
    let yPos = wd.scrollTop() / bg.data("speed");
    let coords = "50%" + yPos + "px";
    bg.css({ backgroundPosition: coords });
  });
});
