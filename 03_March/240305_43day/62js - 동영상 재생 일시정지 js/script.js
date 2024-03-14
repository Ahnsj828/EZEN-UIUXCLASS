const button = document.querySelector("button");

const tooglePlay = () => {
  // console.log("toggle");
  const video = document.querySelector("video");
  if (video.paused) {
    // 버튼을 눌러서 일시정지가 되게 되면 video.paused가 true가되게된다
    //  => if (video.paused) 상태가 된다면
    button.innerText = "Pause";
    video.play();
    // 영상이 멈춘다
  } else {
    button.innerText = "Play";
    video.pause();
    // 영상이 재생된다
  }
  // // video.pause() 비디오를 멈추는 함수
  // // video.play() 비디오를 재생시키는 함수
};

button.addEventListener("click", tooglePlay);
