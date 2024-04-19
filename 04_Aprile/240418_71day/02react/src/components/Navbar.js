// 어느 페이지를 가던 상단에 공통으로 들어갈 네비게이션 영역
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faL, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const menuList = [
  "인기",
  "상의",
  "아우터",
  "바지",
  "원피스",
  "스커트",
  "스니커즈",
  "신발",
];

function Navbar({ authenticate, setAuthenticate }) {
  // console.log(props);
  const navigate = useNavigate();
  const onCheckEnter = (e) => {
    // console.log(e);
    if (e.key === "Enter") {
      // 마지막으로 누른 키가 enter키면
      navigate(`?q=${e.target.value}`);
      e.target.value = "";
      // e.target.value = ""; 검색하고 검색 키워드 리셋시키려고(지우려고)
    }
  };

  return (
    <div>
      <div className="nav-header">
        <div className="toggle-menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)} className="login-menu">
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")} className="login-menu">
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </div>
        )}
      </div>
      <div className="nav-logo">
        <Link to="/">
          <img
            width={120}
            src="https://dimg.donga.com/wps/NEWS/IMAGE/2021/06/03/107254622.2.jpg"
            alt="img"
          />
        </Link>
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, idx) => (
            <li key={idx}>
              <Link to="#">{menu}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input onKeyUp={onCheckEnter} type="text" placeholder="상품검색" />
      </div>
    </div>
  );
}

export default Navbar;

{
  /* <li>
	<link to="#">상의</link>
</li> 
<li>
	<link to="#">아우터</link>
</li>
<li>
	<link to="#">바지</link>
</li>
<li>
	<link to="#">원피스</link>
</li>
<li>
	<link to="#">스커트</link>
</li>
<li>
	<link to="#">스니커즈</link>
</li>
<li>
	<link to="#">신발</link>
</li>
<li>
	<link to="#">가방</link>
</li> */
}
// 👇🏼
{
  /* <ul className="menu">
          {menuList.map((menu) => (
            <li>
              <link to="#">{menu}</link>
            </li>
          ))}
        </ul> */
}

// alt = "img"
// 이런거 안써줘도 되는데 맨니파이? 라는 배포 프로그램에서는 다 써줘야한다

// import { faSearch } from "@fortawesome/free-solid-svg-icons";

// fa FontAwesome
