import React, { useContext } from "react";
import { TaskSearch } from "./TaskSearch";
import { TodoContext } from "../context/TodoProvider";

export const TaskHeader = () => {
  const { search, setSearch } = useContext(TodoContext);

  return (
    <section className="header">
      <h1 className="title">Tasks</h1>
      <TaskSearch search={search} setSearch={setSearch} />
    </section>
  );
};
