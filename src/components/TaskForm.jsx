import { IconUser, IconUsers } from '../Icons'
import { useForm } from '../hooks/useForm'

export const TaskForm = ({ setOpenModal, todo, setTodos, todos }) => {
  const [form, setForm] = useForm(todo)

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, form])
    setOpenModal(false)
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="card__form">
      <div className="form-group">
        <label htmlFor="input-title">Title</label>
        <input
          type="text"
          id="input-title"
          className="form-control"
          placeholder="Write a title"
          name="title"
          value={form.title}
          onChange={setForm}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input-category">Category</label>
        <div className="form__columns-2 form-radio">
          <div className="input-radio">
            <input
              type="radio"
              id="category-personal"
              value="personal"
              hidden
              name="category"
              onChange={setForm}
            />
            <label className="form-control-category" htmlFor="category-personal">
              <IconUser />
              <span>Personal</span>
            </label>
          </div>
          <div className="input-radio">
            <input
              type="radio"
              id="category-teams"
              value="teams"
              hidden
              name="category"
              onChange={setForm}
            />
            <label className="form-control-category" htmlFor="category-teams">
              <IconUsers />
              <span>Teams</span>
            </label>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="input-description">Description</label>
        <textarea
          className="form-control"
          rows="5"
          placeholder="Write a description"
          name="description"
          value={form.description}
          onChange={setForm}
        ></textarea>
      </div>
      <div className="form__columns-2">
        <div className="form-group">
          <label htmlFor="input-date">Date</label>
          <input
            type="date"
            className="form-control"
            placeholder="Write a date"
            name="date"
            value={form.date}
            onChange={setForm}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-time">Time</label>
          <input
            type="time"
            className="form-control"
            placeholder="Write a time"
            name="time"
            value={form.time}
            onChange={setForm}
          />
        </div>
      </div>
      <div className="form__columns-2 pt-05">
        <button
          type="button"
          className="button button-purple-outline"
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </button>
        <button type="submit" className="button button-purple">
          Create
        </button>
      </div>
    </form>
  )
}
