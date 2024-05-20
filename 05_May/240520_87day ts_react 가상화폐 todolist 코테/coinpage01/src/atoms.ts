// tsx로 해도 되긴하는데 정식적으로는 ts다
// RecoilRoot 안에 원자 (리덕스로치면 컨테이너다) atom
import { atom } from "recoil";
// atom은 리코일 라이브러리에 있다

export const isDarkAtome = atom({
  key: "isDark",
  default: false,
}); // isDark가 기본값으로 지정해놔서 => default: false,
