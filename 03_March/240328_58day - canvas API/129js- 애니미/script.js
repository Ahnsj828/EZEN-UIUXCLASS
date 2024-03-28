anime({
  targets: "ul li",
  // translateY: 100,
  translateY: (el, i) => {
    if (i % 2 === 0) {
      // 짝수의 인덱스값이라면
      return 80;
    } else {
      return -80;
    }
  },
  easing: "linear",
  duration: 1500,
  // 1.5초시간동안에 위아래로 나뉘어진다
});
