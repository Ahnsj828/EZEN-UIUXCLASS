// 생성부 / 입력부
import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

interface ITodo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE"; // 타입 리터럴형식으로 줬다 / 셋중 하나면된다
}

const CreateToDo = () => {
  return (
    <form
      onSubmit={handleSubmit(handValid)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <input
        {...register("toDo", { required: "Please write a todo..." })}
        type="text"
        placeholder="Wirte a todo..."
      />
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;
