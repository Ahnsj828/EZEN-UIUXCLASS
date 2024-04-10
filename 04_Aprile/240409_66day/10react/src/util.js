import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";
// 이미지를 가져오게끔 하는 함수를 만들거다

// 함수 기능을 외부에서 쓸 수 있게끔 할거다
//  => 모듈화 되어야한다 => export
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
// emotionId 이 매개변수는 숫자가 들어올거다
// case 뒤에는 문자열이 와야한다
// const targetEmotion = string(emotionId)   => 그래서 문자화 했다 => string
// return문을 실행했다 => 함수가 실행되었을때 반환값으로 emotion1을 주겠다
