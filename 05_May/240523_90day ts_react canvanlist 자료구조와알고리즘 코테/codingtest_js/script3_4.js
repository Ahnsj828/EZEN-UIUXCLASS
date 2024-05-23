// 가장 짧은 문자거리
// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자와 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.

// 입력 설명 : 첫 번째 줄레 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다

// 출력설명 : 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다

// 입력예제1 : teachermode e

// 출력예제1 : 1 0 1 2 1 0 1 2 2 1 0

// const userWord = prompt("영어단어를 입력하세요");
// const userA = prompt("영어 문자 하나를 입력하세요");

// const solution = (userWord, userA) => {
//   let answer = [];
// 	for(let w of userWord) {
// 		if()
// 			// userA 보다 멀어질 수록 +1
// 	}

// 	return answer
// };

// console.log(solution(userWord, userA));

// -------------------------------------------------------------------------
// < 쌤 >
// 사용자한테 문자열을 받아라
// 사용자한테 문자를 받아라
// 해당 문자가 있는 곳이 0이 되고
// 해당문자로 부터 멀어질 수록 카운트 증가

// 1. 사용자에게 문자열을 받아야한다  =>  완료
// 2. 사용자에게 특정 문자를 받아야한다  =>  완료
// 3. 빈 변수를 만들고 =>  완료
// 4. 사용자가 입력한 문자열의 문자를 하나씩 추출해서 특정 문자인지 아닌지를 반복해서 검사
// 5. 검사 완료 후 빈 변수를 생성한 다음
// 6. 빈 변수에 만약, 문자열의 문자들 가운데, 사용자가 입력한 문자와 같으면 0을 대입
// 7. 만약 0이 아니라고 한다면, 증감연산자로 숫자를 증가 시킨 후 빈 변수에 대입
//   (*좌측을 기준으로 특정문자가 아닌경우, 무한으로 값이 증가!!!)
// 8. 위와 같은 행위를 정반대측면(*인덱스가 가장 큰 영역부터 다시 문자열 검사)
// 9. 수학객체에서(Math 객체) 최소값을 찾아주는 min()메서드를 활용해서 최종 결과값 도출!!

const userWord = prompt("문자열을 입력하세요");
const searchWord = prompt("찾고자 하는 단어를 입력하세요");

const solution = (userWord, searchWord) => {
  let answer = [];
  let p = Number.MAX_SAFE_INTEGER; //  JS에서 가장 작은 숫자

  for (x of userWord) {
    if (x === searchWord) {
      // x와 searchWord가 같냐 안같냐 판단한다음에
      p = 0;
      answer.push(p);
      // 0으로 해서 answer에 넣는다
    } else {
      p++;
      answer.push(p);
    }
  }
  // 왼쪽부터 검사
  // 오른쪽부터 검사
  p = Number.MAX_SAFE_INTEGER;
  for (let i = userWord.length - 1; i >= 0; i--) {
    // 오른쪽부터 시작하는데 , i가 0보다 크거나 같을때까지(0이 될때까지)
    if (userWord[i] === searchWord) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
};

console.log(solution(userWord, searchWord));
