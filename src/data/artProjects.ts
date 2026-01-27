import { getProjectImageUrls, getProjectText, getProjectVideoUrls } from "@/utils/contentLoader";

export interface ArtProject {
  id: string;
  label: string;
  title: string;
  description: string;
}

// Art projects with automated content loading
export const artProjects: ArtProject[] = [
  {
    id: "letter-croppings",
    label: "Letter Croppings",
    title: "Letter Croppings",
    description: getProjectText("letter-croppings") || "Cropped typeface. India Ink on paper.",
  },
  {
    id: "collage",
    label: "Collage",
    title: "Collage",
    description: getProjectText("collage") || "spare magazines and paste",
  },
  {
    id: "exhibition-posters",
    label: "Exhibition Posters",
    title: "Exhibition Posters",
    description: getProjectText("exhibition-posters") || "Exhibition posters for Doris Lee's \"Women Take the Floor\" at the MFA",
  },
  {
    id: "untitled-trio",
    label: "Untitled Trio",
    title: "Untitled Trio",
    description: getProjectText("untitled-trio") || "Untitled Trio. Acrylic on paper.",
  },
  {
    id: "joan-miro-pamphlet",
    label: "Joan Miró Museum Pamphlet",
    title: "Joan Miró Museum Pamphlet",
    description: getProjectText("joan-miro-pamphlet") || "Brochure layout for the Joan Miro Foundation in Barcelona, Spain. Created in InDesign.",
  },
  {
    id: "other-paintings",
    label: "Other Paintings",
    title: "Other Paintings",
    description: getProjectText("other-paintings") || "miscellaneous one offs",
  },
];

export const getArtProjectById = (id: string): ArtProject | undefined => {
  return artProjects.find(project => project.id === id);
};

// Get image URLs for a project from page-data
export const getArtProjectImages = (id: string): string[] => {
  return getProjectImageUrls(id, "art");
};

// Get video URLs for a project from page-data
export const getArtProjectVideos = (id: string): string[] => {
  return getProjectVideoUrls(id);
};
