import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoState } from "../../atoms";
import Typo from "../../components/atoms/Typo";
import CreateToDo from "./CreateToDo";

export interface IForm {
  toDo: string;
}

function TodoList() {
  const toDoValue = useRecoilValue(toDoState);

  return (
    <TodoListContainer>
      <Typo size="h1">To Dos</Typo>
      <CreateToDo />

      <ToDoList>
        {toDoValue.map(({ id, text }) => {
          return (
            <ToDoItem key={id}>
              {text}
              <div>
                <button>Doing</button>
                <button>To Do</button>
                <button>Done</button>
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
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  box-shadow: 0px 2px 6px rgba(94, 101, 110, 0.2);
`;
