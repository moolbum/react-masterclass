import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, toDoSelector } from "../../atoms";
import { Categorys, CategoryType } from "../../atoms/type";
import Typo from "../../components/atoms/Typo";
import CreateToDo from "./CreateToDo";
import ToDoItem from "./ToDoItem";

function TodoList() {
  const [doing, done, toDo] = useRecoilValue(toDoSelector);
  const [toDoCategory, setToDoCategory] = useRecoilState(categoryState);
  console.log("toDoCategory>>>>>", toDoCategory);

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
          작업예정 {toDo.length} | 작업중 {doing.length} | 작업완료{" "}
          {done.length}
        </Typo>

        <select value={toDoCategory} onInput={handleCategoryClick}>
          <option value={Categorys.ALL}>전체</option>
          <option value={Categorys.TODO}>작업예정</option>
          <option value={Categorys.DOING}>작업중</option>
          <option value={Categorys.DONE}>작업완료</option>
        </select>
      </TaskInfo>

      <ToDoListWrap>
        {(toDoCategory === Categorys.TODO ||
          toDoCategory === Categorys.ALL) && (
          <ToDoList>
            <Typo size="h5">📁 작업예정 {toDo.length}</Typo>
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
            <Typo size="h5">📝 작업중 {doing.length}</Typo>
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
            <Typo size="h5">✅ 작업완료 {done.length}</Typo>
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
