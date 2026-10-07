// Art projects come from content/art/<project>/project.md. See README.md.
import { getProjectImageUrls, getProjectVideoUrls, getSection } from "@/utils/contentLoader";

export interface ArtProject {
  id: string;
  label: string;
  title: string;
  description: string;
}

export const artProjects: ArtProject[] = getSection("art").map((entry) => ({
  id: entry.id,
  label: entry.label,
  title: entry.title,
  description: entry.description || entry.body,
}));

export const getArtProjectById = (id: string): ArtProject | undefined => {
  return artProjects.find(project => project.id === id);
};

export const getArtProjectImages = (id: string): string[] => {
  return getProjectImageUrls(id, "art");
};

export const getArtProjectVideos = (id: string): string[] => {
  return getProjectVideoUrls(id);
};
