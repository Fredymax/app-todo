import React, { useContext } from "react";
import { TaskInformation } from "./components/TaskInformation";
import { TaskSection } from "./components/TaskSection";
import { Task } from "./components/Task";
import { TaskHeader } from "./components/TaskHeader";
import { TaskForm } from "./components/TaskForm";
import { Modal } from "./@core/components/Modal";
import { DragContext } from "./components/DragContext";
import { TodoContext } from "./context/TodoProvider";

import "./App.css";
import "./App-mobile.css";

import { TaskLoaderSkeleton } from "./components/TaskLoaderSkeleton";

function App() {
  const { openModal, todosStarter, todosOnGoing, todosCompleted, todoLoader } =
    useContext(TodoContext);
  return (
    <div className="wrapper">
      <main className="task__container">
        <TaskHeader />
        <DragContext>
          <TaskSection title="Starter" status="starter">
            {todoLoader && <TaskLoaderSkeleton quantity={3} />}
            {!!todosStarter.length &&
              !todoLoader &&
              todosStarter.map((todo, index) => <Task key={todo.id} index={index} {...todo} />)}
          </TaskSection>
          <TaskSection title="On going" status="onGoing">
            {todoLoader && <TaskLoaderSkeleton quantity={3} />}
            {!!todosOnGoing.length &&
              !todoLoader &&
              todosOnGoing.map((todo, index) => <Task key={todo.id} index={index} {...todo} />)}
          </TaskSection>
          <TaskSection title="Completed" status="completed">
            {todoLoader && <TaskLoaderSkeleton quantity={3} />}
            {!!todosCompleted.length &&
              !todoLoader &&
              todosCompleted.map((todo, index) => <Task key={todo.id} index={index} {...todo} />)}
          </TaskSection>
        </DragContext>
      </main>
      <TaskInformation />
      {openModal && (
        <Modal title="New Task">
          <TaskForm />
        </Modal>
      )}
    </div>
  );
}

export default App;
