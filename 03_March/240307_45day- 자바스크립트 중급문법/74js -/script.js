// console.log("시작");

// add();
// // Uncaught ReferenceError: add is not defined
// // 존재하지 않는 함수가 나와서 에러가 나왔다 / 사용자가 알아 볼수 있는 에러 문구가 아닌 컴퓨터가 알아볼 수 잇는 에러 메세지가 떴다

// console.log("실행 중...");
// console.log("끝");

//
//
//

// try {
//   // 정상적으로 데이터를 받게되성ㅆ을때
//   console.log("시작");
//   add();
//   console.log("실행 중...");
//   // 실행시킬 요소문
// } catch (err) {
//   // 에러가 발생된 순간 try문에서 참조변수값?으로 catch한테 전달
//   console.log(`오류발생 : ${err}`);
// } finally {
//   // 정상적이든 정상적이지 않을때 끝나면 문구를 줄거다
//   console.log("끝");
// }
// // add라는 정의하지도 않은 함수가 떠서 에러가 떴다 / 이걸 사용자가 알아 볼수 있는 문구로 변환한거다

//
//

// try {
//   // 정상적으로 데이터를 받게되성ㅆ을때
//   console.log("시작");
//   add();
//   console.log("실행 중...");
//   // 실행시킬 요소문
// } catch (err) {
//   // 에러가 발생된 순간 try문에서 참조변수값?으로 catch한테 전달
//   console.log(`오류발생 : ${err}`);
//   console.log(`오류발생 : ${err.name}`);
//   console.log(`오류발생 : ${err.message}`);
// } finally {
//   console.log("끝");
// }

//
//

const json = '{"grade:3", "age:25}';

try {
  const user = JSON.parse(json);
  if (!user.name) {
    // user.name이 존재하지 않는다면 / 의도적으로 에러를 만든거다
    throw "사용자 이름이 없습니다!";
  }
} catch (err) {
  console.log(err);
} finally {
  console.log("통신완료");
}

// finally는 옵션이라 있어도 그만 없어도 그만
