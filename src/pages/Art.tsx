import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import GraphPaperLayout from "@/components/layout/GraphPaperLayout";
import Logo from "@/components/navigation/Logo";
import { artProjects, ArtProject } from "@/data/artProjects";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileGalleryList from "@/components/gallery/MobileGalleryList";
import MobileProjectView from "@/components/gallery/MobileProjectView";
import ExploreIndicator from "@/components/gallery/ExploreIndicator";
import { usePageImageMap } from "@/hooks/useSupabasePages";

const Art = () => {
  const [selectedProject, setSelectedProject] = useState<ArtProject | null>(null);
  const isMobile = useIsMobile();
  const { getImagesForSlug, isLoading: imagesLoading } = usePageImageMap();

  const handleSelectProject = (id: string) => {
    const project = artProjects.find(p => p.id === id);
    if (project) setSelectedProject(project);
  };

  // Get images for selected project from Supabase
  const projectImages = selectedProject ? getImagesForSlug(selectedProject.slug) : [];

  // Mobile Layout
  if (isMobile) {
    return (
      <GraphPaperLayout>
        <AnimatePresence mode="wait">
          {!selectedProject ? (
            <MobileGalleryList
              key="list"
              title="Art"
              subheader="My less mechanical work across a variety of mediums"
              items={artProjects.map(p => ({ id: p.id, label: p.label }))}
              onSelect={handleSelectProject}
            />
          ) : (
            <MobileProjectView
              key={selectedProject.id}
              title={selectedProject.title}
              description={selectedProject.description}
              onBack={() => setSelectedProject(null)}
            >
              {/* Gallery */}
              {imagesLoading ? (
                <div className="text-muted-foreground text-sm">Loading images...</div>
              ) : projectImages.length > 0 ? (
                <div className="space-y-6">
                  {projectImages.map((imageUrl, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      <div className="overflow-hidden bg-muted aspect-[3/2]">
                        <img
                          src={imageUrl}
                          alt={`${selectedProject.title} - Image ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : null}
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
            Art
          </h2>

          <nav className="flex flex-col gap-3">
            {artProjects.map((project, index) => {
              const isActive = selectedProject?.id === project.id;
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`text-left text-lg transition-colors ${
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground font-light"
                    }`}
                  >
                    {project.label}
                  </button>
                </motion.div>
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
                  <h1 className="text-3xl md:text-4xl font-light mb-4">Art</h1>
                  <p className="text-muted-foreground max-w-2xl leading-relaxed">
                    My less mechanical work across a variety of mediums
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
                  <p className="text-muted-foreground max-w-2xl leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Gallery - Masonry-style layout */}
                {imagesLoading ? (
                  <div className="text-muted-foreground text-sm">Loading images...</div>
                ) : projectImages.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectImages.map((imageUrl, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="group"
                      >
                        <div className="overflow-hidden bg-muted aspect-[3/2]">
                          <img
                            src={imageUrl}
                            alt={`${selectedProject.title} - Image ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </GraphPaperLayout>
  );
};

export default Art;
