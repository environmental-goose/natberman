// Design projects come from content/design/<project>/project.md. See README.md.
import { getSection } from "@/utils/contentLoader";

export interface DesignProject {
  id: string;
  label: string;
  title: string;
  description: string;
  year?: string;
  location?: string;
  client?: string; // Company name or "Personal Project"
  content?: string;
  codeSnippet?: string;
}

export const designProjects: DesignProject[] = getSection("design").map((entry) => ({
  id: entry.id,
  label: entry.label,
  title: entry.title,
  description: entry.description,
  year: entry.year,
  location: entry.location,
  client: entry.client,
  content: entry.body,
}));

export const getProjectById = (id: string): DesignProject | undefined => {
  return designProjects.find(project => project.id === id);
};
