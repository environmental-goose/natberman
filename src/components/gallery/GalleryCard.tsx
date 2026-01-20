import { motion } from "framer-motion";

interface GalleryCardProps {
  title: string;
  imageUrl: string;
  aspectRatio?: "square" | "portrait" | "landscape";
}

const aspectRatioClasses = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

const GalleryCard = ({
  title,
  imageUrl,
  aspectRatio = "square",
}: GalleryCardProps) => {
  return (
    <motion.div
      className="gallery-card group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div className={`relative ${aspectRatioClasses[aspectRatio]} overflow-hidden bg-muted`}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-sm font-mono text-foreground">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;