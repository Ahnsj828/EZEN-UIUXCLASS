// rafce
import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  // console.log(cities);
  return (
    <div className="weatherButton">
      <Button onClick={() => handleCityChange("current")} variant="warning">
        Current Location
      </Button>
      {cities.map((it, idx) => (
        <Button onClick={() => setCity(it)} key={idx}>
          {it}
        </Button>
      ))}
      {/* {cities} 이렇게 쓰면 안된다 하나씩 꺼내서 써야한다 */}
    </div>
  );
};

export default WeatherButton;
// const WeatherButton = ( cities ) 이렇게 하면 객체만 가져오는거다
// const WeatherButton = ({ cities })  이렇게 하면 배열을 가져오는거다

/* <Button onClick={() => setCity(it)} key={idx}></Button> */
// => 버튼이 눌렸을때 setCity라는 함수가 작동되고
// setCity의 매개변수값으로 it이라는 도시이름
// 컴포넌트의 상태 변화에 따른 어떤 명령문을 실행시키고 싶다면? => useEffect
