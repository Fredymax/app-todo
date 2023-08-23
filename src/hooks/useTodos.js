import { useEffect, useState } from 'react'
import { getTasksByStatus } from '../utils'
import { useLocalStorage } from '../hooks/useLocalStorage'

export function useTodos() {
  const [search, setSearch] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const {
    item: todos,
    storeItem: setTodos,
    loader: todoLoader,
    error: todoError,
  } = useLocalStorage('TODO_V1', [])
  const [todosStarter, setTodosStarter] = useState([])
  const [todosOnGoing, setTodosOnGoing] = useState([])
  const [todosCompleted, setTodosCompleted] = useState([])
  const [counterTasks, setCounterTasks] = useState({})
  const [todo, setTodo] = useState({})

  const initialNewTodo = (status) => {
    setTodo(() => ({
      id: crypto.randomUUID(),
      title: '',
      description: '',
      status: status,
      category: '',
      advance: Math.floor(Math.random(0, 1) * 100),
      date: '',
      time: '',
      subTask: [],
    }))
  }

  useEffect(() => {
    const _todos = !!search.length
      ? todos.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))
      : todos
    setTodosStarter(() => getTasksByStatus(_todos, 'starter'))
    setTodosOnGoing(() => getTasksByStatus(_todos, 'onGoing'))
    setTodosCompleted(() => getTasksByStatus(_todos, 'completed'))

    setCounterTasks(() => ({
      total: todos.length,
      completed: todos.filter((c) => c.status === 'completed').length,
      starter: todos.filter((c) => c.status === 'starter').length,
      onGoing: todos.filter((c) => c.status === 'onGoing').length,
    }))
  }, [search, todos])

  return {
    setSearch,
    search,
    setOpenModal,
    openModal,
    todosStarter,
    todosOnGoing,
    todosCompleted,
    setTodos,
    todos,

    initialNewTodo,
    setTodo,
    todo,
    todoLoader,
    todoError,

    setCounterTasks,
    counterTasks,
  }
}
