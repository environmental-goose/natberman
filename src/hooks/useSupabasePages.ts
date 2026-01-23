import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

const STORAGE_BASE = 'https://dcvbbtdhyymhwqyuvosp.supabase.co/storage/v1/object/public/pages-images/';

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
    imageUrls: (page.images || []).map(img => STORAGE_BASE + img),
    videoUrls: (page.videos || []).map(vid => STORAGE_BASE + vid),
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
  
  // Find matching page by exact slug match
  const matchingPage = pages?.find(p => p.slug === projectId);
  
  return {
    imageUrls: matchingPage?.imageUrls || [],
    videoUrls: matchingPage?.videoUrls || [],
    isLoading,
    hasMatch: !!matchingPage,
  };
}

/**
 * Hook that returns all pages with their image URLs
 * Pages can be looked up by slug directly from the returned array
 */
export function usePageImageMap() {
  const { data: pages } = useSupabasePages();
  
  return {
    pages: pages || [],
  };
}
