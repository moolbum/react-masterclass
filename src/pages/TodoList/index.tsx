import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, toDoSelector } from "../../atoms";
import { Categorys, CategoryType } from "../../atoms/type";
import Typo from "../../components/atoms/Typo";
import CreateToDo from "./CreateToDo";
import ToDoItem from "./ToDoItem";

const toDoStatus = {
  ALL: "전체",
  TODO: "작업예정",
  DOING: "작업중",
  DONE: "작업완료",
};

const toDoOption = [
  { value: Categorys.ALL, label: toDoStatus.ALL },
  { value: Categorys.TODO, label: toDoStatus.TODO },
  { value: Categorys.DOING, label: toDoStatus.DOING },
  { value: Categorys.DONE, label: toDoStatus.DONE },
];

function TodoList() {
  const [doing, done, toDo] = useRecoilValue(toDoSelector);
  const [toDoCategory, setToDoCategory] = useRecoilState(categoryState);

  const handleCategoryClick = (e: React.FormEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    setToDoCategory(value as CategoryType);
  };

  return (
    <ToDoListContainer>
      <Typo size="h1">To Dos</Typo>
      <CreateToDo />
      <TaskInfo>
        <Typo size="h6">
          {toDoStatus.TODO} {toDo.length} | {toDoStatus.DOING} {doing.length} |{" "}
          {toDoStatus.DONE} {done.length}
        </Typo>

        <select value={toDoCategory} onInput={handleCategoryClick}>
          {toDoOption.map((item) => (
            <option value={item.value}>{item.label}</option>
          ))}
        </select>
      </TaskInfo>

      <ToDoListWrap>
        {(toDoCategory === Categorys.TODO ||
          toDoCategory === Categorys.ALL) && (
          <ToDoList>
            <Typo size="h5">
              📁 {toDoStatus.TODO} {toDo.length}
            </Typo>
            {toDo.map(({ id, text, category }) => {
              return (
                <ToDoItem key={id} id={id} text={text} category={category} />
              );
            })}
          </ToDoList>
        )}

        {(toDoCategory === Categorys.DOING ||
          toDoCategory === Categorys.ALL) && (
          <ToDoList>
            <Typo size="h5">
              📝 {toDoStatus.DOING} {doing.length}
            </Typo>
            {doing.map(({ id, text, category }) => {
              return (
                <ToDoItem key={id} id={id} text={text} category={category} />
              );
            })}
          </ToDoList>
        )}

        {(toDoCategory === Categorys.DONE ||
          toDoCategory === Categorys.ALL) && (
          <ToDoList>
            <Typo size="h5">
              ✅ {toDoStatus.DONE} {done.length}
            </Typo>
            {done.map(({ id, text, category }) => {
              return (
                <ToDoItem key={id} id={id} text={text} category={category} />
              );
            })}
          </ToDoList>
        )}
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
  padding: 12px;
  border-radius: 12px;
  background: ${({ theme }) => theme.backgroundColor01};

  span {
    margin-bottom: 20px;
  }
`;

const TaskInfo = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;

  padding: 12px;
  gap: 10px;

  select {
    padding: 10px;
    border-radius: 8px;
  }
`;
