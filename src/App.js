import { motion } from "framer-motion";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import Card6 from "./components/Card6";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-navy flex flex-col items-center p-6">

      {/* Grid Container for Cards */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {[Card1, Card2, Card3, Card4, Card5, Card6].map((Card, index) => (
          <motion.div key={index}>
            <Card />
          </motion.div>
        ))}
      </motion.div>

      {/* Favorite Site Section */}
      <motion.div 
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-lg font-semibold text-pastelBlue">
          Thousands of powerful sites in this world, but wanna see my favorite?
          <a
          href="https://windows-ily.vercel.app" target="_blank" rel="noreferrer"
          className="mx-2 inline-block text-royalBlue font-bold underline hover:text-skyBlue transition"
        >
          See this
        </a>
        </p>
      </motion.div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
