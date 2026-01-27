import { getProjectImageUrls, getProjectText } from "@/utils/contentLoader";

export interface PhotoLocation {
  id: string;
  label: string;
  title: string;
  description: string;
}

// Photo locations with automated content loading
export const photoLocations: PhotoLocation[] = [
  {
    id: "thailand-vietnam",
    label: "Thailand & Vietnam",
    title: "Thailand & Vietnam",
    description: "Street scenes, temples, and coastal landscapes from Southeast Asia. Shot with a 35mm equivalent focal length.",
  },
  {
    id: "alaska",
    label: "Alaska",
    title: "Alaska",
    description: "Glaciers, wildlife, and vast wilderness landscapes from America's last frontier.",
  },
  {
    id: "malaysia",
    label: "Malaysia",
    title: "Malaysia",
    description: "Urban architecture and natural wonders from Kuala Lumpur to the rainforests of Borneo.",
  },
  {
    id: "croatia",
    label: "Croatia",
    title: "Croatia",
    description: "Coastal towns, ancient walls, and the crystal waters of the Adriatic.",
  },
  {
    id: "trans-catalina",
    label: "Trans-Catalina Trail",
    title: "Trans-Catalina Trail",
    description: "A multi-day backpacking journey across Catalina Island, from coastal vistas to rugged interior.",
  },
  {
    id: "denmark-norway",
    label: "Denmark & Norway",
    title: "Denmark & Norway",
    description: "Scandinavian design, fjords, and the endless summer light of the north.",
  },
  {
    id: "morocco",
    label: "Morocco",
    title: "Morocco",
    description: "Markets, medinas, and the colors of North Africa from Marrakech to the Sahara.",
  },
  {
    id: "cuba",
    label: "Cuba",
    title: "Cuba",
    description: "Classic cars, colorful facades, and the timeless atmosphere of Havana.",
  },
  {
    id: "portraits",
    label: "Portraits",
    title: "Portraits",
    description: getProjectText("portraits") || "Candid and posed portraits from travels and daily life.",
  },
];

export const getLocationById = (id: string): PhotoLocation | undefined => {
  return photoLocations.find(location => location.id === id);
};

// Get photo URLs for a location from page-data
export const getLocationPhotos = (id: string): string[] => {
  return getProjectImageUrls(id, "photo");
};
