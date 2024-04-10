// rafce
import React from "react";
import { useParams } from "react-router-dom";
// react-router-dom 이 라이브러리에서 useParams라는 훅을 가져올거다
// useParams 훅은 상단에 파라미터값을 찾아오는 역할을한다

const Diary = () => {
  //   const params = useParams();
  //  http://localhost:3000/diary/3
  //   =>  console.log(params);  => {id: '3'}

  const { id } = useParams();

  return (
    <div>
      <div>{id}번 일기</div>
    </div>
  );
};

export default Diary;

// const params = useParams();  =>  params라는 변수에는 react-router-dom라이브러리에서 가져온 useParams함수의 결과값을 가져올거다

// const { id } = useParams();  <div>{id}번 일기</div>
//  => http://localhost:3000/diary/3 가면 3번 일기 라고 나온다
