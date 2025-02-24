import { useState } from "react";
import { motion } from "framer-motion";

const Card4 = () => {
  const [step, setStep] = useState(1);
  const [showAudio, setShowAudio] = useState(false);

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
      ) : !showAudio ? (
        <>
          <motion.p
            className="text-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            My heart pops out every time I look at you 🥺
          </motion.p>

          <motion.p
            className="mt-2 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Pop this heart to know more... Click Click Click!
          </motion.p>

          <motion.img
            src="/red heart.gif"
            alt="Red Heart"
            className="w-16 h-16 mt-2 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowAudio(true)}
          />
        </>
      ) : (
        <>
          <motion.p
            className="text-sm font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            These songs always remind me of you ❤️
          </motion.p>

          <div className="grid grid-cols-2 gap-3">
            {[
              "to chalun.mpeg",
              "phool tumhein.mpeg",
              "faasle.mpeg",
              "heer.mpeg",
            ].map((audio, index) => (
              <motion.audio
                key={index}
                controls
                className="w-32 h-12 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                <source src={`/${audio}`} type="audio/mpeg" />
                Your browser does not support the audio element.
              </motion.audio>
            ))}
          </div>
          <motion.p
            className="text-sm m-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Please close your eyes while you listen these!
          </motion.p>
        </>
      )}
    </motion.div>
  );
};

export default Card4;
