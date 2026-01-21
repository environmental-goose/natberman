import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface MobileProjectViewProps {
  title: string;
  description: string;
  onBack: () => void;
  children: React.ReactNode;
}

const MobileProjectView = ({ title, description, onBack, children }: MobileProjectViewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen p-6 flex flex-col"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-light mb-3">{title}</h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Content */}
      <div className="flex-1">
        {children}
      </div>
    </motion.div>
  );
};

export default MobileProjectView;
