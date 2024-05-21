// // rafce
// import React from 'react'

// const Header = () => {
// 	return (
// 		<div>Header</div>
// 	)
// }

// export default Header

const Header = () => {
  return (
    <div className="Header">
      <h3>Today is</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;
// {new Date().toDateString()} => 현 날짜정보
