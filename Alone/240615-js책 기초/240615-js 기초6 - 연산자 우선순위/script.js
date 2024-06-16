document.write("< 연산자 우선순위 >", "<br/>")

document.write("1. ( )", "<br/>")
document.write("=> 괄호가 가장 우선이다", "<br/>")

document.write("2. 단항 연산자( -- , ++ , !)", "<br/>")

document.write("3. 산술 연산자( * , / , % , + , - )", "<br/>")

document.write("4. 비교 연산자( > , >= , < , <= , == , === , !== , != )", "<br/>")

document.write("5. 논리 연산자( && , || )", "<br/>")

document.write("6. 대입(복합 대입) 연산자( = , += , -= , *= , /= , %= )", "<br/>")


document.write("<br/>")
document.write("============================================")
document.write("<br/>")

const a = 10
const b = 20
const c = 30
const d = 40
let result
document.write("const a = 10", "<br/>") 
document.write("const b = 20", "<br/>") 
document.write("const c = 30", "<br/>") 
document.write("const d = 40", "<br/>") 
document.write("let result", "<br/>") 

document.write("<br/>")

result = a > b || b >=c || c > d    //   false || false || false
document.write("result = a > b || b >=c || c > d", "<br/>") 
document.write("result = ", result, "<br/>") // result = false

result = a > b || b >=c || c <= d    //   false || false || true
document.write("result = a > b || b >=c || c > d", "<br/>") 
document.write("result = ", result, "<br/>") // result = true

result = a <= b && b >=c && c <= d    //   false || false || true
document.write("result = a > b || b >=c || c > d", "<br/>") 
document.write("result = ", result, "<br/>") // result = false

result = a <= b && b >=c && c <= d    //   true || false || true
document.write("result = a > b || b >=c || c > d", "<br/>") 
document.write("result = ", result, "<br/>") // result = false

result = a <= b && b <=c && c <= d    //   true || true || true
document.write("result = a > b || b >=c || c > d", "<br/>") 
document.write("result = ", result, "<br/>") // result = true

result = !(a > b)    //   !(false) = !false를 계산 =  true
document.write("result = a > b || b >=c || c > d", "<br/>") 
document.write("result = ", result, "<br/>") // result = true
