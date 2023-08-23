export const TaskHeader = ({ title, children }) => {
  return (
    <section className="header">
      <h1 className="title">{title}</h1>
      {children}
    </section>
  );
};
