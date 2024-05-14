import { API_KEY } from "./env.js";
const form = document.querySelector("form");
// console.log(form);
// 상세한 설명은 나중에 모듈설명하면 알거다
// ./env.js파일에서 API_KEY를 가져다쓰겠다

// ---------------------------------------
// .gitignore
// 배포할때 이 파일이 생긴다
// 여기에 배제할 파일을 알아서 취합한다
// 깃에 커밋할때 이파일은 제거하고 올릴거야 라는거다

// ---------------------------------------

const movieDetail = (e) => {
  // movieDetail라는 함수를 정의하겠다
  // 이벤트 객체를 참조변수로 찾아오겠다

  // console.log(e.target.parentElement.id);
  // parentElement 부모요소를 찾아오겠다
  // key값을 찾아올때는 .(온점) => 온점표기법
  // .id 해당 id를 찾아와라
  //👇 이거를 구조분해할당으로 가져올 수 있다

  const { id } = e.target.parentElement;
  // 구조분해할당 으로 바꿔줬다
  // console.log(id);
  // const detailURL = 'https://www.themoviedb.org/movie/129'
  const detailURL = `https://www.themoviedb.org/movie/${id}`;
  window.open(detailURL, "_blank");
  // "_blank" 상세페이지로 넘어가는데 새로운 창에서 열린다  // 기본값이라 안적어줘도 똑같이 적용된다
};

const createBlock = ({
  id,
  poster_path,
  original_title,
  title,
  vote_average,
  release_date,
  // console.log(movie);
  // 배열이 보였다 => 반복문쓰자! 거의 반복문이다
  // {} => 객체 형태
  // 구조 분해 할당 형식으로 가져왔다 {}
}) => {
  // console.log(
  //   id,
  //   poster_path,
  //   original_title,
  //   title,
  //   vote_average,
  //   release_date
  // );
  const parent = document.querySelector(".contents");
  // 담아줄공간
  // console.log(parent);
  const movie = document.createElement("div");
  // 콘텐츠 밑에 div가 생긴거다
  const poster = document.createElement("img");
  // 포스터는 이미지니까 이미지 태그를 만든거다
  const detail = document.createElement("div");
  // 또다른 div태그를 만든거다
  const h3 = document.createElement("h3");
  const info = document.createElement("div");
  const date = document.createElement("div");
  const rate = document.createElement("div");

  movie.className = "movie";
  // movie라는 노드에 movie라는 class이름을 지정하겠다
  detail.className = "detail";
  info.className = "info";
  date.className = "date";
  rate.className = "rate";

  movie.id = id;
  // 아이디를 가져와서 붙여주겠다
  poster.src = `https://image.tmdb.org/t/p/original/${poster_path}`;
  // src속성을 부여하겠다
  h3.innerText = `${title} / ${original_title}`;
  // 영화제목 한글로 / 영어로 줄거다
  date.innerText = `${release_date}`;
  // 영화 개봉일을 줄거다
  rate.innerText = `⭐⭐⭐⭐ ${vote_average}`;
  // 평점을 줄거다
  // ⭐이모지 => window 키 + .

  info.append(date, rate);
  detail.append(info, h3);
  // info안에는 다른요소를 또 넣을거라서 앞에쓴거다
  movie.append(poster, detail);
  // poster, detail를 movie안에넣을거다
  parent.appendChild(movie);

  poster.addEventListener("click", movieDetail);
  // poster는 전역이 아닌 블럭안에서 만든 요소라서 여기서 정의해줘야한다
  //poster.addEventListener("click", movieDetail) = poster클릭하게 된다면 movieDetail 라는 함수가 실행되게 하라
};

const getPopularMovies = () => {
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=1`;
  // 영화데이터가 담길 변수
  // 문자열과 변수를같이 써야되서 ""가 아니라``
  // 중간에 api_key=${APY_KEY}& 넣기

  fetch(URL)
    .then((response) => response.json())
    .then(({ results }) => {
      results.forEach((movie) => {
        createBlock(movie);
      });
    });
};

getPopularMovies();
// 함수를 호출

const removeAll = () => {
  const movies = document.querySelectorAll(".movie");
  // 영화를 찾아와라

  // console.lof("movies");
  // search란에 단어입력하고 개발자도구 들어가면 관련 정보가 나온다

  movies.forEach((movie) => {
    movie.remove();
    // 검색한 영화들만 나오고 기존영화들이 나오면 안되서
  });
};

const searchMovie = (e) => {
  e.preventDefault();
  // search를 하면 어딘가로 그 정보를 보내려는 속성이 있다. 그걸 없애려는..
  // console.og("search");
  const input = document.querySelector("input");
  // console.log(input.value);
  // input은 . 온점으로 value값을 찾아온다
  // const { value } = input;
  const { value: keyword } = input;
  // console.log(keyword);
  // const searchURL =`https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=7d15fbc24336cf9d22b5629975e227eb`
  const searchURL = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY}`;
  // ${keyword} 와 매칭되어지는 정보를 가져와라

  // 예외조항처리
  if (keyword) {
    removeAll();

    fetch(searchURL)
      .then((response) => response.json())
      // response.json().then(({ results }) => console.log(results))
      // 현재 json형식을 갖고있을거라서 이렇게 적은거다

      // 어떤값이 들어가면 true다
      // 어떤값이 없으면 false다

      .then(({ results }) => {
        results.forEach((movie) => {
          createBlock(movie);
        });
      });
  }
};

form.addEventListener("submit", searchMovie);
// submit이된다면 searchMovie함수가 실행되게 해라
