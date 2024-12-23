import React from 'react';
import { useParams } from 'react-router-dom';
import { BlogPostCard } from './BlogPostCard';
import { BlogSearch } from '../../components/blog/BlogSearch';
import { BlogCategories } from './BlogCategories';
import { SectionHeading } from '../../components/shared/SectionHeading';
import { categories } from '../../data/blog';
import { useBlogPosts } from '../../hooks/useBlogPosts';

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const posts = useBlogPosts(category);
  const categoryName = categories.find(c => c.slug === category)?.name || '';

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={`${categoryName} Articles`}
          subtitle={`Browse our articles about ${categoryName.toLowerCase()}`}
          centered
        />
        
        <div className="mt-8 mb-12">
          <BlogSearch />
        </div>

        <div className="mt-16 grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {posts.length > 0 ? (
              <div className="space-y-8">
                {posts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No articles found in this category.</p>
              </div>
            )}
          </div>
          <div className="space-y-8">
            <BlogCategories />
          </div>
        </div>
      </div>
    </div>
  );
}