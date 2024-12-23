import React from 'react';
import { BlogPostCard } from './BlogPostCard';
import { featuredPosts } from '../../data/blog';

export function FeaturedPosts() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {featuredPosts.map((post) => (
        <BlogPostCard key={post.id} post={post} featured />
      ))}
    </div>
  );
}