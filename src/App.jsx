import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route, useLocation } from "react-router";
import AboutPage from "./pages/AboutPage";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Contacts from "./pages/ContactsPage";
import DetailProjectsPage from "./pages/DetailProjectsPage";
import Lenis from "lenis";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [key, setKey] = useState(0);
  const [isBlur, setIsBlur] = useState(true);

  useEffect(() => {
    // Jalankan progress bar & loading state
    setIsLoading(true);
    setIsBlur(true);
    setKey((prev) => prev + 1);

    // simulasi waktu loading sesuai durasi progress bar
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsBlur(false);
    }, 1000); // durasi loading 1 detik (sesuai progress bar)

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // makin besar makin lambat
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div data-lenis-scroll className="no-scrollbar">
      {/* Efek blur sementara halaman loading */}
      <AnimatePresence>
        {isBlur && (
          <motion.div
            key={`blur-${key}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 backdrop-blur-sm bg-black/10 z-[9998]"
          />
        )}
      </AnimatePresence>

      {/* Progress bar animasi */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key={`bar-${key}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-[3px] bg-[#c778dd] z-[9999]"
          />
        )}
      </AnimatePresence>

      {/* Navbar tetap tampil */}
      <Navbar />
      <div className="h-screen bg-bg -z-50 absolute top-0 left-0 bottom-0 right-0"></div>

      {/* Konten halaman */}
      <main className="mt-18 pt-5 text-white">
        <AnimatePresence mode="wait">
          {!isLoading && (
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="mb-20 px-20 max-md:px-10">
                <Routes location={location}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route
                    path="/projects/:slug"
                    element={<DetailProjectsPage />}
                  />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contacts" element={<Contacts />} />
                </Routes>
              </div>
              <div className="border-b-2 border-gray"></div>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
