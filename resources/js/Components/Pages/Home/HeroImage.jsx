import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <div className="hidden lg:block w-full h-auto relative flex items-center justify-center">
        <motion.div
        className="absolute w-16 h-16 flex items-center justify-center"
        animate={{ rotate: 270, x: 200, y: 50 }}
        initial={{x: 0, y: 100}}
        transition={{ repeat: Infinity,repeatType: "reverse", duration: 10, ease: "easeInOut"}}
      >
        <img
          src="/icons/react.svg"
          className=""
        />
      </motion.div>

      <motion.div
        className="absolute w-16 h-16 flex items-center justify-center"
        animate={{ y: 120 }}
        initial={{x: 400, y: 150}}
        transition={{ repeat: Infinity,repeatType: "reverse", duration: 10, ease: "easeInOut"}}
      >
        <img
          src="/icons/css.svg"
          className=""
        />
      </motion.div>

      <img src="/images/development3.png" className="relative z-10" />
    </div>
  );
};

export default HeroImage;