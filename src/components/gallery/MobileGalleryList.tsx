import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/navigation/Logo";

interface MobileGalleryListProps {
  title: string;
  subheader: string;
  items: { id: string; label: string }[];
  onSelect: (id: string) => void;
}

const MobileGalleryList = ({ title, subheader, items, onSelect }: MobileGalleryListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-6 flex flex-col"
    >
      {/* Header */}
      <div className="mb-6">
        <Logo />
        <Link
          to="/"
          className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back
        </Link>
      </div>

      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-light mb-4">{title}</h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {subheader}
        </p>
      </div>

      {/* Project List */}
      <nav className="flex-1 flex flex-col gap-4">
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onSelect(item.id)}
            className="text-left py-4 px-2 border-b border-border/20 text-lg font-light text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group"
          >
            <span>{item.label}</span>
            <ArrowLeft className="w-4 h-4 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        ))}
      </nav>
    </motion.div>
  );
};

export default MobileGalleryList;
