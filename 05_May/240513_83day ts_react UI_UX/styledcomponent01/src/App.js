import { keyframes, styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 8px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

// 👇🏼얘는 컴포넌트 아니다 / 변수다
const rotationAnimation = keyframes`
0% {
	transform: rotate(0deg);
	border-radius: 0px;
} 50% {
	transform: rotate(360deg);
	border-radius: 200px;
} 100% {
	transform: rotate(0deg);
	border-radius: 0px;
}
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  ${Emoji} {
    &:hover {
      font-size: 70px;
    }
    &:active {
      /* 해당이모지를 클릭하게된다면 */
      opacity: 0;
    }
  }
`;

// -------------------------------------------
// const Input = styled.input.attrs({ required: true })`
//   background-color: dodgerblue;
// `;
// // 태그요소의 속성값을 정의하고 싶을때( <input required="true">에 required="true")

// -------------------------------------------
// const Btn = styled.button`
//   background-color: tomato;
//   color: #fff;
//   border: none;
//   border-radius: 14px;
//   width: 100px;
//   height: 50px;
//   text-decoration: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 16px;
// `;
// -------------------------------------------
// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const BoxTwo = styled.div`
//   background-color: tomato;
//   width: 100px;
//   height: 100px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Text = styled.span`
//   color: #fff;
// `;

// const Circle = styled(Box)`
//   border-radius: 100px;
// `; // 기존에 Box 컴포넌트를 가져와서 Circle한테 주겠다

function App() {
  return (
    <Container>
      <Box>
        <Emoji>😻</Emoji>
      </Box>
      <Emoji>😭</Emoji>
    </Container>
  );
}

export default App;
// ---------------------------------------------
// function App() {
//   return (
//     <Container>
//       <Box />
//     </Container>
//   );
// }
// ---------------------------------------------
// function App() {
//   return (
//     <Container>
//       <Input></Input>
//       <Input></Input>
//       <Input></Input>
//       <Input></Input>
//     </Container>
//   );
// }
// // required="true" 이면 안에 값이 없으면 다음단계로 이동 못한다

// function App() {
//   return (
//     <Container>
//       <Btn>Log in</Btn>
//       <Btn as="a" href="https://www.naver.com">
//         Log out
//       </Btn>
//     </Container>
//   );
// }
// ---------------------------------------------
// function App() {
//   return (
//     <Container>
//       <Box bgColor="teal">
//         <Text>Hello</Text>
//       </Box>
//       <Circle bgColor="tomato" />
//     </Container>
//   );
// }
// app이라는 컴포넌트의 자식요소들이다 => props 줄 수 있다
