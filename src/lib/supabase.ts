import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dcvbbtdhyymhwqyuvosp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjdmJidGRoeXltaHdxeXV2b3NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5NTQ5NTUsImV4cCI6MjA4NDUzMDk1NX0.6xk-vurzAZH-WRFlQ46_ojlCS7wxPelUtF7EJ6w7NGA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const STORAGE_BASE_URL = `${SUPABASE_URL}/storage/v1/object/public/pages-images/pages`;

export interface PageData {
  slug: string;
  title: string;
  images: string[] | null;
  videos: string[] | null;
}

/**
 * Constructs an image URL for a given page slug and filename
 */
export function getImageUrl(slug: string, filename: string): string {
  return `${STORAGE_BASE_URL}/${slug}/${filename}`;
}

/**
 * Normalizes a title to a slug format
 * - lowercase
 * - replace spaces with hyphens
 */
export function normalizeSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Given an array of image filenames, construct full URLs sorted lexicographically
 */
export function getImageUrls(slug: string, images: string[] | null): string[] {
  if (!images || images.length === 0) return [];
  
  // Sort filenames lexicographically
  const sortedImages = [...images].sort((a, b) => a.localeCompare(b));
  
  return sortedImages.map(filename => getImageUrl(slug, filename));
}
