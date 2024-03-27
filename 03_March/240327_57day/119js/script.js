const cityOption = document.querySelector("#city");
// 도시선택란
// console.log(cityOption);
const stateOption = document.querySelector("#state");
const searchBar = document.querySelector(
  ".shopsearch_filter input[type='text']"
);
// console.log(searchBar);
const searchForm = document.querySelector(".shopsearch_filter form");
const searchButton = document.querySelector(".shopsearch_filter sapn");
// console.log(searchButton);
const checkBoxs = document.querySelectorAll(
  ".shopsearch_filter input[type'checkbox']"
);
// console.log(checkBoxs);
const tableBody = document.querySelector(".shopinfo_table tbody");
const pageNationContainer = document.querySelector(".shopinfo_pager ul");

// table data making
const createRow = (data) => {
  const row = document.createElement("tr");
  // tr을 생성
  row.id = data.store;
  row.innerHTML = `
  <td>${data.store}<td/>
  <td>${data.main_area}<td/>
  <td>${data.address}<td/>
  <td>${data.tel}<td/>
  <td>${data.service
    .map((service) => `<i class="${service}"></i>`)
    .join("")}</td>
  `;
  return row;
};

// data rendering
const itemPerPage = 5;
// 한페이지당 5개의 인덱스들이 있어야한다
let currentPage = 1;
// 새로고침하면 항상 첫번째 페이지에서 시작한다

const renderData = (data) => {
  // const startIndex = (currentPage - 1) * itemPerPage;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  // 2번페이지에 첫번째 인덱스는 5번
  const currentPageData = data.slice(startIndex, endIndex);
  // currentPageData도 배열이다

  tableBody.innerHTML = "";
  // 리셋을 시켜줘야한다
  // 2페이지가면 1페이지 내용도 남는거를 지워줘야한다

  currentPageData.forEach((item) => {
    const row = createRow(item);
    tableBody.appendChild(row);
  });
};

// page nation
const renderpagination = (data) => {
  pageNationContainer.innerHTML = "";
  // 리셋을 시켜줘야한다
  // 6페이지가면 5페이지 내용도 남는거를 지워줘야한다

  const totalDataLength = data.length;
  // 총 데이터
  // console.log(totalDataLength);
  if (totalDataLength <= itemPerPage) {
    // 해당 도시의 포함되는 매장수가 5개를 초과했을때에만 페이저가 필요하다
    return;
  }
  const totalPages = Math.ceil(totalDataLength / itemPerPage);
  const currentPageGroup = Math.ceil(currentPage / itemPerPage);
  // 총만들어야하는 페이지 갯수
  // ceil 나머지 올림

  if (currentPageGroup > 1) {
    // 페이지가 1개를 초과했을때
    const prevGroupButton = document.createElement("li");
    prevGroupButton.innerText = "◀";
    prevGroupButton.addEventListener("click", () => {
      currentPage = (currentPageGroup - 1) * 5;
      renderData(data);
      renderpagination(data);
    });
    pageNationContainer.appendChild(prevGroupButton);
  }

  for (
    let i = (currentPageGroup - 1) * 5 + 1;
    i <= Math.min(currentPageGroup * 5, totalPages);
    i++
  ) {
    const pageLink = document.createElement("li");
    pageLink.innerText = i;
    pageLink.addEventListener("click", () => {
      currentPage = i;
      renderData(data);
    });
    if (i === currentPage) {
      pageLink.classList.add("active");
    }
    pageNationContainer.appendChild(pageLink);
  }
  if (currentPageGroup < Math.ceil(totalPages / 5)) {
    const nextGroupButton = document.createElement("li");
    nextGroupButton.innerText = "▶";
    nextGroupButton.addEventListener("click", () => {
      currentPage = currentPageGroup * 5 + 1;
      renderData(data);
      renderpagination(data);
    });
    pageNationContainer.appendChild(nextGroupButton);
  }
  const li = document.querySelectorAll("li");
  // console.log(li);
  li.forEach((item) => {
    // 밑에 페이지 클릭하면 그 페이지 색이생긴다
    item.addEventListener("click", () => {
      li.forEach((item) => item.classList.remove("active"));
      // 여러 요소한테 이벤트 주려면 이벤트를 제거해줘야한다
      item.classList.add("active");
    });
  });

  const lastPageButton = document.createElement("li");
  lastPageButton.style.width = 50 + "px";
  lastPageButton.innerText = "마지막";
  // 마지막페이지 버튼
  lastPageButton.addEventListener("click", () => {
    currentPage = totalPages;
    renderData(data);
    renderpagination(data);
  });
  pageNationContainer.appendChild(lastPageButton);
};

// jsonData
const cityList = "./cityInfo.json";
const storeList = "./storeInfo.json";

let cityInfo;
// 재할당해야되서 const 안쓰고 let으로 쓴거다
// cityInfo를 밖에서 전역변수로 할당해줘서 어디서든 사용가능하다
let storeInfo;

fetch(cityList)
  .then((response) => response.json())
  // .then((data) => console.log(data));
  .then((data) => {
    cityInfo = data;
    for (let city in cityInfo) {
      const option = document.createElement("option");
      option.value = city;
      option.id = city;
      option.innerText = city;
      cityOption.appendChild(option);
      // 객체 안의 키값을 찾아와서 반복문을 써주려고할때 => for
    }
  });

fetch(storeList)
  .then((response) => response.json())
  // .then((data) => console.log(data));
  .then((data) => {
    storeInfo = data;
    renderData(storeInfo);
    renderpagination(storeInfo);
    // storeList는 제이슨 데이터라 바로 함수에 못가져온다
  });

// cursor move (마우스 커서가 이동했을때 이벤트)
const cursor = document.querySelector("#cursor");
// console.log(cursor);

// cursor pageX, Y
let x = 0;
let y = 0;

// cursor original & speed
let targetX = 0;
let targetY = 0;
let speed = 0.1;

window.addEventListener("mousemove", (e) => {
  // console.log("move");
  x = e.pageX;
  y = e.pageY;
  // console.log(x, y);
});

// 재귀함수
const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursor.style.top = targetY + "px";
  cursor.style.left = targetX + "px";
  window.requestAnimationFrame(loop);
};
loop();

const showCursorRotate = () => {
  cursor.classList.add("active");
};
// active 클래스가 작동하게
const hideCursorRotate = () => {
  cursor.classList.remove("active");
};
// active 클래스가 작동하지 않게

// load spinner
const spinner = document.querySelector(".spinner");
// console.log(spinner);
const showSpinner = () => {
  spinner.classList.remove("hiddenspinner");
  // 웹브라우저가 열리고 데이터를 찾으면 스피너감줘저 있는 효과를 제거해서 보이게
};
const hiddenspinner = () => {
  spinner.classList.add("hiddenspinner");
};
showSpinner();
setTimeout(() => {
  hiddenspinner();
}, 1000);

// << map click event >>
const mapAreas = document.querySelectorAll(".shopsearch_map > div");
// console.log(mapAreas);
// 유사배열 보면 반복문 생각해라
mapAreas.forEach((area) => {
  area.addEventListener("click", (e) => {
    // console.log("click");
    showCursorRotate();
    // 지역을 클릭하면 마우스효과 이미지가 돌거다
    setTimeout(() => {
      hideCursorRotate();
    }, 1000);
    // 1초뒤에 hideCursorRotate함수가 작동된다(1초뒤에는 돌지 않을거다)

    showSpinner();
    setTimeout(() => {
      hiddenspinner();
    }, 1000);

    mapAreas.forEach((area) => area.classList.remove("active"));
    area.classList.add("active");
    // 클릭한 지역만 빨갛게
    // 특정요소한테만 이벤트 주게하려면 이벤트를 제거해야한다

    const clickedCity = e.target.id;
    // 클릭한 지역의 아이디값을 찾아오겠다
    // console.log(clickedCity);

    const matchedCityInfo = storeInfo.filter(
      (city) => city.main_area === clickedCity
    );
    // console.log(matchedCityInfo);
    tableBody.innerHTML = "";
    // 지도에서 지역을 클릭하면 하단에 매장안내가 리셋되게
    if (matchedCityInfo.length > 0) {
      renderData(matchedCityInfo);
      // 지도에서 지역을 클릭하면 하단에 매장안내에 해당 매장정보들 나오게
      if (matchedCityInfo.length >= 5) {
        renderpagination(matchedCityInfo);
      } else {
        pageNationContainer.innerHTML = "";
        // 5개 미만이면 페이지네이션이 필요없어서 없애버린다
      }
    }

    cityOption.value = clickedCity;
    cityOption.dispatchEvent(new Event("change")); // 이게 가장중요!
    // dispatchEvent 이벤트가 실행되었다를 알려주는 함수
  });
});

// 도시명이 바뀌면 도시명에 해당하는 구와군으로 바꿀거다
// city option change event
cityOption.addEventListener("change", () => {
  // console.log("change");
  currentPage = 1;
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
  setTimeout(() => {
    hiddenspinner();
  }, 1000);

  // 지역검색 옵션 태그로 지역을 바꿔도 change되게
  // 변경된 도시의 value값
  const selectedCity = cityOption.value;
  // console.log(selectedCity);

  // 지역검색 첫번째 도시를 선택하면 두번째 구/군나오게
  if (selectedCity !== "none") {
    // 아무것도 선택되지 않은 상황이 아니라면 / 무엇이든 선택한다면
    stateOption.innerHTML = "<option>구/군 선택</option>";
    if (cityInfo[selectedCity]) {
      // 도시명이 존재한다고 한다면
      cityInfo[selectedCity].forEach((cityItem) => {
        // cityInfo[selectedCity] 배열 => forEach

        const option = document.createElement("option");
        option.innerText = cityItem;
        stateOption.appendChild(option);
        // 도시가 새롭게 선택될때마다 구/군이 새롭게
      });
    }
  }

  mapAreas.forEach((area) => {
    if (area.id === selectedCity) {
      area.classList.add("active");
    } else {
      area.classList.remove("active");
    }
    // 맵에 지역이랑 오른쪽 선택 지역이랑 같게 바뀌려고
  });

  const matchedCityInfo = storeInfo.filter(
    (city) => city.main_area === selectedCity
  );
  // console.log(matchedCityInfo);
  tableBody.innerHTML = "";
  if (matchedCityInfo.length > 0) {
    renderData(matchedCityInfo);
    if (matchedCityInfo.length >= 5) {
      renderpagination(matchedCityInfo);
    } else {
      pageNationContainer.innerHTML = "";
    }
  } else {
    // 그 어떤 값도 존재 하지 않는경우 => 도/시 선택 란을 클릭했을때 => 최초 데이터를
    renderData(storeInfo);
    renderpagination(storeInfo);
  }
});

// << checkbox option >>
const filterData = (data) => {
  const selectedCategories = [
    ...document.querySelectorAll(".filter-checkbox:checked"),
    // filter-checkbox는 모든 요소한테 있다
    // 그 중 체크된애
  ].map((checkbox) => checkbox.value);
  // console.log(searchButton);

  const filteredData = data.filter((item) =>
    selectedCategories.every((service) => item.service.includes(service))
  );
  renderData(filterData);
  renderpagination(filterData);
};

const optionMode = () => {
  // console.log("option");
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
  setTimeout(() => {
    hiddenspinner();
  }, 1000);

  filterData(storeInfo);
};

checkBoxs.forEach((checkbox) => {
  checkbox.addEventListener("change", optionMode);
});

// << search event 01 >>
searchButton.addEventListener("click", () => {
  // console.log("click");
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
  setTimeout(() => {
    hiddenspinner();
  }, 1000);

  tableBody.innerHTML = "";

  const cityValue = cityOption.value;
  const stateValue = stateOption.value;
  const searchValue = searchBar.value;
  // console.log(cityValue, stateValue, searchValue);

  let searchResult = storeInfo.filter((data) => data.store === searchValue);
  let alertShown = false;
  // 기본값으로 flase

  if (!searchValue) {
    // 단락회로평가?
    // searchValue값이 존재하지 않을때만 실행된다
    storeInfo.forEach(() => {
      const mainAreaMatched = data.main_area === cityValue;
      const subAreaMatched = data.sub_area === stateValue;

      if (cityValue === "도/시 선택") {
        searchResult.push(data);
      } else if (mainAreaMatched && subAreaMatched) {
        searchResult.push(data);
      }
      if (stateValue === "구/군 선택" && !alertShown) {
        alert("구/군 선택해주세요!");
        alertShown = true;
      }
    });
  }

  renderData(searchResult);

  if (searchResult.length >= 5) {
    renderpagination(searchResult);
  } else {
    pageNationContainer.innerHTML = "";
  }
  searchBar.value = "";
  // 서치바에 찾고 나면 서치바 클리어
});

// << search event 02 >>
// 매장명에 지점 입력하고 enter누르면 서버로 제출하지 않게
searchForm.addEventListener("submit");
