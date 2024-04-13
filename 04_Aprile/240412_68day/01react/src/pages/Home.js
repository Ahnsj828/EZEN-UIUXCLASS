// import Editor from "../component/Editor";

// const Home = () => {
//   return (
//     <div>
//       {/* <Editor /> */}
//       <Editor
//         initData={{
//           // 원래 props형태로 객체로 보냈다
//           // 이 props 객체 안에 들어가야하는 요소가 객체라서 객체를 두번쓴거다 {{}}
//           date: new Date().getTime(),
//           emotion: 1,
//           content: "이전에 작성한 일기",
//         }}
//         onSubmit={() => {
//           alert("작성완료 버튼을 클릭했음");
//         }}
//       />
//     </div>
//   );
// };

// export default Home;

//
//
//

import Button from "../component/Button";
import Header from "../component/Header";
import DiaryList from "../component/DiaryList";
import { DiaryStateContext } from "../App";
// DiaryStateContext를 useContext의 매개변수로 찾아와야한다
import { getMonthRageByDate } from "../util";
import { useState, useContext, useEffect } from "react";

const Home = () => {
  const data = useContext(DiaryStateContext);
  // console.log(data);

  const [pivotDate, setPivotDate] = useState(new Date());
  //여기서useState => 좌우측 화살표를 눌렀을때 안에들어간값을 변경하기위해서

  const [filteredData, setFilteredData] = useState([]);
  //여기서useState =>  일기에 대한 출력순서를 바꾸기 위해서

  useEffect(() => {
    if (data.length > 1) {
      // 일기가 1개 이상 있다면 => 하나라도 있다면
      const { beginTimeStamp, endTimeStamp } = getMonthRageByDate(pivotDate);
      // console.log(beginTimeStamp, endTimeStamp);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [pivotDate, data]);

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const onIncreaseMonth = () => {
    // 월에대한 정보값이 필요하고 하나씩만 증가하게해야한다
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    // getFullYear 연 정보값
    // getMonth 월 정보값 / 월을 가져오면 -1값으로 오니까 +1한거다
  };
  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  return (
    <div>
      <Header
        // title="2024년 4월"
        title={headerTitle}
        leftChild={<Button text="<" onClick={onDecreaseMonth} />}
        rightChild={<Button text=">" onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
    </div>
  );
};

export default Home;

// title="2024년 4월"이거를 월이 바뀔때마다 수동으로 바꿀 수 있겠지만 너무 비효율적이다
// 👉🏼 "새로운 달이 되면 해당 월에 맞는 '새로운 정보로 업데이트' "가 되어야한다!!!!
// 업데이트가 필요하다? => state값이 변경 될 필요가 있고, 변경할 수 있도록 관리해줘야할 필요가있다
// => useState를 써야한다!!!

// rightChild 누를때마다 월이 증가해야한다 5월, 6월, 7월 ...
// onClick={onIncreaseMonth} 이 버튼 누를때마다 onIncreaseMonth함수가 실행하게해줘
