// const Box = (props) => {
//   console.log(props);
//   //   props는 객체다
//   return (
//     <div>
//       <h1>{props.title}</h1>
//     </div>
//   );
// };
// export default Box;
// // export default Box; 모듈화 되게 만들었다
// --------------------------------------
// 구조분해할당으로 객체의 값을 동일한변수로 가져오고싶다면👇🏼 이렇게 축약할 수 있다
const Box = ({ title, item, result }) => {
  console.log(title);
  //   props는 객체다

  if (title === "computer" && result !== "tie" && result !== "") {
    // title === "computer" 이게 존재한다면
    // tie가 아닐때 / 컴퓨터가 lose이거나 win이거나
    result = result === "win" ? "lose" : "win";
    // result = result === "win"사용자가 이겼다고 한다면 "lose"
    // 아니라면 "win"
  } else {
    result = result;
  }
  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <img className="item-img" src={item?.img} />
      <h2>{result}</h2>
    </div>
  );
};
export default Box;

/* <img className="item-img" src={item && item.img} />
단락회로 평가 형식으로 작성 */
// 👇🏼
/* <img className="item-img" src={item?.img} /> 줄이기 */

/* <div className="box">  =>  */
// 문자열과 변수를 같이 주고싶을 때 ``빽팃
