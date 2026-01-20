import { motion } from "framer-motion";
import GraphPaperLayout from "@/components/layout/GraphPaperLayout";
import GallerySidebar from "@/components/navigation/GallerySidebar";
import MasonryGrid, { MasonryItem } from "@/components/gallery/MasonryGrid";
import GalleryCard from "@/components/gallery/GalleryCard";

const photoProjects = [
  { label: "Architecture", path: "/photo/architecture" },
  { label: "Street", path: "/photo/street" },
  { label: "Portraits", path: "/photo/portraits" },
  { label: "Abstract", path: "/photo/abstract" },
];

const galleryItems = [
  { title: "Urban Geometry", aspectRatio: "portrait" as const },
  { title: "Light Study", aspectRatio: "landscape" as const },
  { title: "Concrete Forms", aspectRatio: "square" as const },
  { title: "Morning Transit", aspectRatio: "landscape" as const },
  { title: "Shadow Play", aspectRatio: "portrait" as const },
  { title: "Minimal Structure", aspectRatio: "square" as const },
];

const Photo = () => {
  return (
    <GraphPaperLayout>
      <div className="min-h-screen flex">
        {/* Sticky Sidebar */}
        <GallerySidebar items={photoProjects} title="Photography" />

        {/* Main Content */}
        <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Page Header */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-light mb-4">Photography</h1>
              <p className="text-muted-foreground max-w-xl">
                Exploring light, form, and space through the lens. These images
                capture moments of visual interest found in architecture, urban
                environments, and everyday scenes.
              </p>
            </div>

            {/* Gallery Wall */}
            <MasonryGrid>
              {galleryItems.map((item, index) => (
                <MasonryItem key={item.title} index={index}>
                  <GalleryCard
                    title={item.title}
                    imageUrl={`https://images.unsplash.com/photo-${1486325212027 + index * 2000}-8a6917ce3f24?w=600&h=${item.aspectRatio === "portrait" ? 800 : item.aspectRatio === "landscape" ? 450 : 600}&fit=crop`}
                    aspectRatio={item.aspectRatio}
                  />
                </MasonryItem>
              ))}
            </MasonryGrid>
          </motion.div>
        </main>
      </div>
    </GraphPaperLayout>
  );
};

export default Photo;