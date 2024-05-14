import React from "react";
import { useParams, Outlet, Link, useOutletContext } from "react-router-dom";
// 파라미터 값을 줘야된다 => useParams
import { users } from "./db";

const User = () => {
  // console.log(useOutletContext());
  // const params = useParams();
  const { userId } = useParams();
  // console.log(params);
  return (
    <>
      <h1>
        User With {userId} is name: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to={"followers"}>See Followers</Link>
      <Outlet context={{ nameOfMyUsers: users[Number(userId) - 1].name }} />
    </>
  );
};

export default User;
//  <Link to={"/followers"}></Link>  절대경로
//    => 누르면 그 페이지로 이동
//  <Link to={"followers"}></Link>  상대경로
//    => 누르면 그 페이지로 이동하는게 아니라 밑에 나오게
