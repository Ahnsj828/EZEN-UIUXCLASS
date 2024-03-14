// import { API_KEY } from "./env.js";

const getCurrentWeather = (latitude, longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4830d6f07dfd9073ab96710b250b79ed`;
  // `` 하고 안에 붙여 넣기 => latitude, longitude 바꿔주기
  // 뒤에 &appid=${API+KEY}
  // API+KEY를 다른 파일에 넣었으니 연결해야되서
  // 결국 원래 하던방법으로 다시 바꿨다..

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const city = document.querySelector(".city");
      const weather = document.querySelector(".weather");
      const temp = document.querySelector(".temp");
      const icon = document.querySelector(".icon");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = `data.main.temp `;
      icon.src = `http://openweathermap.org/wn/${data.weather[0].icon}@2x.png`;
    });
};

const getPosition = (position) => {
  // console.log(position);
  const { latitude, longitude } = content.ccoords;
  // console.log(latitude, longitude);
  // 사용자의 위치와 정보
  getCurrentWeather(latitude, longitude);
};

const errorHadler = (error) => {
  // 에러가 발생한다면 에러 객체가 생성된다
  // 통신이 안되거나 서버가 문제가 생겼을때
  const noti = document.querySelector(".noti");
  noti.style.diplay = "block";
};

if (navigator.geolocation) {
  // navigator안에 geolocation존재한다면
  navigator.geolocation.getCurrentPosition(getPosition, errorHadler);
  // window는 생략이 가능하다
} else {
  // 만약 geolocation이 불가한 상황이라면
  alert("geolocation is not available");
}
