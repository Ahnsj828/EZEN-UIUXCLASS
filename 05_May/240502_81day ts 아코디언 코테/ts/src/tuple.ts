// 19. 튜플

// const tuple = [true, "the result is ok"];

// const tuple: string[] = [true, "the result is ok"]; => 오류가 뜬다

// const tuple: (boolean | string)[] = [true, "the result is ok"];

// 제네릭으로 안된다 => 그래서 나온게 튜플이다

// 튜플형태👇🏼
// const tuple: [boolean, string] = [true, "the result is ok"];
// 어떨때 튜플 어떨때 배열? 튜플은 연산되어진 값에 대해 갯수에 대한 제한을 걸고간다 / 갯수에 대한 숫자가 명확할때 => 튜플
// const tuple: [boolean, string] = [true, "the result is ok", 1];   => 안된다

// 타입별칭 => 꼭 함수에서만 쓸 수 있는건 아니다
// type ResultType = [boolean, string];  // => 튜플타입
export type ResultType = [boolean, string];
