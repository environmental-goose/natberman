// Photo galleries come from content/photo/<gallery>/project.md. See README.md.
import { getProjectImageUrls, getSection } from "@/utils/contentLoader";

export interface PhotoLocation {
  id: string;
  label: string;
  title: string;
  description: string;
  date?: string;
  location?: string;
}

export const photoLocations: PhotoLocation[] = getSection("photo").map((entry) => ({
  id: entry.id,
  label: entry.label,
  title: entry.title,
  description: entry.description || entry.body,
  date: entry.year,
  location: entry.location,
}));

export const getLocationById = (id: string): PhotoLocation | undefined => {
  return photoLocations.find(location => location.id === id);
};

export const getLocationPhotos = (id: string): string[] => {
  return getProjectImageUrls(id, "photo");
};
