import React from "react";

function Footer() {
  return (
    <footer className="mt-10 max-sm:mt-5 pt-5 px-20 max-md:px-10 text-white">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold mb-3">Madd</h1>
          <p className="text-gray max-sm:text-sm">Freelance Web Developer</p>
        </div>
        <div>
          <h1 className="font-semibold mb-3">Media</h1>
          <div className="flex gap-3 text-gray text-2xl max-sm:text-xl">
            <a
              href="https://www.instagram.com/madt._cdr/"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              href="https://t.me/mad_cdr"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              <i className="ri-telegram-fill"></i>
            </a>
            <a
              href="https://github.com/younggdev"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/a-maulana"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </div>
        </div>
      </div>

      <p className="text-center py-5 text-gray max-sm:text-sm">
        &copy; Ahmad Maulana {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
