import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App01 from "./App01";
import App02 from "./App02";
import App03 from "./App04";
import App05 from "./App05";
import App06 from "./App06";
import App07 from "./App07";
import App08 from "./App08";
import App09 from "./App09";
import App10 from "./App10";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		font-family: "Source Sans 3", sans-serif;
		/* background: linear-gradient(135deg, #e09, #d0e); */
		/* background: linear-gradient(180deg, #d0e, #91f); */
		/* background: linear-gradient(180deg, #91f, #70f); */
		/* background: linear-gradient(180deg, #70f, #40f); */
		/* background: linear-gradient(180deg, #40f, #05f); */
		/* background: linear-gradient(180deg, #05f, #09f); */
		background: linear-gradient(180deg, #09f, #00ffea);
		background: linear-gradient(180deg, #fa9638, #f74b45);
	}
	ul, li {
		list-style: none;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <App10 />
    <GlobalStyle />
  </>
);
