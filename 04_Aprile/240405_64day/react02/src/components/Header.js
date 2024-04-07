import React from "react";
// 마운트가 딱 될때에만 나온다 / 처음 랜더링할때에만 나온다
import "./Header.css";
// rafc
// import React from 'react'

// export const Header = () => {
//   return (
// 	<div>Header</div>
//   )
// }

const Header = () => {
  //   console.log("Header 업데이트");
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};
// export default Header;
export default React.memo(Header);
