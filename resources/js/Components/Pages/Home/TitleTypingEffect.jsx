import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TitleTypingEffect() {
  const text = "Funky \nFrontend";
  const [index, setIndex] = useState(1);
  const speed = 250;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl md:text-8xl xl:text-9xl font-bold text-accent-dark whitespace-pre-line ">
      <div className="absolute opacity-0 pointer-events-none">
        {text} | 
      </div>
      <motion.span>{text.substring(0, index)}</motion.span>
      <motion.span
        className="text-primary-light font-extralight"
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
      >
        |
      </motion.span>
    </h1>
  );
}
