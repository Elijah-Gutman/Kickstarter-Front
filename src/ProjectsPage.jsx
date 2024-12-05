import axios from "axios";
import { useState, useEffect } from "react";
import { ProjectsIndex } from "./ProjectsIndex";

export function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/projects.json").then((response) => {
      console.log(response.data);
      setProjects(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ProjectsIndex projects={projects} />
    </main>
  );
}
