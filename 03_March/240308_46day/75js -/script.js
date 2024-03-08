const url = "https://reqres.in/api/products/10";
// 나중에 깃허브를 통해서 직접 만들 수 있다
// 통신규약(https)을 지켜서 서버가 통신을 할 준비가 되었다
const result = document.querySelector("#result");
// console.log(result);

const xhr = new XMLHttpRequest();
// 변수명은 피카츄로 써도 된다/ 명시적으로 적여야되서 그런거다
xhr.open("GET", url, true);
// open()에는 세개의 매개변수를 넣을 수 있다
// GET : 서버한테 어떤 정보를 받을때 // phost : 주려고할때
// 데이터를 가져오고자 하는 경로
// true 동기냐 비동기냐

xhr.send();
// 서버는 알아먹었다

console.log(xhr);

xhr.onreadystatechange = () => {
  // 데이터 전송이 이루어질때마다 = 다음 함수를 실행시켜줄거다
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 두조건이 다 충족된다면
    const product = JSON.parse(xhr.responseText);
    // parse 파싱을해서
    console.log(product);
    result.innerHTML = `
    <p>상품명 : ${product.date.name}</p>
    <p>생산년도 : ${product.data.year}</p>
    `;
    // 변수를 직접적으로 사용하고 싶다 => ``
  }
};
