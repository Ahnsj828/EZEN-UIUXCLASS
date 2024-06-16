// A > B 
// => A가 B보다 크다

// A < B 
// => A가 B보다 작다

// A >= B 
// => A가 B보다 크거나 같다

// A <= B 
// => A가 B보다 작거나 같다

// A == B 
// => A와 B는 같다
// => 숫자를 비교할 경우 자료형(type)은 숫자형(type)이든 문자형(type)이든 상관하지 않고 표기된 숫자만 일치하면 true를 반환한다.
// ex. 숫자형인 10과 문자형이 "10"은 같은 것으로 인식되어 true를 반환한다

// A != B 
// => A와 B는 다르다
// => 숫자를 비교할 경우 자료형(type)은 숫자형(type)이든 문자형(type)이든 상관하지 않고 표기된 숫자만 다르면 true를 반환한다.
// ex. 숫자형인 10과 문자형이 "10"은 같은 것으로 인식되어 false를 반환한다

// A === B 
// => A와 B는 같다
// => 숫자를 비교할 경우 반드시 표기된 숫자와 자료형도 일치해야만 true를 반환한다.
// ex. 숫자형인 10과 문자형이 "10"을 비교했을 경우 표기된 숫자는 같지만 하나는 숫자형 10이고 하나는 문자형 "10"이므로 false를 반환한다

// A !== B 
// => A와 B는 다르다
// => 숫자를 비교할 경우 반드시 표기된 숫자 또는 자료형이 일치하지 않을 때 true를 반환한다.
// ex. 숫자형인 10과 문자형이 "10"을 비교했을 경우 표기된 숫자는 같지만 하나는 숫자형 10이고 하나는 문자형 "10"이므로 true를 반환한다

const k = 10
const m = "10"
document.write("const k = 10", "<br/>") 
document.write('const m = "10"', "<br/>") 

document.write("<br/>")

k == 10
m == 10

document.write("k == 10", "<br/>") // k == 10
document.write( k == 10, "<br/>") // true

document.write("m == 10", "<br/>") // m == 10
document.write( m == 10, "<br/>") // true

document.write("<br/>")

k === 10
m === 10

document.write("k === 10", "<br/>") // k === 10
document.write( k === 10, "<br/>") // true

document.write("m === 10", "<br/>") // m === 10
document.write( m === 10, "<br/>") // false

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

const a = 10
const b = 20
const c = "20"
let result
document.write("const a = 10", "<br/>") 
document.write("const b = 20", "<br/>") 
document.write('const c = "20"', "<br/>") 
document.write("let result", "<br/>") 

document.write("<br/>")

result = a > b
document.write("result = a > b", "<br/>") // result = a > b
document.write("result = ", result, "<br/>") // result = false

result = a < b
document.write("result = a < b", "<br/>") // result = a < b
document.write("result = ", result, "<br/>") // result = true

result = a <= b
document.write("result = a <= b", "<br/>") // result = a <= b
document.write("result = ", result, "<br/>") // result = true

result = b == c
document.write("result = b == c", "<br/>") // result = b == c
document.write("result = ", result, "<br/>") // result = true

result = a != b
document.write("result = a != b", "<br/>") // result = a != b
document.write("result = ", result, "<br/>") // result = true

result = b === c
document.write("result = b === c", "<br/>") // result = b == c
document.write("result = ", result, "<br/>") // result = false