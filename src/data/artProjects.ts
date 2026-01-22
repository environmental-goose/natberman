export interface ArtProject {
  id: string;
  slug: string; // Supabase slug for image lookup
  label: string;
  title: string;
  description: string;
}

export const artProjects: ArtProject[] = [
  {
    id: "letter-croppings",
    slug: "letter-croppings",
    label: "Letter Croppings",
    title: "Letter Croppings",
    description: "An exploration of typography as visual form, isolating fragments of letterforms to create abstract compositions that challenge recognition while preserving the inherent beauty of typographic design.",
  },
  {
    id: "collage",
    slug: "collage",
    label: "Collage",
    title: "Collage",
    description: "Mixed media compositions combining found imagery, texture, and hand-drawn elements. These works explore the tension between disparate visual elements unified through careful arrangement.",
  },
  {
    id: "exhibition-posters",
    slug: "exhibition-posters",
    label: "Exhibition Posters",
    title: "Exhibition Posters",
    description: "Graphic design work for cultural exhibitions and events, emphasizing bold typography and minimalist compositions that communicate complex ideas with visual economy.",
  },
  {
    id: "untitled-trio",
    slug: "untitled-trio",
    label: "Untitled Trio",
    title: "Untitled Trio",
    description: "A series of three interconnected abstract works exploring color relationships and geometric forms. Each piece functions independently while contributing to a larger visual dialogue.",
  },
  {
    id: "joan-miro-pamphlet",
    slug: "joan-miro-pamphlet",
    label: "Joan Miró Museum Pamphlet",
    title: "Joan Miró Museum Pamphlet",
    description: "A conceptual redesign of museum ephemera, drawing inspiration from Miró's playful forms and vibrant palette while maintaining functional clarity for wayfinding and information hierarchy.",
  },
  {
    id: "other-paintings",
    slug: "other-paintings",
    label: "Other Paintings",
    title: "Other Paintings",
    description: "A collection of explorations in paint—acrylic, oil, and mixed media on various substrates. These works span abstract expressionism to more representational studies.",
  },
];

export const getArtProjectById = (id: string): ArtProject | undefined => {
  return artProjects.find(project => project.id === id);
};
