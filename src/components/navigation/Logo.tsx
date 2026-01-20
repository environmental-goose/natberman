import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link to="/" className="block mb-12">
      <motion.svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Line art logo placeholder - geometric/engineering style */}
        <rect
          x="4"
          y="4"
          width="40"
          height="40"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground"
        />
        <line
          x1="4"
          y1="4"
          x2="44"
          y2="44"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground"
        />
        <line
          x1="44"
          y1="4"
          x2="4"
          y2="44"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground"
        />
        <circle
          cx="24"
          cy="24"
          r="8"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground"
        />
      </motion.svg>
    </Link>
  );
};

export default Logo;