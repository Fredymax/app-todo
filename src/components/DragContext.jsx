import React, { useContext } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { TodoContext } from "../context/TodoProvider";

export const DragContext = ({ children }) => {
  const { setTodos, todos } = useContext(TodoContext);
  const onDragEnd = ({ draggableId, destination }) => {
    if (!draggableId || !destination?.droppableId) return;

    const todoId = draggableId.split("_").pop();

    let _todos = [...todos];

    const index = _todos.findIndex(({ id }) => id === todoId);
    _todos[index]["status"] = destination.droppableId;
    setTodos([..._todos]);
  };

  const handlers = { onDragEnd };

  return (
    <div className="task__list">
      <DragDropContext {...handlers}>{children}</DragDropContext>
    </div>
  );
};
