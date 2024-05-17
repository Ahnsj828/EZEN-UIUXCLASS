import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  useParams,
  useLocation,
  Routes,
  Route,
  Link,
  useMatch,
} from "react-router-dom";
// useLocation => link 컴포넌트를 통해서 들어온애를 확인 할 수 있다
// useMatch 특정 페이지에 도달했느냐 안했느냐를 여부를 확인하기 위해서 / 식별하고자 하는 URL(경로) 에 도착하면 ture반환, 아니라면 null값 반환

import Chart from "./Chart";
import Price from "./Price";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoins, fetchCoinPrice } from "../api";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;
const Title = styled.h1`
  font-size: 30px;
  margin: 30px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  display: block;
  text-align: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 14px;
    font-weight: 400;
    text-decoration: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  background-color: ${(props) => props.theme.accentColor};
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2개의 열, 1fr씩
  margin: 25px 0;
  gap: 10px;
`; // 각각의 버튼을 담을 곳
const Tab = styled.span<{ isActive: boolean }>`
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) =>
    props.isActive ? props.theme.textColor : props.theme.bgColor};
  /* 두개의 컬러를 받을 수 있다 / 삼항조건연산자로 isActive가 트루라면 , 선택됐다면 => textColor / 선택받지 못했다면 bgColor */
  padding: 7px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  border-radius: 10px;
`; // 각각의 버튼을 의미
// span<{ isActive: boolean }> => 객체 형태로 제네릭을 해줬다

interface RouterParams {
  coinId: string;
}

interface LocationState {
  state: string;
} // 이건 옵셔널한거다 => 한이유 :

interface infodata {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface priceData {
  id: string;
  name: string;
  symbol: string;
  rank: string;
  circulating_supply: string;
  total_supply: string;
  max_supply: string;
  beta_value: string;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: string;
      volume_24h: string;
      volume_24h_change_24: string;
      market_cap: string;
      market_cap_change_24h: string;
      percent_change_15m: string;
      percent_change_30m: string;
      percent_change_1h: string;
      percent_change_6h: string;
      percent_change_12h: string;
      percent_change_24h: string;
      percent_change_7d: string;
      percent_change_30d: string;
      percent_change_1y: string;
      ath_price: string;
      ath_date: string;
      percent_from_price_ath: string;
    };
  };
}

const Coin = () => {
  // const params = useParams();
  // console.log(params);

  const { coinId } = useParams<RouterParams | any>();

  // const location = useLocation();
  // console.log(location);

  const { state } = useLocation() as LocationState;
  // 타입추론 => as
  // 여러개 중에서 state만 필요해서
  // console.log(state);

  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  const { isLoading: infoLoading, data: infoData } = useQuery<infodata>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: priceLoading, data: priceData } = useQuery<priceData>(
    ["price", coinId],
    () => fetchCoinPrice(coinId),
    { refetchInterval: 5000 }
  ); // refetchInterval: 5000  => 5초에 한번씩 데이터를 가져오겠다

  const loading = infoLoading || priceLoading;

  // const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState<infodata>();
  // const [priceInfo, setPriceInfo] = useState<priceData>();
  // // useMatch를 사용하면 "/:coinId/price" 이경로로 왔는지 안왔는지에 대한 true냐 false냐에 따라 다른 페이지 나오게
  // // :coinId  공통된 경로 / 파라미터
  // // console.log(priceMatch);
  // // console.log(chartMatch);

  // useEffect(() => {
  //   (async () => {
  //     const infodata = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  //       )
  //     ).json(); // 코인에 대한 기본 정보
  //     // console.log(json);
  //     // console.log(infodata);

  //     const priceData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  //       )
  //     ).json(); // 코인 가격 정보
  //     // console.log(infodata);
  //     // console.log(priceData);
  //     setInfo(infodata);
  //     setPriceInfo(priceData);

  //     setLoading(false);
  //   })();
  // }, []); // 코인정보와 코인 가격을 받을거다

  return (
    <Container>
      <Header>
        <Title>
          Coin : {state ? state : loading ? "Loading..." : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>"Loading..."</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank : </span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol : </span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price : </span>
              <span>${priceData?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.name}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply : </span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply : </span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          {/* 여기까진 공통으로 나오게할거다 */}
          <Tabs>
            <Tab isActive={chartMatch! == null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch! == null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
          <Routes>
            <Route path="/chart" element={<Chart coinId={coinId} />} />
            <Route path="/price" element={<Price />} />
          </Routes>
        </>
      )}
    </Container>
  );
};

export default Coin;
// {state ? state : loading ? "Loading..." : info?.name} => 단락회로평가
// state값이 있으면 보여줘 / 없으면 로딩 여붕에따라 왼쪽 이나 오른쪽 줘 / info데이터가 있으면 name 찾아와라
// info?.name  => info가 참이면 name가져와라
// --------------------------------------------------
// coinID는 유지하면서 이동하게 할거다
// 👇🏼
{
  /* <Link to="/price">Price</Link>  =>  <Link to={`/${coinId}/chart`}>Chart</Link>; */
}
{
  /* <Link to="/price">Price</Link>    =>   <Link to={`/${coinId}/price`}>Price</Link>*/
}

{
  /* <Tab isActive={chartMatch! == null}></Tab>  => chartMatch가 null값이 아니라면 => price가 선택될때  */
}
{
  /* <Tab isActive={priceMatch! == null}></Tab> => priceMatch가 null값이 아니라면 => chart 선택될때 */
}
