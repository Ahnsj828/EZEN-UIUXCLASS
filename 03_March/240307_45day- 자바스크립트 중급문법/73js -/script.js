// JSON에서 => 여러개 종류의 데이터를 종합적 관리하는 JSON만들고 싶다 => 배열의 형식을 띄어야한다
//          => 여러개 데이터를 관리할때는 배열로 해줘야한다

const xhr = new XMLHttpRequest();

xhr.open("GET", "strudent.json", true);
xhr.send();
// open은 세개를 입력해줘야한다
// get 방식/ strudent.json파일 / true비동기처리방식
// console.log(xhr);

const renderHTML = (strudents) => {
  // renderHTML을 정의 / strudents매개변수에도 있어야한다
  let output = "";
  strudents.forEach((strudent) => {
    output += `
      <h2>${strudent.name}</h2>
      <ul>
        <li>전공 : ${strudent.major}</li>
        <li>학년 : ${strudent.grade}</li>
      </ul>
      <hr/>
    `;
  });
  document.querySelector("#result").innerHTML = output;
};

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const strudents = JSON.parse(xhr.responseText);
    // 정상적으로 다 받아오게 되었다고한다면 JSON.parse(xhr.responseText)을 strudents안에 넣어주고싶다
    // console.log(strudents);
    renderHTML(strudents);
  }
};
// 동기처리 방식도있나?
// ex. 내피부타입 설문조사 하고 그 데이터를 서버에 보내고 그후에 화장품 추천을 받아야한다
//      그런경우는 동기처리로 받아야한다
