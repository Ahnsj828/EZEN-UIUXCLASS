const initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  loading: true,
  genereList: {},
};
// 로딩스피너를 여기서 컨트롤하고 있다

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
        loading: false,
        // 영화를 다 가져왔을때 false
        genereList: payload.genereList,
      };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
    // 전개연산자 중요하다
  }
};

export default movieReducer;
