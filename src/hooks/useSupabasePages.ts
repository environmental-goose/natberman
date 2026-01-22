import { useQuery } from '@tanstack/react-query';
import { supabase, getImageUrls, normalizeSlug } from '@/lib/supabase';

export interface SupabasePage {
  slug: string;
  title: string;
  images: string[] | null;
  videos: string[] | null;
}

export interface PageWithImages {
  slug: string;
  title: string;
  imageUrls: string[];
  videoUrls: string[];
}

/**
 * Fetch all pages from Supabase
 */
async function fetchAllPages(): Promise<PageWithImages[]> {
  const { data, error } = await supabase
    .from('pages')
    .select('slug, title, images, videos');

  if (error) {
    console.error('Error fetching pages from Supabase:', error);
    return [];
  }

  return (data || []).map((page: SupabasePage) => ({
    slug: page.slug,
    title: page.title,
    imageUrls: getImageUrls(page.slug, page.images),
    videoUrls: page.videos ? page.videos.map(v => 
      `https://dcvbbtdhyymhwqyuvosp.supabase.co/storage/v1/object/public/pages-images/pages/${page.slug}/${v}`
    ) : [],
  }));
}

/**
 * Hook to fetch all pages from Supabase
 */
export function useSupabasePages() {
  return useQuery({
    queryKey: ['supabase-pages'],
    queryFn: fetchAllPages,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

/**
 * Hook to get image URLs for a specific project/page by matching slug
 * Returns empty array if no match found (prefer missing over incorrect)
 */
export function useProjectImages(projectId: string) {
  const { data: pages, isLoading } = useSupabasePages();
  
  // Normalize the project ID to a slug format for matching
  const normalizedSlug = normalizeSlug(projectId);
  
  // Find matching page
  const matchingPage = pages?.find(p => p.slug === normalizedSlug);
  
  return {
    imageUrls: matchingPage?.imageUrls || [],
    videoUrls: matchingPage?.videoUrls || [],
    isLoading,
    hasMatch: !!matchingPage,
  };
}

/**
 * Create a map of slug -> imageUrls for efficient lookups
 */
export function usePageImageMap() {
  const { data: pages, isLoading } = useSupabasePages();
  
  const imageMap = new Map<string, string[]>();
  
  pages?.forEach(page => {
    imageMap.set(page.slug, page.imageUrls);
  });
  
  return {
    imageMap,
    isLoading,
    getImagesForSlug: (slug: string) => imageMap.get(normalizeSlug(slug)) || [],
  };
}
