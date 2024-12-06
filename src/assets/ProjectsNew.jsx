export function ProjectsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Project</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Description: <textarea name="description"></textarea>
        </div>
        <div>
          Goal Amount: <input name="goal_amount" type="number" step="0.01" />
        </div>
        <div>
          Start Date: <input name="start_date" type="date" />
        </div>
        <div>
          End Date: <input name="end_date" type="date" />
        </div>
        <div>
          Category:
          <select name="category_id">
            <option value="">Select a Category</option>
            <option value="1">Renewable Energy</option>
            <option value="2">Sustainability</option>
            <option value="3">Technology</option>
          </select>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
