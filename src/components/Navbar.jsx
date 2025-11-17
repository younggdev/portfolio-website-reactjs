import { AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5, // langsung muncul cepat
        ease: "easeOut",
        when: "beforeChildren",
        delayChildren: 0,
        staggerChildren: 0.1,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/projects" },
    { name: "About-me", to: "/about" },
    { name: "Contacts", to: "/contacts" },
  ];

  return (
    <>
      <nav className="px-20 max-md:px-10 text-white fixed z-50 top-0 w-full bg-bg">
        <div className="flex justify-between items-center h-18">
          <div className="font-semibold">Madd</div>

          {/* Menu untuk layar besar */}
          <div className="flex items-center justify-center gap-3 max-md:hidden">
            <div>
              <i className="ri-hashtag text-primary"></i>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-medium transition-all duration-300 border-b-2 ${
                    isActive
                      ? "text-white border-primary"
                      : "text-gray hover:text-white border-transparent"
                  }`
                }
              >
                Home
              </NavLink>
            </div>
            <div>
              <i className="ri-hashtag text-primary"></i>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `font-medium transition-all duration-300 border-b-2 ${
                    isActive
                      ? "text-white border-primary"
                      : "text-gray hover:text-white border-transparent"
                  }`
                }
              >
                Projects
              </NavLink>
            </div>
            <div>
              <i className="ri-hashtag text-primary"></i>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `font-medium transition-all duration-300 border-b-2 ${
                    isActive
                      ? "text-white border-primary"
                      : "text-gray hover:text-white border-transparent"
                  }`
                }
              >
                About-me
              </NavLink>
            </div>
            <div>
              <i className="ri-hashtag text-primary"></i>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  `font-medium transition-all duration-300 border-b-2 ${
                    isActive
                      ? "text-white border-primary"
                      : "text-gray hover:text-white border-transparent"
                  }`
                }
              >
                Contacts
              </NavLink>
            </div>
          </div>

          {/* Menu untuk layar kecil */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <i
                className={`ri-${
                  isOpen ? "close-line" : "menu-line"
                } text-2xl cursor-pointer`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="fixed inset-0 bg-bg flex flex-col items-start justify-between mt-18 py-10 pl-10"
                >
                  <div className="flex flex-col items-start gap-10 max-sm:gap-8">
                    {menuItems.map((item, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        onClick={() => setIsOpen(false)}
                      >
                        <NavLink
                          to={item.to}
                          className={({ isActive }) =>
                            `text-4xl max-sm:text-2xl font-medium transition-all duration-300 hover:text-primary ${
                              isActive ? "text-primary" : "text-gray"
                            }`
                          }
                        >
                          <i className="ri-hashtag text-primary"></i>
                          {item.name}
                        </NavLink>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.3 + menuItems.length * 0.1,
                          duration: 0.5,
                        },
                      },
                      exit: {
                        opacity: 0,
                        y: 20,
                        transition: { duration: 0.3 },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-white text-lg max-w-md leading-relaxed"
                  >
                    <h1>Socials</h1>
                    <div className="flex gap-3 text-gray text-2xl">
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
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
