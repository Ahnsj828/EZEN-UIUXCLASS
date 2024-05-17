// 외부에서 Data를 받아와주는 함수를 선언 후 출력까지!!
// react-query를 사용할 때는 이렇게 외부에서 Data를 받아와서 공급해줄 수 있는 함수가 반드시 필요하다 => 이 함수를 fecth 함수라고 부른다 => 이 함수는 반드시 promise 값을 반환!!
// fetch함수가 있어야지만 promise를 반환할 수 있다

const BASE_URL = "https://my-json-server.typicode.com/Divjason";
// 세개 url 공통 url

export const fetchCoins = () => {
  return fetch(`${BASE_URL}/coinlist/coins`).then((response) =>
    response.json()
  );
};
// 찾아와서 반환하겠다
// .then((response) => response.json()) => 객체로 바꿔줘야한다

export const fetchCoinInfo = (coinId: string | undefined) => {
  return fetch(`${BASE_URL}/coinlist/coins/${coinId}`).then((response) =>
    response.json()
  );
}; //코인 정보
export const fetchCoinPrice = (coinId: string | undefined) => {
  fetch(`${BASE_URL}coinprice/coinprice/${coinId}`).then((response) =>
    response.json()
  );
}; // 코인 값

export const fetchCoinHistory = (coinId: string | undefined) => {
  const endDate = Math.floor(Date.now() / 1000); // 현 시점까지의 밀리초
  const startDate = endDate - 60 * 60 * 24 * 7;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}&state=${startDate}&end=${endDate}`
  ).then((response) => response.json());
};
