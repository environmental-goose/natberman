import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import GraphPaperLayout from "@/components/layout/GraphPaperLayout";
import Logo from "@/components/navigation/Logo";
import { photoLocations, PhotoLocation } from "@/data/photoLocations";

const Photo = () => {
  const [selectedLocation, setSelectedLocation] = useState<PhotoLocation | null>(null);

  return (
    <GraphPaperLayout>
      <div className="min-h-screen flex">
        {/* Sticky Sidebar */}
        <aside className="sticky top-0 h-screen w-72 flex-shrink-0 p-8 border-r border-border/30">
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
            Photography
          </h2>

          <nav className="flex flex-col gap-3">
            {photoLocations.map((location, index) => {
              const isActive = selectedLocation?.id === location.id;
              
              return (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => setSelectedLocation(location)}
                    className={`text-left text-lg transition-colors ${
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground font-light"
                    }`}
                  >
                    {location.label}
                  </button>
                </motion.div>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto">
          <AnimatePresence mode="wait">
            {!selectedLocation ? (
              <motion.div
                key="initial"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                {/* Page Header */}
                <div className="mb-12">
                  <h1 className="text-3xl md:text-4xl font-light mb-4">Personal Photography</h1>
                  <p className="text-muted-foreground max-w-2xl leading-relaxed">
                    A gallery of urban landscapes, nature, and candid moments from my travels. I shoot with a fixed focal length to focus on intentional framing and the creative constraints of a single perspective.
                  </p>
                </div>

                {/* Explore Prompt */}
                <div className="flex-1 flex items-center justify-center">
                  <motion.div
                    className="flex items-center gap-4 text-muted-foreground"
                    animate={{ x: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowLeft className="w-6 h-6" />
                    <span className="text-lg font-light tracking-wide">Explore Here</span>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={selectedLocation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Location Header */}
                <div className="mb-12">
                  <h1 className="text-3xl md:text-4xl font-light mb-4">{selectedLocation.title}</h1>
                  <p className="text-muted-foreground max-w-2xl leading-relaxed">
                    {selectedLocation.description}
                  </p>
                </div>

                {/* Vertical Photo Feed */}
                <div className="max-w-4xl mx-auto space-y-12">
                  {selectedLocation.photos.map((photo, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="group"
                    >
                      <div 
                        className={`overflow-hidden bg-muted ${
                          photo.orientation === "portrait" 
                            ? "max-w-2xl mx-auto aspect-[2/3]" 
                            : "w-full aspect-[3/2]"
                        }`}
                      >
                        <img
                          src={photo.url}
                          alt={photo.caption || selectedLocation.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      </div>
                      {photo.caption && (
                        <p className="mt-4 text-center text-xs font-mono text-muted-foreground uppercase tracking-wider">
                          {photo.caption}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </GraphPaperLayout>
  );
};

export default Photo;