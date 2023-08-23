export const TaskInformation = ({ counterTasks }) => {
  return (
    <section className="information__container">
      <h1>Progress</h1>
      <div className="tasks__status__container">
        <h3>Status</h3>
        <div className="tasks__status">
          <div className="task__state">
            <span>Total</span>
            <p>{counterTasks.total}</p>
          </div>
          <div className="task__state">
            <span>Completed</span>
            <p>{counterTasks.completed}</p>
          </div>
          <div className="task__state">
            <span>On going</span>
            <p>{counterTasks.onGoing}</p>
          </div>
          <div className="task__state">
            <span>Await</span>
            <p>{counterTasks.starter}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
