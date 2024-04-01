import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// function Header() {
//   //H 대문자 => Header 라는 자식컴포넌트를 만들겠다
//   // 함수형태의 컴포넌트를 만들어야한다
//   // 클래스 이름으로 컴포넌트는 구식이다
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   )
// }
// const Header = () => {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// };
// 이렇게 화살표 함수 형식으로도 만들수 있다 / 똑같다

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
