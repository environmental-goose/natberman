import { motion } from "framer-motion";
import GraphPaperLayout from "@/components/layout/GraphPaperLayout";
import GallerySidebar from "@/components/navigation/GallerySidebar";
import MasonryGrid, { MasonryItem } from "@/components/gallery/MasonryGrid";
import GalleryCard from "@/components/gallery/GalleryCard";

const designProjects = [
  { label: "Brand Systems", path: "/design/brand" },
  { label: "Product Design", path: "/design/product" },
  { label: "Web Experiences", path: "/design/web" },
  { label: "Print & Editorial", path: "/design/print" },
];

const galleryItems = [
  { title: "Product Interface", aspectRatio: "landscape" as const },
  { title: "Brand Identity", aspectRatio: "portrait" as const },
  { title: "Dashboard Design", aspectRatio: "square" as const },
  { title: "Mobile Application", aspectRatio: "portrait" as const },
  { title: "Marketing Site", aspectRatio: "landscape" as const },
  { title: "Icon System", aspectRatio: "square" as const },
];

const Design = () => {
  return (
    <GraphPaperLayout>
      <div className="min-h-screen flex">
        {/* Sticky Sidebar */}
        <GallerySidebar items={designProjects} title="Design" />

        {/* Main Content */}
        <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Page Header */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-light mb-4">Design Work</h1>
              <p className="text-muted-foreground max-w-xl">
                A collection of design projects spanning brand systems, product
                interfaces, and digital experiences. Each piece reflects a
                commitment to clarity, function, and refined aesthetics.
              </p>
            </div>

            {/* Gallery Wall */}
            <MasonryGrid>
              {galleryItems.map((item, index) => (
                <MasonryItem key={item.title} index={index}>
                  <GalleryCard
                    title={item.title}
                    imageUrl={`https://images.unsplash.com/photo-${1618005182384 + index * 1000}-a83a8bd57fbe?w=600&h=${item.aspectRatio === "portrait" ? 800 : item.aspectRatio === "landscape" ? 450 : 600}&fit=crop`}
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

export default Design;