import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Building2 } from "lucide-react";
import GraphPaperLayout from "@/components/layout/GraphPaperLayout";
import { designProjects, DesignProject } from "@/data/designProjects";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileGalleryList from "@/components/gallery/MobileGalleryList";
import MobileProjectView from "@/components/gallery/MobileProjectView";
import ExploreIndicator from "@/components/gallery/ExploreIndicator";
import { getProjectImageUrls, getProjectVideoUrls } from "@/utils/contentLoader";
import ImageWithSkeleton from "@/components/gallery/ImageWithSkeleton";
import Lightbox from "@/components/gallery/Lightbox";

// Maximum width for text content - maintains consistent "gut" across all paragraphs
const TEXT_MAX_WIDTH = "max-w-xl";

const Design = () => {
  const [selectedProject, setSelectedProject] = useState<DesignProject | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const handleSelectProject = (id: string) => {
    const project = designProjects.find(p => p.id === id);
    if (project) setSelectedProject(project);
  };

  // Get images and videos for selected project from page-data
  const projectImages = selectedProject ? getProjectImageUrls(selectedProject.id) : [];
  const projectVideos = selectedProject ? getProjectVideoUrls(selectedProject.id) : [];

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
          {!selectedProject ? (
            <MobileGalleryList
              key="list"
              title="Design Work"
              subheader="A collection of my engineering projects, both professional and personal. These projects reflect a rigorous commitment to clarity and function, balancing refined industrial design with the technical precision."
              items={designProjects.map(p => ({ id: p.id, label: p.label }))}
              onSelect={handleSelectProject}
            />
          ) : (
            <MobileProjectView
              key={selectedProject.id}
              title={selectedProject.title}
              description={selectedProject.description}
              date={selectedProject.year}
              location={selectedProject.location}
              client={selectedProject.client}
              onBack={() => setSelectedProject(null)}
            >
              {/* Tutorial content */}
              {selectedProject.content && (
                <div className="mb-6">
                  {selectedProject.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* Code snippet */}
              {selectedProject.codeSnippet && (
                <div className="mb-6">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                    Code
                  </h3>
                  <div className="border border-border/50 bg-background/50">
                    <ScrollArea className="h-60">
                      <pre className="p-3 text-xs font-mono text-foreground/90 overflow-x-auto">
                        <code>{selectedProject.codeSnippet}</code>
                      </pre>
                    </ScrollArea>
                  </div>
                </div>
              )}

              {/* Video Embeds */}
              {projectVideos.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                    Videos
                  </h3>
                  <div className="space-y-4">
                    {projectVideos.map((videoUrl, i) => (
                      <div key={i} className="aspect-video w-full">
                        <iframe
                          src={videoUrl.startsWith("//") ? `https:${videoUrl}` : videoUrl}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Photos Gallery - Single column on mobile */}
              {projectImages.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                    Photos
                  </h3>
                  <div className="space-y-4">
                    {projectImages.map((imageUrl, i) => (
                      <ImageWithSkeleton
                        key={i}
                        src={imageUrl}
                        alt={`${selectedProject.title} - Photo ${i + 1}`}
                        index={i}
                        onClick={() => openLightbox(i)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </MobileProjectView>
          )}
        </AnimatePresence>

        {/* Lightbox */}
        <Lightbox
          isOpen={lightboxIndex !== null}
          imageUrl={lightboxIndex !== null && projectImages[lightboxIndex] ? projectImages[lightboxIndex] : ""}
          alt={selectedProject?.title || ""}
          onClose={closeLightbox}
          images={projectImages}
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
            Design
          </h2>

          <nav className="flex flex-col gap-3">
            {designProjects.map((project, index) => {
              const isActive = selectedProject?.id === project.id;
              
              return (
                <motion.button
                  key={project.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className={`text-left text-lg transition-colors duration-200 ${
                    isActive 
                      ? "text-foreground font-medium" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {project.label}
                </motion.button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto">
          <AnimatePresence mode="wait">
            {!selectedProject ? (
              <motion.div
                key="initial"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Page Header */}
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-light mb-4">Design Work</h1>
                  <p className={`text-muted-foreground ${TEXT_MAX_WIDTH} leading-relaxed`}>
                    A collection of my engineering projects, both professional and personal. These projects reflect a rigorous commitment to clarity and function, balancing refined industrial design with the technical precision required for high-volume global production and industrial precision.
                  </p>
                  <ExploreIndicator />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Project Header */}
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-light mb-4">{selectedProject.title}</h1>
                  
                  {/* Metadata with icons - orange accent style (matches Photo pages) */}
                  <div className="flex flex-wrap gap-6 mb-4 text-sm">
                    {selectedProject.year && (
                      <div className="metadata-year flex items-center gap-2 text-accent">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{selectedProject.year}</span>
                      </div>
                    )}
                    {selectedProject.location && (
                      <div className="metadata-location flex items-center gap-2 text-accent">
                        <MapPin className="w-4 h-4" />
                        <span className="font-mono">{selectedProject.location}</span>
                      </div>
                    )}
                    {selectedProject.client && (
                      <div className="metadata-client flex items-center gap-2 text-accent">
                        <Building2 className="w-4 h-4" />
                        <span className="font-mono">{selectedProject.client}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className={`text-muted-foreground ${TEXT_MAX_WIDTH} leading-relaxed`}>
                    {selectedProject.description}
                  </p>
                </div>

                {/* Content paragraphs with consistent max-width */}
                {selectedProject.content && (
                  <div className={`mb-8 ${TEXT_MAX_WIDTH}`}>
                    {selectedProject.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Code snippet if available */}
                {selectedProject.codeSnippet && (
                  <div className={`mb-8 ${TEXT_MAX_WIDTH}`}>
                    <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-3">
                      Code
                    </h3>
                    <div className="border border-border/50 bg-background/50">
                      <ScrollArea className="h-80">
                        <pre className="p-4 text-xs font-mono text-foreground/90 overflow-x-auto">
                          <code>{selectedProject.codeSnippet}</code>
                        </pre>
                      </ScrollArea>
                    </div>
                  </div>
                )}

                {/* VIDEOS Section */}
                {projectVideos.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
                      Videos
                    </h3>
                    <div className="space-y-4">
                      {projectVideos.map((videoUrl, i) => (
                        <div key={i} className={`aspect-video ${TEXT_MAX_WIDTH}`}>
                          <iframe
                            src={videoUrl.startsWith("//") ? `https:${videoUrl}` : videoUrl}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PHOTOS Section - 2 column grid gallery */}
                {projectImages.length > 0 && (
                  <div className="photos-gallery mt-12 pt-8 border-t border-border/20">
                    <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">
                      Photos
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                      {projectImages.map((imageUrl, i) => (
                        <motion.div
                          key={i}
                          className={`gallery-image-${i + 1}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ delay: i * 0.08, duration: 0.4 }}
                        >
                          <ImageWithSkeleton
                            src={imageUrl}
                            alt={`${selectedProject.title} - Photo ${i + 1}`}
                            index={i}
                            onClick={() => openLightbox(i)}
                            className="cursor-pointer"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        imageUrl={lightboxIndex !== null && projectImages[lightboxIndex] ? projectImages[lightboxIndex] : ""}
        alt={selectedProject?.title || ""}
        onClose={closeLightbox}
        images={projectImages}
        currentIndex={lightboxIndex ?? 0}
        onNavigate={setLightboxIndex}
      />
    </GraphPaperLayout>
  );
};

export default Design;
