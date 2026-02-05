import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  index: number;
  onClick?: () => void;
  className?: string;
}

/**
 * ImageWithSkeleton - Photo component with aspect-ratio placeholder
 * Prevents layout shift by maintaining space before image loads
 * Uses sequential fade-in animation from top to bottom
 */
const ImageWithSkeleton = ({ src, alt, index, onClick, className }: ImageWithSkeletonProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Stagger delay based on index for top-to-bottom loading effect
  const staggerDelay = index * 0.08;

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden bg-muted/30",
        onClick && "cursor-pointer group",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: staggerDelay, duration: 0.4 }}
    >
      {/* Skeleton placeholder - shows while loading */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-muted/50 animate-pulse"
          style={{ aspectRatio: "4/5" }}
        />
      )}

      {/* Actual image with fade-in on load */}
      <motion.img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-auto object-cover transition-opacity duration-500",
          onClick && "group-hover:opacity-90",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        style={{ borderRadius: 0 }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        onClick={onClick}
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0, 
          y: isLoaded ? 0 : 10 
        }}
        transition={{ 
          delay: staggerDelay + 0.1, 
          duration: 0.5, 
          ease: "easeOut" 
        }}
      />

      {/* Error state */}
      {hasError && (
        <div className="flex items-center justify-center bg-muted/20 text-muted-foreground text-xs font-mono p-8">
          Failed to load
        </div>
      )}
    </motion.div>
  );
};

export default ImageWithSkeleton;
