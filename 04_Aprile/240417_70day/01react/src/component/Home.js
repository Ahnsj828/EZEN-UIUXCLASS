import React from "react";
import { Link, useNavigate } from "react-router-dom";
// react-router-dom 에서 link라는 돔을 가져왔다 => a태그 역할한다

const Home = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/product?q=pants");
    // /product 프로덕트 전체 페이지
    //  쿼리의 값을 받은 프로덕트페이지
    // 여기서부터 쿼리값이야라는
  };

  return (
    <div className="homepage">
      <div>Home page</div>
      <Link to="/about">Go to about page</Link>
      <button onClick={goProductPage}>Go to product page</button>
    </div>
  );
};

export default Home;

//  <Link to="/about">  to="/about" => 경로
/* <link> => 어딘가로 뿅 이동하기 원할때 */
/* useNavigate( ) => 어떤 버튼 이라든지 이벤트가 작동했을때 어딘가로 이동을 원할때 */
