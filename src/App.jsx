import { TaskInformation } from './components/TaskInformation'
import { TaskSection } from './components/TaskSection'
import { Task } from './components/Task'
import { TaskHeader } from './components/TaskHeader'
import { TaskForm } from './components/TaskForm'
import { Modal } from './@core/components/Modal'
import { DragContext } from './components/DragContext'
import { useTodos } from './hooks/useTodos'

import { TaskLoaderSkeleton } from './components/TaskLoaderSkeleton'
import { TaskSearch } from './components/TaskSearch'

function App() {
  const {
    openModal,
    todosStarter,
    todosOnGoing,
    todosCompleted,
    todoLoader,
    search,
    setSearch,
    setTodos,
    todos,
    todo,
    setOpenModal,
    counterTasks,
    initialNewTodo,
  } = useTodos()

  return (
    <div className="wrapper">
      <main className="task__container">
        <TaskHeader title="Tasks">
          <TaskSearch search={search} setSearch={setSearch} />
        </TaskHeader>
        <DragContext setTodos={setTodos} todos={todos}>
          <TaskSection
            todos={todosStarter}
            todoLoader={todoLoader}
            onTodoLoader={() => <TaskLoaderSkeleton />}
            title="Starter"
            status="starter"
            setOpenModal={setOpenModal}
            initialNewTodo={initialNewTodo}
          >
            {(todo, index) => (
              <Task
                key={todo.id}
                index={index}
                setTodos={setTodos}
                todos={todos}
                {...todo}
              />
            )}
          </TaskSection>

          <TaskSection
            todos={todosOnGoing}
            todoLoader={todoLoader}
            onTodoLoader={() => <TaskLoaderSkeleton />}
            title="On going"
            status="onGoing"
            setOpenModal={setOpenModal}
            initialNewTodo={initialNewTodo}
          >
            {(todo, index) => (
              <Task
                key={todo.id}
                index={index}
                setTodos={setTodos}
                todos={todos}
                {...todo}
              />
            )}
          </TaskSection>
          <TaskSection
            todos={todosCompleted}
            todoLoader={todoLoader}
            onTodoLoader={() => <TaskLoaderSkeleton />}
            title="Completed"
            status="completed"
            setOpenModal={setOpenModal}
            initialNewTodo={initialNewTodo}
          >
            {(todo, index) => (
              <Task
                key={todo.id}
                index={index}
                setTodos={setTodos}
                todos={todos}
                {...todo}
              />
            )}
          </TaskSection>
        </DragContext>
      </main>
      <TaskInformation counterTasks={counterTasks} />
      {openModal && (
        <Modal title="New Task">
          <TaskForm
            setOpenModal={setOpenModal}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
          />
        </Modal>
      )}
    </div>
  )
}

export default App
