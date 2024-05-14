const animals = [
  { name: "곰", age: 18 },
  { name: "여우", age: 27 },
  { name: "사자", age: 32 },
  { name: "얼룩말", age: 41 },
  { name: "기린", age: 56 },
];
// console.log(animals);

const older20 = document.querySelector(".btn20");
const older30 = document.querySelector(".btn20");
const older40 = document.querySelector(".btn20");

const result = document.querySelector(".result");

// console.log(animals[0]);
// animals.length = x;
// console.log(animals.length);
// for (let i = 0; i <= animals.length; i++) {
//   // console.log(i);

//   older20.addEventListener("click", (i) => {
//     if (animals.age >= 20) {
//       result.innerHTML = `${animals.name} : ${animals.age}`;
//     }
//   });
// }

older20.addEventListener("click", (i) => {
  for (let i = 0; i <= animals.length; i++) {
    // console.log(i);
    if (animals.age >= 20) {
      result.innerHTML = `${animals.name} : ${animals.age}`;
    }
  }
});
