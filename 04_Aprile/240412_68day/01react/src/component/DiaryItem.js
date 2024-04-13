import React from "react";
import Button from "./Button";
import "./DiaryItem.css";
import { getEmotionImgById } from "../util";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, date, emotionId, content }) => {
  // console.log(props);
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={["img_section", `img_section_${emotionId}`].join(" ")}
      >
        <img src={getEmotionImgById(emotionId)} />
      </div>
      <div onClick={goDetail} className="info_section">
        <div className="date_wrapper">
          {/* 날짜정보들어올거다 */}
          {new Date(date).toLocaleDateString()}
        </div>
        <div className="content_wrapper">
          {/* 일기 컨텐츠가 들어올거다 */}
          {content.slice(0, 25)}
        </div>
      </div>
      <div className="button_section">
        <Button text="수정하기" onClick={goEdit} />
      </div>
    </div>
  );
};

export default DiaryItem;
// img_section 공통클래스값
// 공통클래스로 img_section을 줄거다
// <div className= "img_section img_section_1">
// <div className= "img_section img_section_2">
// <div className= "img_section img_section_3">
// ...
