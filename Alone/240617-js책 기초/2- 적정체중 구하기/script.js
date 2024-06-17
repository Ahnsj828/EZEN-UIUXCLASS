// // < 총정리 실습 - 적정 체중을 구하는 테스트기 만들기 >
// // 적정 체중 = (본인신장 - 100) x 0.9

// const name = prompt("당신의 이름은?", ""); // "" 이 빈 문자열은 알림창 떴을때 적혀있을 내용란이다 / 없으면 아무것도 안적혀있다
// const height = prompt("당신의 키는?", "");
// const weight = prompt("당신의 몸무게는?", "");

// const normal_weight = (height - 100)*0.9;

// // const result = (normal_weight >= weight) ? "'${name}'님 적정 체중입니다" : "'${name}'님 적정 체중이 아닙니다"
// let result = weight >= normal_weight - 5 && weight <= normal_weight + 5;
// result = result ? "적정 체중입니다" : "적정 체중이 아닙니다";
// document.write(name + "님은"+ result);

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

// < 총정리 실습 - 적정 체중을 구하는 테스트기 만들기 >
// 적정 체중 = (본인신장 - 100) x 0.9

const userName = prompt("당신의 이름은?")
const userHeight = prompt("당신의 키는?")
const userWeight = prompt("당신의 몸무게는?")

const normal_weight = (userHeight - 100) * 0.9

// let result = userWeight <= ( normal_weight + 5 ) && userWeight >= ( normal_weight - 5 )

// result = result ? "적정 체중입니다" : "과체중이거나 저체중입니다"

// document.write(userName, "님 ", result)

// 👇🏻

// let result = userWeight <= ( normal_weight + 5 ) && userWeight >= ( normal_weight - 5 ) ? "적정 체중입니다" : "과체중이거나 저체중입니다"

// document.write(userName, "님 ", result)

// 👇🏻

if(userWeight <= ( normal_weight + 5 ) && userWeight >= ( normal_weight - 5 )) {
  document.write(userName, "님 ", "적정 체중입니다")
} else if(userWeight > ( normal_weight + 5 )) {
  document.write(userName, "님 ", "과체중입니다")
} else if(userWeight < ( normal_weight - 5 )) {
  document.write(userName, "님 ", "저체중입니다")
}
