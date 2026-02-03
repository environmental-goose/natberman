import { useState } from "react";
import { motion } from "framer-motion";

interface ShatterTextProps {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

// Shatter animation variants
const shatterVariants = [
  (index: number) => ({
    rotate: ((index % 5) - 2) * 1.5,
    x: ((index % 3) - 1) * 2.5,
    y: ((index % 4) - 2) * 2,
  }),
  (index: number) => ({
    rotate: Math.sin(index * 0.8) * 4,
    x: Math.cos(index * 1.2) * 3.5,
    y: Math.sin(index * 0.6) * 2.5,
  }),
  (index: number) => ({
    rotate: ((index % 7) - 3) * 2,
    x: (index % 2 === 0 ? 1 : -1) * ((index % 4) + 1) * 1,
    y: (index % 2 === 0 ? -1 : 1) * ((index % 3) + 1) * 1.2,
  }),
  (index: number) => ({
    rotate: (index % 2 === 0 ? 1 : -1) * ((index % 4) + 1) * 0.9,
    x: ((index * 3) % 5 - 2) * 1.5,
    y: ((index * 2) % 4 - 2) * 1.6,
  }),
];

const ShatterText = ({ text, isActive, onClick, className = "" }: ShatterTextProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Use a consistent variant based on text length
  const variantIndex = text.length % shatterVariants.length;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`text-left flex overflow-visible ${className}`}
    >
      {text.split("").map((letter, index) => {
        const transform = isHovered ? shatterVariants[variantIndex](index) : { rotate: 0, x: 0, y: 0 };
        
        return (
          <motion.span
            key={index}
            animate={{
              rotate: transform.rotate,
              x: transform.x,
              y: transform.y,
            }}
            transition={{
              type: "spring",
              stiffness: 600,
              damping: 25,
            }}
            style={{ 
              display: "inline-block",
              whiteSpace: letter === " " ? "pre" : "normal",
            }}
            className={`${
              isActive
                ? "text-foreground font-medium"
                : "text-muted-foreground font-light"
            } transition-colors hover:text-foreground`}
          >
            {letter}
          </motion.span>
        );
      })}
    </button>
  );
};

export default ShatterText;
