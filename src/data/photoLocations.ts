import { getProjectImageUrls, getProjectText } from "@/utils/contentLoader";

export interface PhotoLocation {
  id: string;
  label: string;
  title: string;
  description: string;
  date?: string;
  location?: string;
}

// Photo locations with content matching text.rtf files
export const photoLocations: PhotoLocation[] = [
  {
    id: "thailand-vietnam",
    label: "Thailand & Vietnam",
    title: "Thailand & Vietnam",
    description: "2 week trip to SE Asia with a balance of urban and rural exploration with my partner Daniela.",
    date: "February 2025",
    location: "Bangkok & Koh Lanta, Thailand - Hanoi, Vietnam",
  },
  {
    id: "alaska",
    label: "Alaska",
    title: "Alaska",
    description: "2 week backcountry journey through Alaska's national parks. Most of the photos shown are from our 6 days in the Denali wilderness. The most physically challenging thing I've ever done.",
    date: "September 2024",
    location: "Denali National Park, Kenai Fjords National Park",
  },
  {
    id: "malaysia",
    label: "Malaysia",
    title: "Malaysia",
    description: "Several trips to Malaysia over the course of 2024 to support manufacturing at aerflo. One trip coincided with Thaipusam, a Hindu festival that celebrates the victory of the god Murugan over the demon Surapadman. Many of the photos are from this celebration.",
    date: "2023/2024",
    location: "Penang and Kuala Lumpur, Malaysia",
  },
  {
    id: "croatia",
    label: "Croatia",
    title: "Croatia",
    description: "2 weeks traveling north along the Dalmatian Coast",
    date: "July 2023",
    location: "Hvar, Split, and Dubrovnik, Croatia",
  },
  {
    id: "trans-catalina",
    label: "Trans-Catalina Trail",
    title: "Trans-Catalina Trail",
    description: "1 week thru-hike across Catalina Island on the Trans-Catalina Trail.",
    date: "April 2023",
    location: "Catalina Island, California",
  },
  {
    id: "denmark-norway",
    label: "Denmark & Norway",
    title: "Denmark & Norway",
    description: "2 week roadtrip in the Arctic circle and the northern fjords of Norway.",
    date: "August 2022",
    location: "Copenhagen, Denmark and Lofoten Islands, Norway",
  },
  {
    id: "morocco",
    label: "Morocco",
    title: "Morocco",
    description: "1 week in the Medinas",
    date: "June 2022",
    location: "Fez and Marrakesh, Morocco",
  },
  {
    id: "cuba",
    label: "Cuba",
    title: "Cuba",
    description: "1 week solo trip in the Cuban capital and countryside",
    date: "May 2019",
    location: "Havana and Vinales, Cuba",
  },
  {
    id: "portraits",
    label: "Portraits",
    title: "Portraits",
    description: "Collection of portraits",
  },
];

export const getLocationById = (id: string): PhotoLocation | undefined => {
  return photoLocations.find(location => location.id === id);
};

// Get photo URLs for a location from page-data
export const getLocationPhotos = (id: string): string[] => {
  return getProjectImageUrls(id, "photo");
};
