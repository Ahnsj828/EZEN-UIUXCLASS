const path = anime.path(".svg path");

anime({
  targets: ".circle",
  translateX: path("x"),
  // path의 x좌표값을 따라가게 하라
  translateY: path("y"),
  // path의 y좌표값을 따라가게 하라
  rotate: path("angle"),
  easing: "linear",
  duration: 10000,
  // 10초의 시간동안
  loop: true,
});
