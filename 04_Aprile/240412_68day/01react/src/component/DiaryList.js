// 일기를 보여줄 컴포넌트
// rafce
import React from "react";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";
import { useState, useEffect } from "react";
// 값이 업데이트 되어야하니까useState
import { useNavigate } from "react-router-dom";

const sortOptionList = [
  // 이 배열안에는 option태그가 가지고있는 정보를 객체로 갖을거다
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const DiaryList = ({ data }) => {
  // console.log(data);

  const [sortType, setSortType] = useState("latest");
  // latest 초기값
  const [sortedData, setSortedData] = useState([]);

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const navigate = useNavigate();
  const onClickNew = () => {
    navigate("/new");
  };
  useEffect(() => {
    const compare = (a, b) => {
      // 오름차순 내림차순
      if (sortType === "latest") {
        // 오름차순
        // 큰숫자에서 낮은숫자로
        return Number(b.date) - Number(a.date);
        // b.date - a.date 뒤 인자값 - 앞 인자값
        // Number 숫자로
        // 오름차순  낮은순서에서 큰순서
      } else {
        return Number(a.date) - Number(b.date);
        // 최신순 내림차순
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    // 부모에게 받은 일기데이터를 stringify로 JSON데이터로 바꾼거다

    data.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType} onChange={onChangeSortType}>
            {/* 변화가 생긴다면 onChangeSortType함수가 실행되게하라 */}
            {/* 내림차순과 오름차순을 할 버튼 */}
            {/* <option value={"latest"}>최신순</option>
            <option value={"oldest"}>오래된순</option> */}
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
        <div className="right_col">
          <Button text="새 일기 쓰기" type="positive" onClick={onClickNew} />
        </div>
      </div>
      <div className="list_wrapper">
        {sortedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;

// {sortOptionList} => 배열을 가져다 쓸때는 {}
// {sortOptionList.map((it, index) =>)} => it item / index 인덱스값

// 실무에서 이런 option 태그가 20~ 30개 많이 만들기도 하고 값을 변경하기도 해서 이렇게 사용하는거다

// 새일기쓰기라는 버튼을 누르면 다른 페이지로 넘어가게
