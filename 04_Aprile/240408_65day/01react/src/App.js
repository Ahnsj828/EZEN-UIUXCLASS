import { useState } from "react";
import Box from "./componets/Box";
// 모듈화 되어있는 box라는 컴포넌트를 가져와야한다
import "./App.css";

// 가위, 바위, 보 데이터 관리
const choise = {
  scissors: {
    name: "scissors",
    img: "https://www.collinsdictionary.com/images/full/scissors_100136453.jpg",
  },
  rock: {
    name: "rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  paper: {
    name: "paper",
    img: "https://www.officewarehouse.com.ph/__resources/_web_data_/products/products/images/4640.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState("");
  const [ComputerSelect, setComputerSelect] = useState("");
  const [result, setResult] = useState("");

  const randomChoise = () => {
    const itemArray = Object.keys(choise);
    // console.log(itemArray);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    // console.log(randomItem);
    const final = itemArray[randomItem];
    // console.log(final);
    return choise[final];
  };

  const judgement = (user, computer) => {
    // console.log(user, computer);
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "win" : "lose";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "win" : "lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "win" : "lose";
    }
  };

  const play = (item) => {
    // console.log(item)
    setUserSelect(choise[item]);
    const computerChoise = randomChoise();
    setComputerSelect(computerChoise);
    setResult(judgement(choise[item], computerChoise));
  };

  return (
    <div className="container">
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={ComputerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}
export default App;

/* <div className="box">Me</div>
      <div className="box">Com</div> */
//   👇🏼
// <Box title="You" />
// <Box title="Computer" />

// () => play(scissors) 콜백함수 형식으로 쓰지 않으면 가위바위보를 실행시키고 게임이 실행된다
//  scissors rock paper 매개변수
// item은 매개변수로 들어온 scissors rock paper 을 의미
