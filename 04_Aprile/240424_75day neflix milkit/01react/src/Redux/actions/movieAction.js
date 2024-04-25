import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
// JS에서 process 일종의 dom같은 녀석이다

const getMovies = () => {
  // 함수의 반환값으로 객체를
  return async (dispatch) => {
    // 실행문은 존재하지 않고 반환문만 존재한다
    // const popularMovieApi = await api.get(
    //   `/movie/popular?api_key=${API_KEY}&language=en=US&page=1`
    // );
    try {
      dispatch({
        // 정상적인 영화 요청이 되었다면
        type: "GET_MOVIES_REQUEST",
      });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en=US&page=1`
      );
      const topRatedMovieApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en=US&page=1`
      );
      const upComingMovieApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en=US&page=1`
      );

      const [popularMovies, topRatedMovies, upComingMovies] = await Promise.all(
        [popularMovieApi, topRatedMovieApi, upComingMovieApi]
      );
      // popularMovieApi , topRatedMovieApi , upComingMovieApi 는 누가 먼저오거나 할 필요가없다 => 앞에 await 지우고
      // 순차적으로 올 필요없고 3가지가 다 올때까지는 기다리게
      // console.log(popularMovies, topRatedMovies, upComingMovies);
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
        },
      }); // 객체형태
    } catch (error) {
      // 영화가 정상적으로 요청되지 않았을때
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
};

export const movieAction = { getMovies };
// API 하고 서버를 껐다가 켜야된다 / 나갔다 다시 들어와야한다

// API값이 변경되면 항상 나갔다와야한다
