// import "./App.css";
// // import emotion1 from "./img/emotion1.png";
// // 가져오고자하는 이미지 경로를 변수에 담아서 가져와야한다
// // emotion1.png를 emotion1이라는 변수에 담아서 가져왔다
// import { getEmotionImgById } from "./util";

// function App() {
//   return (
//     <div className="App">
//       <h1>감정 일기장</h1>
//       {/* <img src={emotion1} /> */}
//       <img src={getEmotionImgById(1)} alt="emotion1" />
//       <img src={getEmotionImgById(2)} alt="emotion2" />
//       <img src={getEmotionImgById(3)} alt="emotion3" />
//       <img src={getEmotionImgById(4)} alt="emotion4" />
//       <img src={getEmotionImgById(5)} alt="emotion5" />
//     </div>
//   );
// }
// export default App;

//
//
//

import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>new</Link>
        <Link to={"/diary"}>diary</Link>
        <Link to={"/edit"}>edit</Link>
      </div>
    </div>
  );
}
export default App;
// Routes =>나 이제 페이지 분기할거야
// 각 분기할 페이지를 Route가 관리할거다
// path 경로를 의미
// / 메인페이지
// element 경로값을따라 갔을때 나오는거
// element={<Home />} => <Home />이라는 경로가 나오게해라

/* <Link to={"/"}>Home</Link> 누르면 메인페이지 경로로 이동하게 */
/* <Link to={"/new"}>new</Link> 누르면 new라는 페이지로 이동하게 */

// 클릭할때마다 서버에 데이터를 요청하는 방식 => 원하는 페이지로 이동할때 클릭하면 깜빡거리면서 원하는 페이지로 이동한다 => 서버사이드 랜더링 방식 => 단점 : 깜빡거릴때 데이터를 해킹할 수 있다.
// <=>
// 컴포넌트만 갈아치기

/* <Route path="/diary/:id" element={<Diary />}/> */
//  :id  => diary에서 몇번째 일기로 가라
// http://localhost:3000/diary  => 다이어리 페이지로
// http://localhost:3000/diary/1  => 첫번째 다이어리 페이지로
