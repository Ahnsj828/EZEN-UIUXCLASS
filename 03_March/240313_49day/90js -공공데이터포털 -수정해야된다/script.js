const lat = 37.5025398;
const lng = 127.0248679;

var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

const clusterer = new kakao.maps.MakerClusterer({
  map: map,
  // 위에 정의한 map
  averageCenter: true,
  // 클러스터 안에 알아서 잡아라
  minLevel: 12,
});

const url =
  "https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=7XmzWDCpfluZvHQEYF8ObabLYxq7uoAdmZ3BKVsq%2BsBdz9l0KJ47rQ2odqRxXVhKNKvTdX9q%2Bd0XGVUlxeAzPQ%3D%3D&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json";
// 복사붙여넣고 뒤에 &_type=json
// console.log(fetch(url));
// 중간에 10을 100으로 바꾸면 100개가 보여진다

fetch(url)
  .then((result) => result.json())
  // .then((json) => console.log(json));
  .then((json) => {
    const data = json.response.body.items.item;
    console.log(data);

    let markers = [];
    // 위에서 찾은 데이터값을 markers안에 넣으려고 배열[]을했다

    const makeOverListener = () => {
      return () => {
        infowindow.open(map, marker);
      };
    };
    const makeOutListener = () => {
      return () => {
        infowindow.close();
      };
    };

    for (let i = 0; i < data.length; i++) {
      const marker = new kakao.maps.Marker({
        // 마커를 만들거다 / 생성된 마커를 마커스에 넣을거다
        map: map,
        position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
      });

      markers.push(marker);

      const infowindow = new kakao.maps.InfoWindow({
        content: data[i].facltNm,
      });

      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, indow)
      );

      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
    }
    // console.log(markers);
    // 다 카카오 문법이다

    clusterer.addMarkers(markers);
  });
