import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../../atoms";
import { CategoryType } from "../../atoms/type";
import Typo from "../../components/atoms/Typo";
import CreateToDo from "./CreateToDo";

export interface IForm {
  toDo: string;
}

function TodoList() {
  const toDoValue = useRecoilValue(toDoState);
  const setTodos = useSetRecoilState(toDoState);

  const onClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
    text: string
  ) => {
    const { name } = e.currentTarget;
    console.log(e.currentTarget);

    setTodos((prev) => {
      const targetIndex = prev.findIndex((item) => item.id === id);
      const newToDo = { text, id, category: name as CategoryType };

      return [
        ...prev.slice(0, targetIndex),
        newToDo,
        ...prev.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <TodoListContainer>
      <Typo size="h1">To Dos</Typo>
      <CreateToDo />

      <ToDoList>
        {toDoValue.map(({ id, text, category }) => {
          return (
            <ToDoItem key={id}>
              {text}
              <div className="todo-item-button">
                {category !== "DOING" && (
                  <button name="DOING" onClick={(e) => onClick(e, id, text)}>
                    Doing
                  </button>
                )}
                {category !== "TO_DO" && (
                  <button name="TO_DO" onClick={(e) => onClick(e, id, text)}>
                    To Do
                  </button>
                )}
                {category !== "DONE" && (
                  <button name="DONE" onClick={(e) => onClick(e, id, text)}>
                    Done
                  </button>
                )}
              </div>
            </ToDoItem>
          );
        })}
      </ToDoList>
    </TodoListContainer>
  );
}

export default TodoList;

const TodoListContainer = styled.main`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ToDoList = styled.ul`
  width: 100%;
  max-width: 500px;
  margin-top: 50px;
`;

const ToDoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  box-shadow: 0px 2px 6px rgba(94, 101, 110, 0.2);

  .todo-item-button {
    display: flex;
    gap: 10px;
    button {
      border-radius: 5px;
      padding: 5px 10px;
      box-shadow: 0px 2px 2px rgba(94, 101, 110, 0.2);
    }
  }
`;
