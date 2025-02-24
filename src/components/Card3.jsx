import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/giaan.jpeg",
  "/pentium.jpeg",
  "/bus-scene.jpeg",
  "/malipoo.jpeg",
  "/patient.jpeg",
  "/twoofus.jpeg",
  "/baby.jpeg",
  "/confession.jpeg",
  "/tongue.jpeg",
  "/nobtn.png",
  "/love.jpeg",
];

const Card3 = () => {
  const [step, setStep] = useState(1);
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <>
      {!showCarousel ? (
        <motion.div
          className="w-80 h-60 bg-darkBlue p-6 rounded-xl shadow-lg text-center text-pastelBlue flex flex-col justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          {step === 1 ? (
            <>
              <motion.p
                className="text-lg font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                Click OK Janu 💙
              </motion.p>

              <motion.button
                className="mt-4 px-4 py-2 bg-royalBlue text-white rounded-lg hover:bg-skyBlue transition-all duration-500 ease-in-out"
                onClick={() => setStep(2)}
                whileHover={{ scale: 1.1 }}
              >
                OK
              </motion.button>
            </>
          ) : (
            <>
              <motion.p
                className="text-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                Baby, I miss you so much!
              </motion.p>
              <p className="mt-2 text-sm">
                I will always cherish the moments I got to spend with you in real and virtual! Slider ahead...
              </p>

              <motion.button
                className="mt-4 px-4 py-2 bg-royalBlue text-white rounded-lg hover:bg-skyBlue transition-all duration-500 ease-in-out flex items-center gap-2"
                onClick={() => setShowCarousel(true)}
                whileHover={{ scale: 1.02 }}
              >
                See these kids falling...🥹
              </motion.button>
            </>
          )}
        </motion.div>
      ) : (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center z-50">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={true}
            className="w-full h-full flex items-center justify-center"
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="relative flex justify-center items-center h-screen"
              >
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="fixed top-8 ml-16 max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>

          <button
            className="absolute top-5 right-5 bg-white text-white p-3 rounded-full"
            onClick={() => setShowCarousel(false)}
          >
            ❌
          </button>
        </div>
      )}
    </>
  );
};

export default Card3;
