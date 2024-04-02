// import "./Body.css";
// // Body.css 파일을 가져다쓰겠다라는 뜻이다
// const Body = (props) => {
//   //   console.log(props);
//   const { name, location } = props;
//   return (
//     <div>
//       <h1>body</h1>
//       <h1>
//         {name}은 {location}에 살고 있습니다.
//       </h1>
//     </div>
//   );
// };
// // 객체 형식으로 값을 주는방법

// /* <div style={{ backgroundColor: "red", colo: "fff" }}></div> */

// // 키와 속성을 넣으려면 {}를 한번 더 써줘야한다
// // 문자형식으로도 헥스 코드로도 스타일을 줄 수 있다
// export default Body;
// // export 있어서 모듈화 되어있다
// // 인라인스타일시트는 특수문자를 못써서 background-color가 아니라 backgroundColor로 쓰는거다

// // className="body"  외부스타일시트

// /* <h1>{props}</h1> 이렇게 사용못한다 */
// //   <h1>{props.name}</h1> 이렇게 사용하면된다

// //
// //
// //
// //
// //

// import "./Body.css";
// const Body = ({ name, location, favorlist }) => {
//   //   console.log(props);
//   return (
//     <div>
//       <h1>body</h1>
//       <h1>
//         {name}은 {location}에 살고 있습니다.
//         <br />
//         {name}은 {favorlist.length}개의 최애 메뉴가 있습니다
//         <br />
//         {favorlist[1]}, {favorlist[2]}, {favorlist[3]}를 매우 사랑합니다
//       </h1>
//     </div>
//   );
// };
// export default Body;

//
//
//
//
//

import "./Body.css";
const Body = ({ name, location, favorlist }) => {
  //   console.log(props);
  return (
    <div>
      <h1>body</h1>
      <h1>
        {name}은 {location}에 살고 있습니다.
        <br />
        {name}은 {favorlist.length}개의 최애 메뉴가 있습니다
        <br />
        {favorlist[0]}, {favorlist[1]}, {favorlist[2]}를 매우 사랑합니다
      </h1>
    </div>
  );
};

Body.defaultProps = {
  favorlist: ["라면", "순대", "또뭐있지?"],
};
// favorlist: [], => favorlist값이 없다면 빈배열로라도 대체 하겠다
export default Body;
