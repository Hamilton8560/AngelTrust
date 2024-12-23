import React from 'react';
import { recentPosts } from '../../data/blog';
import { BlogPostCard } from '../../components/blog/BlogPostCard';

export function RecentPosts() {
  // Get only the 3 most recent posts by sorting by date and slicing
  const latestPosts = [...recentPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy-900 mb-8">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {latestPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}