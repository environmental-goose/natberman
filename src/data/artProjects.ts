export interface ArtProject {
  id: string;
  label: string;
  title: string;
  description: string;
  images: { url: string; orientation?: "portrait" | "landscape" | "square"; caption?: string }[];
}

export const artProjects: ArtProject[] = [
  {
    id: "letter-croppings",
    label: "Letter Croppings",
    title: "Letter Croppings",
    description: "An exploration of typography as visual form, isolating fragments of letterforms to create abstract compositions that challenge recognition while preserving the inherent beauty of typographic design.",
    images: [
      { url: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop", orientation: "landscape", caption: "Fragment I" },
      { url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=800&fit=crop", orientation: "portrait", caption: "Fragment II" },
      { url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop", orientation: "landscape", caption: "Fragment III" },
    ]
  },
  {
    id: "collage",
    label: "Collage",
    title: "Collage",
    description: "Mixed media compositions combining found imagery, texture, and hand-drawn elements. These works explore the tension between disparate visual elements unified through careful arrangement.",
    images: [
      { url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop", orientation: "landscape", caption: "Composition I" },
      { url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=600&h=800&fit=crop", orientation: "portrait", caption: "Composition II" },
      { url: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&h=800&fit=crop", orientation: "square", caption: "Composition III" },
      { url: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&h=600&fit=crop", orientation: "landscape", caption: "Composition IV" },
    ]
  },
  {
    id: "exhibition-posters",
    label: "Exhibition Posters",
    title: "Exhibition Posters",
    description: "Graphic design work for cultural exhibitions and events, emphasizing bold typography and minimalist compositions that communicate complex ideas with visual economy.",
    images: [
      { url: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&h=800&fit=crop", orientation: "portrait", caption: "Poster I" },
      { url: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=800&fit=crop", orientation: "portrait", caption: "Poster II" },
      { url: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=600&h=800&fit=crop", orientation: "portrait", caption: "Poster III" },
    ]
  },
  {
    id: "untitled-trio",
    label: "Untitled Trio",
    title: "Untitled Trio",
    description: "A series of three interconnected abstract works exploring color relationships and geometric forms. Each piece functions independently while contributing to a larger visual dialogue.",
    images: [
      { url: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=800&h=800&fit=crop", orientation: "square", caption: "I" },
      { url: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=800&h=800&fit=crop", orientation: "square", caption: "II" },
      { url: "https://images.unsplash.com/photo-1507908708918-778587c9e563?w=800&h=800&fit=crop", orientation: "square", caption: "III" },
    ]
  },
  {
    id: "joan-miro-pamphlet",
    label: "Joan Miró Museum Pamphlet",
    title: "Joan Miró Museum Pamphlet",
    description: "A conceptual redesign of museum ephemera, drawing inspiration from Miró's playful forms and vibrant palette while maintaining functional clarity for wayfinding and information hierarchy.",
    images: [
      { url: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=600&fit=crop", orientation: "landscape", caption: "Cover spread" },
      { url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop", orientation: "landscape", caption: "Interior pages" },
      { url: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&h=800&fit=crop", orientation: "portrait", caption: "Detail view" },
    ]
  },
  {
    id: "other-paintings",
    label: "Other Paintings",
    title: "Other Paintings",
    description: "A collection of explorations in paint—acrylic, oil, and mixed media on various substrates. These works span abstract expressionism to more representational studies.",
    images: [
      { url: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=600&fit=crop", orientation: "landscape", caption: "Study I" },
      { url: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=600&h=800&fit=crop", orientation: "portrait", caption: "Study II" },
      { url: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&h=600&fit=crop", orientation: "landscape", caption: "Study III" },
      { url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&h=800&fit=crop", orientation: "square", caption: "Study IV" },
    ]
  },
];

export const getArtProjectById = (id: string): ArtProject | undefined => {
  return artProjects.find(project => project.id === id);
};
