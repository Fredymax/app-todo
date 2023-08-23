import { IconPlus } from '../Icons'
import { Droppable } from 'react-beautiful-dnd'

export const TaskSection = ({
  title,
  status,
  setOpenModal,
  initialNewTodo,

  todoLoader,
  onTodoLoader,
  todos,

  children,
}) => {
  const handleClick = () => {
    initialNewTodo(status)
    setOpenModal(true)
  }

  console.log(children)

  return (
    <section className="task__section__container">
      <div className="task__title">
        <h5>{title}</h5>
        <button className="button-plus" onClick={() => handleClick(status)}>
          <IconPlus />
        </button>
      </div>
      <div className="task__section">
        {todoLoader && onTodoLoader()}
        {typeof children === 'function' && !todoLoader && (
          <Droppable droppableId={status}>
            {(provided, snapshot) => {
              return (
                <div
                  className="task__list__container"
                  ref={provided.innerRef}
                  placeholder={title}
                  style={{
                    backgroundColor: snapshot.isDraggingOver
                      ? 'rgb(0 0 0 / 5%)'
                      : 'transparent',
                  }}
                >
                  {todos.map(children)}
                  {provided.placeholder}
                </div>
              )
            }}
          </Droppable>
        )}
      </div>
    </section>
  )
}
