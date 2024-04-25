import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    // 데스크탑 기반 한페이지에 6개만 나오게 지정을 했다
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieSlide = ({ movies }) => {
  // porps안에 movies가 들어갈거라서
  // console.log(movies);
  return (
    <div>
      <Carousel responsive={responsive}>
        {movies.results.map((item) => (
          <MovieCard item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlide;
