import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const ExploreIndicator = () => {
  return (
    <motion.div
      className="flex items-center gap-3 text-muted-foreground mt-6"
      animate={{ x: [0, -6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="text-sm font-light tracking-wide">Explore Here</span>
    </motion.div>
  );
};

export default ExploreIndicator;
