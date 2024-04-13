/* 특정 감정을 선택했을때 선택한것을 인식시키려고 백그라운드 색을 변경하려고한다 => 별도의 컴포넌트를 만듦 */

import React from "react";
import "./EmotionItem.css";

const EmotionItem = ({ id, img, name, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <div
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`,
      ].join(" ")}
      onClick={handleOnClick}
    >
      <img src={img} alt={`emotion${id}`} />
      <span>{name}</span>
    </div>
  );
};

export default EmotionItem;
// div className="EmotionItem isSelected"
// 👇🏼 두개 다 줄때
// div className={["EmotionItem", isSelected]}
