import { useState, useMemo } from "react";
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

// 4 distinct shatter animation variants with different trajectories
const shatterVariants = [
  // Variant 1: Subtle scatter
  (index: number) => ({
    rotate: ((index % 5) - 2) * 1.2,
    x: ((index % 3) - 1) * 2,
    y: ((index % 4) - 2) * 1.5,
  }),
  // Variant 2: Wave pattern
  (index: number) => ({
    rotate: Math.sin(index * 0.8) * 3,
    x: Math.cos(index * 1.2) * 3,
    y: Math.sin(index * 0.6) * 2,
  }),
  // Variant 3: Explosion from center
  (index: number) => ({
    rotate: ((index % 7) - 3) * 1.5,
    x: (index % 2 === 0 ? 1 : -1) * ((index % 4) + 1) * 0.8,
    y: (index % 2 === 0 ? -1 : 1) * ((index % 3) + 1),
  }),
  // Variant 4: Staggered tilt
  (index: number) => ({
    rotate: (index % 2 === 0 ? 1 : -1) * ((index % 4) + 1) * 0.7,
    x: ((index * 3) % 5 - 2) * 1.2,
    y: ((index * 2) % 4 - 2) * 1.3,
  }),
];

const ShatterNav = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Assign a random variant to each nav item on mount
  const variantAssignments = useMemo(() => {
    return navItems.map(() => Math.floor(Math.random() * shatterVariants.length));
  }, []);

  return (
    <nav className="flex flex-col gap-2 px-2">
      {navItems.map((item, index) => (
        <ShatterNavItem
          key={item.path}
          item={item}
          index={index}
          hoveredIndex={hoveredIndex}
          variantIndex={variantAssignments[index]}
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
  variantIndex: number;
  onHover: () => void;
  onLeave: () => void;
}

const ShatterNavItem = ({
  item,
  index,
  hoveredIndex,
  variantIndex,
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
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <Link
        to={item.path}
        className="block"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className="nav-item flex overflow-visible px-1">
          {item.label.split("").map((letter, letterIndex) => (
            <ShatterLetter
              key={letterIndex}
              letter={letter}
              index={letterIndex}
              isHovered={isHovered}
              isOtherHovered={isOtherHovered}
              variantIndex={variantIndex}
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
  variantIndex: number;
}

const ShatterLetter = ({
  letter,
  index,
  isHovered,
  isOtherHovered,
  variantIndex,
}: ShatterLetterProps) => {
  // Get shatter transform from assigned variant
  const getShatterTransform = () => {
    if (!isHovered) return { rotate: 0, x: 0, y: 0 };
    return shatterVariants[variantIndex](index);
  };

  const transform = getShatterTransform();

  return (
    <motion.span
      initial={{ color: "hsl(0, 0%, 100%)" }}
      animate={{
        rotate: transform.rotate,
        x: transform.x,
        y: transform.y,
        opacity: isOtherHovered ? 0.3 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 25,
        opacity: { duration: 0.15, ease: "easeOut" },
      }}
      style={{ 
        display: "inline-block",
        color: "hsl(0, 0%, 100%)",
      }}
    >
      {letter}
    </motion.span>
  );
};

export default ShatterNav;
