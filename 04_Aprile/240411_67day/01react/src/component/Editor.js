import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// useNavigate 몇번째 전으로 돌아갈거냐 할때 사용하기 좋은 훅
import Button from "./Button";
// import { getFormattedDate } from "../util";
import { getFormattedDate, emotionList } from "../util";
import EmotionItem from "./EmotionItem";
import "./Editor.css";

const Editor = ({ initData, onSubmit }) => {
  // initData 초기데이터
  // console.log(initData);
  const navigate = useNavigate();
  // console.log(navigate);

  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    // new Date 오늘날짜
    emotion: "3",
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(initData.date)),
      });
    }
  }, [initData]);

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.vaule,
    });
  };
  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    });
  };
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };
  const handleSubmit = () => {
    onSubmit(state);
    // 수정되어진 값들은 state에 저장되어 있어서 매개변수로
  };
  const handleOnGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
        <div className="input_wrapper">
          <input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 감정</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((it) => (
            // <img key={it.id} src={it.img} alt={`emotion${it.id}`} />
            // <EmotionItem key={it.id} src={it.img} alt={`emotion${it.id}`} />
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
              // 선택하면 선택 요소의 id가 일치하면 class값을 줘라
            />
          ))}
          {/* it은 item을 의미 => util.js에 객체들 */}
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 일기</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="오늘은 어땠나요"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>
      <div className="editor_section bottom_section">
        <Button text="취소하기" onClick={handleOnGoBack} />
        <Button text="작성완료" type="positive" onClick={handleSubmit} />
        {/* type으로 지정해둔 색상값을 줄수 있다 */}
      </div>
    </div>
  );
};

export default Editor;
