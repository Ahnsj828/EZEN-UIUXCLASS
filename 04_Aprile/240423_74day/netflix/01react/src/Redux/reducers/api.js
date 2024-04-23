import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // timeout: 1000,
  // 즉각적으로 가져올거라 시간을 지웠다
  headers: { "Content-Type": "application/json" },
  // 데이터 가져올때 어떤 메세지 쓸거냐
  // 이건 응답 메세지다
});

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("request start", config);
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("request error", error);
    return Promise.reject(error);
  }
);
