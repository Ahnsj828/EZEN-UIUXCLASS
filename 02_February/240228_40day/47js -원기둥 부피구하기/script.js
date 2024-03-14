// 원기둥 부피 = 밑면적 x 높이
// 밑면적 = 파이(3.14) x {(지름 / 2)제곱}

// 생성자함수 or class를 활용해서 코드를 작성해라!

// 1. 사용자에게 지름값을 받는다 / 사용자에게 높이 값을 받는다
// 2. 사용자에게 받은 지름 값으로 밑 면적을 만드는 공식을 정의해라
// 3. 밑면적과 사용자에게 받은 높이값으로 원기둥 부피값을 구하는 공식을 정의해라
// 4.

// // 생성자 함수
// function Cylinder(cyldiameter, cylheigh) {
//   // 매개변수에는 특수문자를 사용할 수 없다 cyl-heigh => cylheigh
//   this.diameter = cyldiameter;
//   this.height = cylheigh;
//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     // radius 지름
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//     // 결과갑 출력할거다 / PI 파이
//     // 원기둥 부피 =  Math.PI * radius * radius * this.height
//     // toFixed(2) 소수점 두번째자리까지 구할거다
//   };
// }

// const Cylinder = new Cylinder(8, 10);
// // 지름 8 / 높이 10
// console.log(`원기둥의 부피는${cylinder.getVolume()} 입니다.`);
// // => 이 위는 값이 잘 돌아가는지 확인하기 위한 목적

//
//
const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
// console.log(button);
const result = document.querySelector("#result");

class Cylinder {
  constructor() {cylinderDiameter, cylinderHeight} {
    this.diameter = cylinderDiameter
    this.height = cylinderHeight
  }

  getVolume() {
    let radius = this.diameter / 2
    return (Math.PI * radius * radius * this.height).toFixed(2)
  }
}

// button.addEventListener("click", () => {
// })

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("click");  // click
  let diameter = document.querySelector("#cyl-diameter").value;
  // .value이 붙어야지 인풋태그 안의 값을 가져올 수 있다
  let height = document.querySelector("#cyl-height").value;

  const diameterValue = diameter.value;
  // .value이 붙어야지 인풋태그 안의 값을 가져올 수 있다
  const heightValue = height.value;
  // console.log(diameter, height);
  // console.log(typeof diameter)


  if(diameterValue === "" || height === "") {
    result.innerText = "지름값과 높이갑을 입력하세요!"
  } else {
  const cylinder = new Cylinder(parseInt(diameter), parseInt(height))
  result.innerText = `원기둥의 부피는 ${cylinder.getVolume()} 입니다`
  }
});

// 아무것도 안늫은 경우도 넣어야한다 => 예외조항 처리도 넣어야한다
// 예외조항 처리도 항상 염두해야한다`