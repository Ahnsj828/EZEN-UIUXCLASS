import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Link => a태그 역할

const Container = styled.div`
  padding: 20px;
  max-width: 1080px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 16px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: all 0.3s;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 30px;
  margin: 30px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: flex;
  text-align: center;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 10px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean; // 새로 생긴건지 / 아니다false
  is_active: boolean; // 거래 가능하냐 아니냐
  type: string;
}

// const Coins = [
//   {
//     id: "btc - bitcoin",
//     name: "Bitcoin",
//     symbol: "BTC",
//     rank: 1,
//     is_new: false, // 새로 생긴건지 / 아니다false
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "eth - ethereum",
//     name: "Ethereum",
//     symbol: "ETH",
//     rank: 2,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "hex - hex",
//     name: "HEX",
//     symbol: "HEX",
//     rank: 3,
//     is_new: false,
//     is_active: true,
//     type: "token",
//   },
// ]; // 1, 2, 3위만 목업으로 만들었다

const Conins = () => {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true); // 로딩스피너 / 로딩중이다 => true

  // useEffect(() => {
  //   const data = async () => {
  //     const response = await fetch(
  //       "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  //     );
  //     const json = await response.json();
  //     console.log(json);
  //   };
  //   data();
  // }, []);
  // [] 의존성 배열이 빈 배열 => 한번만 실행해라
  // [] 의존성 배열에 값이 있다면	그값이 변화할때마다 콜백함수를 활용해라

  // 👇🏼 저게 곧 data니까 굳이 data를 두번쓰기에는 비효율적이다

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/Divjason/coinlist/coins"
      );
      const json = await response.json();
      // console.log(json);
      setCoins(json);
      setLoading(false); // 로딩이 끝났다는걸 알라기 위해서 false
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Conins Information</Title>
      </Header>
      {loading ? (
        <Loader>"Loading..."</Loader>
      ) : (
        <CoinList>
          {/* coin에 대한 정보들이 들어올거다 */}
          {/* <Coin></Coin> */}
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                Now Rank : {coin.rank}
                {/* <Img
                  src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                /> */}
                <Img
                  src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                />
                {coin.name} ({coin.symbol}) &rarr; {coin.name} 상세정보 보러가기
              </Link>
            </Coin>
          ))}
          {/* 배열의 형태를 띄어야(이터러블 객체여야) map함수를 작동시킬 수 있다 */}
        </CoinList>
      )}
      {/* {loading ? (true) : (false)} => 삼항조건연산자 / true다 => 로딩중이다 / false다 => 로딩완료 */}
    </Container>
  );
};
// return() => 다수의 태그를 만들면 괄호 해주기

export default Conins;

// a태그 역할 => Link
// &rarr;  =>  문자열을 가지고 도형을 만들수있따 => 유니코드

{
  /* <Link to={`/${coin.id}`} > => 경로로가라 */
}
{
  /* <Link to={`/${coin.id}`} state={`${coin.name}`}>  => 경로로 값을 보낼때 추가해서 보내라 */
}
