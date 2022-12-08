import React from "react";
import styled from "styled-components";

import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  Droppable,
  DroppableProvided,
} from "@hello-pangea/dnd";

function TodoList() {
  const onDragAnd = () => {};

  const toDos = ["a", "b", "c"];
  const toDo2 = ["d", "e", "f"];
  const toDo3 = ["g", "h", "i"];

  return (
    <DragContainer>
      <DragWrap>
        <DragDropContext onDragEnd={onDragAnd}>
          <Droppable droppableId="one">
            {(dropProps: DroppableProvided) => (
              <ToDoList ref={dropProps.innerRef} {...dropProps.droppableProps}>
                {toDos.map((todo, idx) => (
                  <Draggable draggableId={todo} index={idx}>
                    {(dropItem: DraggableProvided) => (
                      <StyledToDoItem
                        ref={dropItem.innerRef}
                        {...dropItem.draggableProps}
                        {...dropItem.dragHandleProps}
                      >
                        {todo}
                      </StyledToDoItem>
                    )}
                  </Draggable>
                ))}
                {dropProps.placeholder}
              </ToDoList>
            )}
          </Droppable>

          <Droppable droppableId="two">
            {(dropProps: DroppableProvided) => (
              <ToDoList ref={dropProps.innerRef} {...dropProps.droppableProps}>
                {toDo2.map((todo, idx) => (
                  <Draggable draggableId={todo} index={idx}>
                    {(dropItem: DraggableProvided) => (
                      <StyledToDoItem
                        ref={dropItem.innerRef}
                        {...dropItem.draggableProps}
                        {...dropItem.dragHandleProps}
                      >
                        {todo}
                      </StyledToDoItem>
                    )}
                  </Draggable>
                ))}
                {dropProps.placeholder}
              </ToDoList>
            )}
          </Droppable>

          <Droppable droppableId="three">
            {(dropProps: DroppableProvided) => (
              <ToDoList ref={dropProps.innerRef} {...dropProps.droppableProps}>
                {toDo3.map((todo, idx) => (
                  <Draggable draggableId={todo} index={idx}>
                    {(dropItem: DraggableProvided) => (
                      <StyledToDoItem
                        ref={dropItem.innerRef}
                        {...dropItem.draggableProps}
                        {...dropItem.dragHandleProps}
                      >
                        {todo}
                      </StyledToDoItem>
                    )}
                  </Draggable>
                ))}
                {dropProps.placeholder}
              </ToDoList>
            )}
          </Droppable>
        </DragDropContext>
      </DragWrap>
    </DragContainer>
  );
}

export default TodoList;

const DragContainer = styled.main`
  display: flex;
  width: 100%;

  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const DragWrap = styled.article`
  display: flex;
  gap: 15px;
  width: 1000px;
`;

const ToDoList = styled.ul`
  width: 100%;
  min-height: 200px;
  padding: 12px;
  border-radius: 12px;
  background: ${({ theme }) => theme.backgroundColor01};

  span {
    margin-bottom: 20px;
  }
`;

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
