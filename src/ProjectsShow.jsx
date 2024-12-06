export function ProjectsShow({ project }) {
  return (
    <div>
      <h1>Project Information</h1>
      <p>Title: {project.title}</p>
      <p>Description: {project.description}</p>
      <p>Goal Amount: ${project.goal_amount}</p>
      <p>Start Date: {project.start_date}</p>
      <p>End Date: {project.end_date}</p>
      <p>Category: {project.category?.name}</p>
      <h2>Rewards</h2>
      <ul>
        {project.rewards?.map((reward) => (
          <li key={reward.id}>
            <p>Description: {reward.description}</p>
            <p>Amount: ${reward.amount}</p>
            <p>Delivery Date: {reward.delivery_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
