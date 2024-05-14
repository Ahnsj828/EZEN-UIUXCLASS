import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { users } from "./db";

const Home = () => {
  // const users: any[] = [];
  // return <h1>Home</h1>;
  const [readSearchParams, setSearchParams] = useSearchParams();
  // 첫번째 매개변수(readSearchParams) - 쿼리스트링값
  // 두번째 매개변수(setSearchParams) - 쿼리스트링값을 변경하거나 수정하거나 기능을 부여할 수 있다
  // console.log(readSearchParams);
  // console.log(readSearchParams.has("geo")); // geo라는게 존재하냐? / boolean
  // console.log(readSearchParams.get("geo")); // geo라는거 찾아와줄래? / 없는 값이라 null

  setTimeout(() => {
    setSearchParams({
      day: "today",
      tomorrow: "123",
    });
  }, 3000);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
