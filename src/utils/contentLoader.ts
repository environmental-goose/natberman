// Reads the site's content, which is generated from the content/ folder by
// scripts/build-content.mjs. To add or edit a project, change files in content/,
// not this file. See README.md.
import generated from "@/generated/content.json";

export type Section = "design" | "photo" | "art" | "about";

export interface ContentEntry {
  id: string;
  title: string;
  label: string;
  order: number;
  year?: string;
  location?: string;
  client?: string;
  description: string;
  body: string;
  images: string[];
  videos: string[];
}

const content = generated as Record<Section, ContentEntry[]>;
const byId = new Map<string, ContentEntry>(
  (Object.keys(content) as Section[]).flatMap((section) => content[section].map((entry) => [entry.id, entry] as const)),
);

/** All entries in a section, in display order. */
export function getSection(section: Section): ContentEntry[] {
  return content[section] ?? [];
}

/** Image URLs for a project. The section argument is accepted for older call sites; ids are unique across sections. */
export function getProjectImageUrls(projectId: string, _section?: Section): string[] {
  return byId.get(projectId)?.images ?? [];
}

/** Video embed URLs for a project. */
export function getProjectVideoUrls(projectId: string): string[] {
  return byId.get(projectId)?.videos ?? [];
}

/** Body text for a project. */
export function getProjectText(projectId: string): string | null {
  return byId.get(projectId)?.body || null;
}
