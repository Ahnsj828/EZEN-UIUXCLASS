import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
// useSearchParams  => 리액트 훅
// URLSearchParams  => 순수 자바스크립트 문법이다 / 리액트 훅이 아니다
import { useQuery } from "react-query";
import { IGetmoviesResult, IgetGeneresResult, getGeneres } from "../api";
import { makeImagePath } from "../utils";

const SearchBox = styled.div`
  padding: 100px;
  display: flex;
  img {
    width: 800px;
    margin-right: 20px;
  }
`;

const SearchTitle = styled.div`
  font-size: 42px;
  background-color: ${(props) => props.theme.red};
  border-radius: 14px 0 14px 0;
`;

const SearchOverview = styled.div`
  font-size: 18px;
  margin: 10px 0;
  margin-bottom: 32px;
  padding: 18px 0;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`;

const SearchDate = styled.div`
  font-size: 18px;
  span {
    display: inline-block;
    width: 100px;
    text-align: center;
    background-color: #ffa300;
    color: ${(props) => props.theme.black.darker};
    border-radius: 14px 0 0 0;
    margin-right: 8px;
    padding: 8px;
  }
`;

const SearchValue = styled.div`
  font-size: 18px;
  span {
    display: inline-block;
    width: 100px;
    text-align: center;
    background-color: #ffa300;
    color: ${(props) => props.theme.black.darker};
    border-radius: 14px 0 0 0;
    margin-right: 8px;
    padding: 8px;
  }
`;

const SearchPoint = styled.div`
  font-size: 18px;
  margin: 10px 0;
  span {
    display: inline-block;
    width: 100px;
    text-align: center;
    background-color: #ffa300;
    color: ${(props) => props.theme.black.darker};
    border-radius: 14px 0 0 0;
    margin-right: 8px;
    padding: 8px;
  }
`;

const SearchGeneres = styled.div`
  font-size: 18px;
  margin: 10px 0;
  span {
    display: inline-block;
    width: 100px;
    text-align: center;
    background-color: #ffa300;
    color: ${(props) => props.theme.black.darker};
    border-radius: 14px 0 0 0;
    margin-right: 8px;
    padding: 8px;
  }
`;

const Search = () => {
  const location = useLocation();
  // console.log(location);
  const keyword = new URLSearchParams(location.search).get("keyword");
  // console.log(keyword);

  const API_KEY = "0bc8bd2db453d7413d1c2844ec617b61";
  const BASE_PATH = "https://api.themoviedb.org/3";

  const searchedMovies = () => {
    return fetch(
      `${BASE_PATH}/search/multi?query=${keyword}&api_key=${API_KEY}language=ko-kr&page=1`
    ).then((response) => response.json());
  };

  const { data, isLoading } = useQuery<IGetmoviesResult>(
    ["movies", keyword],
    searchedMovies
  );

  const { data: movieDate, isLoading: movieLoading } =
    useQuery<IgetGeneresResult>(["getGeneres"], getGeneres);

  console.log(data);

  return (
    <div>
      {movieLoading && isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.results.map((movie, index) => (
          <SearchBox key={index}>
            <img src={makeImagePath(movie?.backdrop_path)} />
            <div>
              <SearchTitle>
                {movie?.title} {movie?.name}
              </SearchTitle>
              <SearchOverview>{movie?.overview}</SearchOverview>
              <SearchDate>
                <span>개봉일 / 첫방영</span>
                {movie?.release_date}
                {movie?.first_air_date}
              </SearchDate>
              <SearchValue>
                <span>관람등급</span>
                {movie?.adult ? "청소년관람불가" : "전체관람가"}
              </SearchValue>
              <SearchPoint>
                <span>영화평점</span>
                {movie?.vote_average.toFixed(2)}(
                {movie?.vote_count.toLocaleString("ko-kr")}명 투표참여)
              </SearchPoint>
              <SearchGeneres>
                <span>장르</span>
                {movie?.genre_ids.map((id) =>
                  genreData?.genres
                    .find((item) => item.id === id)
                    ?.name.filter((name) => name)
                    .join(", ")
                )}
              </SearchGeneres>
            </div>
          </SearchBox>
        ))
      )}
    </div>
  );
};

export default Search;

// isLoading이 만약 참이면 (로딩중이라면) > div태그를 활용해서 loding..을 줄거고 > 거짓이라면 false라면

// toFixed(2) => 소수점 두자리까지만 가져오게

// toLocaleString 천의자리가 넘어가면 , 가 생긴다
// toLocaleString("ko-kr") => 한국식으로 표기하게
