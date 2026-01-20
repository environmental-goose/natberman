import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MasonryGridProps {
  children: ReactNode;
}

const MasonryGrid = ({ children }: MasonryGridProps) => {
  return <div className="masonry-grid">{children}</div>;
};

interface MasonryItemProps {
  children: ReactNode;
  index?: number;
}

export const MasonryItem = ({ children, index = 0 }: MasonryItemProps) => {
  return (
    <motion.div
      className="masonry-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default MasonryGrid;