// 커스텀 훅!!
// 프론트엔드 개발자가 직접 훅을 만들어서 사용할 수 있다
// 컴포넌트로 해도 상관은없는데 예시를 보여주려고 한거다
// JS class 객체의 형태를 커스텀

import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  // id값에 따라서 출력되는 값이 다르게
  // 인자값 id에 매칭되는 일기데이터
  const data = useContext(DiaryStateContext);

  const [diary, setDiary] = useState();

  useEffect(() => {
    const matchDiary = data.find((it) => String(it.id) === id);
    // find함수 => 배열안에 특정한 요소를 찾아서 매칭되는 값을 반환
    if (matchDiary) {
      setDiary(matchDiary);
    }
  }, [id, data]);

  // return "";
  return data;
};

export default useDiary;
