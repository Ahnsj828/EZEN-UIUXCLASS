// 테마값을 정의하는 곳
import { DefaultTheme } from "styled-components";
// ThemeProvider로 만들 타입은 정의 되어 있지 않다

export const lightTheme: DefaultTheme = {
  textColor: "black",
  bgColor: "white",
};

export const darkTheme: DefaultTheme = {
  textColor: "white",
  bgColor: "black",
};
// 자식 컴포넌트들이 받게 만든거다 / DefaultTheme 붙여줘야한다
