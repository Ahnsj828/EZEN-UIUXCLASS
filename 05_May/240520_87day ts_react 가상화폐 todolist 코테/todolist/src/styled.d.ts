// d = dclare 선언하다
import "styled-components";

declare module "styled-components" {
  // styled-component 모듈로서 선언하겠다
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    accentColor: string;
    cardBgColor: string;
    // 헥스 코드니까 문자라서
  }
}
