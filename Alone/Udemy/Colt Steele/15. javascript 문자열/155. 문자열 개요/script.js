// string 문자열
// 문자열은 숫자나 불리언만큼 일반적으로 사용된다

// Primitive Types
// Number
// String
// Boolean
// Null
// Undefined

// 문자열은 기본적으로 텍스트 정보다 => 텍스트를 상징하는거다
// "Strings of characters"
// 첫번째로 알아야하는 부분 => 따옴표로 감싸야한다
// JavaScript에 문자열 작업 중임을 알리는 방법이다

// 문자열을 입력할 경우 텍스트를 입력해 변수로 저장하고 싶다면 
let user1name = "sungjin"
// "" 따옴표가 필요하다 => 없으면 오류뜬다 => 따옴표를 사용하면 문자열이다
// user1name 변수가 문자열로 설정된다
console.log(user1name)  //   sungjin

// 1) 큰따옴표 ""
let firstName = "Ziggy"
console.log(firstName)   //   Ziggy
// 2) 따옴표 안에 긴문장
let msg = "Please do not feed the chimps!"
console.log(msg)   //   Please do not feed the chimps!
// 3) 작은따옴표 ''
let animal = `Dumbo Octopus`
console.log(animal)   //   Dumbo Octopus
// 4) 따옴표 안에 특수문자
let special = "특수문자!@#$%^&*()"  // 특수문자도 가능하다
console.log(special)  //   특수문자!@#$%^&*()
// ""큰 따옴표  ''작은 따옴표 둘다 가능하다  / 단 일관성을 유지해야한다 
//  =>  ex) let bad = "this is wrong'  이런건 안된다  
//     => 이렇게되면 오류가 뜬다  => 이유 : javascript가 닫는 큰따옴표를 기다리기 때문이다

let number1 = "23"
console.log(number1)  //  23 문자열
let number2 = 23
console.log(number2)  // 23  숫자
//   => 두 23은 다르다 
// 콘솔창에서 "23"을 치면 '23'이라 나오고 / 23을 치면 23 이라 나온다   =>  문자열과 숫자

// 문자열은 텍스트 정보로 이뤄진 줄로 매우 유용하다
// 브라우저에서 작업하려면 텍스트 데이터를 다룰 일이 많다
//  => 사용자 이름, 주소, 주와 도시 등등 온갖 정보가 다 있다
// 문자열에 좋은 특징이 있다 
// 메서드라는 것에 대해 
// 하지만 정리하자면 문자열은 또 하나의 원시 타입이다
// 텍스트 정보이고 한 글자 이상의 길이일 수 있고 아무것도 적지 않아도 된다
// "" <= 이건 빈 문자열이 된다  => 엄밀히 말하면 문자열이다 / 그냥 든 게 없을 뿐이다
// "ㅇ퍄ㅓㅍㅊㄴ ㅁㄴ 랴돜" => 아주 긴 문자열도 만들 수 있다  <= 이걸 변수에 저장할 수 있다

