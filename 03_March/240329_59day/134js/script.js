anime({
  targets: ".svg1 path",
  strokeDashoffset: [anime.setDashoffset, 0],
  // 실선 점선
  easing: "easeInOutSine",
  duration: 6000,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  //alternate 처음에 그림을 시작하고 끝날때는 지우는 방식
  loop: true,
});
