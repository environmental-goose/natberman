import { motion } from "framer-motion";
import GraphPaperLayout from "@/components/layout/GraphPaperLayout";
import GallerySidebar from "@/components/navigation/GallerySidebar";
import MasonryGrid, { MasonryItem } from "@/components/gallery/MasonryGrid";
import GalleryCard from "@/components/gallery/GalleryCard";

const artProjects = [
  { label: "Generative", path: "/art/generative" },
  { label: "Sculpture", path: "/art/sculpture" },
  { label: "Installations", path: "/art/installations" },
  { label: "Experiments", path: "/art/experiments" },
];

const galleryItems = [
  { title: "Algorithmic Forms", aspectRatio: "square" as const },
  { title: "Data Visualization", aspectRatio: "landscape" as const },
  { title: "Parametric Study", aspectRatio: "portrait" as const },
  { title: "Digital Texture", aspectRatio: "square" as const },
  { title: "Motion Capture", aspectRatio: "portrait" as const },
  { title: "Abstract Computation", aspectRatio: "landscape" as const },
];

const Art = () => {
  return (
    <GraphPaperLayout>
      <div className="min-h-screen flex">
        {/* Sticky Sidebar */}
        <GallerySidebar items={artProjects} title="Art" />

        {/* Main Content */}
        <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Page Header */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-light mb-4">Art & Experiments</h1>
              <p className="text-muted-foreground max-w-xl">
                Personal explorations in generative art, computational design,
                and experimental media. These works push the boundaries between
                code, mathematics, and visual expression.
              </p>
            </div>

            {/* Gallery Wall */}
            <MasonryGrid>
              {galleryItems.map((item, index) => (
                <MasonryItem key={item.title} index={index}>
                  <GalleryCard
                    title={item.title}
                    imageUrl={`https://images.unsplash.com/photo-${1558591710433 + index * 3000}-c78d6d0ffdef?w=600&h=${item.aspectRatio === "portrait" ? 800 : item.aspectRatio === "landscape" ? 450 : 600}&fit=crop`}
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

export default Art;