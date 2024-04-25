import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { genereList } = useSelector((state) => state.movie);
  // index.js 에서 movie라는 키값을 거쳐서 가져오게 해놔서 / movie를 거쳐서
  // 장르를 구조분해할당으로
  console.log(genereList);
  console.log(item);
  const navigate = useNavigate();
  const direct = () => {
    navigate(`/movie/${item.id}`);
  };
  return (
    <div
      onClick={direct}
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.backdrop_path}` +
          ")",
      }}
      // item.backdrop_path; 글자 없는 영화포스터
      // item.poster_path; 영화포스터
    >
      <div className="overlay">
        <h1>{item.title}</h1>
        {/* 영화제목 */}
        <div>
          {item.genre_ids.map((id) => (
            // 객체(item) 안에 장르(genre_ids)
            // <span>{id}</span>
            // <Badge bg="danger">{id}</Badge>
            <Badge className="badge" bg="danger">
              {genereList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <div>
          <span>{item.vote_average}</span>
          {/* 평점 */}
          <span>{item.adult ? "청불" : "전체관람"}</span>
          {/* 청소년불가 */}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

// 영화세부정보 보기 기능
// 영화클릭 => 영화 정보를 줄 수 있는곳으로 이동
//  클릭했을때 해당 영화 정보를 어떻게 식별하나? => id값으로
//  클릭했을때 id값을 찾아서 id값에 해당하는 정보를 가져온다 => parms
