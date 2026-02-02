import { getProjectImageUrls, getProjectText } from "@/utils/contentLoader";

export interface PhotoLocation {
  id: string;
  label: string;
  title: string;
  description: string;
}

// Photo locations with content matching text.rtf files
export const photoLocations: PhotoLocation[] = [
  {
    id: "thailand-vietnam",
    label: "Thailand & Vietnam",
    title: "Thailand & Vietnam",
    description: "February 2025\nBangkok & Koh Lanta, Thailand - Hanoi, Vietnam\n\n2 week trip to SE Asia with a balance of urban and rural exploration with my partner Daniela.",
  },
  {
    id: "alaska",
    label: "Alaska",
    title: "Alaska",
    description: "September 2024\nDenali National Park, Kenai Fjords National Park\n\n2 week backcountry journey through Alaska's national parks. Most of the photos shown are from our 6 days in the Denali wilderness. The most physically challenging thing I've ever done.",
  },
  {
    id: "malaysia",
    label: "Malaysia",
    title: "Malaysia",
    description: "2023/2024\nPenang and Kuala Lumpur, Malaysia\n\nSeveral trips to Malaysia over the course of 2024 to support manufacturing at aerflo. One trip coincided with Thaipusam, a Hindu festival that celebrates the victory of the god Murugan over the demon Surapadman. Many of the photos are from this celebration.",
  },
  {
    id: "croatia",
    label: "Croatia",
    title: "Croatia",
    description: "July 2023\nHvar, Split, and Dubrovnik, Croatia\n\n2 weeks traveling north along the Dalmatian Coast",
  },
  {
    id: "trans-catalina",
    label: "Trans-Catalina Trail",
    title: "Trans-Catalina Trail",
    description: "April 2023\nCatalina Island, California\n\n1 week thru-hike across Catalina Island on the Trans-Catalina Trail.",
  },
  {
    id: "denmark-norway",
    label: "Denmark & Norway",
    title: "Denmark & Norway",
    description: "August 2022\nCopenhagen, Denmark and Lofoten Islands, Norway.\n\n2 week roadtrip in the Arctic circle and the northern fjords of Norway.",
  },
  {
    id: "morocco",
    label: "Morocco",
    title: "Morocco",
    description: "June 2022\nFez and Marrakesh, Morocco\n\n1 week in the Medinas",
  },
  {
    id: "cuba",
    label: "Cuba",
    title: "Cuba",
    description: "May 2019\nHavana and Vinales, Cuba\n\n1 week solo trip in the Cuban capital and countryside",
  },
  {
    id: "portraits",
    label: "Portraits",
    title: "Portraits",
    description: "collection of portraits",
  },
];

export const getLocationById = (id: string): PhotoLocation | undefined => {
  return photoLocations.find(location => location.id === id);
};

// Get photo URLs for a location from page-data
export const getLocationPhotos = (id: string): string[] => {
  return getProjectImageUrls(id, "photo");
};
