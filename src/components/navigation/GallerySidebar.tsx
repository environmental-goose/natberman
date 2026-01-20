import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

interface SidebarItem {
  label: string;
  path: string;
}

interface GallerySidebarProps {
  items: SidebarItem[];
  title: string;
}

const GallerySidebar = ({ items, title }: GallerySidebarProps) => {
  const location = useLocation();

  return (
    <aside className="sticky top-0 h-screen w-64 flex-shrink-0 p-8 border-r border-border/30">
      <Logo />
      
      <div className="mb-8">
        <Link
          to="/"
          className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back
        </Link>
      </div>

      <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">
        {title}
      </h2>

      <nav className="flex flex-col gap-3">
        {items.map((item, index) => {
          const isActive = location.pathname === item.path;
          
          return (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={item.path}
                className={`text-lg font-light transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </aside>
  );
};

export default GallerySidebar;