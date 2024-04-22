import { keyboard } from "@testing-library/user-event/dist/keyboard";

const initialStore = { contactLis: [], keyword: "" };
// 배열이 최적이라 배열을쓴거다
// 기본값으로는 아무값도 없어야한다
// contactLis 이건 명시적으로 적은거다 / 짱구라고 적어도된다
// contactLis: [], keyword: ""  둘은 서로과 관련은 없지만 store에 같이 공존해야한다

const reducer = (state = initialStore, action) => {
  // state, action 이 두개가 항상 매개변수로 와야한다
  // console.log(action);
  const { type, payload } = action;
  // action은 객체다!!!
  // 객체를 끄집어내서 쓰고싶다? => 구조분해할당

  // switch (type) {
  //   // type이 있다라는 전재하에서
  //   case "ADD_CONTACT":
  //     return {
  //       // => 이건 ADD_CONTACT일때 반환한다
  //       ...state,
  //       contactLis: [
  //         ...state.contactLis,
  //         { name: payload.name, phoneNumber: payload.phoneNumber },
  //         // 기존값은 그대로 / 저장되어있는애들은 그대로
  //         // name: payload.name 이름란에 추가된이름
  //         // phoneNumber: payload.phoneNumber 번호란에 추가된 번호
  //       ],
  //       // 기본초기값토대(...state,)로 변경되는값(contactLis: [],)을 변경할거다
  //     };
  //   default:
  //     return { ...state };
  //   // => 이건 ADD_CONTACT이건 아닐때 state를 반환한다
  // }

  switch (type) {
    case "ADD_CONTACT":
      state.contactLis.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    case "SEARCH_BY_USERNAME":
      state.keyword = payload.keyword;
      break;
  }
  return { ...state };
  // 추가된 업데이트된 값을 출력하거나 / 추가된게 없으면 기존값을 출력
};

export default reducer;
// export 가 됐다 => 나갈 준비가됐다
