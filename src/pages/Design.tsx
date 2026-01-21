import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import GraphPaperLayout from "@/components/layout/GraphPaperLayout";
import Logo from "@/components/navigation/Logo";
import { designProjects, DesignProject } from "@/data/designProjects";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileGalleryList from "@/components/gallery/MobileGalleryList";
import MobileProjectView from "@/components/gallery/MobileProjectView";
import ExploreIndicator from "@/components/gallery/ExploreIndicator";

const Design = () => {
  const [selectedProject, setSelectedProject] = useState<DesignProject | null>(null);
  const isMobile = useIsMobile();

  const handleSelectProject = (id: string) => {
    const project = designProjects.find(p => p.id === id);
    if (project) setSelectedProject(project);
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
              subheader="A collection of my engineering projects, both professional and personal. These projects reflect a rigorous commitment to clarity and function, balancing refined industrial design with the technical precision required for high-volume global production and industrial precision."
              items={designProjects.map(p => ({ id: p.id, label: p.label }))}
              onSelect={handleSelectProject}
            />
          ) : (
            <MobileProjectView
              key={selectedProject.id}
              title={selectedProject.title}
              description={selectedProject.description}
              onBack={() => setSelectedProject(null)}
            >
              {/* Specs */}
              {selectedProject.specs && (
                <div className="mb-6">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                    Specifications
                  </h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {selectedProject.specs.map((spec, i) => (
                      <li key={i} className="text-sm text-foreground/80">
                        • {spec}
                      </li>
                    ))}
                  </ul>
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

              {/* Gallery */}
              <div className="space-y-6">
                {selectedProject.images.map((image, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={image.url}
                        alt={image.caption || selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {image.caption && (
                      <p className="mt-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {image.caption}
                      </p>
                    )}
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
            Design
          </h2>

          <nav className="flex flex-col gap-3">
            {designProjects.map((project, index) => {
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
                  <h1 className="text-3xl md:text-4xl font-light mb-4">Design Work</h1>
                  <p className="text-muted-foreground max-w-2xl leading-relaxed">
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
                  <p className="text-muted-foreground max-w-2xl leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Specs if available */}
                {selectedProject.specs && (
                  <div className="mb-8">
                    <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-3">
                      Specifications
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {selectedProject.specs.map((spec, i) => (
                        <li key={i} className="text-sm text-foreground/80">
                          • {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tutorial content if available */}
                {selectedProject.content && (
                  <div className="mb-8">
                    <div className="prose prose-invert prose-sm max-w-none">
                      {selectedProject.content.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Code snippet if available */}
                {selectedProject.codeSnippet && (
                  <div className="mb-8">
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

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProject.images.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="group"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={image.url}
                          alt={image.caption || selectedProject.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      {image.caption && (
                        <p className="mt-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                          {image.caption}
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

export default Design;
