import TiltCard from "../components/ui/TildCard/TildCard";
import { useEffect, useState } from "react";
import { getExperiences } from "../services/about-service";
import ExperienceCard from "../components/ui/ExperienceCard";
import Carousel from "../components/ui/Carousel/Carousel";

function AboutPage() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getExperiences()
      .then(setExperiences)
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-semibold mb-3">
        <span className="text-primary">/</span>about-me
      </h1>
      <p className="mb-10">Who I'm?</p>

      <div className="grid grid-cols-2 items-start max-md:grid-cols-1 gap-10 max-md:gap-0">
        <div className="">
          <p className="text-sm max-sm:text-xs/5 text-gray mb-5">
            My journey in the world of technology began with a curiosity about
            how a website works. From there, I started learning independently,
            exploring various programming languages, and eventually fell in love
            with the process of building something that can be used by many
            people.
          </p>
          <p className="text-sm max-sm:text-xs/5 text-gray mb-5">
            As a Full-Stack Web Developer, I’m experienced in handling the
            frontend to deliver engaging and user-friendly interfaces, while
            also managing the backend to ensure the system runs smoothly,
            securely, and efficiently. The combination of both sides makes me
            believe that technology is not just about code, but about creating
            real solutions for digital needs.
          </p>
          <p className="text-sm max-sm:text-xs/5 text-gray mb-5">
            In addition to web development, I also create other digital services
            that support various online needs. For me, every project is not just
            a job, but an opportunity to learn, innovate, and provide added
            value. With a spirit of exploration and a desire to keep growing,
            I’m ready to help turn ideas into meaningful digital products.
          </p>
          <p className="text-sm max-sm:text-xs/5 text-gray">Best Regards.</p>
          <img src="/sign.png" alt="sign photo" className="w-50 -mt-10" />
        </div>
        <TiltCard />
      </div>

      <h3 className="text-2xl">
        <i className="ri-hashtag text-primary"></i>
        experiences
      </h3>

      {experiences.map((exp) => (
        <ExperienceCard item={exp} key={exp.id} />
      ))}

      <h3 className="text-2xl">
        <i className="ri-hashtag text-primary"></i>
        achievements
      </h3>

      <div>
        <Carousel />
      </div>
    </>
  );
}

export default AboutPage;
