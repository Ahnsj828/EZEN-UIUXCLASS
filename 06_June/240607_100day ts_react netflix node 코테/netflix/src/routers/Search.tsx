import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { IGetmoviesResult, IGetGeneresResult, getGenres, IMovie } from "../api";
import { makeImagePath } from "../utils";

const SearchBox = styled.div`
  padding: 100px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentSection = styled.div`
  display: flex;
  img {
    width: 800px;
    margin-right: 20px;
  }
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
`;

const SearchTitle = styled.div`
  font-size: 42px;
  background-color: ${(props) => props.theme.red};
  border-radius: 14px 0 14px 0;
`;

const SearchOverview = styled.p`
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

const SearchPoint = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
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

const ReviewSection = styled.div`
  background-color: #f8f9fa;
  color: ${(props) => props.theme.black.darker};
  padding: 20px;
  width: 1620px;
  margin-top: 20px;
  border-radius: 10px;
  p {
    width: 100%;
    padding: 10px;
    margin: 0;
    div {
      width: 100%;
    }
  }
`;

const ReviewTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.red};
`;

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const API_KEY = "0bc8bd2db453d7413d1c2844ec617b61";
  const BASE_PATH = "https://api.themoviedb.org/3";

  const searchedMovies = () => {
    return fetch(
      `${BASE_PATH}/search/multi?query=${keyword}&api_key=${API_KEY}&language=ko-kr&page=1`
    ).then((response) => response.json());
  };

  const { data: movieData, isLoading: movieLoading } =
    useQuery<IGetmoviesResult>(["movies", keyword], searchedMovies);

  const { data: genereData, isLoading: genereLoading } =
    useQuery<IGetGeneresResult>(["getGeneres"], getGenres);

	type Review = {
		author: string
		content: string
	}

	type ContentsState<T> = {
		[key: number]: T[]
	}

  // type ReviewsState = {
  //   [key: number]: string[];
  //   // key는 숫자타입이고 key에 매칭되는 value 문자열 형태
  // }; // 타입 별칭

  // const [reviews, setReviews] = useState<ReviewsState>({});
  const [reviews, setReviews] = useState<ContentsState>({});
  // 해당 객체 데이터를 reviews에 담고

  const fetchReviews = (movieId: number) => {
    return fetch(
      `${BASE_PATH}/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`
    ).then((response) => response.json());
  };
  // 영화에 대한 리뷰 데이터를 찾아오기 위한 목적
  // .then((response) => response.json()); => 객체로 바꿔줘야해서

  // useEffect(() => {
  //   if (movieData) {
  //     movieData.results.forEach((movie) => {
  //       fetchReviews(movie.id).then((reviewData) =>{
  //         // 영화 아이디를 인자값으로 받아서 결과값으로 찾아서
	// 			const videoIds = videoData?results?.map((video:any) => video.key)
	// 			console.log(`Movie ID: $: {movide.id}, Video: IDs: ${videoIds}`)
  //         setReviews((prev) => ({
  //           ...prev,
  //           [movie.id]: videoIds,
            
  //         }))
	// 			});
  //     });
  //   }
  // }, [movieData]);

  useEffect(() => {
    if (movieData) {
      movieData.results.forEach((movie) => {
        fetchReviews(movie.id).then((reviewData) =>{
          // 영화 아이디를 인자값으로 받아서 결과값으로 찾아서
					setRevides((props) => ({
						...reviewData,
						[]
					}))
          }))
				});
      });
    }
  }, [movieData]);

  // console.log(movieData, reviews, videos);
  const [videos, setVideos] = useState<ReviewsState>({});
  // const [videos, setVideos] = useState<ContentsState<string>>({});

  const fetchVideos = (movieId: number) => {
    return fetch(
      `${BASE_PATH}/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`
    ).then((response) => response.json());
  };

  return (
    <div>
      {movieLoading && genereLoading ? (
        <div>Loading...</div>
      ) : (
        movieData?.results.map((movie, index) => (
          <SearchBox key={index}>
            <ContentSection>
              <img src={makeImagePath(movie?.backdrop_path)} />
              <ContentInfo>
                <SearchTitle>
                  ({movie?.title} {movie?.name})
                </SearchTitle>
                <SearchOverview>{movie?.overview}</SearchOverview>
                <SearchDate>
                  <span>릴리즈</span>
                  {movie?.release_date}
                  {movie?.first_air_date}
                </SearchDate>
                <SearchValue>
                  <span>관람등급</span>
                  {movie?.adult ? "청소년관람불가" : "전체관람가"}
                </SearchValue>
                <SearchPoint>
                  <span>영화평점</span>
                  {movie?.vote_average !== undefined
                    ? movie?.vote_average.toFixed(2)
                    : "N/A"}
                  {movie?.vote_count
                    ? movie?.vote_count.toLocaleString("ko-kr")
                    : "0"}
                  명 투표참여
                </SearchPoint>
                <SearchGeneres>
                  <span>장르</span>
                  {movie?.genre_ids
                    ? movie?.genre_ids
                        .map(
                          (id) =>
                            genereData?.genres.find((item) => item.id === id)
                              ?.name
                        )
                        .filter((name) => name)
                        .join(", ")
                    : "N/A"}
                </SearchGeneres>
              </ContentInfo>
            </ContentSection>
            <ReviewSection>
              <h3>🧐Review📜</h3>
              {reviews[movie.id]?.length > 0 ? (
                reviews[movie.id].map((review, reviewIndex) => (
                  <p key={reviewIndex}>
										<div>
											<ReviewTitle>{review.autor}</ReviewTitle>
										{content}
										</div>
										</p>
											
                ))
              ) : (
                <p>No reviews available.</p>
              )}
            </ReviewSection>
						<div>
							{videos[movie.id]?.length > 0 ? (
								<YouTube videoId={videos[movie.id][0]}
								opts={{
									width: "1620px", height: "800px", 
									playerVars: {
										autoplay: 0, // 자동 재생 여부
										modestbranding: 1, // 컨트롤 바에 유튜브 로고 표시 여부
										loop: 0, // 반복 재생
										playlist: video[movie.id][0], // 반복 재생으로 재생할 플레이 리스트
									}
								}}
								onReady ={{e} => {
									e.target.mute(); //소리 끝
								}}
								/>
							)
							 : (
								"No Avilable"
							)} 
						</div>
          </SearchBox>
        ))
      )}
    </div>
  );
};

export default Search;
