let obj = {
    name: "jack",
};
// < 타입단언 > => 기본형태
// let name1 = obj.name;
//  => 'object' 형식에 'name' 속성이 없습니다.ts(2339)라는 오류가 뜬다
// 👇🏼
let name1 = obj.name;
// INameable처럼 obj을 쓰겠다
// < 타입단어 > => 제네릭형태
// let name2 = obj.name
let name2 = obj.name;
// (<타입형태>)obj
console.log(name1, name2);
export {};
//# sourceMappingURL=Time-assertion.js.map