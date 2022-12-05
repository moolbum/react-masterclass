import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../../atoms";
import { ITodo } from "../../atoms/type";
import ErrorMessage from "../../components/atoms/ErrorMessage";

export interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDoValue = useSetRecoilState<ITodo[]>(toDoState);

  const { register, handleSubmit, setError, formState, setValue } =
    useForm<IForm>();

  const onValid = ({ toDo }: IForm) => {
    if (toDo === "") {
      setError("toDo", { message: "텍스트를 입력해주세요" });
    }
    setValue("toDo", "");
    setToDoValue((prev) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...prev,
    ]);
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", {
          required: "텍스트를 입력해주세요",
        })}
        placeholder="Todo"
      />
      {formState.errors.toDo && (
        <ErrorMessage>{formState.errors.toDo.message}</ErrorMessage>
      )}

      <button>Add</button>
    </Form>
  );
}

export default CreateToDo;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
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
