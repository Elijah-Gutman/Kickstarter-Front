import axios from "axios";
import { useState, useEffect } from "react";
import { ProjectsIndex } from "./ProjectsIndex";
import { ProjectsNew } from "./assets/ProjectsNew";
import { ProjectsShow } from "./ProjectsShow";
import { Modal } from "./Modal";

export function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [isProjectsShowVisible, setIsProjectsShowVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

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
  const handleShow = (project) => {
    console.log("handleShow", project);
    setIsProjectsShowVisible(true);
    setCurrentProject(project);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ProjectsNew onCreate={handleCreate} />
      <ProjectsIndex projects={projects} onShow={handleShow} />
      <Modal show={isProjectsShowVisible} onClose={() => setIsProjectsShowVisible(false)}>
        <h1>Test</h1>
        <ProjectsShow project={currentProject} />
      </Modal>
    </main>
  );
}
