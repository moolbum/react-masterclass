import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import ErrorMessage from "../../components/atoms/ErrorMessage";

interface IForm {
  email: string;
  id: string;
  name: string;
  password: string;
  passwordCheck: string;
}

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  const onValid = (data: IForm) => {
    if (data.password !== data.passwordCheck) {
      setError(
        "passwordCheck",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    }

    console.log(data);
  };
  console.log("errors", errors);

  return (
    <div>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@/,
              message: "이메일 형식으로 입력해주세요",
            },
          })}
          placeholder="이메일"
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        <input
          {...register("name", {
            required: "이름을 입력해주세요",
            validate: (value) => (value.includes("dale") ? "no Dale" : true),
          })}
          placeholder="이름"
        />
        <ErrorMessage>{errors?.name?.message}</ErrorMessage>

        <input
          {...register("id", { required: "아이디를 입력해주세요" })}
          placeholder="아이디"
        />
        <ErrorMessage>{errors?.id?.message}</ErrorMessage>

        <input
          {...register("password", { required: "비밀번호를 입력해주세요" })}
          placeholder="비밀번호"
          type="password"
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>

        <input
          {...register("passwordCheck", {
            required: "비밀번호 확인을 입력해주세요",
          })}
          placeholder="비밀번호 확인"
          type="password"
        />
        <ErrorMessage>{errors?.passwordCheck?.message}</ErrorMessage>

        <button>Add</button>
      </Form>
    </div>
  );
}

export default SignIn;

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
