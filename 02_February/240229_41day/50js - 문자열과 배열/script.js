// const str = "Hello";
// // 문자열은 "" 가 있어야한다
// const greeting = "안녕하세요!";
// const str01 = "Good Morning!";

// // console.log(typeof str); // string
// // string 은 문자열이라는 뜻이다
// console.log(str.length); // 5
// // length 길이 / 몇개의 단어 길이로 구성되어있는지 확인하는거
// console.log(greeting.length); // 6
// // 특수문자도 갯수로 취급한다
// console.log(str01.charAt(0)); // G
// // c언어나 자바는 캐릭터라고 부른다
// // 0부터 12까지 되어있다 0번째인 G를 찾아온다
// console.log(str01.charAt(3)); // d
//
//
// <문자열 & 배열 - 문자열을 찾는 방법>  charAt( )
// 매개변수로;
// const string = prompt("문자열을 입력하세요!");
// const letter = prompt("어떤 문자를 체크하겠습니까?");

// const counting = (str, ch) => {
//   // ch 단어
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       // 문자열에 특수한 값이 존재하는데 문자열과 같게된다면
//       count += 1;
//       // 값을 하나씩 증가시켜라
//       // 동일한 아이디나 패스워드를 반복적으로 쓰지못하게 할때 사용
//     }
//   }
//   return count;
// };

// const result = counting(string, letter);
// //string 공간에 들어오는 문자열에서 문자를 찾을때마다 값을 하나씩 증가시켜서 이 단어가 몇번 사용됐는지 확인하겠다
// document.write(`${string}에는 ${letter}가 ${result}번 사용되었습니다!`);

// // good morning holiday!에는 ㅐ가 4번 사용되었습니다!
//
//
//
const str1 = "Good morning, everyone. Beautiful morning.";
str1.indexOf("morning");
// startWith( )
// indexOf = 문자열을 넣고 문자열이 시작되어진 그 지점의 인덱스값을 찾아온다
console.log(str1.indexOf("morning")); // 5
console.log(str1.indexOf("evening")); // -1
// indexOf는 존재하지 않는 문자열을 찾으면 -1값이 출력된다
// console.log(str1.indexOf("evening", fistIndex + 1)); // 쌤이 나중에 찾아서 알려주신단다

const str2 = "Hello, everyone";
str2.startsWith("Hello");
console.log(str2.startsWith("Hello")); // true / 해당문자열이 이 문자로 시작되는지 여부를 확인할때
console.log(str2.startsWith("hello")); // false / 대소문자를 가린다 / 대문자 Hello랑 hello랑 다르다
console.log(str2.startsWith("He")); // true
console.log(str2.startsWith("Hello, ev")); // true
// 댓글 남기거나 / 아이디 생성하거나 / 욕설 fu** 사용하지 못하게 <=이럴때 사용한다
console.log(str2.startsWith("el", 1)); // true
// 1번째 인덱스에서 시작되는 문자가 el이맞냐
console.log(str2.startsWith("o", 4)); // true

// 반대도 있다
// endWith( )
console.log("==== endsWith ====");
console.log(str2.endsWith("everyone")); // true
console.log(str2.endsWith("everyone.")); // false
console.log(str2.endsWith("Everyone.")); // false
console.log(str2.endsWith("one")); // true
console.log(str2.endsWith("le, everyone")); // false

// 지금에 나오는 얘가 훨신 더 많이 사용된다
// includes( )
console.log("==== includes ====");
console.log(str2.includes("every")); // true
console.log(str2.includes("one")); // true
//
//
console.log("==== trim methods ====");
const str3 = "ab cd ef";
const str3_1 = " ab cd ef ";
console.log(str3); // 'ab cd ef'
console.log(str3_1); // ' ab cd ef ' / 빈칸도 문자열로 취급한다
console.log(str3_1.trim()); // 'ab cd ef' / 공간을 없앤다
console.log(str3_1.trimStart()); // 'ab cd ef ' / 앞의 공간을 없앤다
console.log(str3_1.trimEnd()); // ' ab cd ef' / 뒤의 공간을 없앤다
// 네이버에서 '고구마' 라고 검색했을때와 ' 고구마' 검색결과가 같게 할때 사용

//
//
//  이제 많이 사용되는 중요한애들!!
console.log("==== Uppercase / Lowercase ===="); //css에서도 사용가능해서 많이 사용 안된다 /but, 사용될때가 있다
let str4 = "Good Morning";
console.log(str4.toUpperCase()); // GOOD MORNING
console.log(str4.toLowerCase()); // good morning
// 애플이 만들어진 운영체제로 들어올때 iOS로 들어온다.

console.log("==== substring ====");
console.log(str4.substring(5, 8)); // Mor
// 매개변수 2개 / 5라는 인덱스에서 8인덱스 바로 앞까지 찾아와라 / 5,6,7
console.log(str4.substring(5)); // Morning
// 매개변수 1개 / 5라는 인덱스부터 찾아와라 / 5~

console.log("==== slice ===="); //substring과 똑같아 보인다 / slice는 음수값을 사용할수 있다
console.log(str4.slice(0, 4)); // Good
console.log(str4.slice(0)); // Good Morning
console.log(str4.slice(-5, 11)); // rning
// 음수 값을 전혀 인식하지 못함!! => 음수값이 들어오는 순간 바로 0으로 치환

console.log("==== split ===="); // 가장 많이 사용되고 가장 많이 중요하다!!!!!
const str5 = "Hello everyone";
const array1 = str5.split(" ");
console.log(array1);
// 배열로 입력시켜준다 / 배열로 되면 쓸 수 있는 함수가 많아진다
// Hello따로 everyone따로
const array2 = str5.split(" ");
console.log(array2);
