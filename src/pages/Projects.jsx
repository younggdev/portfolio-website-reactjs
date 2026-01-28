import { useEffect, useState } from "react";
import { getProjects } from "../services/project-services";
import ProjectCard from "../components/ui/ProjectCard";
import { AnimatePresence, motion } from "framer-motion";
import supabase from "../supabase-client";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const [images, setImages] = useState([]);
  const CDNURL =
    "https://jwgwgvjpkljtjqoevdlz.supabase.co/storage/v1/object/public/design-images/";

  async function getImages() {
    const { data, error } = await supabase.storage.from("design-images").list();

    if (error) return console.log(error);
    setImages(data);
  }

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <>
      <h1 className="text-3xl max-sm:text-xl font-semibold mb-3">
        <span className="text-primary">/</span>projects
      </h1>
      <p className="mb-10">List of my projects</p>

      <h3 className="text-2xl max-sm:text-lg">
        <i className="ri-hashtag text-primary"></i>
        websites
      </h3>

      <h1 className="my-2 text-sm">Total Projects: {projects.length}</h1>

      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <h3 className="text-2xl max-sm:text-lg mt-10">
        <i className="ri-hashtag text-primary"></i>
        designs
      </h3>

      <h1 className="my-2 text-sm">Total Projects: {images.length}</h1>
      <a
        href="https://instagram.com/arts_mlna"
        target="_blank"
        className="text-sm underline"
      >
        See all images
      </a>

      <div class="p-5 md:p-10">
        <div class="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg mb-5"
              onClick={() => setSelectedImage(CDNURL + img.name)}
            >
              <img
                src={CDNURL + img.name}
                alt={`Image ${img.name}`}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative bg-white rounded-xl overflow-hidden shadow-2xl max-w-3xl w-[90%]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="popup"
                className="w-full h-auto object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-black/70"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Projects;
