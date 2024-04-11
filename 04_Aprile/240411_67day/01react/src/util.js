import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

export const getFormattedDate = (targetDate) => {
  // const year = new Date().getFullYear();
  // const year = targetDate.getFullYear();
  // 전체 통일성을 위해서 year도 let으로 선언
  let year = targetDate.getFullYear();
  // const month = targetDate.getMonth() + 1;
  let month = targetDate.getMonth() + 1;
  // const date = targetDate.getDate();
  let date = targetDate.getDate();

  // 월과 일이 한자리 수 일때는 앞에 0이 붙게
  if (month < 10) {
    month = `0${month}`;
    // 재할당해서 위에 선언을 const가 아닌 let으로 바꿈
  }
  if (date < 10) {
    date = `0${date}`;
    // 얘는 독립조건이라서 else가 아닌 독립 if로 쓴거다
    // date도 재할당했다
  }

  return `${year}-${month}-${date}`;
  // 이러한 형태로
};

// 이미지 5장을 출력하는 함수
export const emotionList = [
  {
    id: 1,
    name: "완젼 좋음",
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: "그럭저럭",
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: "끔찍함",
    img: getEmotionImgById(5),
  },
];
// 사용자가 어떤 감정을 선택했는지 알아야되니까 id가 필요하다
// 각 이미지 설명
// 각 감정 이미지들을 객체로, 모든 이미지들을 배열로

// {
// 	id: 5,
// 	name: "끔찍함",
// 	img: getEmotionImgById(),
// }, 이런 덩어리 객체들이 다섯개가 필요해서 배열[]로 담은거다
