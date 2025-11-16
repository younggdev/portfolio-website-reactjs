import { Link, useParams } from "react-router";
import { slugify } from "../utils/slugify";
import { getProjects } from "../services/project-services";
import { useEffect, useState } from "react";

function DetailProjectsPage() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const techArr = project?.techs.split(",").map((t) => t.trim());

  useEffect(() => {
    async function load() {
      const all = await getProjects();
      const found = all.find((p) => slugify(p.name) === slug);
      setProject(found);
      console.log(project);
    }
    load();
  }, [slug]);

  if (!project) return <p>Loading...</p>;

  return (
    <>
      <h1 className="text-3xl font-semibold mb-3">
        <Link to={"/projects"} className="text-primary">
          /projects/
        </Link>
        {slugify(project.name)}
      </h1>
      <p className="mb-3 mt-18 text-justify">{project.desc}</p>

      <div className="mb-10">
        {project.demo_link && (
          <a
            href={project.demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-1 border-2 mt-5 mr-3 max-md:text-sm transition-all duration-300 border-primary hover:bg-primary/30"
          >
            Live Demo <i className="ri-arrow-right-up-fill"></i>
          </a>
        )}
        {project.code_link && (
          <a
            href={project.code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-1 border-2 mt-5 mr-3 max-md:text-sm transition-all duration-300 border-primary hover:bg-primary/30"
          >
            Source Code <i className="ri-arrow-right-up-fill"></i>
          </a>
        )}
      </div>

      <img src={project.image_url} alt={project.name} className="mx-auto" />

      <div className="mt-10">
        {techArr.map((t) => (
          <div className="inline-block px-3 py-1 border-2 border-primary hover:bg-primary/30 transition-all duration-300 mr-3 max-md:text-sm capitalize">
            <i className={`ri-${slugify(t)}-fill pr-3`}></i>
            {t}
          </div>
        ))}
      </div>
    </>
  );
}

export default DetailProjectsPage;
