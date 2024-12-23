import React from 'react';
import { CalendarDays, Clock, ChevronRight } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${featured ? 'hover:shadow-xl transition-shadow' : ''}`}>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <CalendarDays className="h-4 w-4 mr-1" />
          <span>{post.date}</span>
          <Clock className="h-4 w-4 ml-4 mr-1" />
          <span>{post.readTime} min read</span>
        </div>
        
        <h3 className="text-xl font-semibold text-navy-900 mb-2">
          <a href={`/blog/${post.slug}`} className="hover:text-gold-500 transition-colors">
            {post.title}
          </a>
        </h3>
        
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-8 w-8 rounded-full mr-2"
            />
            <span className="text-sm text-gray-600">{post.author.name}</span>
          </div>
          
          <a
            href={`/blog/${post.slug}`}
            className="text-gold-500 hover:text-gold-600 transition-colors flex items-center"
          >
            Read More
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}