const container = document.querySelector("#container");
// html에서 영상 불러오지 않았는데 js에서 불러와야한다
const arrows = document.querySelectorAll(".arrow");

const video = ["mv-1.mp4", "mv-3.mp4", "mv-3.mp4"];
//왼쪽버튼이든 오른쪽버튼이든 누르면 넘어가야한다 => 똑같이 적용되야한다 => 반복문을써야한다
// 0번째 영상은 무조건 재생해야한다

const newVideo = document.createElement("video");
const srcVideo = document.createAttribute("src");
const widthVideo = document.createAttribute("width");
// 인라인 스타일로 with
const autoplayVideo = document.createAttribute("autoplay");

srcVideo.value = `./videos/${videos[0]}`;
// src속성의 경로값
widthVideo.value = "700";
newVideo.setAttributeNode(srcVideo);
// 속성값으로 들어가야한다 => setAttributeNode
// 비디오태그안에 비디오를 넣었다
newVideo.setAttributeNode(widthVideo);
newVideo.setAttributeNode(autoplayVideo);
container.appendChild(newVideo);
// video가 container의 자식요소로 들어가야한다
// video태그를 만들었다

let i = 0;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    // console.log("click");
    // console.log(e); // PointerEvent => target:div#right
    if (e.target.id === "left") {
      // 일반적으로 before가 먼저오는게 상식적으로? => left먼저쓴거다
      i--;
      if (i < 0) {
        i = video.length - 1;
        // 배열에서는 음수를 쓴적없다 => 맨끝으로 가야된다 => 마지막 인덱스로 가야한다
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= videos.length) {
        i = 0;
        // 다시 보여줄 영상이 없으면 다시 0으로 돌아가라
      }
    }
    srcVideo.value = `./videos/${videos[i]}`;
  });
});
