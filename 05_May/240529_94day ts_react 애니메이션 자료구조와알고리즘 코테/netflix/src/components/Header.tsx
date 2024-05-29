import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import { Link, useMatch } from "react-router-dom";
// Link => a태그와 동일한 역할
// useMatch=> 특정 경로를 매개변수로 할당해서 그 파라미터에 갔을때 반환되는 값으로...
// useAnimation => 하나의 이벤트에 복수의 애니메이션이 일어나야할 경우에 사용
// useScroll => scroll이 얼마나 되었는가에 따라

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; // 스크롤내리면 위에 고정되게
  top: 0;
  width: 100%;
  height: 80px;
  /* background-color: #000; */
  color: #fff;
  font-size: 18px;
  padding: 0 20px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red};
  path {
    stroke: ${(props) => props.theme.red};
    stroke-width: 10px;
  }
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.red};
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    color: ${(props) => props.theme.red};
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -10px;
  margin: 0 auto;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.red};
`;

const Search = styled.span`
  color: ${(props) => props.theme.red};
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
  }
`;

const Input = styled(motion.input)`
  position: absolute;
  /* left: -190px; */
  transform-origin: right center;
  right: 0;
  padding: 5px 10px;
  padding-left: 40px;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.white.lighter};
  border-radius: 4px;
  background-color: transparent;
  color: #fff;
  z-index: -1;
`;
// 가운데에서 줄어들었다가 가운데에서 커지는거 => 중심점을 가운데로 해서 그렇다
// transform-origin: right center; => 오른쪽 중앙으로 중심점을 바꿨다

const logoVariants = {
  normal: { fillOpacity: 1 },
  // active: { fillOpacity: 0 },
  active: {
    // fillOpacity: [0, 0.5, 0, 0.7, 0, 0.2, 1, 0],
    fillOpacity: [0, 1, 0],
    // scale: [1, 1.5, 1.2, 0, 1],
    transition: { repeat: Infinity },
  },
}; // fillOpacity => css 속성이다 / svg 속성
// transition: { repeat: 5 } => repeat: 5 =>  다섯번 반복 / repeat: Infinity=> 무한반복
// scale: [1, 1.5, 1.2, 0, 1] => 크기가 커졌다가 작아졌다가도 된다

const navVariants = {
  top: { backgroundColor: "rgba(255, 255, 255, 0)" },
  scroll: { backgroundColor: "rgba(255, 255, 255, 1)" },
};

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({
        scaleX: 1,
      });
    }
    setSearchOpen((prev) => !prev);
  };

  const homeMatch = useMatch("/");
  const tvMatch = useMatch("/tv");
  // homeMatch가 true일때 tvMatch가 null값되고 또 반대가 되고 => 이에 따라 가져오는 값이 다르게

  const inputAnimation = useAnimation();
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.on("change", () => {
      if (scrollY.get() > 80) {
        navAnimation.start(
          // backgroundColor: "rgba(0, 0, 0, 0)",
          // navigation.
          "scroll"
        );
      } else {
        navAnimation.start(
          // backgroundColor: "rgba(0, 0, 0, 1)",
          "top"
        );
      }
    });
  }, [scrollY]);

  return (
    <Nav variants={navVariants} animate={navAnimation} initial="top">
      <Col>
        <Logo
          variants={logoVariants}
          initial="normal"
          whileHover="active"
          width="1024"
          height="276.742"
          viewBox="0 0 1024 276.742"
        >
          <motion.path
            xmlns="http://www.w3.org/2000/svg"
            d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
          />
        </Logo>
        <Items>
          <Item>
            <Link to="/">HOME</Link>
            {homeMatch && <Circle layoutId="circle" />}
          </Item>
          <Item>
            <Link to="/tv">TV SHOWS</Link>
            {tvMatch && <Circle layoutId="circle" />}
          </Item>
        </Items>
      </Col>
      <Col>
        <Search>
          <motion.svg
            onClick={toggleSearch}
            animate={{ x: searchOpen ? -216 : 0 }}
            transition={{ type: "linear" }}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </motion.svg>
          <Input
            type="text"
            placeholder="Search for movie or tv..."
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
            transition={{ type: "linear" }}
          />
        </Search>
      </Col>
    </Nav>
  );
};

export default Header;

// svg에 로고 들어갈거다
// ul에 메뉴 들어갈거다

{
  /* <Item>
	<Link to="/">Home</Link>
	{homeMatch && <Circle />}
</Item>
home일때 Circle이 나오게 해라 */
}

// animate => 애니메이션이 실행되었을때
// animate={{ scaleX: searchOpen ? 1 : 0 }} => 클릭했을때 나오고 클릭했을때 닫고
