// 자바스크립트 알고리즘 문제
// 올바른 괄호
// 괄호가 입력되면 올바른 괄호이면 "YES", 올바르지 않으면 "NO"를 출력합니다.
// (())()이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()())) 이것은 올바른 괄호가 아니다.

// 입력 설명 : 첫 번째 줄에 괄호 문자열이 입력된다. 문자열의 최대 길이는 30이다

// 출력설명 : 첫 번째 줄에 YES, NO를 출력한다

// 입력예제1 : (()(()))(()

// 출력예제1 : NO

// const left = "(";
// const right = ")";
// const arr = ["(", "(", ")", "(", "(", ")", ")", ")", "(", "(", ")"];

// const solution = (arr) => {
// 	let answerLeft = 0
// 	let answerRight = 0
// 	const n = arr.length

// 	for (let i = 0; i < n; i++) {
// 		if(arr = left) {
// 			answerLeft = answerLeft++
// 		} else if(arr = right) {
// 			answerRight = answerRight++
// 		}

// 		if(answerLeft = answerRight) {
// 			console.log("YES");
// 		} else {
// 			console.log("NO");
// 		}
// 	}
// }

// -------------------------------------------------------------------------
// < 쌤 >
const a = "(()(()))(()";

const solution = (a) => {
  let answer = "YES";
  let stack = [];

  for (let x of a) {
    if (x === "(") {
      stack.push(x);
      // push = 배열이나 문자에 마지막에(뒤에) 값을 넣는거 / ( <-이게 나오면 stack에 값을 넣겠다
    } else {
      if (stack.length === 0) {
        return "NO";
        // ) <-이게 나오면 stack에서 값을 지울거다
      }
      stack.pop();
    }
  }
  // 만약 위 조건식에 부합하지 않았다면 /
  if (stack.length > 0) {
    // )이게 더 수가 많았을경우
    return "NO";
  }
  return answer;
};

console.log(solution(a));
