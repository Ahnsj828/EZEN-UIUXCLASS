import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fffacd;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

// const Button = styled.div`
//   width: 400px;
//   height: 400px;
//   border: 1px solid #000;
// `;

const Question = () => {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    // totalScore 각각의 성향이 맞는 값
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
    // totalScore 초기값
  ]);
  // {
  //   // const handleClickButtonA = (no, type) => {
  //   //   if (type === "EI") {
  //   //     // 만약 타입이 EI와 같다면
  //   //     const addScore = totalScore[0].score + no;
  //   //     const newObject = { id: "EI", score: addScore };
  //   //     // 초기값(score)에서 값이 증가하면서 업데이트 된 addScore
  //   //     totalScore.splice(0, 1, newObject);
  //   //     // 잘라내서 값을 다시 넣는 함수  => splice
  //   //     // 0, 1 들어내서 newObject로 바꿀거다
  //   //     // 0번째 인덱스에 1개를 찾을거다
  //   //     // splice함수를 써서 교체할거다
  //   //   } else if (type === "SN") {
  //   //     // if를 줘도 작동은 하는데 if를 주면 다 검사를하고 메모리에 문제가 생겨서 else if를 준거다
  //   //     const addScore = totalScore[1].score + no;
  //   //     const newObject = { id: "SN", score: addScore };
  //   //     addScore;
  //   //     totalScore.splice(1, 1, newObject);
  //   //   } else if (type === "TF") {
  //   //     const addScore = totalScore[2].score + no;
  //   //     const newObject = { id: "TF", score: addScore };
  //   //     addScore;
  //   //     totalScore.splice(2, 1, newObject);
  //   //   } else if (type === "JP") {
  //   //     const addScore = totalScore[2].score + no;
  //   //     const newObject = { id: "JP", score: addScore };
  //   //     addScore;
  //   //     totalScore.splice(3, 1, newObject);
  //   //   }
  //   //   // console.log(totalScore);
  //   //   setQuestionNo(questionNo + 1);
  //   // };

  //   // const handleClickButtonB = (no) => {
  //   //   if (type === "EI") {
  //   //     const addScore = totalScore[0].score + no;
  //   //     const newObject = { id: "EI", score: addScore };
  //   //     addScore;
  //   //     totalScore.splice(0, 1, newObject);
  //   //   } else if (type === "SN") {
  //   //     const addScore = totalScore[1].score + no;
  //   //     const newObject = { id: "SN", score: addScore };
  //   //     addScore;
  //   //     totalScore.splice(1, 1, newObject);
  //   //   } else if (type === "TF") {
  //   //     const addScore = totalScore[2].score + no;
  //   //     const newObject = { id: "TF", score: addScore };
  //   //     addScore;
  //   //     totalScore.splice(2, 1, newObject);
  //   //   } else if (type === "JP") {
  //   //     const addScore = totalScore[2].score + no;
  //   //     const newObject = { id: "JP", score: addScore };
  //   //     addScore;
  //   //     totalScore.splice(3, 1, newObject);
  //   //   }
  //   //   setQuestionNo(questionNo + 1);
  //   // };
  // }

  // 둘로 나누는게 비효율 적이라서  handleClickButton으로 통일했다

  // 👇🏼

  const handleClickButton = (no, type) => {
    console.log(no, type);
    const newScore = totalScore.map((item) =>
      item.id === type ? { id: item.id, score: item.score + no } : item
    );

    // console.log(newScore);
    setTotalScore(newScore);
    // console.log(totalScore);

    setQuestionNo(questionNo + 1);
    // setQuestionNo(questionNo + 1)을 안 넣으면 계속 동일한 타입에서만 값이 머무르게된다
    // console.log(totalScore);

    if (QuestionData.length !== questionNo + 1) {
      // QuestionData.length 전체 총 질문의 갯수
      // 전체 총 질문의 갯수와 일치하지 않는다고 한다면
      setQuestionNo(questionNo + 1);
      // 질문이 종료되지 않은시점
    } else {
      // 질문지를 줄게 없다 =>  다음페이지로 넘어가게할거다 =>  result페이지로 넘어가게

      // 질문이 종료된 시점
      // 누산기 = 누적시키는 계산기 /값을 하나씩 추가하는
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      // newScore는 실시간으로 값이 증가하고있다
      // reduce() 누산기
      // acc누산기 역할 / curr커런트값

      // 2점 이상이다 => 왼쪽 문자열을 찾아오겠다
      // substring 두개인자값 받는다 / 시작하는idx, 두번째 인자값 이전값

      // 항시 초기값 넣어야한다 => "" 빈문자열
      // console.log(mbti);

      // navigate("/result");
      navigate({
        // 파라미터와 쿼리값을 같이 주려고한다 / 동시에 줄 수 있다 =>  신문법이다
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
        // pathname파라미터값 search쿼리값
      });
    }
  };

  return (
    <div>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / QuestionData.length) * 100}
      />
      <Wrapper>
        <div>
          <Title>{QuestionData[questionNo].title}</Title>
          <ButtonGroup>
            <Button
              onClick={() =>
                handleClickButton(1, QuestionData[questionNo].type)
              }
              style={{ width: "400px", height: "200px", fontSize: "16px" }}
            >
              {QuestionData[0].answera}
            </Button>
            <Button
              onClick={() =>
                handleClickButton(0, QuestionData[questionNo].type)
              }
              style={{ width: "400px", height: "200px", fontSize: "16px" }}
            >
              {QuestionData[0].answerb}
            </Button>
          </ButtonGroup>
        </div>
      </Wrapper>
    </div>
  );
};
// Wrapper에 ProgressBar를 넣으면 위에 지정한 display: flex; 때문에 안먹힌다/ 그렇다고 밖에쓰면 문법에 안맞는다
// => div만들어서 안에 둘다 넣었다
// <ProgressBar striped variant="danger" now={20} />  bootstrp에 ProgressBar형식대로 적은거다

//{QuestionData[0].title} 0부터 11까지 값이 계속 업데이트 될거다 => useState 써야된다

// handleClickButtonA, handleClickButtonB / button을 클릭하면 인덱스가 증가하게 할거다
// handleClickButtonA를 {()=> handleClickButtonA(1) 처음에는 0점이다가 클릭하면 1점 받게

export default Question;

{
  /* <div>
<div>
	<div>문제1</div>
	<div>
		<div>답변들</div>
		<div>답변1</div>
		<div>답변2</div>
	</div>
</div>
</div> */
}
