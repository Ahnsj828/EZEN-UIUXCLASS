// const raffle = document.querySelector("#raffle");
// console.log(raffle);
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // 서버로 데이터 전송하지 못하게 막아야한다
  // console.log("submit");
  const seed = document.querySelector("#seed");
  const total = document.querySelector("#total");
  const result = document.querySelector("#result");

  let winner = new Set();
  for (let i = 0; i < total.value; i++) {
    // total에 들어오는 숫자만큼 반복해야한다 / total = " "명뽑기
    let picked = Math.floor(Math.random() * seed.value + 1);
    // Math.floo() 소수점을 죽이려고
    winner.add()(`${picked}번, `);
    // set함수 한테 추가하려면 add
    // 배열한테 추가하려면 뭐였지?
  }
  result.innerText = `당첨자: ${Array.form(winner).join("")}`;

  //   if (winner.size !== total.value) {
  //     for (let i = 0; i < total.value; i++) {
  //       let picked = Math.floor(Math.random() * seed.value + 1);
  //       winner.add()(`${picked}번, `);
  //     }
  //   } else {
  //     result.innerText = `당첨자 : ${Array.from(winner).join("")}`;
  //     // 배열이 아닌 애를 배열로 바꾸는방법
  //   }
});
