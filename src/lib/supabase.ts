import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dcvbbtdhyymhwqyuvosp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjdmJidGRoeXltaHdxeXV2b3NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5NTQ5NTUsImV4cCI6MjA4NDUzMDk1NX0.6xk-vurzAZH-WRFlQ46_ojlCS7wxPelUtF7EJ6w7NGA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const STORAGE_BASE_URL = `${SUPABASE_URL}/storage/v1/object/public/pages-images`;

export interface PageData {
  slug: string;
  title: string;
  images: string[] | null;
  videos: string[] | null;
}

/**
 * Constructs an image URL from a full image path stored in pages.images[]
 * The path is the complete relative path within the bucket (e.g., "pages/slug/img_001.JPG")
 */
export function getImageUrl(imagePath: string): string {
  return `${STORAGE_BASE_URL}/${imagePath}`;
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
 * Given an array of image paths from pages.images[], construct full URLs sorted lexicographically
 * Each path is the complete relative path within the bucket (e.g., "pages/slug/img_001.JPG")
 */
export function getImageUrls(images: string[] | null): string[] {
  if (!images || images.length === 0) return [];
  
  // Sort paths lexicographically to ensure consistent ordering
  const sortedImages = [...images].sort((a, b) => a.localeCompare(b));
  
  return sortedImages.map(imagePath => getImageUrl(imagePath));
}
