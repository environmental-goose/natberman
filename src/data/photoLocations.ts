export interface PhotoLocation {
  id: string;
  label: string;
  title: string;
  description: string;
  photos: { url: string; orientation: "portrait" | "landscape"; caption?: string }[];
}

export const photoLocations: PhotoLocation[] = [
  {
    id: "thailand-vietnam",
    label: "Thailand & Vietnam",
    title: "Thailand & Vietnam",
    description: "Street scenes, temples, and coastal landscapes from Southeast Asia. Shot with a 35mm equivalent focal length.",
    photos: [
      { url: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Bangkok temple at sunset" },
      { url: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&h=1200&fit=crop", orientation: "portrait", caption: "Ha Long Bay" },
      { url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Floating market" },
      { url: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=800&h=1200&fit=crop", orientation: "portrait", caption: "Temple detail" },
      { url: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Street food vendor" },
    ]
  },
  {
    id: "alaska",
    label: "Alaska",
    title: "Alaska",
    description: "Glaciers, wildlife, and vast wilderness landscapes from America's last frontier.",
    photos: [
      { url: "https://images.unsplash.com/photo-1531176175280-33e29c0bf39f?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Glacier bay" },
      { url: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=1200&fit=crop", orientation: "portrait", caption: "Mountain peak" },
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Northern lights" },
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Denali at dawn" },
    ]
  },
  {
    id: "malaysia",
    label: "Malaysia",
    title: "Malaysia",
    description: "Urban architecture and natural wonders from Kuala Lumpur to the rainforests of Borneo.",
    photos: [
      { url: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Petronas Towers" },
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop", orientation: "portrait", caption: "Batu Caves" },
      { url: "https://images.unsplash.com/photo-1580061579042-f67e5e0d3f3c?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Tea plantations" },
    ]
  },
  {
    id: "croatia",
    label: "Croatia",
    title: "Croatia",
    description: "Coastal towns, ancient walls, and the crystal waters of the Adriatic.",
    photos: [
      { url: "https://images.unsplash.com/photo-1555990538-1e7bfe9fc5a9?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Dubrovnik old town" },
      { url: "https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?w=800&h=1200&fit=crop", orientation: "portrait", caption: "City walls" },
      { url: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Adriatic sunset" },
      { url: "https://images.unsplash.com/photo-1591378603223-e15b45a81640?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Plitvice lakes" },
    ]
  },
  {
    id: "trans-catalina",
    label: "Trans-Catalina Trail",
    title: "Trans-Catalina Trail",
    description: "A multi-day backpacking journey across Catalina Island, from coastal vistas to rugged interior.",
    photos: [
      { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Trail overlook" },
      { url: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&h=1200&fit=crop", orientation: "portrait", caption: "Coastal path" },
      { url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Sunrise camp" },
    ]
  },
  {
    id: "denmark-norway",
    label: "Denmark & Norway",
    title: "Denmark & Norway",
    description: "Scandinavian design, fjords, and the endless summer light of the north.",
    photos: [
      { url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Copenhagen harbor" },
      { url: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=800&h=1200&fit=crop", orientation: "portrait", caption: "Norwegian fjord" },
      { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Bergen waterfront" },
      { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Midnight sun" },
    ]
  },
  {
    id: "morocco",
    label: "Morocco",
    title: "Morocco",
    description: "Markets, medinas, and the colors of North Africa from Marrakech to the Sahara.",
    photos: [
      { url: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Marrakech medina" },
      { url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&h=1200&fit=crop", orientation: "portrait", caption: "Blue city alley" },
      { url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Sahara dunes" },
      { url: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Atlas mountains" },
    ]
  },
  {
    id: "cuba",
    label: "Cuba",
    title: "Cuba",
    description: "Classic cars, colorful facades, and the timeless atmosphere of Havana.",
    photos: [
      { url: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Havana street" },
      { url: "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800&h=1200&fit=crop", orientation: "portrait", caption: "Classic Chevy" },
      { url: "https://images.unsplash.com/photo-1570299437522-462c60e37752?w=1200&h=800&fit=crop", orientation: "landscape", caption: "Malecón at dusk" },
    ]
  },
  {
    id: "portraits",
    label: "Portraits",
    title: "Portraits",
    description: "Candid and posed portraits from travels and daily life.",
    photos: [
      { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop", orientation: "portrait", caption: "Street portrait" },
      { url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1200&fit=crop", orientation: "portrait", caption: "Natural light" },
      { url: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=800&h=1200&fit=crop", orientation: "portrait", caption: "Environmental portrait" },
    ]
  },
];

export const getLocationById = (id: string): PhotoLocation | undefined => {
  return photoLocations.find(location => location.id === id);
};