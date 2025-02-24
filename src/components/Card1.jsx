import { useState } from "react";
import { motion } from "framer-motion";

const Card1 = () => {
  const [step, setStep] = useState(1);
  const [loveConfirmed, setLoveConfirmed] = useState(false);

  return (
    <motion.div
      className="w-80 h-60 bg-darkBlue p-6 rounded-xl shadow-lg text-center text-pastelBlue flex flex-col justify-center items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      whileHover={{ scale: 1.02 }}
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
            Ab har card pr click karna h ok baby! 💙
          </motion.p>

          <p className="mt-2 text-sm">
            {loveConfirmed ? "I love you too baby! Meet me soon my heart! ❤️🥺" : 
            "Do you love me and wanna go on a chai date with me? ☕💖"}
          </p>

          {!loveConfirmed && (
            <div className="mt-4 flex justify-center gap-4">
              <motion.button
                className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-500 ease-in-out"
                whileHover={{ scale: 1.1 }}
                onClick={() => setLoveConfirmed(true)}
              >
                Yes
              </motion.button>

              <motion.button
                className="px-3 py-2 bg-red-500 text-white rounded-lg transition-all duration-500 ease-in-out"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={(e) => (e.target.textContent = "Yes 😂")}
              >
                No
              </motion.button>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};

export default Card1;
