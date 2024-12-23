import React from 'react';
import { BlogPost } from './BlogPost';
import { featuredPosts, recentPosts } from '../../data/blog';

export function BlogPostPage({ slug }: { slug: string }) {
  const post = [...featuredPosts, ...recentPosts].find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogPost post={post} />
      </div>
    </div>
  );
}