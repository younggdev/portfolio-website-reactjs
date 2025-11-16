import { Link } from "react-router";
import RotatingText from "../components/ui/RotatingText/RotatingText";
import TiltCard from "../components/ui/TildCard/TildCard";
import ShinyText from "../components/ui/ShinyText/ShinyText";
import Divider from "../components/HomeComponent/Divider";
import TechCard from "../components/HomeComponent/TechCard";
import { useEffect, useState } from "react";
import { getProjects } from "../services/project-services";
import ProjectCard from "../components/ui/ProjectCard";

function HomePage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <>
      <div className="flex justify-between max-md:flex-col items-center">
        <div className="max-md:mb-20 max-w-lg">
          <div className="flex gap-5 text-4xl max-lg:text-2xl font-semibold items-center mb-5">
            <h1>Hi, I'M</h1>
            <RotatingText
              texts={["Ahmad Maulana", "Web Developer", "Freelancer", "Cool!"]}
              mainClassName="px-2 md:px-3 bg-primary text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg inline-flex transition-all"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
          <p className="text-sm max-lg:text-xs text-gray">
            I turn ideas into smooth, interactive experiences that bring designs
            and code together seamlessly.
          </p>
          <Link
            to={"/projects"}
            className="text-sm max-lg:text-xs inline-block px-3 py-2 mt-8 border-2 border-primary hover:bg-primary/30 transition-all duration-300"
          >
            Explore my projects!!
          </Link>
        </div>
        <div>
          <img
            src="/foto_profil.png"
            alt="foto profile"
            className="-scale-x-100 w-md border-b-2 border-l-2 border-primary"
          />
        </div>
      </div>

      {/* Tagline Section */}
      <div className="text-center mt-20">
        <div className="text-xl max-lg:text-lg max-md:text-sm inline-block border-2 border-gray px-8 py-5 italic relative">
          <ShinyText
            text="If it works, document it before you forget how"
            disabled={false}
            speed={3}
            className="custom-class"
          />
          <i className="ri-double-quotes-l text-4xl absolute -top-5 left-8 bg-bg"></i>
          <i className="ri-double-quotes-l text-4xl absolute -bottom-5 right-8 bg-bg"></i>
        </div>
      </div>

      <div className="flex justify-between items-center mt-20 pb-10 max-md:pb-5 text-lg">
        <div className="flex items-center gap-2 w-1/2">
          <h2 className="font-mono">
            <i className="ri-hashtag text-primary"></i>projects
          </h2>
          <div className="flex-1 border-t-2 border-primary"></div>
        </div>
        <Link
          to="/projects"
          className="hover:tracking-wider transition-all duration-300"
        >
          View all <i className="ri-arrow-right-fill"></i>
        </Link>
      </div>

      {/* card */}
      {projects.length > 0 && (
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      <Divider text={"tools and technologies"} width={"2/3"} />

      <TechCard />

      <Divider text={"about-me"} width={"2/4"} />

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
        <div className="">
          <p className="text-sm max-sm:text-xs/5 text-gray mb-5">
            My journey in the world of technology began with a curiosity about
            how a website works. From there, I started learning independently,
            exploring various programming languages, and eventually fell in love
            with the process of building something that can be used by many
            people.
          </p>
          <p className="text-sm max-sm:text-xs/5 text-gray">
            As a Full-Stack Web Developer, I’m experienced in handling the
            frontend to deliver engaging and user-friendly interfaces, while
            also managing the backend to ensure the system runs smoothly,
            securely, and efficiently. The combination of both sides makes me
            believe that technology is not just about code, but about creating
            real solutions for digital needs.
          </p>
          <Link
            to={"/about"}
            className="text-sm max-sm:text-xs inline-block px-3 py-2 mt-8 border-2 border-primary hover:bg-primary/30 transition-all duration-300"
          >
            Read More <i className="ri-arrow-right-fill"></i>
          </Link>
        </div>
        <TiltCard />
      </div>

      <Divider text={"contacts"} width={"2/3"} />

      <div className="flex justify-between max-sm:flex-col gap-5 max-sm:gap-2">
        <div className="max-w-xl">
          <p className="text-sm max-sm:text-xs/5 text-gray mb-5">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </div>
        <div className="text-sm max-sm:text-xs border-gray border-2 px-4 py-3">
          <p className="mb-3">Message me here</p>
          <a
            href="https://www.instagram.com/madt._cdr/"
            target="_blank"
            className="text-gray flex items-center hover:text-white transition-all duration-300"
          >
            <i className="ri-instagram-fill pr-2 text-2xl max-sm:text-xl"></i>
            madt._cdr
          </a>
          <a
            href="https://t.me/mad_cdr"
            target="_blank"
            className="text-gray flex items-center hover:text-white transition-all duration-300"
          >
            <i className="ri-telegram-fill pr-2 text-2xl max-sm:text-xl"></i>
            mad_cdr
          </a>
        </div>
      </div>
    </>
  );
}

export default HomePage;
