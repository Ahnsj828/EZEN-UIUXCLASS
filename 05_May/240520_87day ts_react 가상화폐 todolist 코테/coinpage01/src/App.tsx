// import React, { useState } from "react";
import React from "react";
import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDarkAtome } from "./atoms";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Source Sans 3", sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  // const [isDark, setIsDark] = useState(false);
  // const toggleDark = () => {
  //   setIsDark((current) => !current);
  // };
  // 👇🏼 recoil로
  const isDark = useRecoilValue(isDarkAtome);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {/* <button onClick={toggleDark}>Toggle Mode</button> */}
        <GlobalStyle />
        {/* <Router isDark={isDark} toggleDark={toggleDark} /> */}
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
