// 슬라이드 박스에 이미지 가져올거다
// 버튼을 클릭했을때 이벤트를 주려고한다

// 1. 버튼을 찾아온다
const arrows = document.querySelectorAll(".arrow");
// 버튼 두개를 동시에 찾아오려고 복수형씀arrows
// 두개 모두 가져오는거라 querySelectorAll
// querySelector 쓰면 왼쪽버튼만 찾아오게되다
// console.log(arrows);
const container = document.querySelector("#container");

// 2. 이미지를 넣을거다 스타일 속성을 사용하면된다
// container.style.backgroundImage = "url(./images/pic-1.jpg)";

// 3. 총 여섯장의 이미지가 오른쪽버튼 누를때마다 넘어가게할거다
// 이미지들 이름에 숫자가 커진다
// 배열로 담을거다 => []
const pics = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
];
// 그래서 이런 슬라이드할때 이름을 비슷하게 하는게 좋다

// 4.
// 배열할때 요소들 가져오는 방법 => index
container.style.backgroundImage = `url(./images/${pics[0]})`;

// 5. 증가하면서 증가하게 만들
// 버튼을 누르면서 이미지가 교체되게끔
// 클릭하면 작동하게하라 => 이벤트
// 클릭할대마다 숫자가커지게해라 => 반복문
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    // console.log(e.target.id);
    // target	이벤트가 발생한 대상
    // 앞에 요소arrows를 반복을시키고자 / 뒤에 함수가 올 수있다 =>콜백함수
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
        // 가장 마자믹 이미지(pic-6.jpg)로 돌아가라
      } else if (e.target.id === "right") i++;
      if (i >= pics.length) {
        // 중첩이프문
        i = 0;
        // 6번사진까지 나오고 또 오른쪽 버튼을 누르면 첫번째 사진으로가라
      }
    }

    container.style.backgroundImage = `url(./images/${pics[i]})`;
  });
});

// 오른쪽버튼 눌렀는지 왼쪽버튼눌렀는지

let i = 0;
// idex라는 i / 사이트를 새로 고침하면 1번째(0)사진이 나와야되니까 /무조건 이면 단락회로평가를 주기위해서 기준값을 정해준거다
// let i = 0;지금 상황에서는 값이 바뀌어야되니까 const가 아닌 let
