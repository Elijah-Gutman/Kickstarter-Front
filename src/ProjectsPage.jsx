import axios from "axios";
import { useState, useEffect } from "react";
import { ProjectsIndex } from "./ProjectsIndex";
import { ProjectsNew } from "./assets/ProjectsNew";

export function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/projects.json").then((response) => {
      console.log(response.data);
      setProjects(response.data);
    });
  };
  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/projects.json", params).then((response) => {
      setProjects([...projects, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ProjectsNew onCreate={handleCreate} />
      <ProjectsIndex projects={projects} />
    </main>
  );
}
