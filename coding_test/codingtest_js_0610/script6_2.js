// 괄호문자제거

// 입력된 문자에서 소괄호() 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

// 입력 설명 : 첫 줄에 문자열의 길이는 100을 넘지 않는다.

// 출력설명 : 남은 문자만 출력한다.

// 입력예제1 : (A(BC)D)EF(G(H)(IJ)K)LM(N)

// 출력예제1 : EFLM

// -------------------------------------------------------------------------
// < 쌤 >

const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

const solution = (str) => {
  let answer = undefined;
  let stack = [];

  for (let x of str) {
    if (x === ")") {
      // )를 만나면 / 다시 (가 나오기 전까지
			while (stack.pop() !== "(")
				// pop제거하는거
			// 안에 요소를 제거할거다 
    } else {
			stack.push(x);
    // str에서 값을 찾아서 stack에 넣는다
		}
  }
	answer = stack.join("");
	return answer;
};

console.log(solution(str));
