import { useEffect, useState } from "react";
import { getProjects } from "../services/project-services";
import ProjectCard from "../components/ui/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-semibold mb-3">
        <span className="text-primary">/</span>projects
      </h1>
      <p className="mb-10">List of my projects</p>

      <h3 className="text-2xl">
        <i className="ri-hashtag text-primary"></i>
        websites
      </h3>

      <h1 className="my-5 text-sm">Total Projects: {projects.length}</h1>

      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
