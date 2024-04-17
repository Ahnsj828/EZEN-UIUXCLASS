// rafce
import React from "react";

const cityName = (city) => {
  switch (city) {
    case "Paris":
      return "파리";
    case "New York":
      return "뉴욕";
    case "Tokyo":
      return "도쿄";
    case "Seoul":
      return "서울";
    case "Jamwon-dong":
      return "잠원동";
  }
};

const WeatherBox = ({ weather }) => {
  console.log(weather);

  return (
    <div className="weatherBox">
      {/* <div>도시명 : 서울</div>
      <div>온도 : 21도 / 습도 : 48%</div>
      <div>날씨상태 : 비 조금내린 뒤 맑음</div> */}
      <h2>도시명 : {weather?.name && cityName(weather.name)}</h2>
      <h2>
        온도 : {weather?.main.temp}℃ / 습도 : {weather?.main.humidity}％
      </h2>
      {/* <h2>현재날씨 : {weather?.weather[0].main}</h2> */}
      <h2>현재날씨 : {weather?.weather[0].description}</h2>
    </div>
  );
};

export default WeatherBox;
