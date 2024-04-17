import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  // 앞에 navigate 는 아무거나 적어도 된다 / 직관적이고 명시적으로
  const goToHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      <div>About page</div>
      <button onClick={goToHomepage}>Go to Home page</button>
    </div>
  );
};

export default About;
