import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector } from "../../atoms";
import Typo from "../../components/atoms/Typo";
import CreateToDo from "./CreateToDo";
import ToDoItem from "./ToDoItem";

export interface IForm {
  toDo: string;
}

function TodoList() {
  const [doing, done, toDo] = useRecoilValue(toDoSelector);

  return (
    <ToDoListContainer>
      <Typo size="h1">To Dos</Typo>
      <CreateToDo />
      <TaskInfo>
        <Typo size="h6">
          작업완료 {done.length} 작업중 {doing.length} 작업예정 {toDo.length}
        </Typo>
      </TaskInfo>

      <ToDoListWrap>
        <ToDoList>
          <Typo size="h5">📁 작업예정 {toDo.length}</Typo>
          {toDo.map(({ id, text, category }) => {
            return (
              <ToDoItem key={id} id={id} text={text} category={category} />
            );
          })}
        </ToDoList>
        <ToDoList>
          <Typo size="h5">📝 작업중 {doing.length}</Typo>
          {doing.map(({ id, text, category }) => {
            return (
              <ToDoItem key={id} id={id} text={text} category={category} />
            );
          })}
        </ToDoList>
        <ToDoList>
          <Typo size="h5">✅ 작업완료 {done.length}</Typo>
          {done.map(({ id, text, category }) => {
            return (
              <ToDoItem key={id} id={id} text={text} category={category} />
            );
          })}
        </ToDoList>
      </ToDoListWrap>
    </ToDoListContainer>
  );
}

export default TodoList;

const ToDoListContainer = styled.main`
  display: flex;
  width: 100%;

  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ToDoListWrap = styled.section`
  width: 100%;
  display: flex;
  gap: 15px;
`;

const ToDoList = styled.ul`
  width: 100%;
  max-width: 500px;
  padding: 12px;
  border-radius: 12px;
  background: ${({ theme }) => theme.backgroundColor01};

  span {
    margin-bottom: 20px;
  }
`;

const TaskInfo = styled.div`
  align-self: flex-start;
  padding: 12px;
`;
