const player = document.querySelector(".player");
const video = document.querySelector("video");
const playButton = document.querySelector(".play-pause");
// console.log(playButton);
const volumeBar = document.querySelector("input[type='range']");
const rateButtons = document.querySelectorAll(".rate");
// 버튼 네개를 찾아왔다 /x 0.5버튼 , x 1.0버튼, ..
const progressCover = document.querySelector(".progress");
// 영상이 재생되었을때 뒤에 검정 바

const videoPoint = (e) => {
  // console.log(e);
  const mouseX = e.pageX - player.offsetLeft;
  // const mouseX = e.pageX; 내가보고 있는 웹브라우저 화면의 값
  // console.log(mouseX);
  const width = progressCover.clientWidth;
  const duration = video.duration;
  const clickedTime = (mouseX / width) * duration;
  video.currentTime = clickedTime;
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  const currentTime = video.currentTime;
  // 영상이 재생되고 있는 상황
  const duration = video.duration;
  // 영상의 총 길이
  const percent = (currentTime / duration) * 100;
  // 퍼센테이트지를 주려고
  progressBar.style.width = `${percent}%`;
  // 영상이 재생되어지는 상황에 맞춰서 바가 이동하는거같아보이게 바의 너비를 증가시켰다
  const progressBarwidth = progressCover.clientWidth;
  // clientWidth 해당아이템의 너비
  // console.log(progressBarwidth);
  const newPosition = (currentTime / duration) * progressBarwidth - 1;
  // 영상재생 구간 / 전체 총 영상시간 * 전체 총길이

  progressPointer.style.left = `${newPosition}px`;
  // 영상이 시작할 단계에서는 0 , 영상이 끝났을때에는 100이 되어야한다 / 그러려면 총 길이를 알아야한다
  // 프로그래스는 영상의 총 길이를 알고있다
};

const setRate = (e) => {
  // console.log(e);

  // const rate = e.target.dataset.rate;
  const { rate } = e.target.dataset;
  // const rate = e.target.dataset.rate;을 구조분해할당 으로 바꿔줬다
  video.playbackRate = rate;
};

const formatting = (time) => {
  // const sec = time % 60;
  // // 60을 나눈 나머지를 초로
  // const min = time / 60;
  // // 60으로 나눈 몫 = 분
  // const hour = time / 3600;
  // // 60 * 60 = 3600 / 3600으로 나눈 몫 = 시간

  // 수학객체
  const sec = Math.floor(time % 60);
  const min = Math.floor(time / 60);
  const hour = Math.floor(time / 3600);

  const fSec = sec < 10 ? `0${sec}` : sec;
  const fMin = min < 10 ? `0${min}` : min;
  const fHour = hour < 10 ? `0${hour}` : hour;

  return `${fHour}:${fMin}:${fSec}`;
};

const updateTime = () => {
  // console.log(e);
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  // current.innerText = video.currentTime;
  // duration.innerText = video.duration;
  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

const setVolume = (e) => {
  // console.log(e);
  video.volume = e.target.value;
};

const play = () => {
  playButton.innerText = "//";
  video.play();
};

const pause = () => {
  playButton.innerText = "▶";
  video.pause();
};
// 클릭하면 재생되고 클릭하면 일시정지된다

const togglePlay = () => {
  // console.log("click");
  video.paused ? play() : pause();
  // video.paused video라는 전역요소가 paused인지 아닌지
  // video.paused ? playButton() : pause(); 삼항 조건 연산자 / 첫번째 항이 참이면 두번째항이 실행, 거짓이면 세번째항이 실행
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
// 비디오를 클릭해도 영상이 재생,일시정지 되고  / 버튼을 클릭해도 영상이 재생,일시정지 되고
video.addEventListener("timeupdate", updateTime);
// timeupdate video에 재생시간이 계속 업데이트가 된다면
// updateTime 이게 작동되게해줘
// timeupdate라는 이벤트 핸들러
video.addEventListener("timeupdate", updateProgress);
// 영상이 재생될때마다 프로그래스 바가 움직여야한다
// updateTime는 영상 재생될때마다 시간이 바뀐다 / updateProgress 영상 재생될때마다 프로그래스바가 바뀐다
volumeBar.addEventListener("change", setVolume);
rateButtons.forEach((button) => {
  button.addEventListener("click", setRate);
});
progressCover.addEventListener("click", videoPoint);
// 화면에 클릭하는 그 지점에 영상이 나오게하려고
