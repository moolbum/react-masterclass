import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../../atoms";
import { Categorys, CategoryType, ITodo } from "../../atoms/type";

interface TodoItemProps extends ITodo {
  key: number;
}

function ToDoItem({ id, text, category }: TodoItemProps) {
  const setTodos = useSetRecoilState(toDoState);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    if (name === Categorys.DELETE) {
      return setTodos((prev) => prev.filter((item) => item.id !== id));
    }

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
    <StyledToDoItem>
      {text}
      <div className="todo-item-button">
        {category !== Categorys.DOING && (
          <button name={Categorys.DOING} onClick={(e) => onClick(e)}>
            📝 Doing
          </button>
        )}
        {category !== Categorys.TODO && (
          <button name={Categorys.TODO} onClick={(e) => onClick(e)}>
            📁 To Do
          </button>
        )}
        {category !== Categorys.DONE && (
          <button name={Categorys.DONE} onClick={(e) => onClick(e)}>
            ✅ Done
          </button>
        )}
        <button name={Categorys.DELETE} onClick={(e) => onClick(e)}>
          X
        </button>
      </div>
    </StyledToDoItem>
  );
}

export default ToDoItem;

const StyledToDoItem = styled.li`
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
