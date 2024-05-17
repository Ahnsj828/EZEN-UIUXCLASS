// 중복문자제거
//  소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

// 입력 설명 : 첫줄에 문자열이 입력된다.
// 출력설명 : 첫줄에 중복문자가 제거된 문자열을 출력합니다.

// 입력예제1 : ksekkset
// 출력예제1 : kset

// const userInput = prompt("단어를 입력하세요");

// -------------------------------------------------------------------------
// < 쌤 >

// ex. apple / 0 = a , 1 = p , 2 = p , 3 = l , 4 = e
// JS 문자열에서 인덱스값을 서칭할 때, 좌측부터 순차적으로한다

const userInput = prompt("단어를 입력하세요");

const solution = (userInput) => {
  let answer = "";
  for (let i = 0; i < userInput.length; i++) {
    // 문자열 안에 각자의 문자를 확인해야하니까 for문
    if (userInput.indexOf(userInput[i]) === i) answer += userInput[i];
    //indexOf 특정한 문자의 인덱스값
    // 0부터 4까지 / a,p,p,l,e 를 찾아서
  }
  return answer;
};

console.log(solution(userInput));

// answer = aple
// if (userInput.indexOf(userInput[a=0]) === 0) answer += userInput[i]; => 0=0 => a
// if (userInput.indexOf(userInput[p=1]) === 1) answer += userInput[i]; => 1=1 => p
// if (userInput.indexOf(userInput[p=2]) === 1) answer += userInput[i]; => 2=1 => p 안된다
