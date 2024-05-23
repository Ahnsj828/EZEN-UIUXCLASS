// 숫자만 추출
// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.
// 만약, "tge0a1h205er"에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205이 됩니다
// 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.

// 입력 설명 : 첫 줄에 숫자가 썩인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.
// 출력설명 : 첫 줄에 자연수를 출력합니다.

// 입력예제1 : g0en2T0s8eSoft

// 출력예제1 : 208

// -------------------------------------------------------------------------
// < 쌤 >
const userword = prompt("문자와 숫자 조합의 단어 입력");

const solution = (userword) => {
  let answer = "";

  for (let w of userword) {
    if (!isNaN(w)) answer += w;
    // isNaN 숫자냐 아니냐의 함수 / 숫자가 아니면 참
    // 숫자가 들어오게 된다면 answer에 하나씩 쌓겠다
  }

  return Number(answer);
  // Number parseInt , parseFloat
};

console.log(solution(userword));
