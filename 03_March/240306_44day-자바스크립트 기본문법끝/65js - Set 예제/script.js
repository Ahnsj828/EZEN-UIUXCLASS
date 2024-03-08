const memever1 = ["HTML", "CSS"];
const memever2 = ["CSS", "Javascript", "React"];
const memever3 = ["Javascript", "Typescript"];

// 서로다른 배열을 하나로 합치는거 => Concap활용하거나  전개연산자 구문을써서
const subjects = [...memever1, ...memever2, ...memever3];
// console.log(subjects); // Array(7)
// subjects 이터레이터 객체 => 반복문 쓸 수 있다

const resultList = new Set();
subjects.forEach((subject) => {
  resultList.add(subject);
});
// console.log(resultList); // Set(5)

const result = document.querySelector("#result");
result.innerHTML = `
<ul>
${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
</ul>
`;
// [...resultList] map이라는 함수를 사용하려고 배열로만들었다
// ↓
// 1) 배열의 값을 복제하는 전개연산자 구문 사용 (*원본데이터 값을 유지)
// 2) map() : 새로운 배열을 만들고자 할 때 사용
// 3) join(구분자) : 배열의 데이터를 문자열로 변환
// 구분자는 아무것도 없는 ""
