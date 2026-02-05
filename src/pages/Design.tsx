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

// Maximum width for text content - maintains consistent "gut" across all paragraphs
const TEXT_MAX_WIDTH = "max-w-xl";

const Design = () => {
  const [selectedProject, setSelectedProject] = useState<DesignProject | null>(null);
  const isMobile = useIsMobile();

  const handleSelectProject = (id: string) => {
    const project = designProjects.find(p => p.id === id);
    if (project) setSelectedProject(project);
  };

  // Get images and videos for selected project from page-data
  const projectImages = selectedProject ? getProjectImageUrls(selectedProject.id) : [];
  const projectVideos = selectedProject ? getProjectVideoUrls(selectedProject.id) : [];

  // Split images: first few for inline, rest for secondary gallery
  // inline-image-1, inline-image-2, etc. classes for easy swapping
  const inlineImages = projectImages.slice(0, 3);
  const galleryImages = projectImages.slice(3);

  // Mobile Layout
  if (isMobile) {
    return (
      <GraphPaperLayout>
        <AnimatePresence mode="wait">
          {!selectedProject ? (
            <MobileGalleryList
              key="list"
              title="Design Work"
              subheader="A collection of my engineering projects, both professional and personal. These projects reflect a rigorous commitment to clarity and function, balancing refined industrial design with the technical precision required for high-volume global production and industrial precision."
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
              onBack={() => setSelectedProject(null)}
            >
              {/* Metadata block - orange accent style */}
              {selectedProject.client && (
                <div className="flex items-center gap-2 text-accent text-sm mb-4">
                  <Building2 className="w-4 h-4" />
                  <span className="font-mono">{selectedProject.client}</span>
                </div>
              )}

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
                <div className="mb-6 space-y-4">
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
              )}

              {/* Gallery - Single column vertical feed */}
              <div className="space-y-6">
                {projectImages.map((imageUrl, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <div className="w-full overflow-hidden bg-muted">
                      <img
                        src={imageUrl}
                        alt={`${selectedProject.title} image ${i + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </MobileProjectView>
          )}
        </AnimatePresence>
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

                {/* Inline Media Flow: Text with floated images for storytelling */}
                {selectedProject.content && (
                  <div className="mb-12">
                    {/* First inline image floats right with first paragraph */}
                    {inlineImages.length > 0 && (
                      <motion.div 
                        className="inline-image-1 float-right ml-8 mb-6 w-64 lg:w-80"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <ImageWithSkeleton
                          src={inlineImages[0]}
                          alt={`${selectedProject.title} - inline image 1`}
                          index={0}
                          className="w-full"
                        />
                      </motion.div>
                    )}

                    {/* Content paragraphs with consistent max-width */}
                    <div className={`prose-content ${TEXT_MAX_WIDTH}`}>
                      {selectedProject.content.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed mb-4 clear-none">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Clear floats */}
                    <div className="clear-both" />

                    {/* Second inline image floats left with additional context */}
                    {inlineImages.length > 1 && (
                      <motion.div 
                        className="inline-image-2 float-left mr-8 mt-6 mb-6 w-64 lg:w-80"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                      >
                        <ImageWithSkeleton
                          src={inlineImages[1]}
                          alt={`${selectedProject.title} - inline image 2`}
                          index={1}
                          className="w-full"
                        />
                      </motion.div>
                    )}

                    {/* Third inline image floats right */}
                    {inlineImages.length > 2 && (
                      <motion.div 
                        className="inline-image-3 float-right ml-8 mt-6 mb-6 w-64 lg:w-80"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                      >
                        <ImageWithSkeleton
                          src={inlineImages[2]}
                          alt={`${selectedProject.title} - inline image 3`}
                          index={2}
                          className="w-full"
                        />
                      </motion.div>
                    )}

                    {/* Clear floats after inline images */}
                    <div className="clear-both" />
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

                {/* Video Embeds */}
                {projectVideos.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
                      Video
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

                {/* Secondary Gallery - 2 column grid for remaining images */}
                {galleryImages.length > 0 && (
                  <div className="secondary-gallery mt-12 pt-8 border-t border-border/20">
                    <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">
                      Gallery
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                      {galleryImages.map((imageUrl, i) => (
                        <motion.div
                          key={i}
                          className={`gallery-image-${i + 4}`} // Continues numbering from inline images
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ delay: i * 0.08, duration: 0.4 }}
                        >
                          <ImageWithSkeleton
                            src={imageUrl}
                            alt={`${selectedProject.title} - gallery image ${i + 4}`}
                            index={i + 3}
                            className="w-full"
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
    </GraphPaperLayout>
  );
};

export default Design;
