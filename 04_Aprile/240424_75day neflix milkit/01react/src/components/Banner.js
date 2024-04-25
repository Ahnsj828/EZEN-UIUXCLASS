// 이 banner는 home에서 출력될거다
import React from "react";

const Banner = ({ movie }) => {
  // console.log(props); // movie라는 key에 담겨있는 객체
  console.log(movie); // movie라는 key에 담겨있는 객체
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          "URL(" +
          `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}`,
      }}
    >
      <div className="banner-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
