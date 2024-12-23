import { useMemo } from 'react';
import { BlogPost } from '../types';
import { featuredPosts, recentPosts } from '../data/blog';

export function useBlogPosts(category?: string) {
  const allPosts = useMemo(() => [...featuredPosts, ...recentPosts], []);
  
  const filteredPosts = useMemo(() => {
    if (!category) return allPosts;
    
    // Map category slugs to their corresponding post filters
    const categoryFilters: Record<string, (post: BlogPost) => boolean> = {
      'estate-planning': (post) => 
        post.title.toLowerCase().includes('estate') ||
        post.excerpt.toLowerCase().includes('estate planning') ||
        post.title.toLowerCase().includes('will') ||
        post.title.toLowerCase().includes('guardian') ||
        post.excerpt.toLowerCase().includes('legacy'),
      'trusts': (post) => 
        post.title.toLowerCase().includes('trust') ||
        post.excerpt.toLowerCase().includes('trust'),
      'probate': (post) => 
        post.title.toLowerCase().includes('probate') ||
        post.excerpt.toLowerCase().includes('probate'),
      'elder-law': (post) => 
        post.title.toLowerCase().includes('elder') ||
        post.excerpt.toLowerCase().includes('elder law'),
      'tax-planning': (post) => 
        post.title.toLowerCase().includes('tax') ||
        post.excerpt.toLowerCase().includes('tax planning'),
      'asset-protection': (post) => 
        post.title.toLowerCase().includes('asset') ||
        post.excerpt.toLowerCase().includes('asset protection') ||
        post.title.toLowerCase().includes('digital')
    };

    const filter = categoryFilters[category];
    return filter ? allPosts.filter(filter) : allPosts;
  }, [allPosts, category]);

  return filteredPosts;
}