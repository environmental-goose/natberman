import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import GraphPaperLayout from "@/components/layout/GraphPaperLayout";
import { photoLocations, PhotoLocation, getLocationPhotos } from "@/data/photoLocations";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileGalleryList from "@/components/gallery/MobileGalleryList";
import MobileProjectView from "@/components/gallery/MobileProjectView";
import ExploreIndicator from "@/components/gallery/ExploreIndicator";
import Lightbox from "@/components/gallery/Lightbox";

const Photo = () => {
  const [selectedLocation, setSelectedLocation] = useState<PhotoLocation | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const handleSelectLocation = (id: string) => {
    const location = photoLocations.find(l => l.id === id);
    if (location) setSelectedLocation(location);
  };

  // Get photos for selected location from page-data
  const locationPhotos = selectedLocation ? getLocationPhotos(selectedLocation.id) : [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  // Mobile Layout
  if (isMobile) {
    return (
      <GraphPaperLayout>
        <AnimatePresence mode="wait">
          {!selectedLocation ? (
            <MobileGalleryList
              key="list"
              title="Personal Photography"
              subheader="A gallery of urban landscapes, nature, and candid moments from my travels. I shoot with a fixed focal length to focus on intentional framing and the creative constraints of a single perspective."
              items={photoLocations.map(l => ({ id: l.id, label: l.label }))}
              onSelect={handleSelectLocation}
            />
          ) : (
            <MobileProjectView
              key={selectedLocation.id}
              title={selectedLocation.title}
              description={selectedLocation.description}
              date={selectedLocation.date}
              location={selectedLocation.location}
              onBack={() => setSelectedLocation(null)}
            >
              {/* Single column masonry on mobile */}
              <div className="flex flex-col gap-3">
                {locationPhotos.map((photoUrl, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <img
                      src={photoUrl}
                      alt={`${selectedLocation.title} - Photo ${i + 1}`}
                      className="w-full h-auto object-cover"
                      style={{ borderRadius: 0 }}
                      onClick={() => openLightbox(i)}
                    />
                  </motion.div>
                ))}
              </div>
            </MobileProjectView>
          )}
        </AnimatePresence>

        {/* Lightbox */}
        <Lightbox
          isOpen={lightboxIndex !== null}
          imageUrl={lightboxIndex !== null ? locationPhotos[lightboxIndex] : ""}
          alt={selectedLocation?.title || ""}
          onClose={closeLightbox}
          images={locationPhotos}
          currentIndex={lightboxIndex ?? 0}
          onNavigate={setLightboxIndex}
        />
      </GraphPaperLayout>
    );
  }

  // Desktop Layout
  return (
    <GraphPaperLayout>
      <div className="min-h-screen flex">
        {/* Sticky Sidebar */}
        <aside className="sticky top-0 h-screen w-72 flex-shrink-0 p-8 border-r border-border/30">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest text-foreground border border-foreground/30 rounded-full hover:bg-foreground hover:text-background transition-colors"
            >
              ← Back
            </Link>
          </div>

          {/* Distinct Section Header */}
          <h2 className="text-2xl font-bold uppercase tracking-wider text-foreground mb-8">
            Photography
          </h2>

          <nav className="flex flex-col gap-3">
            {photoLocations.map((location, index) => {
              const isActive = selectedLocation?.id === location.id;
              
              return (
                <motion.button
                  key={location.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedLocation(location)}
                  className={`text-left text-lg transition-colors duration-200 ${
                    isActive 
                      ? "text-foreground font-medium" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {location.label}
                </motion.button>
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
              >
                {/* Page Header */}
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-light mb-4">Personal Photography</h1>
                  <p className="text-muted-foreground max-w-2xl leading-relaxed">
                    A gallery of urban landscapes, nature, and candid moments from my travels. I shoot with a fixed focal length to focus on intentional framing and the creative constraints of a single perspective.
                  </p>
                  <ExploreIndicator />
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
                  
                  {/* Metadata with icons */}
                  {(selectedLocation.date || selectedLocation.location) && (
                    <div className="flex flex-wrap gap-6 mb-4 text-sm">
                      {selectedLocation.date && (
                        <div className="flex items-center gap-2 text-accent">
                          <Calendar className="w-4 h-4" />
                          <span className="font-mono">{selectedLocation.date}</span>
                        </div>
                      )}
                      {selectedLocation.location && (
                        <div className="flex items-center gap-2 text-accent">
                          <MapPin className="w-4 h-4" />
                          <span className="font-mono">{selectedLocation.location}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <p className="text-muted-foreground max-w-2xl leading-relaxed">
                    {selectedLocation.description}
                  </p>
                </div>

                {/* Masonry Grid - 3 columns desktop with increased gutters */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
                  {locationPhotos.map((photoUrl, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="mb-4 break-inside-avoid group cursor-pointer"
                      onClick={() => openLightbox(i)}
                    >
                      <img
                        src={photoUrl}
                        alt={`${selectedLocation.title} - Photo ${i + 1}`}
                        className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-90"
                        style={{ borderRadius: 0 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        imageUrl={lightboxIndex !== null ? locationPhotos[lightboxIndex] : ""}
        alt={selectedLocation?.title || ""}
        onClose={closeLightbox}
        images={locationPhotos}
        currentIndex={lightboxIndex ?? 0}
        onNavigate={setLightboxIndex}
      />
    </GraphPaperLayout>
  );
};

export default Photo;
