import React, { useState, useContext } from "react";
import { UserAvatar } from "./UserAvatar";
import { UserAvatarCount } from "./UserAvatarCount";
import { IconDrag, IconInbox, IconTrash } from "../Icons";
import { getAvatars } from "../utils";
import { TodoContext } from "../context/TodoProvider";

import { Draggable } from "react-beautiful-dnd";

export const Task = ({ id, title, description, advance, subTask, category, index }) => {
  const { setTodos, todos } = useContext(TodoContext);

  const [avatars] = useState(() => getAvatars(category));

  const getStyled = (snapshot, draggableProps) => ({
    rotate: snapshot.isDragging ? "6deg" : "0deg",
    ...draggableProps.style,
  });

  const handleClick = (todoId) => {
    let _todos = [...todos];
    const index = _todos.findIndex((todo) => todo.id === todoId);
    _todos.splice(index, 1);
    setTodos(_todos);
  };

  return (
    <Draggable draggableId={`todoId_${id}`} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className="card"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getStyled(snapshot, provided.draggableProps)}
          >
            <div className="card__header">
              <div className={`card__title ${category === "personal" ? "orange" : "pink"}`}>
                {title}
              </div>
              <div className="button-settings">
                <button className="button-trash" onClick={() => handleClick(id)}>
                  <IconTrash />
                </button>
                <button className="button__options move">
                  <IconDrag />
                </button>
              </div>
            </div>
            <div className="card__text start">{description}</div>
            <div className="card__text end">{advance}%</div>
            <div className="card__progress">
              <div className="progress" style={{ "--progress-width": advance + "%" }}></div>
            </div>
            <div className="card__footer">
              <div className="avatars">
                <div className="avatars__container">
                  {avatars.value.map((_, index) => (
                    <UserAvatar key={index} />
                  ))}
                  {avatars.more > 0 && <UserAvatarCount count={avatars.more} />}
                </div>
              </div>
              <div className="counter__tasks">
                <IconInbox />
                <span className="counter">{subTask.length}</span>
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};
