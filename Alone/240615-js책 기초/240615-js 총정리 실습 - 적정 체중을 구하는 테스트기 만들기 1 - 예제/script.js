// < 총정리 실습 - 적정 체중을 구하는 테스트기 만들기 >
// 적정 체중 = (본인신장 - 100) x 0.9

// < ex >
// 신장 : 180cm
// 체중 : 74kg
// 적정체중 : (180 - 100) x 0.9 = 72kg
// 결과 :  적정체중은 72kg이며, 현재 적정 체중에서 2kg 초과한 것을 알 수 있다.

const csHeight = 180 // 신장
const csWeight = 74 // 체중
document.write("철수 키 = ", csHeight, "<br/>")
document.write("철수 몸무게 = ", csWeight, "<br/>")

// 평균체중 = (신장 - 100) x 0.9
const csNormal_W = (csHeight - 100)*0.9
document.write("평균 체중 = ",csNormal_W)

document.write("<br/>")
document.write("============================================")
document.write("<br/>")
