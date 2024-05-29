import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
// useQuery를 활용해서 api데이터를 밑에 하위요소에서 찾아올 수 있다
import { getMovies } from "../api";
// 영화 데이터를 가져올 경로

const Wrapper = styled.div`
  background: #000;
  height: 200vh;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

const Home = () => {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  // console.log(data, isLoading);

  return <Wrapper>{isLoading ? <Loader>Loading...</Loader> : null}</Wrapper>;
};

export default Home;
