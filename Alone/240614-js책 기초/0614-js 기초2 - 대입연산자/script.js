let num1 = 10
let num2 = 3

// const로 쓰면 안된다
num1 += num2 // num1 = num1(10) + num2(3)  =  13  =>  num1 = 10
document.write(num1, "<br/>") // 13

num1 -= num2 // num1 = num1(13) - num2(3)  =  10  =>  num1 = 10
document.write(num1, "<br/>") // 10

num1 *= num2 // num1 = num1(10) * num2(3)  =  30  =>  num1 = 30
document.write(num1, "<br/>") // 30

num1 %= num2 // num1 = num1(30) % num2(3)  =  0(10...0)  =>  num1 = 0
document.write(num1, "<br/>") // 0


document.write("<br/>")
document.write("============================================")
document.write("<br/>")

let str = "<table border='1'>"
str += "<tr>"
str += "<td>1</td><td>2</td><td>3</td>"
str += "</tr>"
str += "</table>"
document.write(str)

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

let str2 = "<table border='2'>" // 2는 테이블 보더 두께
str2 += "<tr>"
str2 += "<td>1</td><td>2</td><td>3</td>"
str2 += "</tr>"
str2 += "<tr>"
str2 += "<td>4</td><td>5</td><td>6</td>"
str2 += "</tr>"
str2 += "</table>"
document.write(str2)

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

let strA = "문자1"
strA += "문자2"
strA += "문자3"
document.write(strA) // 문자1문자2문자3 // 숫자는 더하고 문자는 옆에 추가
