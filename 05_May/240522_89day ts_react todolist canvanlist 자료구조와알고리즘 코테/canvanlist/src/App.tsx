import React from "react";
import { useRecoilState } from "recoil";
// useRecoilValue가 값을 찾아오는거 /useRecoilState 값 편집
import { minuteState, hourSelector } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);

  // const hours = useRecoilValue(hourSelector);
  const [hours, setHours] = useRecoilState(hourSelector);

  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
    // string형식은 number에 줄수없다 / 초기값은 숫잔데 여기서 문자로 했어 라는 오류가 떴다 => 숫자로 바꿔야한다
    // 방법 1 => setMinutes(Number(event.currentTarget.value));
    // 방법 2 => setMinutes(+event.currentTarget.value);
    //    => + 주면 숫자로 변환시키는 ts문법이다
  };

  const onHoursChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
    // 숫자 문자에 대한 통일 안해서 => 숫자로 변환 => 앞에 +
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "10px",
      }}
    >
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={onHoursChange}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
}

export default App;
