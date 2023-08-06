import React, { useContext } from "react";
import { IconPlus } from "../Icons";

import { Droppable } from "react-beautiful-dnd";
import { TodoContext } from "../context/TodoProvider";

export const TaskSection = ({ title, status, children }) => {
  const { setOpenModal, initialNewTodo } = useContext(TodoContext);

  const handleClick = () => {
    initialNewTodo(status);
    setOpenModal(true);
  };

  return (
    <section className="task__section__container">
      <div className="task__title">
        <h5>{title}</h5>
        <button className="button-plus" onClick={() => handleClick(status)}>
          <IconPlus />
        </button>
      </div>
      <div className="task__section">
        <Droppable droppableId={status}>
          {(provided, snapshot) => {
            return (
              <div
                className="task__list__container"
                ref={provided.innerRef}
                placeholder={title}
                style={{
                  backgroundColor: snapshot.isDraggingOver ? "rgb(0 0 0 / 5%)" : "transparent",
                }}
              >
                {children}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
    </section>
  );
};
