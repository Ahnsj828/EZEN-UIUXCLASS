// import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";

// function App() {
//   //   const name = "Ahn";
//   const BodyProps = {
//     name: "SJ",
//     location: "서울",
//     favorlist: ["파스타", "김치볶음밥", "떡볶이"],
//   };
//   return (
//     <div className="App">
//       <Header />
//       {/* <Body name={name} location={"서울시"} /> */}
//       <Body {...BodyProps} />
//       <Footer />
//     </div>
//   );
// }
// // name은 키 / {name} value 여기에서 name은 Ahn을 의미
// // 배열과 객체값을 복사해서 또다른 곳에 쓰려면 => ... (전개연산자구문)
// export default App;

// //
// //
// //
// //
// //

// import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";

// const ChildComp = () => {
//   return <div>child component</div>;
// };

// function App() {
//   //   const name = "Ahn";
//   const BodyProps = {
//     name: "SJ",
//     location: "서울",
//     // favorlist: ["파스타", "김치볶음밥", "떡볶이"],
//   };
//   return (
//     <div className="App">
//       <Header />
//       {/* <Body name={name} location={"서울시"} /> */}
//       <Body {...BodyProps} />
//       <Footer>
//         <ChildComp />
//       </Footer>
//     </div>
//   );
// }
// // name은 키 / {name} value 여기에서 name은 Ahn을 의미
// // 배열과 객체값을 복사해서 또다른 곳에 쓰려면 => ... (전개연산자구문)
// export default App;

// /* <Footer>
// <ChildComp />
// </Footer> 컴포넌트를 보낼때는 마크업 형식 */

//
//
//
//
//

import Header from "./components/Header";
import Body from "./components/Body";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";

const ChildComp = () => {
  return <div>child component</div>;
};

function App() {
  //   const name = "Ahn";
  const BodyProps = {
    name: "SJ",
    location: "서울",
    // favorlist: ["파스타", "김치볶음밥", "떡볶이"],
  };
  return (
    <div className="App">
      <Header />
      <Body {...BodyProps} />
      <Buttons />
      <Footer>
        <ChildComp />
      </Footer>
    </div>
  );
}

export default App;
