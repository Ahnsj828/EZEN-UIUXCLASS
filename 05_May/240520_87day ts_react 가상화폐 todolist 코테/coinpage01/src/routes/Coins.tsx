import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
import { isDarkAtome } from "../atoms";
import { useSetRecoilState } from "recoil";
// useSetRecoilState => Recoil 라이브러리 안에 있는 atom의 default값을 가져와서 편집 및 가공할 수 있는 훅

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
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 16px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: all 0.3s;
    &:hover {
      color: ${(props) => props.theme.bgColor};
    }
  }
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
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface ICoinProps {
  toggleDark: () => void;
}

// const Coins = ({ toggleDark }: ICoinProps) => {
const Coins = () => {
  const setterFn = useSetRecoilState(isDarkAtome);
  const { isLoading, data } = useQuery<CoinInterface[]>("allCoins", fetchCoins);
  return (
    <Container>
      <Helmet>
        <title>Coin</title>
      </Helmet>
      <Header>
        <Title>Coins Information</Title>
        {/* <button onClick={toggleDark}>Toggle Mode</button> */}
        <button onClick={() => setterFn((prev) => !prev)}>Toggle Mode</button>
      </Header>
      {isLoading ? (
        <Loader>"Loading..."</Loader>
      ) : (
        <CoinList>
          {data?.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                Now Rank : {coin.rank}
                <Img
                  src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} ({coin.symbol}) &rarr; {coin.name} 상세정보 보러가기
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;

{
  /* <button onClick={() => }>Toggle Mode</button> 매개변수가 존재한다면 페이지가 마운트 되는 순간 버튼이 한번 눌려지고 시작한다 */
}
{
  /* <button onClick={() => setterFn((prev) => !prev)}>Toggle Mode</button>  원래의 원본값(prev)을 가져와서 바꿔줘라prev */
}
