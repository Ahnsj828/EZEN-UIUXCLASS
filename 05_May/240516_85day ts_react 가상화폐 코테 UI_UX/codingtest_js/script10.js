// 사용자로부터 한개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하라
// 문자열의 길이는 100을 넘지 않는다

// 입력설명 - 첫 줄에 문자열이 주어지고, 두번째 줄에 문자가 주어진다
// 출력설명 - 첫 줄에 해당 문자의 개수를 출력한다

// 입력예제 1
// COMPUTERPROGRAMMING
// R

// 출력예제 1 - 3

// const userText = prompt("문자열를 입력하세요");
// const userW = prompt("원하는 문자를 입력하세요");

// const solution = (userW) => {};
// console.log(solution);

// -------------------------------------------------------------------------
// < 쌤 >

const str = prompt("단어를 입력하세요");
const search = prompt("찾고싶은 단어!");

const solution = (str, search) => {
  // 매개변수 두개가 필요하다
  let answer = 0;
  for (let word of str) {
    // 문자열도 이터러블한 객체다
    if (word === search) answer++; // 표현식문으로
  }
  return answer;
};

console.log(solution(str, search));

// 이것도 알고리즘 문제다 / 어떻게 풀어낼것인지 생각해야한다 / 사고의 훈련은 후천적으로도 가능하다
