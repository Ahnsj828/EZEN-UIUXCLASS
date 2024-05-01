// < 선언형 / 명령형 >
// (*같은 결과를 만들어내는 데,
// 	선언형 방식(=함수형방식)으로 만들것이냐 VS 명령형 방식으로 만들 것이냐)
// 	선언형 방식 => 하이레벨 방식 / 명령형 방식 => 로우레벨 방식

// 16. 배열을 활용한 선언형 VS 명령형 코드구현방식(feat. 자료구조에 대한 이해)
//  선언형 / 명령형
//  1) 명령형 => 로우레벨 => 우리가 그동안 배워왔던 방식
//  2) 선언형 => 함수형방식 => 하이레벨(*고급 코딩 방식)

export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];
// => range 함수
