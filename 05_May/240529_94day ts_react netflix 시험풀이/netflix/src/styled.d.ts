// ThemeProvider 타입 정의하기 위한거
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // 객체 형태의 DefaultTheme 을 출력할거다
    red: string;
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      lighter: string;
      darker: string;
    };
  }
}
