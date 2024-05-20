import React, { useState } from "react";
// 값이 들어오면 그 값을 관리해야하니까 => useState
import { useForm } from "react-hook-form";

// evnet가 발생하면, target도 존재하고, currentTarget도 존재한다.
// currentTarget은 언제 사용하나? => event 핸들러가 바인딩되어 있는 요소의 value값을 찾아오고자 할 때 사용한다
// target은 실제 event가 발생된 요소의 value값을 찾아오고자 할 때 사용한다
// React.js에서는 currentTarget을 사용해서 value값을 찾을때에는 FormEvent
// target을 사용해서 value값을 찾고자 할 때에는 changeEvent를 사용한다

const Todolist = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // register는 특정한 라벨을 만들고 매칭되는 form요소를 확인 할 수 있는 함수다 / 이름을 붙여서 관리
  // watch 함수다 / 이름이 붙여진 input의 값을 찾아오는 역할 / onchange 역할 / 값이 변화하는 그 순간
  // handleSubmit 이벤트 핸들러의 콜백함수 역할을한다
  // formState 만약 에러가 발생했을때 변수값을 지정했던것을 나오게
  console.log(watch());

  const onValid = (data: any) => {
    console.log(data);
  };
  // console.log(formState.errors);

  const [toDo, setTodo] = useState("");
  const [toDoError, setToDoError] = useState("");

  const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(toDo);
    if (toDo.length < 10) {
      // input안에 글자수가 10자미만인 경우
      return setToDoError("Todo should be more longer..."); // 이 메세지가 나오게 /  이메세지는 toDoError가 갖고 있다
    }
  };

  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 이벤트에 대한 타입 정의
    // React.FormEvent<HTMLInputElement> => 사용자가 입력한 값을 타입 변수로 / 어떤값인지 모르니 제네릭형식으로
    const {
      target: { value },
    } = event;
    setTodo(value);
  };

  // 👇🏼👆🏼 상황에 따라 사용하는게 다르다

  // const onchange = (event: React.FormEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  // };

  return (
    // <div>
    //   <form onSubmit={onsubmit}>
    //     <input
    //       onChange={onchange}
    //       value={toDo}
    //       type="text"
    //       placeholder="Write a Todo"
    //     />
    //     <button>Add</button>
    //     {toDoError !== "" ? toDoError : null}
    //   </form>
    // </div>

    // 👇🏼 React-hook-form 사용

    <div>
      <form
        onSubmit={handleSubmit(onValid)}
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
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Aa-z0-9]+@naver.com/gm,
              message: "Only naver.com emails allowed",
            },
          })}
          type="text"
          placeholder="Email"
        />
        {/* { required: true } 하면 =>  값을 입력 안하고 다음단계로 안넘어간다 / 필수조건값 */}
        {/* pattern: { value: /^[A-Aa-z0-9]+@naver.com/gm,}, message: "Only naver.com emails allowed", / 정규표현식 / ^[A-Aa-z0-9] => 앞에 이것중에 뭐가 와도 상관없다 / @naver.com/gm 네이버 메일 형식으로해라 /  message => 이 조건들이 안맞으면 나오는 메세지 */}
        <input {...register("firstname")} type="text" placeholder="Firstname" />
        <input {...register("lastname")} type="text" placeholder="Lastname" />
        <input
          {...register("username", { required: true, minLength: 10 })}
          type="text"
          placeholder="Usernameo"
        />
        {/* minLength: 10 => 10자 이상이되어야 다음단계로 넘어간다 */}
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your Password is too short",
            },
          })}
          type="password"
          placeholder="Password"
        />
        <span>{errors.password?.message as string}</span>
        {/* minLength: 5 => 5자 이상이되어야 다음단계로 넘어간다 */}
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your Password is too short",
            },
          })}
          type="password"
          placeholder="Password1"
        />
        <span>{errors.password1?.message as string}</span>
        <button>Add</button>
      </form>
    </div>
  );
};

export default Todolist;
// 사용자가 input에 어떠한 값을 넣었다는걸 알아야지만 변수에 담아서 ul과 li에 넣을수 있다
// 사용자가 입력한 값을 알아야한다
// <input onChange={onchange} type="text" placeholder="Write a Todo" /> =>  inpute태그에 어떠한 값이 들어오게 된다면 onchange함수가 작동되게 해라
