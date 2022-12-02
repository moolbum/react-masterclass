import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import styled from "styled-components";

function TodoList() {
  const { register, handleSubmit, formState } = useForm();

  const onValid = (data: FieldValues) => {
    console.log(data);
  };

  console.log("formState", formState.errors);

  return (
    <div>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[A-Za-z0-9._%+-] + @$/,
              message: "이메일 형식으로 입력해주세요",
            },
          })}
          placeholder="이메일"
        />
        <input
          {...register("name", {
            required: "이름을 입력해주세요",
          })}
          placeholder="이름"
        />
        <input
          {...register("id", { required: "아이디를 입력해주세요" })}
          placeholder="아이디"
        />
        <input
          {...register("password", { required: "비밀번호를 입력해주세요" })}
          placeholder="비밀번호"
          type="password"
        />
        <input
          {...register("passwordCheck", {
            required: "비밀번호 확인을 입력해주세요",
          })}
          placeholder="비밀번호 확인"
          type="password"
        />

        <button>Add</button>
      </Form>
    </div>
  );
}

export default TodoList;

const Form = styled.form`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;

  input {
    padding: 10px 20px;
    border-radius: 8px;
  }

  button {
    padding: 10px 20px;
    border-radius: 8px;
  }
`;
