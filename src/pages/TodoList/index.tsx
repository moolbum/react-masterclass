import React from "react";
import { useForm } from "react-hook-form";
import { RecoilState, useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../../atoms";
import ErrorMessage from "../../components/atoms/ErrorMessage";
import Typo from "../../components/atoms/Typo";

export type CategoryType = "TO_DO" | "DOING" | "DONE";
interface IForm {
  toDo: string;
}

interface ITodo {
  text: string;
  category: CategoryType;
}

function TodoList() {
  const [toDoValue, setToDoValue] = useRecoilState<ITodo[]>(
    toDoState as RecoilState<any>
  );

  const { register, handleSubmit, setError, formState, setValue } =
    useForm<IForm>();

  const onValid = ({ toDo }: IForm) => {
    if (toDo === "") {
      setError("toDo", { message: "텍스트를 입력해주세요" });
    }
    setValue("toDo", "");
    setToDoValue((prev) => [{ text: toDo, category: "TO_DO" }, ...prev]);
  };

  console.log("toDoValue", toDoValue);

  return (
    <TodoListContainer>
      <Typo size="h1">To Dos</Typo>
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
    </TodoListContainer>
  );
}

export default TodoList;

const TodoListContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

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
