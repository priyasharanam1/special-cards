import { useState } from "react";
import { motion } from "framer-motion";

const Card5 = () => {
  const [step, setStep] = useState(1);
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      {!showImage ? (
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
                Although here I planned to put a video message for you...
              </motion.p>
              <p className="mt-2 text-sm">but now I want see you so bad! So, I'll do talks face to face with my baby 😎</p>

              {/* Eyes GIF (click to view full image) */}
              <motion.button
                className="mt-4 px-4 py-2 bg-royalBlue text-white rounded-lg hover:bg-skyBlue transition-all duration-500 ease-in-out flex items-center gap-2"
                onClick={() => setShowImage(true)}
                whileHover={{ scale: 1.02 }}
              >
                Here are photos from 21st
              </motion.button>
            </>
          )}
        </motion.div>
      ) : (
        // Fullscreen Image Modal
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <img
            src="/engagement.png"
            alt="engagement"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
          <button
            className="absolute top-5 right-5 bg-pastelBlue text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            onClick={() => setShowImage(false)}
          >
            Go Back
          </button>
        </div>
      )}
    </>
  );
};

export default Card5;
