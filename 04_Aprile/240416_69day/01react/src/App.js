import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import { useEffect, useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
// useEffect : 외부의 API값을 가져올때 사용한다
// 의존성 배열을 넣거나 빈 배열을 넣어야한다
// 위치정보를 한번만 가져오면 되는 상황이라 의존성 배열을 넣지 않아도 된다

// => 컴포넌트 안에 어떤 특정값이 이벤트로 인해서 변경이 되어야한다! = 업데이트 되어야한다!
// => useState를 사용해서 어떤 값을 변경해야한다!!

const API_KEY = process.env.REACT_APP_API_KEY;
// node를 배워야지 process의 큰 의미를 알게된다
// console.log(API_KEY);

function App() {
  const [weather, setWeather] = useState(null);

  const [city, setCity] = useState("");
  // 도시를 의미

  const [loading, setLoading] = useState(false);

  const cities = ["paris", "new york", "tokyo", "seoul"];
  // => 배열로 쓴 이유 => 반복적인 스타일을 띄고 있어서 => 이건 배열을 써야하는 이유다
  // 객체로 써도 되지만 다시 배열로 반환해야한다

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      // 위도와 경도값을 담아놓아야할 변수가 필요하다
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      // console.log("현재위치", lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    // getWeatherByCurrentLocation 현재 위치의 날씨 정보값을 가져오는거
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    // 분명 JSON형식으로 되어 있을거다
    // JSON을 가져오려면
    // JSON을 객체형식으로 바꿔야한다 => 객체화
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // async로 동기? 비동기 해줘야한다
    // await로 기다려줘야한다

    setLoading(false);
    setWeather(data);
  };

  const getWeatherByCity = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=kr&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    setLoading(false);
    setWeather(data);
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);
  // // 최초의값을 가져오게하는거 => 렌더링

  // useEffect(() => {
  //   getWeatherByCity();
  // }, [city]);
  // // city 의존성배열에 따른 값을 가져오게

  // 👇🏼 하나로 합칠거다
  useEffect(() => {
    if (city == "") {
      // city가 아무것도 선택되지 않은 상태라면
      getCurrentLocation();
      // getCurrentLocation 라는 함수를 실행할거다
    } else {
      getWeatherByCity();
      // getWeatherByCity 라는 함수를 실행할거다
    }
  }, [city]);
  // 조건부에 따라서 값을 가져오게할거다 => 렌더링할거다
  // 조건부형식으로 해서 충돌을 막은거다

  const handleCityChange = (city) => {
    if (city === "current") {
      // city가 current 매개변수 받은거랑 같다면
      setWeather(getCurrentLocation());
    } else {
      setCity(city);
    }
  };

  return (
    <div className="App">
      {loading ? (
        // loading이 참인경우
        <div className="container">
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
        </div>
      ) : (
        // loading이 거짓인경우
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton
            handleCityChange={handleCityChange}
            cities={cities}
            setCity={setCity}
          />
        </div>
      )}
      {/* <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} setCity={setCity} />
      </div> */}
    </div>
  );
}

export default App;
// WeatherBox와 WeatherButton한테 조건부 렌더링을 줄거다
// => 둘을 한 div에 넣어야한다

/* <WeatherButton cities={cities} /> */
// 객체 형식의 props
// props 를 줄때는 key와 value
