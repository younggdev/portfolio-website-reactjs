import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AnimatePresence, motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import supabase from "../../../supabase-client";

export default function Carousel() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const CDNURL =
    "https://jwgwgvjpkljtjqoevdlz.supabase.co/storage/v1/object/public/sertif-images/";

  async function getImages() {
    const { data, error } = await supabase.storage.from("sertif-images").list();

    if (error) return console.log(error);
    setImages(data);
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-5 mb-20">
      {/* Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          0: {
            slidesPerView: 1, // di layar kecil (mobile)
          },
          640: {
            slidesPerView: 2, // di layar sedang
          },
          1024: {
            slidesPerView: 3, // di desktop
          },
        }}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg"
              onClick={() => setSelectedImage(CDNURL + img.name)}
            >
              <img
                src={CDNURL + img.name}
                alt={`Image ${img.name}`}
                className="w-full h-64 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tombol Prev */}
      <button className="custom-prev absolute top-1/2 -left-15 max-md:left-2 z-10 transform -translate-y-1/2 bg-gray/80 hover:bg-gray text-black p-3 max-sm:p-2 rounded-full shadow cursor-pointer">
        <i className="ri-arrow-left-fill text-xl max-sm:text-sm"></i>
      </button>

      {/* Tombol Next */}
      <button className="custom-next absolute top-1/2 -right-15 max-md:right-2 z-10 transform -translate-y-1/2 bg-gray/80 hover:bg-gray text-black p-3 max-sm:p-2 rounded-full shadow cursor-pointer">
        <i className="ri-arrow-right-fill text-xl max-sm:text-sm"></i>
      </button>

      {/* Popup */}
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
    </div>
  );
}
