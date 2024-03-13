// const getLocation = document.querySelector("#getLocation");

// const showPosition = (position) => {
//   // console.log(position);
//   // 위도값 경도값을 찾아주는애다
//   document.querySelector(
//     "#result"
//   ).innerHTML = `<b>위도 : ${position.coords.latitude}</b>, <b>경도 : ${position.coords.longitude}</b> `;
//   // innerHTML 태그와 함께 문자열에 대한 정보값을 주겠다
//   // coords 좌표값
// };

// const errorPosition = (err) => {
//   // 정보를 가져오지 못했을때
//   // 이벤트가 발생했을때 이벤트가 생기듯이 err도
//   // 사용자가 위치서비스를 허용하지 않았을때
//   alert(err.message);
// };

// getLocation.addEventListener("click", () => {
//   // 클릭하게된다면 이벤트를 주게할거다
//   // console.log("click");
//   if (window.navigator.geolocation) {
//     window.navigator.geolocation.getCurrentPosition(
//       // getCurrentPosition() 이 함수를 통해서 값을 찾아오겠다
//       // getCurrentPosition() 두개 매개변수 가져온다 /
//       //  => 정상적으로 가져왔을때 실행할 함수 showPosition
//       //  => 사용자가 거부했을때 실행할 함수 errorPosition
//       showPosition,
//       // 정상적으로 사용자 데이터 가져왔을때
//       errorPosition
//       // 만약 사용자가 위치 서비스를 허용하지않았을때 발생하는 함수다

//       // geolocation 가 api기능을 한다 / 위도 경도를 가져온다 => 그래서 api다
//     );
//   } else {
//     alert("지오로케이션을 지원하지 않습니다.");
//     // 윈도우를 사용하지 않는 디바이스 일 경우
//   }
// });

//
//
// ===================================================================================
//
// 차 네비게이션 (이동하면서 자동적을 내 위치를 찾는 기능)
// 나의 위치를 업데이트하는거

const getLocation = document.querySelector("#getLocation");

const showPosition = (position) => {
  // console.log(position);
  // 위도값 경도값을 찾아주는애다
  document.querySelector(
    "#result"
  ).innerHTML = `<b>위도 : ${position.coords.latitude}</b>, <b>경도 : ${position.coords.longitude}</b> `;
};

const errorPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    // window 생략가능해서 생략했다
    navigator.geolocation.getCurrentPosition(showPosition.errorPosition);

    const option = {
      enableHighAccuarcy: true,
      timeout: 5000,
      // 위치값을 기다리는데 시간
      maximumAge: 0,
      // 받아온 정보를 보관할 수 있는
      // 0 새로운 정보 받아오면 폐기
    };

    const watchID = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      option
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchID);
    }, 10000);
    // 1분에 한번씩 업데이트할거다 내 위치 가져갈건지 물어보지 않고 계속 업데이트를 시켜주는거
  } else {
    alert("지오로케이션을 지원하지 않는 기기입니다");
  }
});

// clearWatch 새로운값을 찾아오면 바뀐값을 계속 업데이트한
// getCurrentPosition 우리가 위치 정보를 찾아와 => 1회적으로 찾아온다
// watchPosition 지정한시간마다 , 위치값을 찾아온다
