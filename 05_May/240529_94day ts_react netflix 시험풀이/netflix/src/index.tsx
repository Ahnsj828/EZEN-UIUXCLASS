import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
// RecoilRoot가 있어야지 하위요소들이 atom값을 가져다 쓸 수 있다
import { QueryClient, QueryClientProvider } from "react-query";
// 이걸가져와야지 외부 데이터를 자유자재로 가져올수 있다
import { ThemeProvider, createGlobalStyle } from "styled-components";
// createGlobalStyle 로 reset.css만들 수 있다
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Source Sans 3", sans-serif;
    color: ${(props) => props.theme.white.darker};
    background-color: #000
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </RecoilRoot>
);
