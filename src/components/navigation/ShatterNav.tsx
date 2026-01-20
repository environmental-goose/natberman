import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "About", path: "/about" },
  { label: "Design", path: "/design" },
  { label: "Photo", path: "/photo" },
  { label: "Art", path: "/art" },
  { label: "Contact", path: "/contact" },
];

const ShatterNav = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="flex flex-col gap-2">
      {navItems.map((item, index) => (
        <ShatterNavItem
          key={item.path}
          item={item}
          index={index}
          hoveredIndex={hoveredIndex}
          onHover={() => setHoveredIndex(index)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}
    </nav>
  );
};

interface ShatterNavItemProps {
  item: NavItem;
  index: number;
  hoveredIndex: number | null;
  onHover: () => void;
  onLeave: () => void;
}

const ShatterNavItem = ({
  item,
  index,
  hoveredIndex,
  onHover,
  onLeave,
}: ShatterNavItemProps) => {
  const isHovered = hoveredIndex === index;
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

  // Calculate vertical offset when another item is hovered
  const getYOffset = () => {
    if (hoveredIndex === null) return 0;
    if (index < hoveredIndex) return -12;
    if (index > hoveredIndex) return 12;
    return 0;
  };

  return (
    <motion.div
      animate={{
        y: getYOffset(),
        opacity: isOtherHovered ? 0.3 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <Link
        to={item.path}
        className="block"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className="nav-item flex overflow-hidden">
          {item.label.split("").map((letter, letterIndex) => (
            <ShatterLetter
              key={letterIndex}
              letter={letter}
              index={letterIndex}
              isHovered={isHovered}
              isOtherHovered={isOtherHovered}
            />
          ))}
        </div>
      </Link>
    </motion.div>
  );
};

interface ShatterLetterProps {
  letter: string;
  index: number;
  isHovered: boolean;
  isOtherHovered: boolean;
}

const ShatterLetter = ({
  letter,
  index,
  isHovered,
  isOtherHovered,
}: ShatterLetterProps) => {
  // Create varied, subtle angles for the shatter effect
  const getShatterTransform = () => {
    if (!isHovered) return { rotate: 0, x: 0, y: 0 };
    
    // Pseudo-random based on letter index
    const seed = index * 7;
    const rotate = ((seed % 11) - 5) * 0.8; // -4 to 4 degrees
    const x = ((seed % 7) - 3) * 1.5; // -4.5 to 4.5px
    const y = ((seed % 5) - 2) * 2; // -4 to 4px
    
    return { rotate, x, y };
  };

  const transform = getShatterTransform();

  return (
    <motion.span
      className="text-foreground"
      animate={{
        rotate: transform.rotate,
        x: transform.x,
        y: transform.y,
        color: isOtherHovered ? "hsl(215, 16%, 30%)" : "hsl(0, 0%, 100%)",
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 25,
      }}
      style={{ display: "inline-block" }}
    >
      {letter}
    </motion.span>
  );
};

export default ShatterNav;