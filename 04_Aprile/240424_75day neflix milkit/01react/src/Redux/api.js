// Axios사용할때 이런 문구들을
// 외부에서 가져오는 데이터에 관한 문구를 사용 안해도되는 옵셔널한거다
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("request start", config);
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("requset error", error);
    return Promise.reject(error);
    // 존재하지 않는 api주소를 가져왔을때 에러가떠라
    // 디버깅을 위한 메세지
  }
);

api.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    console.log("get response", response);
    return response;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    console.log("response error", error);
    return Promise.reject(error);
    // 서버에서 데이터를 보내는데 에러가떴을때
    // 서버가 터졌을때
  }
);

export default api;
