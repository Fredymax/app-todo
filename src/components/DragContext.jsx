import { DragDropContext } from 'react-beautiful-dnd'

export const DragContext = ({ children, setTodos, todos }) => {
  const onDragEnd = ({ draggableId, destination }) => {
    if (!draggableId || !destination?.droppableId) return

    const todoId = draggableId.split('_').pop()
    const _todos = [...todos]
    const index = _todos.findIndex(({ id }) => id === todoId)
    _todos[index]['status'] = destination.droppableId
    setTodos([..._todos])
  }

  const handlers = { onDragEnd }

  return (
    <div className="task__list">
      <DragDropContext {...handlers}>{children}</DragDropContext>
    </div>
  )
}
