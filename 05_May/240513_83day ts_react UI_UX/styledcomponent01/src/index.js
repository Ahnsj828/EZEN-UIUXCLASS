import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components"; // 테마프로바이더

const darkTheme = {
  textColor: "whitesmoke",
  background: "black",
};

const lightTheme = {
  textColor: "black",
  background: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
// ThemeProvider 어떠한 테마를 줄건지 정의해줘야한다 => theme={darkTheme}
// 삼항조건 연산자로 내려줄 수 있다 / 어떨때 darkTheme인지 ,  어떨때 lightTheme인지
