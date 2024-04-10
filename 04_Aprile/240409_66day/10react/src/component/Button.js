// button 컴포넌트는 모든요소에 공통으로 사용할거라 component폴더에 만든거다

import React from "react";
import "./Button.css";

const Button = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    // <button className="Button" onClick={onClick}>
    <button
      className={["Button", `Button_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
// true냐 false 를 알아보는 함수 includes()
// 안에있는 배열의 값이 존재하면 true 없으면 false
// filter안에 들어가는 콜백함수로 ture인지 false인지 확인하고 그안에 값을넣고 새로 결과값얻을때 => filter

// join() 문자열로 만들어주는 함수
