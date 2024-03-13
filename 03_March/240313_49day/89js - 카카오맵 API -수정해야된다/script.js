// // apis.map.kakao.com

// const lat = 37.5025398;
// const lng = 127.0248679;

// const mapContainer = document.getElementById("map"), // 지도를 표시할 div
//   mapOption = {
//     center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
//     level: 3, // 지도의 확대 레벨
//   };

// // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
// const map = new kakao.maps.Map(mapContainer, mapOption);
// // 외부 api는 플러그인처럼 걔네만의 문법이 있다
// // var를 쓴 이유가 있을거다

// // 마커가 표시될 위치입니다
// const markerPosition = new kakao.maps.LatLng(lat, lng);

// // 마커를 생성합니다
// const marker = new kakao.maps.Marker({
//   position: markerPosition,
// });

// // 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);

// // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
// const iwContent =
//     '<div style="padding:5px;font-size:0.9rem"><a href="https://gn.ezenac.co.kr/" style="color:blue" target="_blank">EZEN IT😆</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
//   iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// // 인포윈도우를 생성합니다
// const infowindow = new kakao.maps.InfoWindow({
//   content: iwContent,
//   removable: iwRemoveable,
// });

// // 마커에 클릭이벤트를 등록합니다
// kakao.maps.event.addListener(marker, "click", function () {
//   // 마커 위에 인포윈도우를 표시합니다
//   infowindow.open(map, marker);
// });
//
//
// =======================================================================================
//
//
//  << 여러개 마커 표시하기 >>

// const lat = 37.5025398;
// const lng = 127.0248679;

// var mapContainer = document.getElementById("map"), // 지도를 표시할 div
//   mapOption = {
//     center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
//     level: 3, // 지도의 확대 레벨
//   };

// var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// // 마커를 표시할 위치와 title 객체 배열입니다
// var positions = [
//   {
//     title: "EZEN IT 아카데미",
//     latlng: new kakao.maps.LatLng(lat, lng),
//   },
//   {
//     title: "더조은IT아카데미학원",
//     latlng: new kakao.maps.LatLng(37.4934641, 127.0285998),
//   },
//   {
//     title: "하이미디어 아카데미",
//     latlng: new kakao.maps.LatLng(37.4987358, 127.0266779),
//   },
//   {
//     title: "그린아이티아카데미학원",
//     latlng: new kakao.maps.LatLng(37.4997906, 127.0282769),
//   },
// ];

// // 마커 이미지의 이미지 주소입니다
// var imageSrc =
//   "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

// for (var i = 0; i < positions.length; i++) {
//   // 마커 이미지의 이미지 크기 입니다
//   var imageSize = new kakao.maps.Size(24, 35);

//   // 마커 이미지를 생성합니다
//   var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

//   // 마커를 생성합니다
//   var marker = new kakao.maps.Marker({
//     map: map, // 마커를 표시할 지도
//     position: positions[i].latlng, // 마커를 표시할 위치
//     title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//     image: markerImage, // 마커 이미지
//   });
// }
//
//
// =======================================================================================
//
//
//  << 마커 클러스터 활용하기 >>

const lat = 37.5025398;
const lng = 127.0248679;

// const map = new kakao.maps.Map(document.getElementById("map"), {
//   // 지도를 표시할 div
//   center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
//   level: 14, // 지도의 확대 레벨
// });

const mapContainer = document.querySelector("#map");
const mapOption = {
  center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
  level: 10, // 지도의 확대 레벨
  // 14면 북한도 보인다
};

const map = new.kakao.maps.Map(mapContainer, mapOption)

// 마커 클러스터러를 생성합니다
const clusterer = new kakao.maps.MarkerClusterer({
  map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
  averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
  minLevel: 10, // 클러스터 할 최소 지도 레벨
});

// // 데이터를 가져오기 위해 jQuery를 사용합니다
// // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
// $.get("/download/web/data/chicken.json", function (data) {
//   // 데이터에서 좌표 값을 가지고 마커를 표시합니다
//   // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
//   var markers = $(data.positions).map(function (i, position) {
//     return new kakao.maps.Marker({
//       position: new kakao.maps.LatLng(position.lat, position.lng),
//     });
//   });

//   // 클러스터러에 마커들을 추가합니다
//   clusterer.addMarkers(markers);
// });

//
//

// 클러스터를 사용할주소
const positions = [
  {
    title: "EZEN IT 아카데미",
    latlng: new kakao.maps.LatLng(lat, lng),
  },
  {
    title: "더조은IT아카데미학원",
    latlng: new kakao.maps.LatLng(37.4934641, 127.0285998),
  },
  {
    title: "하이미디어 아카데미",
    latlng: new kakao.maps.LatLng(37.4987358, 127.0266779),
  },
  {
    title: "그린아이티아카데미학원",
    latlng: new kakao.maps.LatLng(37.4997906, 127.0282769),
  },
];

let markers = [];

for (let i = 0; i < positions.length; i++) {
  const marker = new kakao.maps.Marker({
    map: map,
    position: positions[i].latlng,
  });

  markers.push(marker);

  const infowindow = new kakao.maps.infowindow({
    content: positions[i].title,
  });

  const makeOverListener = (map, marker, infowindow) => {
    return () => {
      infowindow.open(map, marker);
    };
  };

  const makeOutListener = (infowindow) => {
    return () => {
      infowindow.close();
    };
  };

  kakao.maps.event.addListener(
    marker,
    "mouseover",
    makeOverListener(map, marker, infowindow)
  );

  kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow));
}
// 이건 카카오의 문법이다

clusterer.addMarkers(markers);
