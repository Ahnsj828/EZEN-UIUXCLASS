// 재생 버튼애들 이랑 일시정지 버튼 애들을 감싸고 있는 애를 찾아와야한다
// 6개가 필요하다 => 반복문

const songs = document.querySelector(".albumTable_song");
// console.log(songs);
for (let song of songs) {
  // songs 안에 있는 개별적인 song
  const play = song.querySelector(".fa-caret-right");
  const pause = song.querySelector(".fa-pause");
  // console.log(play, pause);
  play.addEventListener("click", (e) => {
    // e.currentTarget.querySelector("audio").play();
    // 눌러도 안나온다
    // 반복문 내에서 움직이고 있다
    // 오디오들이 동시에 여섯개 다 돌리라는거야?
    // 어떤애를 재생하라는지 지정해줘야한
    e.currentTarget.closet("td").querySelector("audio").play();
    // for문 안이라 여섯개가 동시에 작동된다 => 가장가까이에 있는 td요소를 찾아서 작동시켜라!
  });
  pause.addEventListener("click", (e) => {
    e.currentTarget.closet("td").querySelector("audio").pause();
    // 일시정지도 마찬가지로
  });
}
