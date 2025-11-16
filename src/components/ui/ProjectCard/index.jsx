import { Link } from "react-router";
import { slugify } from "../../../utils/slugify";

export default function ProjectCard({ project }) {
  const techArr = project?.techs?.split(",").map((t) => t.trim());

  return (
    <div className="border-2 border-gray">
      <Link key={project.name} to={`/projects/${slugify(project.name)}`}>
        <img src={project.image_url} alt="" />
      </Link>

      <div className="text-gray px-3 py-2 border-t-2 border-b-2 text-xl flex gap-2">
        {techArr?.map((t) => (
          <i className={`ri-${slugify(t)}-fill`}></i>
        ))}
      </div>
      <div className="p-3">
        <h1 className="pb-3 font-semibold max-md:text-sm">{project.name}</h1>
        <p className="text-sm max-md:text-xs text-gray line-clamp-2">
          {project.desc}
        </p>
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
    </div>
  );
}
