export const TaskSearch = ({ search, setSearch }) => {
  return (
    <div className="form-group form-group-row">
      <label htmlFor="search">Search</label>
      <input
        type="search"
        id="search"
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control"
        placeholder="Write..."
      />
    </div>
  );
};
