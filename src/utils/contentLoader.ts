// Content loader utility for page-data assets
// This module provides a unified content mapping system for all sections (Design, Photo, Art, About)

export interface ProjectContent {
  slug: string;
  dataPath: string;
  images: string[];
  videos: string[];
  text: string;
}

// ============= DESIGN SECTION =============
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

// ============= PHOTO SECTION =============
export const photoPageDataMap: Record<string, string> = {
  "thailand-vietnam": "photo-thailand-&-vietnam",
  "alaska": "photo-alaska",
  "malaysia": "photo-malaysia",
  "croatia": "photo-croatia",
  "trans-catalina": "photo-trans-catalina-trail",
  "denmark-norway": "photo-denmark-&-norway",
  "morocco": "photo-morocco",
  "cuba": "photo-cuba",
  "portraits": "photo-portraits",
};

// ============= ART SECTION =============
export const artPageDataMap: Record<string, string> = {
  "letter-croppings": "art-letter-croppings",
  "collage": "art-collage",
  "exhibition-posters": "art-exhibition-posters",
  "untitled-trio": "art-untitled-trio",
  "joan-miro-pamphlet": "art-joan-miró-museum-pamphlet",
  "other-paintings": "art-other-paintings",
};

// ============= ABOUT SECTION =============
export const aboutPageDataMap: Record<string, string> = {
  "about": "about",
};

// ============= IMAGE MANIFEST =============
// Consolidated image file lists for all projects
export const projectImages: Record<string, string[]> = {
  // Design projects
  "aer1-system": [
    "img_001.png", "img_002.jpg", "img_003.png", "img_004.png", 
    "img_005.png", "img_006.png", "img_007.png"
  ],
  "markforged-fx10": [
    "img_001.png", "img_002.gif", "img_003.jpg", "img_004.jpg",
    "img_005.jpg", "img_006.jpg", "img_007.jpg"
  ],
  "markforged-metal-x-gen2": [
    "img_001.jpg", "img_002.png", "img_003.jpg", "img_004.jpg",
    "img_005.jpg", "img_006.jpg", "img_007.jpg", "img_008.jpg", "img_009.jpg"
  ],
  "split-flap-clock": [
    "img_001.jpeg", "img_002.jpeg", "img_003.jpeg", "img_004.jpeg",
    "img_005.jpeg", "img_006.jpeg", "img_007.jpeg", "img_008.jpeg",
    "img_009.jpeg", "img_010.jpeg"
  ],
  "automated-blinds-v2": [
    "img_001.jpeg", "img_002.jpeg", "img_003.jpeg", "img_004.jpeg",
    "img_005.jpeg", "img_006.jpeg", "img_007.jpeg", "img_008.jpeg",
    "img_009.jpeg", "img_010.jpeg", "img_011.jpeg", "img_012.jpeg",
    "img_013.jpeg", "img_014.jpeg"
  ],
  "5dof-robotic-arm": [
    "img_001.png", "img_002.jpeg", "img_003.jpeg", "img_004.png", "img_005.jpg"
  ],
  "hilbert-curve-desk-art": [
    "img_001.JPEG", "img_002.gif", "img_003.jpg", "img_004.jpg"
  ],
  "lamp-restoration": [
    "img_001.jpg", "img_002.jpg", "img_003.jpg", "img_004.jpg",
    "img_005.jpg", "img_006.jpg", "img_007.jpg", "img_008.jpg"
  ],
  "tile-shelf": [
    "img_001.jpeg", "img_002.jpeg", "img_003.jpeg", "img_004.jpeg",
    "img_005.jpeg", "img_006.jpeg", "img_007.jpeg"
  ],
  "automated-blind-conversion": [
    "img_001.jpeg", "img_002.jpeg", "img_003.jpeg", "img_004.png"
  ],
  "candle-molding": [
    "img_001.jpeg", "img_002.jpeg", "img_003.jpeg", "img_004.jpeg",
    "img_005.jpeg", "img_006.jpeg"
  ],
  "vegetable-garden-build": [
    "img_001.jpeg", "img_002.jpeg", "img_003.jpeg", "img_004.png",
    "img_005.png", "img_006.jpeg", "img_007.jpeg", "img_008.jpeg",
    "img_009.jpeg", "img_010.jpeg", "img_011.jpeg", "img_012.jpeg",
    "img_013.jpeg", "img_014.jpeg", "img_015.jpeg", "img_016.jpeg",
    "img_017.jpeg", "img_018.jpeg", "img_019.jpeg", "img_020.jpeg"
  ],
  "metar-map": ["img_001.png", "img_002.png"],
  "light-switch-cover": [
    "img_001.jpg", "img_002.jpg", "img_003.jpeg", "img_004.jpeg", "img_005.jpeg"
  ],

  // Photo projects
  "thailand-vietnam": [
    "img_001.JPG", "img_002.JPG", "img_003.JPG", "img_004.JPG", "img_005.JPG",
    "img_006.JPG", "img_007.JPG", "img_008.JPG", "img_009.JPG", "img_010.JPG",
    "img_011.JPG", "img_012.JPG", "img_013.JPG", "img_014.JPG", "img_015.JPG",
    "img_016.JPG", "img_017.JPG", "img_018.JPG"
  ],
  "alaska": [
    "img_001.JPG", "img_002.JPG", "img_003.JPG", "img_004.JPG", "img_005.JPG",
    "img_006.JPG", "img_007.JPG", "img_008.JPG", "img_009.JPG", "img_010.JPG",
    "img_011.JPG", "img_012.JPG", "img_013.JPG", "img_014.JPG", "img_015.JPG",
    "img_016.JPG", "img_017.JPG", "img_018.JPG", "img_019.JPG", "img_020.JPG",
    "img_021.JPG", "img_022.JPG", "img_023.jpeg"
  ],
  "malaysia": [
    "img_001.JPG", "img_002.JPG", "img_003.JPG", "img_004.JPG", "img_005.JPG",
    "img_006.JPG", "img_007.JPG", "img_008.JPG", "img_009.JPG", "img_010.JPG",
    "img_011.JPG", "img_012.JPG", "img_013.JPG", "img_014.JPG", "img_015.JPG",
    "img_016.JPG", "img_017.JPG", "img_018.JPG", "img_019.JPG", "img_020.JPG",
    "img_021.JPG", "img_022.JPG", "img_023.JPG", "img_024.JPG", "img_025.JPG",
    "img_026.JPG", "img_027.JPG", "img_028.JPG", "img_029.JPG", "img_030.JPG"
  ],
  "croatia": [
    "img_001.JPG", "img_002.JPG", "img_003.JPG", "img_004.JPG", "img_005.JPG",
    "img_006.JPG", "img_007.JPG", "img_008.JPG", "img_009.JPG", "img_010.JPG",
    "img_011.JPG", "img_012.JPG", "img_013.JPG", "img_014.JPG", "img_015.JPG",
    "img_016.JPG", "img_017.JPG", "img_018.JPG", "img_019.JPG", "img_020.JPG",
    "img_021.JPG", "img_022.JPG"
  ],
  "trans-catalina": [
    "img_001.JPG", "img_002.JPG", "img_003.JPG", "img_004.JPG", "img_005.JPG",
    "img_006.JPG", "img_007.JPG", "img_008.JPG", "img_009.JPG", "img_010.JPG",
    "img_011.JPG", "img_012.JPG", "img_013.JPG", "img_014.JPG", "img_015.JPG",
    "img_016.JPG"
  ],
  "denmark-norway": [
    "img_001.JPG", "img_002.JPG", "img_003.JPG", "img_004.JPG", "img_005.JPG",
    "img_006.JPG", "img_007.JPG", "img_008.JPG", "img_009.JPG", "img_010.JPG",
    "img_011.JPG", "img_012.JPG", "img_013.JPG", "img_014.JPG", "img_015.JPG",
    "img_016.JPG", "img_017.JPG", "img_018.JPG", "img_019.JPG", "img_020.JPG"
  ],
  "morocco": [
    "img_001.JPG", "img_002.JPG", "img_003.JPG", "img_004.JPG", "img_005.JPG",
    "img_006.JPG", "img_007.JPG", "img_008.JPG", "img_009.JPG", "img_010.JPG",
    "img_011.JPG", "img_012.JPG", "img_013.JPG", "img_014.JPG", "img_015.JPG",
    "img_016.JPG", "img_017.JPG", "img_018.JPG", "img_019.JPG", "img_020.JPG",
    "img_021.JPG", "img_022.JPG", "img_023.JPG", "img_024.JPG", "img_025.JPG",
    "img_026.JPG", "img_027.JPG"
  ],
  "cuba": [
    "img_001.jpg", "img_002.jpg", "img_003.jpg", "img_004.jpg", "img_005.jpg",
    "img_006.jpg", "img_007.jpg", "img_008.jpg", "img_009.jpg", "img_010.jpg",
    "img_011.jpg", "img_012.jpg", "img_013.jpg", "img_014.jpg", "img_015.jpg",
    "img_016.jpg", "img_017.jpg", "img_018.jpg", "img_019.jpg", "img_020.jpg",
    "img_021.jpg", "img_022.jpg", "img_023.jpg", "img_024.jpg", "img_025.JPG",
    "img_026.jpg", "img_027.jpg"
  ],
  "portraits": [
    "img_001.jpeg", "img_002.JPG", "img_003.JPG", "img_004.JPG", "img_005.JPG",
    "img_006.jpg", "img_007.JPG", "img_008.JPG", "img_009.JPG"
  ],

  // Art projects
  "letter-croppings": [
    "img_001.jpeg", "img_002.jpeg", "img_003.jpeg", "img_004.jpeg",
    "img_005.jpeg", "img_006.jpeg", "img_007.jpeg", "img_008.jpeg"
  ],
  "collage": [
    "img_001.png", "img_002.png", "img_003.png", "img_004.png", "img_005.png",
    "img_006.png", "img_007.png", "img_008.png", "img_009.png", "img_010.png",
    "img_011.png"
  ],
  "exhibition-posters": ["img_001.jpg", "img_002.jpg"],
  "untitled-trio": ["img_001.jpeg", "img_002.jpeg", "img_003.jpeg"],
  "joan-miro-pamphlet": [
    "img_001.png", "img_002.jpg", "img_003.jpg", "img_004.png", "img_005.png",
    "img_006.png", "img_007.png", "img_008.png", "img_009.png", "img_010.png",
    "img_011.png", "img_012.png", "img_013.png"
  ],
  "other-paintings": ["img_001.jpeg", "img_002.jpeg"],

  // About page
  "about": ["img_001.jpg"],
};

// ============= VIDEO MANIFEST =============
export const projectVideos: Record<string, string[]> = {
  "aer1-system": ["//www.youtube.com/embed/qEbs4oX95wQ?wmode=opaque"],
  "markforged-fx10": ["//www.youtube.com/embed/hjr0DHIjvnE?wmode=opaque"],
};

// ============= TEXT CONTENT =============
// Parsed text content from RTF files
export const projectText: Record<string, string> = {
  // Art
  "collage": "spare magazines and paste",
  "other-paintings": "miscellaneous one offs",
  "untitled-trio": "Untitled Trio. Acrylic on paper.",
  "letter-croppings": "Cropped typeface. India Ink on paper.",
  "exhibition-posters": "Exhibition posters for Doris Lee's \"Women Take the Floor\" at the MFA",
  "joan-miro-pamphlet": "Brochure layout for the Joan Miro Foundation in Barcelona, Spain. Created in InDesign.",
  "portraits": "collection of portraits",
  "automated-blind-conversion": "Later",
};

// ============= UTILITY FUNCTIONS =============

/**
 * Get the base path for a project's assets in page-data folder
 */
export function getProjectDataPath(projectId: string, section: "design" | "photo" | "art" | "about" = "design"): string | null {
  let folderName: string | undefined;
  
  switch (section) {
    case "design":
      folderName = designPageDataMap[projectId];
      break;
    case "photo":
      folderName = photoPageDataMap[projectId];
      break;
    case "art":
      folderName = artPageDataMap[projectId];
      break;
    case "about":
      folderName = aboutPageDataMap[projectId];
      break;
  }
  
  if (!folderName) return null;
  return `/page-data/${folderName}`;
}

/**
 * Get all image URLs for a project
 */
export function getProjectImageUrls(projectId: string, section: "design" | "photo" | "art" | "about" = "design"): string[] {
  const basePath = getProjectDataPath(projectId, section);
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

/**
 * Get text content for a project
 */
export function getProjectText(projectId: string): string | null {
  return projectText[projectId] || null;
}

/**
 * Check if a project has images
 */
export function projectHasImages(projectId: string): boolean {
  return (projectImages[projectId]?.length ?? 0) > 0;
}

/**
 * Check if a project has videos
 */
export function projectHasVideos(projectId: string): boolean {
  return (projectVideos[projectId]?.length ?? 0) > 0;
}
