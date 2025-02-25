import { useState } from "react";
import { motion } from "framer-motion";

const Card2 = () => {
  const [step, setStep] = useState(1);
  const [showVideo, setShowVideo] = useState(false);

  return (
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
      ) : !showVideo ? (
        <>
          <motion.p
            className="text-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Ykw I love to try jokes to see people laugh
          </motion.p>
          <p className="mt-2 text-sm">
            I prepared this small monologue from the movie you know well!
          </p>

          {/* Image Button to Play Video */}
          <motion.img
            src="/arrow-right.png"
            alt="Play Video"
            className="mt-4 w-10 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => setShowVideo(true)}
          />
        </>
      ) : (
        <video className="w-full h-full rounded-xl" controls autoPlay>
          <source src="/kuttan-priya.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </motion.div>
  );
};

export default Card2;
