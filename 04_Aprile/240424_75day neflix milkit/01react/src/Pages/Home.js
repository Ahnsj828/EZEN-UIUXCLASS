import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../Redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);
  console.log(popularMovies, topRatedMovies, upComingMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    // 로딩이 참이다 => 아직 값을 가져오고있다면
    // 조건부 랜더링
    return (
      <div className="slide">
        <ClipLoader
          color="#fff"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  return (
    <div className="slide">
      {popularMovies.results && <Banner movie={popularMovies.results[1]} />}
      {/* popularMovies.results 가 존재한다면 0번째 데이터를 줘라 */}
      <div className="movieContents">
        <h1>popular Movie</h1>
        <MovieSlide movies={popularMovies} />
        <h1>TopRated Movie</h1>
        <MovieSlide movies={topRatedMovies} />
        <h1>Upcoming Movie</h1>
        <MovieSlide movies={upComingMovies} />
      </div>
    </div>
  );
};

export default Home;
