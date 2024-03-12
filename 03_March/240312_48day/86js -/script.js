fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => console.log(users));
// 이 해당 사이트의 데이터를 가져오겠다

// const display = (users) => {
//   const result = document.querySelector("result");
//   let string = "";
//   // let 각요소마다 재할당 해서 되서
//   users.forEach((user) => {
//     string += `
//       <ul>
//         <li>${user.name}</li>
//         <li>${user.username}</li>
//         <li>${user.email}</li>
//       </ul>
//     `;
//   });
//   result.innerHTML = string;
// };
// =>

const display = (users) => {
  const result = document.querySelector("#result");
  let string = "";
  // let 각요소마다 재할당 해서 되서
  users.forEach((user) => {
    string += `
      <table>
        <tr><th>이름</th><td>${user.name}</td></tr>
        <tr><th>아이디</th><td>${user.username}</td></tr>
        <tr><th>이메일</th><td>${user.name}</td></tr>
        </table>

    `;
  });
  result.innerHTML = string;
};

async function init() {
  // 비동기다 => 먼저 다 된 애가 먼저 출력된다 => 순서가 없다
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  // console.log(users);
  display(users);
}
init();
