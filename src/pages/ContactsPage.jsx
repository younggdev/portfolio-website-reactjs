import ContactForm from "../components/ContactComponent/ContactForm";
import SocialCard from "../components/ContactComponent/SocialCard";

function ContactsPage() {
  return (
    <>
      <h1 className="text-3xl max-sm:text-xl font-semibold mb-3">
        <span className="text-primary">/</span>contacts
      </h1>
      <p className="mb-10">
        Ready to collaborate and create something impactful.
      </p>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 pb-10 mb-10">
        <div className="relative col-span-2 max-md:col-span-1 bg-gradient-to-b from-red-700 to-red-900 text-red-200 py-5 px-6 rounded-sm">
          <div>
            <h3 className="font-semibold">Contact Me</h3>
            <p className="text-xs py-4">
              Send a direct message via email for collaborations or further
              inquiries.
            </p>
            <a
              href="mailto:ahmad.mlna01@gmail.com"
              target="_blank"
              className="py-2 px-4 bg-red-300 inline-block max-md:block max-md:mr-18 rounded-sm text-sm text-black hover:scale-105 transition-all duration-200"
            >
              <div className="flex gap-2 items-center justify-center">
                <p className="text-sm">Go to Gmail</p>
                <i className="ri-arrow-right-up-fill"></i>
              </div>
            </a>
          </div>
          <div className="px-0.5 border-4 border-red-300 rounded-xl absolute bottom-5 right-5">
            <i className="ri-mail-send-fill text-4xl text-white"></i>
          </div>
        </div>
        <SocialCard
          title={"Follow My Activities"}
          desc={"See interesting things and a glimpse of my daily life."}
          text={"instagram"}
          link={"https://www.instagram.com/madt._cdr"}
          gradientColor={"from-purple-500 via-pink-500 to-orange-500"}
          bgColor={"bg-rose-300"}
          borderColor={"border-rose-300"}
        />
        <SocialCard
          title={"Connect Professionally"}
          desc={"Build connections and discover my career journey."}
          text={"linkedin"}
          link={"https://www.linkedin.com/in/a-maulana/"}
          gradientColor={"from-cyan-700 to-cyan-900 text-cyan-200"}
          bgColor={"bg-cyan-500"}
          borderColor={"border-cyan-500"}
        />
        <SocialCard
          title={"Chat Faster"}
          desc={"Quick and casual responses."}
          text={"telegram"}
          link={"https://www.t.me/mad_cdr"}
          gradientColor={"from-sky-700 to-sky-900 text-sky-200"}
          bgColor={"bg-sky-500"}
          borderColor={"border-sky-500"}
        />
        <SocialCard
          title={"Explore My Code"}
          desc={"Check out my various projects and experiments."}
          text={"github"}
          link={"https://github.com/younggdev"}
          gradientColor={"from-gray-700 to-gray-900 text-gray-200"}
          bgColor={"bg-gray-500"}
          borderColor={"border-gray-500"}
        />
      </div>

      {/* <h1>Or Send Me a Message.</h1>
      <ContactForm /> */}
    </>
  );
}

export default ContactsPage;
