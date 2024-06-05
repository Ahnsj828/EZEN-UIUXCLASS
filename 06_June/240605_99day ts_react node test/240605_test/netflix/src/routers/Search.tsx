import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { IGetmoviesResult, IGetGeneresResult, getGenres, IMovie } from "../api";
import { makeImagePath } from "../utils";

const SearchBox = styled.div`
  padding: 20px;
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

const Buttons = styled.div`
  display: flex;
  width: 50%;
  margin-top: 20px;
`;

const ReviewButton = styled.button`
  flex: 1;
  padding: 20px;
  margin-right: 30px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: bold;
  background-color: #ff6637;
  border: 3px solid #f8f9fa;
  box-shadow: inset 0 0 20px rgba(54, 54, 54, 0.9);
  color: #f8f9fa;
  &:hover {
    background-color: #f8f9fa;
    border: 3px solid #ff6637;
    box-shadow: inset 0 0 10px rgba(54, 54, 54, 0.9);
    color: #ff6637;
  }
`;

const RelatedButton = styled.button`
  flex: 1;
  padding: 20px;
  margin-right: 30px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: bold;
  background-color: #10a6c4;
  border: 3px solid #f8f9fa;
  box-shadow: inset 0 0 20px rgba(54, 54, 54, 0.9);
  color: #f8f9fa;
  &:hover {
    background-color: #f8f9fa;
    border: 3px solid #10a6c4;
    box-shadow: inset 0 0 10px rgba(54, 54, 54, 0.9);
    color: #10a6c4;
  }
`;

const ReviewSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  color: ${(props) => props.theme.black.darker};
  border: 7px dashed #ff6637;
  border-radius: 10px;
  width: 1620px;
  p {
    width: 100%;
    margin: 0;
    padding: 10px;
    div {
      width: 100%;
    }
  }
`;

const RelatedSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  color: ${(props) => props.theme.black.darker};
  border: 7px dashed #10a6c4;
  border-radius: 10px;
  width: 1620px;
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

  type ReviewsState = {
    [key: number]: string[];
  };

  type RelatedState = {
    [key: number]: string[];
  };

  const [reviews, setReviews] = useState<ReviewsState>({});

  const [relateds, setRelateds] = useState<RelatedState>({});

  const fetchReviews = (movieId: number) => {
    return fetch(
      `${BASE_PATH}/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`
    ).then((response) => response.json());
  };

  const fetchRelateds = (movieId: number) => {
    return fetch(
      `${BASE_PATH}/movie/${movieId}/recommendations?language=en-US&page=1&api_key=${API_KEY}`
    ).then((response) => response.json());
  };

  useEffect(() => {
    if (movieData) {
      movieData.results.forEach((movie) => {
        fetchReviews(movie.id).then((reviewData) =>
          setReviews((prev) => ({
            ...prev,
            [movie.id]: reviewData?.results?.map(
              (review: any) => review.content
            ),
          }))
        );
      });
    }
    if (movieData) {
      movieData.results.forEach((movie) => {
        fetchRelateds(movie.id).then((relatedData) =>
          setRelateds((prev) => ({
            ...prev,
            [movie.id]: relatedData?.results?.map(
              (related: any) => related.content
            ),
          }))
        );
      });
    }
  }, [movieData]);

  const ContentSectionComponent = ({ movie }: { movie: IMovie }) => {
    const [activeSection, setActiveSection] = useState<string>("review");

    return (
      <SearchBox>
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
              /
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
                        genereData?.genres.find((item) => item.id === id)?.name
                    )
                    .filter((name) => name)
                    .join(", ")
                : "N/A"}
            </SearchGeneres>
          </ContentInfo>
        </ContentSection>
        <Buttons>
          <ReviewButton onClick={() => setActiveSection("review")}>
            REVIEW
          </ReviewButton>
          <RelatedButton onClick={() => setActiveSection("related")}>
            RELATED
          </RelatedButton>
        </Buttons>
        {activeSection === "review" && (
          <ReviewSection>
            <h3>😤😲Review😍😅</h3>
            {reviews[movie.id]?.length > 0 ? (
              reviews[movie.id].slice(0, 1).map((content, reviewIndex) => (
                <p key={reviewIndex}>
                  <div>
                    <ReviewTitle>🤩User Talk</ReviewTitle> : {content}
                  </div>
                </p>
              ))
            ) : (
              <p>No reviews available.</p>
            )}
          </ReviewSection>
        )}
        {activeSection === "related" && (
          <RelatedSection>
            {relateds[movie.id]?.length > 0 ? (
              relateds[movie.id].slice(0, 1).map((content, relatedIndex) => (
                <p key={relatedIndex}>
                  <div> {content}</div>
                </p>
              ))
            ) : (
              <p>No relateds available.</p>
            )}
          </RelatedSection>
        )}
      </SearchBox>
    );
  };

  return (
    <div>
      {movieLoading && genereLoading ? (
        <div>Loading...</div>
      ) : (
        movieData?.results.map((movie, index) => (
          <ContentSectionComponent key={index} movie={movie} />
        ))
      )}
    </div>
  );
};

export default Search;
