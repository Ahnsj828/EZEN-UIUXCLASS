import "./App.css";
// import React from "react"; 👇🏼밑에랑 뿌리가 같으니까 합쳐라

// < 리액트 훅 > 주석 안달아도 된다 그냥 같은 성향끼리만 묶어서 놓아라
import React, { useReducer, useRef, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
// < 컴포넌트 >
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime() - 1,
    emotionId: 1,
    content: "mock1",
  },
  {
    id: "mock2",
    date: new Date().getTime() - 2,
    emotionId: 2,
    content: "mock2",
  },
  {
    id: "mock3",
    date: new Date().getTime() - 3,
    emotionId: 3,
    content: "mock3",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state];
      // ...state 그전에 존재한 데이터는 두는데
      // action.data 새로운게 추가되면 넣겠다
    }
    case "UPDATE": {
      return state.map((it) =>
        // it.id === action.data.id ? { ...action.data } : it
        // 이렇게 하면 나중에 작동이 잘 안될 수 있다
        // 형변환시켜야한다 / 문자로 / String()
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
    default: {
      return state;
    }
  }
};

export const DiaryStateContext = React.createContext();

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  // 초기값으로 0을 할당하겠다
  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);
  const onCreate = (date, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        // current라는 key
        date: new Date(date).getTime(),
        emotionId,
        content,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, emotionId, content) => {
    // 업데이트 => 날짜, 감정, 일기, 일기 아이디값
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        emotionId,
        content,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };
  if (!isDataLoaded) {
    // !isDataLoaded 데이터를 가져오지 못한 상황
    return <div>데이터를 불러오는 중입니다.</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
          {/* <div>
					<Link to={"/"}>Home</Link>
					<Link to={"/new"}>New</Link>
					<Link to={"/diary"}>Diary</Link>
					<Link to={"/edit"}>Edit</Link>
				</div> */}
        </div>
      </DiaryStateContext.Provider>
    );
  }
}
{
  /* <Route path="/edit/:id" element={<Edit />} />
/:id" => 몇번째 일기를 수정하러 갈것인지 , 몇번째 일기를 찾으러 갈것인지를 위해 */
}

export default App;
