import React from 'react';
import { categories, recentPosts, featuredPosts } from '../../data/blog';

export function BlogCategories() {
  // Combine featured and recent posts
  const allPosts = [...featuredPosts, ...recentPosts];

  // Create a function to count posts in each category
  const getPostCount = (categorySlug: string) => {
    return allPosts.filter(post => post.category === categorySlug).length;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-navy-900 mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => {
          const postCount = getPostCount(category.slug);
          
          return (
            <li key={category.id}>
              <a
                href={`/blog/category/${category.slug}`}
                className="text-gray-600 hover:text-gold-500 transition-colors flex justify-between items-center"
              >
                <span>{category.name}</span>
                <span className="text-sm text-gray-400">({postCount})</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}