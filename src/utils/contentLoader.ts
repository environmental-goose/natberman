// Content loader utility for page-data assets
// This module provides utilities to construct paths for images and videos from the page-data folder structure

export interface ProjectContent {
  slug: string;
  dataPath: string;
  images: string[];
  videos: string[];
}

// Map of design project slugs to their page-data folder names
export const designPageDataMap: Record<string, string> = {
  "aer1-system": "design-aer1-system",
  "markforged-fx10": "design-fx10",
  "markforged-metal-x-gen2": "design-metal-x-gen-2",
  "split-flap-clock": "design-split-flap-clock",
  "automated-blinds-v2": "design-automated-blinds-v2",
  "5dof-robotic-arm": "design-5dof-robotic-arm",
  "hilbert-curve-desk-art": "design-hilbert-curve-desk-art",
  "lamp-restoration": "design-lamp-restoration",
  "tile-shelf": "design-tile-shelf",
  "automated-blind-conversion": "design-automated-blind-conversion",
  "candle-molding": "design-candle-molding",
  "vegetable-garden-build": "design-vegetable-garden-build",
  "metar-map": "design-metar-map",
  "light-switch-cover": "design-light-switch-cover",
};

// Image file lists for each project (sorted alphabetically as stored in repo)
export const projectImages: Record<string, string[]> = {
  "aer1-system": [
    "img_001.png",
    "img_002.jpg",
    "img_003.png",
    "img_004.png",
    "img_005.png",
    "img_006.png",
    "img_007.png",
  ],
  "markforged-fx10": [
    "img_001.png",
    "img_002.gif",
    "img_003.jpg",
    "img_004.jpg",
    "img_005.jpg",
    "img_006.jpg",
    "img_007.jpg",
  ],
  "markforged-metal-x-gen2": [
    "img_001.jpg",
    "img_002.png",
    "img_003.jpg",
    "img_004.jpg",
    "img_005.jpg",
    "img_006.jpg",
    "img_007.jpg",
    "img_008.jpg",
    "img_009.jpg",
  ],
  "split-flap-clock": [
    "img_001.jpeg",
    "img_002.jpeg",
    "img_003.jpeg",
    "img_004.jpeg",
    "img_005.jpeg",
    "img_006.jpeg",
    "img_007.jpeg",
    "img_008.jpeg",
    "img_009.jpeg",
    "img_010.jpeg",
  ],
  "automated-blinds-v2": [
    "img_001.jpeg",
    "img_002.jpeg",
    "img_003.jpeg",
    "img_004.jpeg",
    "img_005.jpeg",
    "img_006.jpeg",
    "img_007.jpeg",
    "img_008.jpeg",
    "img_009.jpeg",
    "img_010.jpeg",
    "img_011.jpeg",
    "img_012.jpeg",
    "img_013.jpeg",
    "img_014.jpeg",
  ],
  "5dof-robotic-arm": [
    "img_001.png",
    "img_002.jpeg",
    "img_003.jpeg",
    "img_004.png",
    "img_005.jpg",
  ],
  "hilbert-curve-desk-art": [
    "img_001.JPEG",
    "img_002.gif",
    "img_003.jpg",
    "img_004.jpg",
  ],
  "lamp-restoration": [
    "img_001.jpg",
    "img_002.jpg",
    "img_003.jpg",
    "img_004.jpg",
    "img_005.jpg",
    "img_006.jpg",
    "img_007.jpg",
    "img_008.jpg",
  ],
  "tile-shelf": [
    "img_001.jpeg",
    "img_002.jpeg",
    "img_003.jpeg",
    "img_004.jpeg",
    "img_005.jpeg",
    "img_006.jpeg",
    "img_007.jpeg",
  ],
  "automated-blind-conversion": [
    "img_001.jpeg",
    "img_002.jpeg",
    "img_003.jpeg",
    "img_004.png",
  ],
  "candle-molding": [
    "img_001.jpeg",
    "img_002.jpeg",
    "img_003.jpeg",
    "img_004.jpeg",
    "img_005.jpeg",
    "img_006.jpeg",
  ],
  "vegetable-garden-build": [
    "img_001.jpeg",
    "img_002.jpeg",
    "img_003.jpeg",
    "img_004.png",
    "img_005.png",
    "img_006.jpeg",
    "img_007.jpeg",
    "img_008.jpeg",
    "img_009.jpeg",
    "img_010.jpeg",
    "img_011.jpeg",
    "img_012.jpeg",
    "img_013.jpeg",
    "img_014.jpeg",
    "img_015.jpeg",
    "img_016.jpeg",
    "img_017.jpeg",
    "img_018.jpeg",
    "img_019.jpeg",
    "img_020.jpeg",
  ],
  "metar-map": [
    "img_001.png",
    "img_002.png",
  ],
  "light-switch-cover": [
    "img_001.jpg",
    "img_002.jpg",
    "img_003.jpeg",
    "img_004.jpeg",
    "img_005.jpeg",
  ],
};

// Video embeds for projects (from videos.json files)
export const projectVideos: Record<string, string[]> = {
  "aer1-system": ["//www.youtube.com/embed/qEbs4oX95wQ?wmode=opaque"],
  "markforged-fx10": ["//www.youtube.com/embed/hjr0DHIjvnE?wmode=opaque"],
  // Other projects have empty videos arrays
};

/**
 * Get the base path for a project's assets in page-data folder
 */
export function getProjectDataPath(projectId: string): string | null {
  const folderName = designPageDataMap[projectId];
  if (!folderName) return null;
  return `/page-data/${folderName}`;
}

/**
 * Get all image URLs for a project
 */
export function getProjectImageUrls(projectId: string): string[] {
  const basePath = getProjectDataPath(projectId);
  const images = projectImages[projectId];
  
  if (!basePath || !images) return [];
  
  return images.map(img => `${basePath}/${img}`);
}

/**
 * Get all video embed URLs for a project
 */
export function getProjectVideoUrls(projectId: string): string[] {
  return projectVideos[projectId] || [];
}
