import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Building2 } from "lucide-react";

interface MobileProjectViewProps {
  title: string;
  description: string;
  date?: string;
  location?: string;
  client?: string;
  onBack: () => void;
  children: React.ReactNode;
}

const MobileProjectView = ({ title, description, date, location, client, onBack, children }: MobileProjectViewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen p-6 flex flex-col"
    >
      {/* Back Button - White oval style */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest text-foreground border border-foreground/30 rounded-full hover:bg-foreground hover:text-background transition-colors mb-6 w-fit"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-light mb-3">{title}</h1>
        
        {/* Metadata with icons - all at top */}
        {(date || location || client) && (
          <div className="flex flex-col gap-2 mb-3 text-sm">
            {date && (
              <div className="flex items-center gap-2 text-accent">
                <Calendar className="w-4 h-4" />
                <span className="font-mono">{date}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center gap-2 text-accent">
                <MapPin className="w-4 h-4" />
                <span className="font-mono">{location}</span>
              </div>
            )}
            {client && (
              <div className="flex items-center gap-2 text-accent">
                <Building2 className="w-4 h-4" />
                <span className="font-mono">{client}</span>
              </div>
            )}
          </div>
        )}
        
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
