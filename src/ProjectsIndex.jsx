export function ProjectsIndex({ projects, onShow }) {
  return (
    <div>
      <h1>All Projects ({projects.length} total)</h1>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h2>{project.name}</h2>
          <p>
            <strong>Description:</strong> {project.description}
          </p>
          <p>
            <strong>Goal Amount:</strong> ${project.goal_amount}
          </p>
          <p>
            <strong>Category:</strong> {project.category.name}
          </p>
          <p>
            <strong>Created By:</strong> {project.user.name} ({project.user.email})
          </p>

          <h3>Rewards</h3>
          <ul>
            {project.rewards.map((reward) => (
              <li key={reward.id}>
                <p>
                  <strong>Description:</strong> {reward.description}
                </p>
                <p>
                  <strong>Amount:</strong> ${reward.amount}
                </p>
                <p>
                  <strong>Delivery Date:</strong> {reward.delivery_date}
                </p>
              </li>
            ))}
          </ul>
          <button onClick={() => onShow(project)}>More info</button>
        </div>
      ))}
    </div>
  );
}
